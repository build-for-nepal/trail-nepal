const SeasonLegend = () => {
  return (
    <div
      className="flex flex-wrap items-center justify-end gap-5 text-sm font-semibold sm:text-base"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-emerald-500" />
        PEAK
      </div>
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-rose-500" />
        DANGER
      </div>
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        CAUTION
      </div>
    </div>
  );
};

export default SeasonLegend;
