export function TreksHeader() {
  return (
    <header
      role="banner"
      className="
        relative w-full overflow-hidden
        h-[260px] sm:h-[680px]
        bg-[url('/images/ABC.jpg')]
        bg-cover bg-center
      "
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      />

      <div className="page-wrapper relative z-10 flex flex-col justify-end h-full pb-6 sm:pb-20 px-[--spacing-page-x]">
        <div className="flex flex-col gap-2 max-w-[730px]">
          <h1
            className="
              font-otomanopee
              leading-tight
              text-white/90
              text-3xl sm:text-4xl xl:text-[48px]
            "
          >
            Annapurna Base Camp
          </h1>

          <p className="text-white/70 text-xs font-semibold sm:text-2xl pt-2 pb-4">
            Khumbu region
          </p>
          <p className="text-white/70 text-xs font-semibold sm:text-lg">
            Journey to the base of the world's highest mountain through Sherpa villages and stunning Himalayan landscapes.
          </p>
        </div>
      </div>
    </header>
  );
}
