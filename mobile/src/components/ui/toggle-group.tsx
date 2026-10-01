import * as ToggleGroupPrimitive from '@rn-primitives/toggle-group';

import { cn } from '@/lib/utils';

const ToggleGroup = ToggleGroupPrimitive.Root;

function ToggleGroupItem({
  className,
  ...props
}: ToggleGroupPrimitive.ItemProps) {
  return (
    <ToggleGroupPrimitive.Item
      className={cn('items-center justify-center', className)}
      {...props}
    />
  );
}

export { ToggleGroup, ToggleGroupItem };
