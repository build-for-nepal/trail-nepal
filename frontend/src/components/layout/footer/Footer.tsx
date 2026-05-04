'use client';

import React from 'react';
import Image from 'next/image';
import { SOCIAL_ICONS } from '@/static/constants';
import SectionHeader from '@/components/common/SectionHeader';
import { NavLinks } from '../navigation/NavLinks';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Footer = () => {
  const pathName = usePathname();
  const isHomepage = pathName === '/';

  return (
    <footer className=" relative mt-20 w-full bg-[#376BB6] text-white  px-6 pt-[32px] pb-[32px] md:px-[40px] lg:px-4 lg:pt-[50px] lg:pb-[28px]">
      {/* Wave Curve */}
      <div
        className={` ${isHomepage && 'bg-[#949072]'} absolute bottom-full left-0 w-full overflow-hidden leading-none z-10 h-[40px] md:h-[70px] lg:h-[100px]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 430 38"
          className="block w-full h-[40px] md:h-[70px] lg:h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 32.1699C0 32.1699 130.112 0.414969 215 0.00395019C300.92 -0.412065 430 32.1699 430 32.1699V38H0V32.1699Z"
            fill="#376BB6"
          />
        </svg>
      </div>

      <div className="page-wrapper mx-auto max-w-[1920px]">
        <div className="grid grid-cols-1 items-center gap-[50px] lg:grid-cols-3 lg:gap-[40px]">
          {/* Left: Quick Links */}
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <h3 className="font-poppins text-lg font-semibold lg:text-xl">
              Quick Links
            </h3>
            <NavLinks className="flex-row gap-5 lg:flex-col lg:items-start lg:gap-[8px]" />
          </div>

          {/* Center: Branding & Socials */}
          <div className="flex flex-col items-center text-center gap-[8px]">
            <SectionHeader
              title="Trail Nepal"
              description="A web-based platform to inform about the trek plans in Nepal"
              light
            />
            <p className="font-poppins text-base text-white/90">
              Kathmandu, Nepal
            </p>

            <div className="flex gap-4 pt-2 lg:pt-4">
              {SOCIAL_ICONS.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-14 w-14 items-center justify-center rounded-full transition-all hover:scale-110"
                >
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Collaborations */}

          <div className="flex flex-row items-center justify-center lg:justify-end lg:shrink-0 gap-6">
            {/* Presented by */}
            <div className="flex flex-col items-center gap-2">
              <p className="font-poppins text-[11px] uppercase tracking-wider text-white/90">
                Presented by
              </p>
              <div className="flex items-center justify-center rounded-md bg-white px-7 py-2">
                <Link href="https://buildfornepal.org/" target="_blank">
                  <Image
                    src="/icons/BNF.svg"
                    alt="Build For Nepal"
                    width={80}
                    height={28}
                    className="h-7 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>

            {/* Collaboration with */}
            <div className="flex flex-col items-center gap-2">
              <p className="font-poppins text-[11px] uppercase tracking-wider text-white/90">
                Collaboration with
              </p>
              <div className="flex items-center justify-center rounded-md bg-white px-3 py-2">
                <Link href="https://techgaun.com" target="_blank">
                  <Image
                    src="/icons/TG.svg"
                    alt="Tech Gaun"
                    width={80}
                    height={28}
                    className="h-7 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-[32px] w-full border-t border-white/20 pt-[20px] text-center lg:mt-[50px]">
          <p className="font-poppins text-[12px] tracking-tight text-white/70">
            &copy; {new Date().getFullYear()} Trail Nepal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
