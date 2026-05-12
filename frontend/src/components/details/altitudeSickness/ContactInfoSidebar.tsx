'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import callImg from '@/assets/altitudesickness/contact/call.svg';
import helicopterImg from '@/assets/altitudesickness/contact/helicopter.svg';
import plusImg from '@/assets/altitudesickness/contact/contactplus.svg';
import { TREK_DETAILS } from '@/static/trekDetails';
import {
  contactHospitalsData,
  resuceHelicoptersData,
} from '@/static/altitudesickness';

type Props = {
  trekId: string;
  showMore: boolean;
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

const ContactInfoSidebar = ({
  trekId,
  showMore,
  setShowMore,
  className,
}: Props) => {
  const trekInfo =
    trekId && TREK_DETAILS[trekId]
      ? TREK_DETAILS[trekId]
      : Object.values(TREK_DETAILS)[0];

  return (
    <div
      className={cn(
        'flex flex-col gap-4 w-full md:w-75 lg:w-[320px] shrink-0',
        className,
      )}
    >
      <div className="bg-[#D4E4F6] px-5 pt-5 pb-4 border-b rounded-card border-gray-100">
        <div className="flex items-start justify-between gap-2 mb-2 text-[#2D2F27]">
          <div>
            <span className="text-3xl font-black text-[#2D2F27] tracking-tight">
              {trekInfo.meta.maxElevation}
            </span>
            <p className="text-[10px] mt-0.5">
              Maximum altitude: Everest Base Camp
            </p>
          </div>
          <span
            className={cn(
              'flex items-center gap-1 shrink-0 bg-white text-[9px] px-2 py-0.5 rounded-full tracking-wide whitespace-nowrap',
              'text-red-400 ',
            )}
          >
            <span
              className={cn('w-0.5 h-0.5 rounded-full', 'bg-red-300')}
            ></span>
            Extreme risk above 5,000m
          </span>
        </div>
        <p className="text-[11px] text-[#2D2F27] leading-relaxed">
          <span className="font-semibold text-[#2D2F27]">
            High risk of altitude sickness beyond 3,500m.
          </span>
          <br />
          Proper acclimatization is non-negotiable.
        </p>
      </div>
      <div
        className={cn(
          'flex flex-col py-4  bg-[#ECF3FD] rounded-[24px] shadow-xl overflow-hidden',
        )}
      >
        {/* CTA Buttons */}
        <div className="px-4 py-4 flex flex-col gap-2.5 border-b border-gray-100">
          <CTAButtons
            name="Call Emergency (100)"
            icon={callImg}
            className="bg-[#B12013]"
          />
          <CTAButtons
            name="Request Helicopter Rescue"
            icon={helicopterImg}
            className="bg-[#2E3028]"
          />
          <CTAButtons
            name="Contact Nearest Hospital"
            icon={plusImg}
            className="bg-[#386CB6]"
          />
        </div>

        {/* Reach out section */}
        <div className={cn('flex flex-col overflow-hidden')}>
          <div className="px-5 pt-4 pb-2 flex items-center justify-between shrink-0">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-[#376BB6]">
              Reach Out To
            </p>
          </div>

          <div
            className={cn(
              'px-5 pb-2',
              'transition-[max-height] duration-500 ease-in-out',
              showMore
                ? 'max-h-145 overflow-y-auto'
                : 'max-h-67.5 overflow-hidden',
            )}
          >
            {/* Helicopter Rescue */}
            <p className="text-[9px] font-bold tracking-widest uppercase text-gray-500 mb-2">
              Helicopter Rescue
            </p>
            <div className="flex flex-col gap-3 mb-4">
              {resuceHelicoptersData.map((c) => (
                <div key={c.name} className="flex flex-col gap-2">
                  <div className="flex flex-col items-start">
                    <span className="text-[12px] text-[#2D2F27]">{c.name}</span>
                    {c.detail && (
                      <span className="text-[10px] text-[#606359]">
                        {c.detail}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className={cn('text-[11px] text-[#376BB6] font-medium')}
                    >
                      {c.phone}
                    </span>
                    {c.address && (
                      <span className="text-[9px] text-gray-400 text-right leading-tight shrink-0">
                        {c.address}
                      </span>
                    )}
                  </div>
                  <div className="h-[0.5px] w-full bg-gray-200" />
                </div>
              ))}
            </div>

            {/* Specialist Hospitals */}
            <p className="text-[9px] font-bold tracking-widest uppercase text-gray-500 mb-2">
              Specialist Hospitals
            </p>
            <div className="flex flex-col gap-2.5">
              {contactHospitalsData.map((h) => (
                <div key={h.name} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-[#2D2F27]">{h.name}</span>
                    <span className="text-[11px] text-[#376BB6] font-medium">
                      {h.phone}
                    </span>
                  </div>
                  <div className="h-[0.5px] w-full bg-gray-200" />
                </div>
              ))}
            </div>
          </div>

          <div
            className={cn(
              'flex w-full items-center justify-center py-3 border-t border-gray-100 shrink-0',
            )}
          >
            <button
              onClick={() => setShowMore((v) => !v)}
              className="text-[12px] text-gray-500 font-medium transition-colors flex items-center gap-1 cursor-pointer"
            >
              {showMore ? 'See less' : 'See more'}
              <ChevronDown
                className="w-4 h-4 cursor-pointer"
                style={{
                  transform: showMore ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSidebar;

const CTAButtons = ({
  icon,
  name,
  className,
}: {
  icon: string;
  name: string;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        'w-full flex items-center justify-between rounded-xl px-4 py-3',
        'bg-gray-900 text-white transition-colors cursor-pointer',
        className,
      )}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-2.5 h-2.5">
          <Image src={icon} alt="contact-img" className="w-full h-full" />
        </div>
        <span className="text-[13px] font-semibold">{name}</span>
      </div>

      <ArrowRight className="w-4 h-4" />
    </button>
  );
};
