'use client';

const navLinkClass =
  'relative block py-1 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-white after:shadow-[0_0_10px_rgba(255,255,255,0.9)] after:transition-all after:duration-300 group-hover:after:w-full';

const navItems = [
  { label: 'Overview', id: 'overview' },
  { label: 'Timeline', id: 'timeline' },
  { label: 'Calendar', id: 'calendar' },
  { label: 'What to Expect', id: 'whattoexpect' },
  { label: 'Altitude', id: 'altitude' },
  { label: 'Gear Checklist', id: 'gearchecklist' },
  { label: 'Gallery', id: 'gallery' },
];

const SubNav = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <div className="overflow-x-auto bg-[#376BB6]/80 border-b border-black/20 px-4 md:px-20 py-4 text-white shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-md scrollbar-hide">
      <div className="page-wrapper flex items-center justify-between">
        <ul className="flex min-w-max items-center gap-6 leading-6">
          {navItems.map((item) => (
            <li key={item.id} className="group">
              <button
                onClick={() => handleScroll(item.id)}
                className={`${navLinkClass} cursor-pointer`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubNav;
