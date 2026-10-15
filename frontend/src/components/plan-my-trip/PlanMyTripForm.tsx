'use client';

import {
  Backpack,
  Calendar,
  ChevronDown,
  Footprints,
  Landmark,
  Leaf,
  Minus,
  Mountain,
  Plus,
  Sparkles,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export type TripExperience =
  | 'trekking'
  | 'hiking'
  | 'culture'
  | 'mountains'
  | 'quiet'
  | 'mix';

export type TripDifficulty = 'Easy' | 'Moderate' | 'Challenging';

export interface TripPreferences {
  month: string;
  days: number;
  experience: TripExperience | null;
  difficulty: TripDifficulty | null;
}

export const DEFAULT_PREFERENCES: TripPreferences = {
  month: 'October',
  days: 3,
  experience: null,
  difficulty: null,
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const MONTH_HINTS: Record<string, string> = {
  January: 'January brings clear skies and quiet trails across Nepal',
  February: 'February offers crisp mountain views with fewer trekkers',
  March: 'March marks the start of spring trekking season',
  April: 'April bloom with rhododendrons and crystal-clear peaks',
  May: 'May is warm and hazy, best for higher trails',
  June: 'June starts the monsoon with greener, quieter valleys',
  July: 'July is monsoon season, with lush and misty landscapes',
  August: 'August stays wet, with fewer crowds on the trails',
  September: 'September clears up as peak trekking season begins',
  October: 'October is one of the best months to travel in Nepal',
  November: 'November stays clear with comfortable trekking weather',
  December: 'December is cold but clear in the lower regions',
};

const MIN_DAYS = 1;
const MAX_DAYS = 30;

type ExperienceOption = {
  key: TripExperience;
  label: string;
  icon: LucideIcon;
};

const EXPERIENCES: ExperienceOption[] = [
  { key: 'trekking', label: 'Trekking', icon: Backpack },
  { key: 'hiking', label: 'Hiking', icon: Footprints },
  { key: 'culture', label: 'Culture', icon: Landmark },
  { key: 'mountains', label: 'Mountains', icon: Mountain },
  { key: 'quiet', label: 'Quiet Places', icon: Leaf },
  { key: 'mix', label: 'Mix of all', icon: Sparkles },
];

const DIFFICULTIES: TripDifficulty[] = ['Easy', 'Moderate', 'Challenging'];

type Props = {
  value: TripPreferences;
  onChange: (patch: Partial<TripPreferences>) => void;
  onClear: () => void;
  onSubmit: () => void;
  canSubmit: boolean;
};

function StepHeading({
  step,
  label,
  helper,
}: {
  step: number;
  label: string;
  helper: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#EBF0F8] font-poppins text-[12px] font-semibold text-[#272922]">
        {step}
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="font-poppins text-sm font-medium text-[#272922]">
          {label}
        </span>
        <span className="font-poppins text-[12px] text-[#8a8f83]">
          {helper}
        </span>
      </div>
    </div>
  );
}

const PlanMyTripForm = ({
  value,
  onChange,
  onClear,
  onSubmit,
  canSubmit,
}: Props) => {
  const clampDays = (days: number) =>
    Math.min(MAX_DAYS, Math.max(MIN_DAYS, days));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-2xl bg-white px-6 py-10"
    >
      <h2 className="font-fraunces text-2xl font-semibold text-[#272922]">
        Plan a new trip
      </h2>
      <p className="mt-2 font-poppins text-sm leading-relaxed text-[#606359]">
        Tell us a bit about your trip. We&apos;ll find experiences that fit your
        time and interests.
      </p>

      {/* Step 1 — month */}
      <div className="mt-7 flex flex-col gap-3">
        <StepHeading
          step={1}
          label="When are you travelling?"
          helper="Choose the month"
        />

        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger asChild>
            <button
              type="button"
              aria-label="Select travel month"
              className="group flex h-11 w-full items-center gap-2.5 rounded-xl border border-[#DDE3EC] bg-white px-3.5 font-poppins text-sm text-[#272922] outline-none transition-colors hover:border-[#c7d1e0] focus-visible:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary/30 data-[state=open]:border-brand-primary data-[state=open]:ring-2 data-[state=open]:ring-brand-primary/30"
            >
              <Calendar
                className="size-4 shrink-0 text-[#606359]"
                strokeWidth={2}
              />
              <span className="flex-1 text-left">
                {value.month.slice(0, 3)}
              </span>
              <ChevronDown
                className="size-4 shrink-0 text-[#8a8f83] transition-transform group-data-[state=open]:rotate-180"
                strokeWidth={2}
              />
            </button>
          </DropdownMenuPrimitive.Trigger>
          <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
              align="start"
              sideOffset={6}
              className="z-50 grid w-[var(--radix-dropdown-menu-trigger-width)] grid-cols-3 gap-1 rounded-xl border border-[#DDE3EC] bg-white p-1.5 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
            >
              {MONTHS.map((month) => {
                const isSelected = value.month === month;
                return (
                  <DropdownMenuPrimitive.Item
                    key={month}
                    onSelect={() => onChange({ month })}
                    className={cn(
                      'flex cursor-pointer select-none items-center justify-center rounded-lg border px-2 py-2 font-poppins text-sm outline-none transition-colors',
                      isSelected
                        ? 'border-brand-primary bg-brand-primary/10 font-semibold text-brand-primary'
                        : 'border-transparent font-medium text-[#40453b] data-[highlighted]:bg-[#f4f6fa] data-[highlighted]:text-[#272922]',
                    )}
                  >
                    {month.slice(0, 3)}
                  </DropdownMenuPrimitive.Item>
                );
              })}
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Root>

        <p className="font-poppins text-[12px] italic text-[#8a8f83]">
          {MONTH_HINTS[value.month]}
        </p>
      </div>

      <div className="my-7 h-px w-full bg-[#E3EAF4]" />

      {/* Step 2 — days */}
      <div className="flex flex-col gap-3">
        <StepHeading
          step={2}
          label="For how many days?"
          helper="Enter your total days"
        />

        <div className="flex h-10 w-[200px] items-center overflow-hidden rounded-xl border border-[#DDE3EC] bg-white">
          <button
            type="button"
            aria-label="Decrease days"
            onClick={() => onChange({ days: clampDays(value.days - 1) })}
            disabled={value.days <= MIN_DAYS}
            className="flex h-full flex-1 items-center justify-center text-[#606359] transition-colors hover:text-[#272922] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus className="size-4" strokeWidth={2.2} />
          </button>
          <span className="h-5 w-px shrink-0 bg-[#E3EAF4]" />
          <span className="flex h-full min-w-[70px] items-center justify-center font-poppins text-sm font-medium text-[#272922]">
            {value.days} {value.days === 1 ? 'day' : 'days'}
          </span>
          <span className="h-5 w-px shrink-0 bg-[#E3EAF4]" />
          <button
            type="button"
            aria-label="Increase days"
            onClick={() => onChange({ days: clampDays(value.days + 1) })}
            disabled={value.days >= MAX_DAYS}
            className="flex h-full flex-1 items-center justify-center text-[#606359] transition-colors hover:text-[#272922] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus className="size-4" strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <div className="my-7 h-px w-full bg-[#E3EAF4]" />

      {/* Step 3 — experiences */}
      <div className="flex flex-col gap-3">
        <StepHeading
          step={3}
          label="What do you want to experience?"
          helper="Choose the one that sounds like your kind of trip."
        />

        <div className="grid grid-cols-3 gap-2">
          {EXPERIENCES.map(({ key, label, icon: Icon }) => {
            const isSelected = value.experience === key;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onChange({ experience: key })}
                className={cn(
                  'flex h-[62px] flex-col items-center justify-center gap-1 rounded-xl border px-1 text-center transition-colors',
                  isSelected
                    ? 'border-brand-primary bg-brand-primary/10'
                    : 'border-[#DDE3EC] bg-white hover:border-[#c7d1e0]',
                )}
              >
                <Icon
                  className={cn(
                    'size-[18px]',
                    isSelected ? 'text-brand-primary' : 'text-[#272922]',
                  )}
                  strokeWidth={1.9}
                />
                <span
                  className={cn(
                    'font-poppins text-[10.5px] leading-tight',
                    isSelected
                      ? 'font-semibold text-brand-primary'
                      : 'font-medium text-[#40453b]',
                  )}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="my-7 h-px w-full bg-[#E3EAF4]" />

      {/* Step 4 — difficulty */}
      <div className="flex flex-col gap-3">
        <StepHeading
          step={4}
          label="How challenging should your trip feel?"
          helper="Choose the level that feels comfortable for you."
        />

        <div className="grid grid-cols-3 gap-2">
          {DIFFICULTIES.map((level) => {
            const isSelected = value.difficulty === level;
            return (
              <button
                key={level}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onChange({ difficulty: level })}
                className={cn(
                  'h-10 rounded-xl border font-poppins text-[12.5px] transition-colors',
                  isSelected
                    ? 'border-brand-primary bg-brand-primary/10 font-semibold text-brand-primary'
                    : 'border-[#DDE3EC] bg-white font-medium text-[#40453b] hover:border-[#c7d1e0]',
                )}
              >
                {level}
              </button>
            );
          })}
        </div>
      </div>

      <div className="my-7 h-px w-full bg-[#E3EAF4]" />

      {/* Actions */}
      <div className="flex items-center justify-end gap-2">
        <Button
          type="button"
          variant="ghost"
          onClick={onClear}
          className="h-11 rounded-xl px-4 font-poppins text-sm font-medium text-[#606359] hover:bg-transparent hover:text-[#272922]"
        >
          Clear
        </Button>
        <Button
          type="submit"
          disabled={!canSubmit}
          className="h-11 w-[200px] rounded-xl bg-brand-primary font-poppins text-sm font-semibold text-white hover:bg-brand-primary-dark disabled:cursor-not-allowed disabled:bg-[#DDE3EC] disabled:text-[#9aa3b2] disabled:opacity-100"
        >
          Find My Trip
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </form>
  );
};

export default PlanMyTripForm;
