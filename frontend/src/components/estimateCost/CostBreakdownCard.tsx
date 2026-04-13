import Pill from "@/components/common/Pill";
import { formatNPR } from "@/lib/utils";
import { CostBreakdownCardProps } from "@/types/homepage";

export default function CostBreakdownCard({
  costs,
  tier,
}: CostBreakdownCardProps) {
  const pillColor =
    tier === "budget" ? "green"
    : tier === "mid-range" ? "blue"
    : tier === "comfort" ? "purple"
    : "gray";

  return (
    <div className="relative w-full rounded-[20px] bg-white px-8 py-8 shadow-sm font-poppins">
      <div className="absolute right-5 top-5">
        <Pill text={costs.pillLabel} color={pillColor} />
      </div>

      <h3 className="mb-6 text-lg font-semibold text-black sm:text-xl">
        Cost Breakdown
      </h3>

      <ul className="flex flex-col divide-y divide-gray-200">
        {costs?.items?.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between py-[14px]"
          >
            <span className="text-sm text-gray-700 sm:text-base">
              {item.label}
            </span>
            <span className="text-sm text-gray-700 sm:text-base">
              {formatNPR(item.amount)}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-1 border-t border-gray-200" />

      <div className="mt-3 rounded-xl bg-[#EEF2FF] px-5 py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-800 sm:text-base">
            Estimated Total
          </span>
          <span className="text-sm font-semibold text-gray-900 sm:text-base">
            {formatNPR(costs.total)}
          </span>
        </div>
        <p className="mt-1 text-xs text-gray-500">*May vary</p>
      </div>
    </div>
  );
}
