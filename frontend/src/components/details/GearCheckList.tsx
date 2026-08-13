'use client';

import { useState, useMemo } from 'react';
import SectionHeader from '../common/SectionHeader';
import Image from 'next/image';
import gearBag from '@/assets/details/gearbag.svg';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { GearCategory, GearCategoryKey, GearChecklist } from '@/types/trek';
import { TREK_DETAILS } from '@/static/trekDetails';
import { gearCheckListDescriptions } from '@/static/constants';
import { Minus, Plus } from 'lucide-react';

// Fallback data if no trekId is provided
const FALLBACK_GEAR_CHECKLIST: GearChecklist = {
  essentials: [
    { item: 'Waterproof Shell Jacket', weight: '0.6kg' },
    { item: 'Sleeping Bag (-10°C)', weight: '1.5kg' },
  ],
  optional: [{ item: 'Fleece Jacket', weight: '0.5kg' }],
};

const getWeightMeta = (kg: number): { label: string; color: string } => {
  if (kg === 0) return { label: 'Empty', color: '#9ca3af' };
  if (kg < 3) return { label: 'Light Load', color: '#376bb6' };
  if (kg < 7) return { label: 'Optimal Load', color: '#22c55e' };
  if (kg < 12) return { label: 'Heavy Load', color: '#f59e0b' };
  return { label: 'Over Limit', color: '#ef4444' };
};

const QuantityControl = ({
  quantity,
  onIncrement,
  onDecrement,
  checked,
}: {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  checked: boolean;
}) => (
  <div className="flex items-center gap-1.5">
    <Minus
      className="w-4 h-4 text-gray-400 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onDecrement();
      }}
    />
    <span
      className={cn(
        'w-5 text-center text-xs font-semibold tabular-nums text-gray-600',
      )}
    >
      {quantity}
    </span>
    <Plus
      className="w-4 h-4 text-gray-400 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onIncrement();
      }}
    />
  </div>
);

const CheckItem = ({
  id,
  name,
  weight,
  quantity,
  checked,
  onToggle,
  onQuantityChange,
  showBottomBorder,
}: {
  id: string;
  name: string;
  weight: number;
  quantity?: number;
  checked: boolean;
  onToggle: (id: string) => void;
  onQuantityChange: (id: string, delta: number) => void;
  showBottomBorder: boolean;
}) => {
  const effectiveWeight = weight * (quantity ?? 1);
  const hasQty = quantity !== undefined;

  return (
    <div
      className={cn(
        'px-5 py-3 transition-colors duration-150',
        showBottomBorder ? 'border-b border-gray-100' : '',
        checked ? 'bg-[#f3f7e7]' : 'hover:bg-gray-50',
      )}
    >
      {/* ── desktop single row ── */}
      <div className="hidden min-[1180px]:flex items-center gap-2.5">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={() => onToggle(id)}
          className={cn(
            'w-4.5 h-4.5 cursor-pointer transition-all transform duration-700 ease-in-out',
            checked && 'data-checked:bg-brand-primary data-checked:border-none',
          )}
        />

        {/* label */}
        <label
          htmlFor={id}
          className={cn(
            'flex-1 text-sm truncate transition-colors duration-150 cursor-pointer',
          )}
        >
          {name}
        </label>

        {/* qnty controls */}
        {hasQty && (
          <QuantityControl
            quantity={quantity}
            onIncrement={() => onQuantityChange(id, 1)}
            onDecrement={() => onQuantityChange(id, -1)}
            checked={checked}
          />
        )}

        {/* weights */}
        <span
          className={cn(
            'w-16 text-right text-xs font-semibold tabular-nums whitespace-nowrap text-gray-500',
            hasQty ? 'ml-2' : '',
          )}
        >
          {effectiveWeight.toFixed(2)}kg
        </span>
      </div>

      {/* ── mobile : two rows ── */}
      <div className="flex min-[1180px]:hidden flex-col gap-1">
        <div className="flex items-center gap-2.5">
          <Checkbox
            id={`${id}-mob`}
            checked={checked}
            onCheckedChange={() => onToggle(id)}
            className={cn(
              'w-4.5 h-4.5 cursor-pointer transition-all transform duration-700 ease-in-out shrink-0',
              checked &&
                'data-checked:bg-brand-primary data-checked:border-none',
            )}
          />
          <label
            htmlFor={`${id}-mob`}
            className={cn(
              'flex-1 text-sm truncate transition-colors duration-150 cursor-pointer',
            )}
          >
            {name}
          </label>
        </div>

        <div className="flex items-center justify-between pl-7">
          <span
            className={cn(
              'w-16 text-xs font-semibold tabular-nums text-gray-500',
            )}
          >
            {effectiveWeight.toFixed(2)}kg
          </span>

          {hasQty && (
            <QuantityControl
              quantity={quantity}
              onIncrement={() => onQuantityChange(id, 1)}
              onDecrement={() => onQuantityChange(id, -1)}
              checked={checked}
            />
          )}
        </div>
      </div>
    </div>
  );
};

interface Props {
  trekId?: string;
}

const GearCheckList = ({ trekId }: Props) => {
  const gearChecklist =
    trekId && TREK_DETAILS[trekId]
      ? TREK_DETAILS[trekId].gearChecklist
      : FALLBACK_GEAR_CHECKLIST;

  const parseWeightToKg = (weightStr: string): number => {
    const value = parseFloat(weightStr);
    if (isNaN(value)) return 0;
    if (weightStr.toLowerCase().includes('kg')) return value;
    if (weightStr.toLowerCase().includes('g')) return value / 1000;
    return value;
  };

  const transformToGearCategories = (data: GearChecklist): GearCategory[] => {
    const categories: GearCategory[] = [];

    if (data?.essentials && data.essentials.length > 0) {
      categories.push({
        key: 'essential',
        label: 'Essential',
        items: data.essentials.map((item, idx) => ({
          id: `essential-${idx}`,
          name: item.item,
          weight: parseWeightToKg(item.weight),
          ...(item.quantity !== undefined && { quantity: item.quantity }),
          checked: false,
        })),
      });
    }

    if (data?.optional && data.optional.length > 0) {
      categories.push({
        key: 'optional',
        label: 'Optional',
        items: data.optional.map((item, idx) => ({
          id: `optional-${idx}`,
          name: item.item,
          weight: parseWeightToKg(item.weight),
          ...(item.quantity !== undefined && { quantity: item.quantity }),
          checked: false,
        })),
      });
    }

    return categories;
  };

  const initialCategories = useMemo(
    () => transformToGearCategories(gearChecklist),
    [gearChecklist],
  );

  const [categories, setCategories] =
    useState<GearCategory[]>(initialCategories);
  const [activeTab, setActiveTab] = useState<GearCategoryKey>('essential');

  const toggle = (categoryKey: GearCategoryKey, itemId: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.key === categoryKey
          ? {
              ...cat,
              items: cat.items.map((item) =>
                item.id === itemId ? { ...item, checked: !item.checked } : item,
              ),
            }
          : cat,
      ),
    );
  };

  const changeQuantity = (
    categoryKey: GearCategoryKey,
    itemId: string,
    delta: number,
  ) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.key === categoryKey
          ? {
              ...cat,
              items: cat.items.map((item) =>
                item.id === itemId && item.quantity !== undefined
                  ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                  : item,
              ),
            }
          : cat,
      ),
    );
  };

  const stats = useMemo(() => {
    const allItems = categories.flatMap((c) => c.items);
    const totalItems = allItems.length;
    const checkedCount = allItems.filter((i) => i.checked).length;
    const totalWeight = allItems
      .filter((i) => i.checked)
      .reduce((sum, i) => sum + i.weight * (i.quantity ?? 1), 0);
    const progressPct = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0;
    return { totalItems, checkedCount, totalWeight, progressPct };
  }, [categories]);

  const { label: weightLabel, color: weightColor } = getWeightMeta(
    stats.totalWeight,
  );
  const activeCategory = categories.find((c) => c.key === activeTab);

  if (!activeCategory) return null;

  const items = activeCategory.items;

  const findDescription = (label: string) => {
    return (
      gearCheckListDescriptions[
        label.toLowerCase() as keyof typeof gearCheckListDescriptions
      ] || null
    );
  };

  return (
    <div className="bg-[#EBF0F8] page-wrapper flex flex-col gap-16 py-20">
      <SectionHeader
        title="Gear Checklist"
        description="Make sure you have everything you need"
        id="gearchecklist"
      />

      <div className={cn('flex flex-col items-center gap-1.5')}>
        <div className="w-full max-w-lg flex justify-between text-sm">
          <span className="text-gray-500 font-medium">Progress</span>
          <span className="font-semibold text-gray-700">
            {stats.checkedCount} / {stats.totalItems} Items
          </span>
        </div>
        <div className="w-full max-w-lg h-2.5 bg-white rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-[width] duration-500 ease-out"
            style={{
              width: `${stats.progressPct}%`,
              background: 'linear-gradient(90deg, #60a5fa, #376bb6)',
              boxShadow:
                stats.progressPct > 0
                  ? '0 2px 8px rgba(37,99,235,0.4)'
                  : 'none',
            }}
          />
        </div>
        <div className="w-full max-w-lg md:hidden flex justify-end">
          <p className="text-sm text-center text-gray-500">
            Weight: {stats.totalWeight.toFixed(1)} kg
          </p>
        </div>
      </div>

      <div className="bg rounded-2xl">
        <div className="flex min-h-130">
          {/* ── sidebar (desktop only) ── */}
          <aside className="w-44 sm:w-52 shrink-0 hidden md:flex flex-col">
            <div className="py-3 flex flex-col gap-1">
              {categories.map((cat) => {
                const isActive = cat.key === activeTab;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveTab(cat.key)}
                    className={[
                      'w-full text-left px-4 py-3 transition-all duration-150 cursor-pointer border border-transparent',
                      isActive
                        ? 'bg-[#CEDF9E] shadow-sm text-[#1b4332]'
                        : 'text-gray-600 hover:bg-white',
                    ].join(' ')}
                  >
                    <span
                      className={`block text-sm ${isActive ? 'font-bold' : 'font-medium'}`}
                    >
                      {cat.label.toLowerCase() === 'optional'
                        ? 'Good to have'
                        : cat.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col items-center pb-8 pt-6">
              <p
                className="text-sm font-bold text-center "
                style={{ color: weightColor }}
              >
                Weight: {stats.totalWeight.toFixed(1)} kg
              </p>
              <p
                className="text-xs font-semibold"
                style={{ color: weightColor }}
              >
                {weightLabel}
              </p>
              <div className="relative w-32.5 h-32.5 mt-4">
                <Image
                  src={gearBag}
                  alt="Gear bag"
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
            </div>
          </aside>

          <div className={cn('flex flex-col w-full')}>
            {/* ── tab bar (mobile only) ── */}
            <div className="flex gap-1 md:hidden">
              {categories.map((cat) => {
                const isActive = cat.key === activeTab;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveTab(cat.key)}
                    className={[
                      'w-full text-left px-4 py-3 transition-all duration-150 cursor-pointer border border-transparent',
                      isActive
                        ? 'bg-[#CEDF9E] shadow-sm text-[#1b4332]'
                        : 'text-gray-600 hover:bg-white',
                    ].join(' ')}
                  >
                    <span
                      className={`block text-sm ${isActive ? 'font-bold' : 'font-medium'}`}
                    >
                      {cat.label.toLowerCase() === 'optional'
                        ? 'Good to have'
                        : cat.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <section className="flex-1 bg-white flex flex-col  shadow-md rounded-xl pb-6">
              <div className="sticky top-0 z-10 bg-white border border-gray-100 px-6 py-4 flex flex-col gap-2 rounded-t-xl">
                <div className="flex w-full justify-between">
                  <h2 className="text-base font-semibold text-gray-800">
                    {activeCategory.label.toLowerCase() === 'optional'
                      ? 'Good to have'
                      : activeCategory.label}
                  </h2>
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {items.filter((i) => i.checked).length} / {items.length}{' '}
                    packed
                  </span>
                </div>
                {findDescription(activeCategory.label) && (
                  <p className="text-[12px] text-gray-600">
                    {findDescription(activeCategory.label)}
                  </p>
                )}
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-gray-100">
                  {items.map((item, idx) => {
                    const isLastInColumn =
                      (idx + 1) % 2 === 0 || idx === items.length - 1;
                    const showBorder =
                      !isLastInColumn && idx < items.length - 1;

                    return (
                      <CheckItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        weight={item.weight}
                        quantity={item.quantity}
                        checked={item.checked}
                        onToggle={(id) => toggle(activeCategory.key, id)}
                        onQuantityChange={(id, delta) =>
                          changeQuantity(activeCategory.key, id, delta)
                        }
                        showBottomBorder={showBorder}
                      />
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearCheckList;
