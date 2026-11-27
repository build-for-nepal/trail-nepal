import SectionHeader from '../common/SectionHeader';
import type { CraftWorkshopOptions as CraftWorkshopOptionsData } from '@/types/craft';

/**
 * The sessions a workshop offers, styled like CulturalEntryFees. Prices are not
 * shown: the operator's figures are indicative and vary by provider.
 */
const CraftWorkshopOptions = ({
  options,
}: {
  options: CraftWorkshopOptionsData;
}) => {
  const { intro, rows, additionalCosts } = options;

  return (
    <section className="w-full">
      <div className="page-wrapper mx-auto flex w-full flex-col gap-10 px-6 py-12 sm:px-10 lg:px-20 lg:py-20">
        <SectionHeader
          title="Workshop Options"
          description={intro}
          id="options"
        />

        <div className="overflow-hidden rounded-2xl bg-[#EEF3FB]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[360px] border-collapse text-left">
              <caption className="sr-only">
                Workshop sessions by duration
              </caption>
              <thead>
                <tr className="border-b border-black/10">
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-bold text-gray-900 sm:px-7"
                  >
                    Experience
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-right text-sm font-bold text-gray-900 sm:px-7"
                  >
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.name}
                    className="border-b border-black/5 last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-6 py-3.5 text-sm font-medium text-gray-700 sm:px-7"
                    >
                      {row.name}
                    </th>
                    <td className="px-6 py-3.5 text-right text-sm font-bold text-gray-900 sm:px-7">
                      {row.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {additionalCosts && additionalCosts.length > 0 && (
          <div className="flex flex-col gap-3">
            <h3 className="font-poppins text-lg font-bold text-gray-900">
              Additional Costs
            </h3>
            <ul className="flex list-disc flex-col gap-2 pl-5 font-poppins text-sm leading-relaxed text-gray-700">
              {additionalCosts.map((cost) => (
                <li key={cost.title}>
                  <span className="font-semibold text-gray-900">
                    {cost.title}:
                  </span>{' '}
                  {cost.description}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default CraftWorkshopOptions;
