'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ChartData,
  ChartOptions,
  Plugin,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import type { WeatherHourly } from '@/types/weather';

type Props = {
  hourly: WeatherHourly[];
};

const CHART_HEIGHT = 200;
const POINT_MIN_WIDTH = 72;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);


const pointLabelPlugin: Plugin<'line'> = {
  id: 'pointLabelPlugin',
  afterDatasetsDraw(chart) {
    const ctx = chart.ctx;
    const dataset = chart.data.datasets[0];
    if (!dataset) return;

    const meta = chart.getDatasetMeta(0);
    if (!meta || !meta.data) return;

    ctx.save();
    ctx.fillStyle = 'white';
    ctx.font = '600 11px Poppins, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';

    meta.data.forEach((point, index) => {
      const value = dataset.data[index];
      if (typeof value === 'number') {
        ctx.fillText(`${value}°`, point.x, point.y - 8);
      }
    });

    ctx.restore();
  },
};

const WeatherTemperatureChart = ({ hourly }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
    };
  }, []);

  const chartWidth = useMemo(
    () => Math.max(520, hourly.length * POINT_MIN_WIDTH),
    [hourly.length],
  );

  const data = useMemo<ChartData<'line', number[], string>>(
    () => ({
      labels: hourly.map((point) => point.label),
      datasets: [
        {
          label: 'Temperature',
          data: hourly.map((point) => point.tempC),
          fill: false,
          borderColor: '#FFFFFF',
          pointBackgroundColor: 'white',
          pointBorderColor: '#FFFFFF',
          pointRadius: 4.5,
          pointHoverRadius: 6,
          tension: 0.45,
          borderWidth: 2,
          cubicInterpolationMode: 'monotone' as const,
        },
      ],
    }),
    [hourly],
  );

  const { min, max } = useMemo(() => {
    const temps = hourly.map((p) => p.tempC);
    return {
      min: Math.min(...temps) - 2,
      max: Math.max(...temps) + 2,
    };
  }, [hourly]);

  const options = useMemo<ChartOptions<'line'>>(
    () => ({
      responsive: false,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
      scales: {
        x: {
          type: 'category',
          ticks: {
            color: 'rgba(255,255,255,0.82)',
            font: { size: 10, family: "'Poppins', sans-serif" },
            maxRotation: 0,
            autoSkip: false,
            padding: 8,
          },
          grid: { display: false, drawBorder: false },
          border: { display: false },
        },
        y: {
          display: false,
          min,
          max,
          grid: { display: false, drawBorder: false },
          border: { display: false },
          ticks: { display: false },
        },
      },
      layout: {
        padding: {
          top: 8,
          bottom: 12,
          left: 12,
          right: 12,
        },
      },
      elements: {
        line: {
          borderCapStyle: 'round',
          borderJoinStyle: 'round',
        },
      },
    }),
    [min, max],
  );

  return (
    <div
      className="flex flex-col"
      style={{
        gap: '24px',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="flex flex-col gap-0.5 pl-4 sm:pl-0">
        <p className="text-sm font-semibold text-white">Temperature</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollRef.current?.scrollBy({ left: -POINT_MIN_WIDTH * 4, behavior: 'smooth' })}
          className={`hidden shrink-0 text-white/70 transition-colors hover:text-white sm:block ${!canScrollLeft ? 'invisible' : ''}`}
        >
          <ChevronLeft size={18} strokeWidth={2.5} />
        </button>

        <div ref={scrollRef} className="flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="h-[200px]" style={{ minWidth: chartWidth }}>
            <Line
              data={data}
              options={options}
              plugins={[pointLabelPlugin]}
              width={chartWidth}
              height={CHART_HEIGHT}
            />
          </div>
        </div>

        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollRef.current?.scrollBy({ left: POINT_MIN_WIDTH * 4, behavior: 'smooth' })}
          className={`hidden shrink-0 text-white/70 transition-colors hover:text-white sm:block ${!canScrollRight ? 'invisible' : ''}`}
        >
          <ChevronRight size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default WeatherTemperatureChart;
