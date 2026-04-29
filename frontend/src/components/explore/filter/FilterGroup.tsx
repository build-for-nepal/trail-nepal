import { Checkbox } from '@/components/ui/checkbox';
import { Props } from '@/static/explorepageData';

export const FilterGroup = ({ title, options, selected, onToggle }: Props) => (
  <div className="flex flex-col gap-1">
    <h3 className="text-[12px] font-bold text-gray-900">{title}</h3>
    <div className="flex flex-col gap-0.5">
      {options.map((item) => (
        <label
          key={item}
          className="group flex cursor-pointer items-center gap-2 py-px"
        >
          <Checkbox
            checked={
              item === 'All' ? selected.length === 0 : selected.includes(item)
            }
            onCheckedChange={() => onToggle(item)}
            className="size-3.5 shrink-0 rounded-[3px] border-gray-400 data-[state=checked]:bg-gray-800"
          />
          <span className="text-[12px] text-gray-700">{item}</span>
        </label>
      ))}
    </div>
  </div>
);
