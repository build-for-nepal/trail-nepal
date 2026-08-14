import comparebg from '@/assets/compare/comparebg.svg';

export function CompareHeader() {
  return (
    <header
      role="banner"
      className="
        relative w-full overflow-hidden
        h-[260px] sm:h-[330px]
        bg-[url('/images/ExploreHeaderFrame.png')]
        bg-cover bg-center
      "
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      />

      <div className="page-wrapper relative z-10 flex flex-col justify-end h-full pb-6 sm:pb-10 px-[--spacing-page-x]">
        <div className="flex flex-col gap-2 max-w-[500px]">
          <h1
            className="
              font-fraunces
              leading-tight
              text-white/90
              text-3xl sm:text-4xl xl:text-[40px]
            "
          >
            Compare Expeditions
          </h1>

          <p className="text-white/70">
            Detailed side-by-side analysis of our routes to help you choose your
            next peak performance objective.
          </p>
        </div>
      </div>
    </header>
  );
}
