'use client';

import { useState, useMemo } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { FoodMenuItem, FoodServingType } from '@/types/trek';
import { LANGTANG_FOOD_MENU } from '@/static/foodMenuData';
import { Minus, Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

const SERVING_TABS: Record<FoodServingType, string[]> = {
  pot: ['Cup', 'Small Pot', 'Medium Pot', 'Big Pot'],
  momo: ['Fried', 'Steam'],
  friedrice: ['Regular', 'With Cheese'],
  single: [],
};

const getItemPrice = (
  item: FoodMenuItem,
  serving: string,
  type: FoodServingType,
): number => {
  if (type === 'single') return item.price ?? 0;
  if (type === 'pot') {
    if (serving === 'Cup') return item.cup ?? 0;
    if (serving === 'Small Pot') return item.smallPot ?? 0;
    if (serving === 'Medium Pot') return item.mediumPot ?? 0;
    if (serving === 'Big Pot') return item.bigPot ?? 0;
  }
  if (type === 'momo') {
    if (serving === 'Fried') return item.fried ?? 0;
    if (serving === 'Steam') return item.steam ?? 0;
  }
  if (type === 'friedrice') {
    if (serving === 'Regular') return item.price ?? 0;
    if (serving === 'With Cheese') return item.withCheese ?? 0;
  }
  return 0;
};

// ── Quantity control — same as GearChecklist ──────────────────────────────
const QuantityControl = ({
  quantity,
  onIncrement,
  onDecrement,
}: {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) => (
  <div className="flex items-center gap-1.5">
    <Minus
      className="w-4 h-4 text-gray-400 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onDecrement();
      }}
    />
    <span className="w-5 text-center text-xs font-semibold tabular-nums text-gray-600">
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

// ── Check item — desktop single-row + mobile two-row (mirrors GearChecklist)
const CheckItem = ({
  id,
  name,
  effectivePrice,
  quantity,
  checked,
  onToggle,
  onQuantityChange,
  showBottomBorder,
}: {
  id: string;
  name: string;
  effectivePrice: number;
  quantity: number;
  checked: boolean;
  onToggle: () => void;
  onQuantityChange: (delta: number) => void;
  showBottomBorder: boolean;
}) => (
  <div
    className={cn(
      'px-5 py-3 transition-colors duration-150 cursor-pointer',
      showBottomBorder ? 'border-b border-gray-100' : '',
      checked ? 'bg-[#f3f7e7]' : 'hover:bg-gray-50',
    )}
    onClick={onToggle}
  >
    {/* ── desktop single row ── */}
    <div className="hidden min-[1180px]:flex items-center gap-2.5">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onToggle}
        className={cn(
          'w-4.5 h-4.5 cursor-pointer transition-all transform duration-700 ease-in-out',
          checked && 'data-checked:bg-brand-primary data-checked:border-none',
        )}
        onClick={(e) => e.stopPropagation()}
      />
      <label className="flex-1 text-sm truncate transition-colors duration-150 cursor-pointer">
        {name}
      </label>
      <QuantityControl
        quantity={quantity}
        onIncrement={() => onQuantityChange(1)}
        onDecrement={() => onQuantityChange(-1)}
      />
      <span className="w-20 text-right text-xs font-semibold tabular-nums whitespace-nowrap text-gray-500 ml-2">
        {effectivePrice.toLocaleString()}.00
      </span>
    </div>

    {/* ── mobile two rows ── */}
    <div className="flex min-[1180px]:hidden flex-col gap-1">
      <div className="flex items-center gap-2.5">
        <Checkbox
          id={`${id}-mob`}
          checked={checked}
          onCheckedChange={onToggle}
          className={cn(
            'w-4.5 h-4.5 cursor-pointer transition-all transform duration-700 ease-in-out shrink-0',
            checked && 'data-checked:bg-brand-primary data-checked:border-none',
          )}
          onClick={(e) => e.stopPropagation()}
        />
        <label className="flex-1 text-sm truncate transition-colors duration-150 cursor-pointer">
          {name}
        </label>
      </div>
      <div className="flex items-center justify-between pl-7">
        <span className="text-xs font-semibold tabular-nums text-gray-500">
          {effectivePrice.toLocaleString()}.00
        </span>
        <QuantityControl
          quantity={quantity}
          onIncrement={() => onQuantityChange(1)}
          onDecrement={() => onQuantityChange(-1)}
        />
      </div>
    </div>
  </div>
);

// ── Main component ────────────────────────────────────────────────────────
interface ItemState {
  checked: boolean;
  qty: number;
}

const FoodMenu = () => {
  const categories = LANGTANG_FOOD_MENU;

  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.key ?? '',
  );
  const [activeServings, setActiveServings] = useState<Record<string, string>>(
    () => {
      const init: Record<string, string> = {};
      categories.forEach((cat) => {
        init[cat.key] = SERVING_TABS[cat.servingType][0] ?? '';
      });
      return init;
    },
  );
  const [itemStates, setItemStates] = useState<Record<string, ItemState>>(
    () => {
      const init: Record<string, ItemState> = {};
      categories.forEach((cat) => {
        cat.items.forEach((_, idx) => {
          init[`${cat.key}-${idx}`] = { checked: false, qty: 1 };
        });
      });
      return init;
    },
  );
  const [summaryOpen, setSummaryOpen] = useState(false);

  const activeCat = categories.find((c) => c.key === activeCategory);
  const servingTabs = activeCat ? SERVING_TABS[activeCat.servingType] : [];
  const activeServing = activeServings[activeCategory] ?? '';

  const toggleItem = (key: string) => {
    setItemStates((prev) => ({
      ...prev,
      [key]: { ...prev[key], checked: !prev[key].checked },
    }));
  };

  const changeQty = (key: string, delta: number) => {
    setItemStates((prev) => ({
      ...prev,
      [key]: { ...prev[key], qty: Math.max(1, prev[key].qty + delta) },
    }));
  };

  const { total, selectedItems } = useMemo(() => {
    let sum = 0;
    const items: { name: string; serving: string; unitPrice: number; qty: number }[] =
      [];

    categories.forEach((cat) => {
      const serving =
        activeServings[cat.key] ?? SERVING_TABS[cat.servingType][0] ?? '';
      cat.items.forEach((item, idx) => {
        const key = `${cat.key}-${idx}`;
        const state = itemStates[key];
        if (state?.checked) {
          const unitPrice = getItemPrice(item, serving, cat.servingType);
          sum += unitPrice * state.qty;
          items.push({ name: item.item, serving, unitPrice, qty: state.qty });
        }
      });
    });

    return { total: sum, selectedItems: items };
  }, [itemStates, activeServings, categories]);

  return (
    <>
      <div className="flex h-150">

          {/* ── Sidebar (desktop) — scrollable, mirrors GearChecklist ── */}
          <aside className="w-44 sm:w-52 shrink-0 hidden md:flex flex-col overflow-y-auto food-scrollbar">
            <div className="py-3 flex flex-col gap-2">
              {categories.map((cat) => {
                const isActive = cat.key === activeCategory;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={[
                      'w-full text-left px-4 py-3.5 transition-colors duration-150 cursor-pointer',
                      isActive
                        ? 'bg-[#CEDF9E] text-[#536C0B]'
                        : 'bg-[#F0F4F5] text-[#46645C] hover:bg-[#e4eaeb]',
                    ].join(' ')}
                  >
                    <span
                      className={`block text-sm ${isActive ? 'font-semibold' : 'font-medium'}`}
                    >
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* ── Content panel ── */}
          <div className={cn('bg-white rounded-2xl flex flex-col w-full min-w-0')}>
            {/* Mobile category tabs */}
            <div className="flex md:hidden overflow-x-auto gap-1 food-scrollbar">
              {categories.map((cat) => {
                const isActive = cat.key === activeCategory;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={[
                      'whitespace-nowrap px-4 py-3 transition-colors duration-150 cursor-pointer shrink-0',
                      isActive
                        ? 'bg-[#CEDF9E] text-[#536C0B]'
                        : 'bg-[#F0F4F5] text-[#46645C] hover:bg-[#e4eaeb]',
                    ].join(' ')}
                  >
                    <span
                      className={`block text-sm ${isActive ? 'font-bold' : 'font-medium'}`}
                    >
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Section — shadow + rounded like GearChecklist */}
            <section className="flex-1 flex flex-col shadow-md rounded-xl overflow-hidden">
              {/* Sticky header */}
              <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-2 shrink-0">
                <div className="flex w-full justify-between">
                  <h2 className="text-base font-semibold text-gray-800">
                    {activeCat?.label}
                  </h2>
                </div>

                {/* Serving size tabs */}
                {servingTabs.length > 0 && (
                  <div className="flex -mb-4 -mx-1">
                    {servingTabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() =>
                          setActiveServings((prev) => ({
                            ...prev,
                            [activeCategory]: tab,
                          }))
                        }
                        className={cn(
                          'px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer',
                          activeServing === tab
                            ? 'text-[#556B2F] border-b-2 border-[#84b829]'
                            : 'text-gray-500 hover:text-gray-800',
                        )}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Items grid — scrollable */}
              <div className="flex-1 overflow-y-auto food-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-gray-100">
                  {activeCat?.items.map((item, idx) => {
                    const key = `${activeCategory}-${idx}`;
                    const state = itemStates[key] ?? { checked: false, qty: 1 };
                    const unitPrice = getItemPrice(
                      item,
                      activeServing,
                      activeCat.servingType,
                    );
                    const effectivePrice = unitPrice * state.qty;

                    const isLastInColumn =
                      (idx + 1) % 2 === 0 || idx === activeCat.items.length - 1;
                    const showBorder =
                      !isLastInColumn && idx < activeCat.items.length - 1;

                    return (
                      <CheckItem
                        key={key}
                        id={key}
                        name={item.item}
                        effectivePrice={effectivePrice}
                        quantity={state.qty}
                        checked={state.checked}
                        onToggle={() => toggleItem(key)}
                        onQuantityChange={(delta) => changeQty(key, delta)}
                        showBottomBorder={showBorder}
                      />
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>

      {/* ── Total bar — outside white box, offset by sidebar width ── */}
      <div className="flex mt-4">
        <div className="w-44 sm:w-52 shrink-0 hidden md:block" />
        <div className="flex-1">
          <div className="rounded-xl border border-[#88B112] bg-[#F3F7E7] flex items-center justify-between px-6 py-3">
            <span className="text-sm font-medium text-gray-800">Total</span>
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold text-gray-900">
                NPR {total.toLocaleString()}.00
              </span>
              <button
                className="text-xs text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={() => setSummaryOpen(true)}
              >
                See detail
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Food Summary Modal ── */}
      <Dialog open={summaryOpen} onOpenChange={setSummaryOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-w-md w-[calc(100%-2rem)] rounded-2xl p-0 gap-0 overflow-hidden flex flex-col max-h-[80vh] sm:max-h-[85vh]"
        >
          {/* Title */}
          <div className="px-6 pt-8 pb-4 shrink-0">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Food Summary
            </DialogTitle>
          </div>

          {/* Items — scrollable */}
          <div className="flex-1 overflow-y-auto px-6 food-scrollbar">
            {selectedItems.length === 0 ? (
              <p className="text-sm text-gray-500 py-6 text-center">
                No items selected yet.
              </p>
            ) : (
              <div className="flex flex-col">
                {selectedItems.map((si, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between py-4">
                      <span className="text-sm text-gray-800">
                        {si.name}
                        {si.serving && (
                          <span className="text-gray-400 font-normal">
                            {' '}({si.serving})
                          </span>
                        )}{' '}
                        <span className="text-gray-400">× {si.qty}</span>
                      </span>
                      <span className="text-sm font-bold text-gray-900 tabular-nums ml-4 shrink-0">
                        {(si.unitPrice * si.qty).toLocaleString()}.00
                      </span>
                    </div>
                    {i < selectedItems.length - 1 && (
                      <div className="h-px bg-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Total row */}
          <div className="px-6 pt-2 pb-4 shrink-0">
            <div className="flex items-center justify-between px-4 py-4 rounded-xl border border-[#CEDF9E] bg-[#f3f7e7]">
              <span className="text-sm font-medium text-gray-700">Total</span>
              <span className="text-sm font-bold text-gray-900">
                NPR {total.toLocaleString()}.00
              </span>
            </div>
          </div>

          {/* Divider + Buttons */}
          <div className="shrink-0">
            <div className="h-px bg-gray-200 mx-6" />
            <div className="flex gap-3 px-6 py-5">
              <DialogClose asChild>
                <button className="flex-1 py-3.5 rounded-full border-2 border-[#84b829] text-[#84b829] font-semibold text-sm hover:bg-[#f3f7e7] transition-colors cursor-pointer">
                  Close
                </button>
              </DialogClose>
              <DialogClose asChild>
                <button className="flex-1 py-3.5 rounded-full bg-[#84b829] text-white font-semibold text-sm hover:bg-[#6d9a22] transition-colors cursor-pointer">
                  Ok
                </button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FoodMenu;
