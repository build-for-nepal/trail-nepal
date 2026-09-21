import SectionHeader from '../common/SectionHeader';
import type { CulturalEntryFees as CulturalEntryFeesData } from '@/types/cultural';

/**
 * Published entrance fees for a tour's ticketed sites. The caller only renders
 * this when the tour authors an `entryFees` block — a tour with no ticketed
 * monuments omits the field and the section never appears.
 */
const CulturalEntryFees = ({
  entryFees,
}: {
  entryFees: CulturalEntryFeesData;
}) => {
  const { intro, rows, disclaimer } = entryFees;

  return (
    <section className="w-full">
      <div className="page-wrapper mx-auto flex w-full flex-col gap-10 px-6 py-12 sm:px-10 lg:px-20 lg:py-20">
        <SectionHeader title="Entry Fees" description={intro} id="entryfees" />

        <div className="overflow-hidden rounded-2xl bg-[#EEF3FB]">
          {/* The site column can be long, so the table scrolls sideways rather
              than squeezing the two fee columns on narrow screens. */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <caption className="sr-only">
                Entrance fees by site and visitor category
              </caption>
              <thead>
                <tr className="border-b border-black/10">
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-bold text-gray-900 sm:px-7"
                  >
                    Site
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-right text-sm font-bold text-gray-900 sm:px-7"
                  >
                    Foreign Nationals
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-right text-sm font-bold text-gray-900 sm:px-7"
                  >
                    SAARC
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.site}
                    className="border-b border-black/5 last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-6 py-3.5 text-sm font-medium text-gray-700 sm:px-7"
                    >
                      {row.site}
                    </th>
                    <td className="px-6 py-3.5 text-right text-sm font-bold text-gray-900 sm:px-7">
                      {row.foreign}
                    </td>
                    <td className="px-6 py-3.5 text-right text-sm font-bold text-gray-900 sm:px-7">
                      {row.saarc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 italic">{disclaimer}</p>
      </div>
    </section>
  );
};

export default CulturalEntryFees;
