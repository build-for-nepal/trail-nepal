import { LAYER_THUMBNAILS, LAYERS } from '@/static/mapConstants';
import { LayerKey, LayerSwitcherProps } from '@/types/map';

export default function LayerSwitcher({
  activeLayer,
  onChange,
  className,
}: LayerSwitcherProps) {
  return (
    <div className={`absolute left-2 z-10 flex gap-2 ${className ?? 'bottom-10'}`}>
      {(Object.entries(LAYERS) as [LayerKey, (typeof LAYERS)[LayerKey]][]).map(
        ([key, cfg]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className="flex flex-col items-center gap-1 group"
          >
            <div
              className={`w-14 h-14 rounded-lg overflow-hidden shadow-md transition-all duration-150 border-2 border-white ${
                activeLayer === key
                  ? 'ring-2 ring-offset-1 ring-(--color-trail) scale-105'
                  : 'hover:border-gray-300'
              }`}
            >
              <img
                src={LAYER_THUMBNAILS[key]}
                alt={cfg.label}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
            <span
              className={`text-[10px] font-semibold drop-shadow-sm ${
                activeLayer === key ? 'text-(--color-trail)' : 'text-white'
              }`}
            >
              {cfg.label}
            </span>
          </button>
        ),
      )}
    </div>
  );
}
