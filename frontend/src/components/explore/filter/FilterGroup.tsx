import { Checkbox } from '@/components/ui/checkbox';
import { Props } from '@/static/explorepageData';

export const FilterGroup = ({
  title,
  options,
  selected,
  onToggle,
  onSelectOnly,
}: Props) => {
  const specificOptions = options.slice(1); // Exclude 'All'
  const showOnlyHover = selected.length >= 2;
  const allSelected = selected.length === specificOptions.length;
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-[12px] font-bold text-gray-900">{title}</h3>
      <div className="flex flex-col gap-0.5">
        {options.map((item) => {
          const showOnlyButton = showOnlyHover && item !== 'All';
          return (
            <label
              key={item}
              className="group relative flex cursor-pointer items-center gap-2 py-px"
            >
              <Checkbox
                checked={
                  item === 'All'
                    ? selected.length === 0 || allSelected
                    : selected.includes(item)
                }
                onCheckedChange={() => onToggle(item)}
                className="size-3.5 shrink-0 rounded-[3px] border-gray-400 data-[state=checked]:bg-gray-800"
              />
              <span className="text-[12px] text-gray-700">{item}</span>
              {showOnlyButton && onSelectOnly && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectOnly(item);
                  }}
                  className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-blue-600 hover:text-blue-800"
                >
                  Only
                </button>
              )}
            </label>
          );
        })}
      </div>
    </div>
  );
};
