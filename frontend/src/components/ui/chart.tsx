import * as React from 'react';

import { cn } from '@/lib/utils';

export interface ChartProps extends React.SVGProps<SVGSVGElement> {}

const Chart = React.forwardRef<SVGSVGElement, ChartProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-full w-full overflow-visible', className)}
      {...props}
    />
  ),
);

Chart.displayName = 'Chart';

export { Chart };