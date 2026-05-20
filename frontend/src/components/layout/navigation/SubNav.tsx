'use client';
import Image from 'next/image';

const navLinkClass =
  'relative block py-1 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-white after:shadow-[0_0_10px_rgba(255,255,255,0.9)] after:transition-all after:duration-300 group-hover:after:w-full';
const SubNav = () => {
  return (
    <div className="overflow-x-auto bg-[#376BB6]/80 border-b border-black/20 px-4 md:px-20 py-2 text-white shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-md scrollbar-hide">
      {' '}
      <div className="flex items-center justify-between">
        <ul className="flex min-w-max items-center gap-6 leading-6">
          {' '}
          <li className="group">
            <a href="#overview" className={navLinkClass}>
              Overview
            </a>
          </li>
          <li className="group">
            <a href="#timeline" className={navLinkClass}>
              Timeline
            </a>
          </li>
          <li className="group">
            <a href="#calendar" className={navLinkClass}>
              Calendar
            </a>
          </li>
          <li className="group">
            <a href="#whattoexpect" className={navLinkClass}>
              What to Expect
            </a>
          </li>
          <li className="group">
            <a href="#altitude" className={navLinkClass}>
              Altitude
            </a>
          </li>
          <li className="group">
            <a href="#gallery" className={navLinkClass}>
              Gallery
            </a>
          </li>
          {/* <li className="group">
            <a href="#reviews" className={navLinkClass}>
              Reviews
            </a>
          </li> */}
          <li className="group">
            <a href="#gearchecklist" className={navLinkClass}>
              Gear Checklist
            </a>
          </li>
        </ul>

        <div>
          {/* <button className="rounded-full bg-white px-4 py-2 text-brand-green flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-brand-green hover:text-white">
            <span>
              <Image
                src="/icons/document.svg"
                alt="Document Icon"
                width={18}
                height={20}
                className="object-contain drop-shadow-md"
                priority
              />
            </span>
            Download PDF
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SubNav;
