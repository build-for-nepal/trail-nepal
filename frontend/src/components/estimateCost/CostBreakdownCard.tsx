import { formatNPR } from "@/lib/utils";
import { TierCosts } from "@/types/homepage";

interface CostBreakdownCardProps {
  costs: TierCosts;
}

export default function CostBreakdownCard({ costs }: CostBreakdownCardProps) {
  return (
    <div className="w-full rounded-[20px] bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-8">
      <h3
        className="mb-6 text-[18px] font-semibold text-black sm:text-[20px]"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Cost Breakdown
      </h3>

      <ul className="flex flex-col divide-y divide-gray-200">
        {costs.items.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between py-[14px] first:pt-0 last:pb-0"
          >
            <span
              className="text-sm font-normal text-gray-700 sm:text-base"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {item.label}
            </span>
            <span
              className="text-sm font-normal text-gray-700 sm:text-base"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {formatNPR(item.amount)}
            </span>
          </li>
        ))}
      </ul>

      {/* Divider before total */}
      <div className="mt-1 border-t border-gray-200" />

      {/* Estimated Total */}
      <div className="mt-3 rounded-[12px] bg-[#EEF2FF] px-4 py-4 sm:px-5">
        <div className="flex items-center justify-between">
          <span
            className="text-sm font-medium text-gray-800 sm:text-base"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Estimated Total
          </span>
          <span
            className="text-sm font-semibold text-gray-900 sm:text-base"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {formatNPR(costs.total)}
          </span>
        </div>
        <p
          className="mt-0.5 text-xs text-gray-500"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          *May vary
        </p>
      </div>
    </div>
  );
}
