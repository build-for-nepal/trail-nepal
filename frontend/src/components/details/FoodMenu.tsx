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

  const setActiveServing = (serving: string) => {
    setActiveServings((prev) => ({ ...prev, [activeCategory]: serving }));
  };

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
    const items: {
      name: string;
      serving: string;
      price: number;
      qty: number;
    }[] = [];

    categories.forEach((cat) => {
      const serving =
        activeServings[cat.key] ?? SERVING_TABS[cat.servingType][0] ?? '';
      cat.items.forEach((item, idx) => {
        const key = `${cat.key}-${idx}`;
        const state = itemStates[key];
        if (state?.checked) {
          const price = getItemPrice(item, serving, cat.servingType);
          sum += price * state.qty;
          items.push({ name: item.item, serving, price, qty: state.qty });
        }
      });
    });

    return { total: sum, selectedItems: items };
  }, [itemStates, activeServings, categories]);

  const selectedCount = activeCat
    ? activeCat.items.filter(
        (_, idx) => itemStates[`${activeCategory}-${idx}`]?.checked,
      ).length
    : 0;

  return (
    <>
      {/* Outer card — same rounded/shadow treatment as the map container */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col">
        {/* ── Main body: fixed h-150 to match the map height ── */}
        <div className="flex h-150">
          {/* Sidebar (desktop) — scrollable within the fixed height */}
          <aside className="w-44 sm:w-52 shrink-0 hidden md:flex flex-col overflow-y-auto border-r border-gray-100">
            <div className="py-3 flex flex-col gap-1">
              {categories.map((cat) => {
                const isActive = cat.key === activeCategory;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={[
                      'w-full text-left px-4 py-3 transition-all duration-150 cursor-pointer',
                      isActive
                        ? 'bg-[#CEDF9E] text-[#1b4332]'
                        : 'text-gray-600 hover:bg-gray-50',
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
          </aside>

          {/* Content panel */}
          <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
            {/* Mobile category tabs */}
            <div className="flex md:hidden overflow-x-auto border-b border-gray-100 shrink-0">
              {categories.map((cat) => {
                const isActive = cat.key === activeCategory;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={[
                      'whitespace-nowrap px-4 py-3 text-sm cursor-pointer shrink-0',
                      isActive
                        ? 'bg-[#CEDF9E] font-bold text-[#1b4332]'
                        : 'text-gray-600',
                    ].join(' ')}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Category header — fixed, not scrolling */}
            <div className="shrink-0 bg-white border-b border-gray-100">
              <div className="px-6 py-4 flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-800">
                  {activeCat?.label}
                </h2>
                <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {selectedCount} / {activeCat?.items.length ?? 0} selected
                </span>
              </div>

              {/* Serving tabs */}
              {servingTabs.length > 0 && (
                <div className="flex px-6 border-t border-gray-100">
                  {servingTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveServing(tab)}
                      className={cn(
                        'px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer',
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
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-gray-100">
                {activeCat?.items.map((item, idx) => {
                  const key = `${activeCategory}-${idx}`;
                  const state = itemStates[key] ?? { checked: false, qty: 1 };
                  const price = getItemPrice(
                    item,
                    activeServing,
                    activeCat.servingType,
                  );

                  return (
                    <div
                      key={key}
                      className={cn(
                        'px-5 py-3 transition-colors duration-150 cursor-pointer',
                        state.checked ? 'bg-[#f3f7e7]' : 'hover:bg-gray-50',
                      )}
                      onClick={() => toggleItem(key)}
                    >
                      <div className="flex items-center gap-2.5">
                        <Checkbox
                          id={key}
                          checked={state.checked}
                          onCheckedChange={() => toggleItem(key)}
                          className={cn(
                            'w-4.5 h-4.5 cursor-pointer transition-all duration-150 shrink-0',
                            state.checked &&
                              'data-checked:bg-brand-primary data-checked:border-none',
                          )}
                          onClick={(e) => e.stopPropagation()}
                        />
                        <label className="flex-1 text-sm truncate cursor-pointer">
                          {item.item}
                        </label>

                        <div
                          className="flex items-center gap-1.5"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Minus
                            className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                            onClick={() => changeQty(key, -1)}
                          />
                          <span className="w-5 text-center text-xs font-semibold tabular-nums text-gray-600">
                            {state.qty}
                          </span>
                          <Plus
                            className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                            onClick={() => changeQty(key, 1)}
                          />
                        </div>

                        <span className="w-16 text-right text-sm font-bold text-gray-700 tabular-nums">
                          {price.toLocaleString()}.00
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── Total bar — always visible below the fixed-height section ── */}
        <div className="border-t border-[#CEDF9E] bg-[#f3f7e7] shrink-0">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="text-sm font-medium text-gray-700">Total</span>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">
                NPR {total.toLocaleString()}.00
              </div>
              <button
                className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer underline underline-offset-2"
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
          className="max-w-md w-full p-0 gap-0 overflow-hidden flex flex-col max-h-[85vh]"
        >
          {/* Title — fixed */}
          <div className="px-6 pt-8 pb-4 shrink-0">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Food Summary
            </DialogTitle>
          </div>

          {/* Items list — scrollable */}
          <div className="flex-1 overflow-y-auto px-6">
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
                            {' '}
                            ({si.serving})
                          </span>
                        )}{' '}
                        <span className="text-gray-400">× {si.qty}</span>
                      </span>
                      <span className="text-sm font-bold text-gray-900 tabular-nums ml-4 shrink-0">
                        {(si.price * si.qty).toLocaleString()}.00
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

          {/* Total row — fixed */}
          <div className="px-6 pt-2 pb-4 shrink-0">
            <div className="flex items-center justify-between px-4 py-4 rounded-xl border border-[#CEDF9E] bg-[#f3f7e7]">
              <span className="text-sm font-medium text-gray-700">Total</span>
              <span className="text-sm font-bold text-gray-900">
                NPR {total.toLocaleString()}.00
              </span>
            </div>
          </div>

          {/* Divider + Buttons — fixed */}
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
