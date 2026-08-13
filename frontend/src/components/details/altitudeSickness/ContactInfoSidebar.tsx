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

  const convertAltitudeData = (value: string) => {
    const match = value.match(/^([\d,.]+)([a-zA-Z]+)$/);
    if (!match) return null;

    let number = match[1];
    const unit = match[2];
    number = number.replace(/,/g, '');

    return {
      number: Number(number),
      unit,
    };
  };

  const displayInfo = (value: string) => {
    const altValue = convertAltitudeData(value);

    if (!altValue) return null;

    if (altValue.number >= 2000 && altValue.number < 3000) {
      return {
        text: 'low risk above 2000m',
        textColor: 'text-green-500',
        bg: 'bg-green-500',
        pulse: false,
      };
    }

    if (altValue.number >= 3000 && altValue.number < 4000) {
      return {
        text: 'moderate risk above 3000m',
        textColor: 'text-blue-500',
        bg: 'bg-blue-500',
        pulse: false,
      };
    }

    if (altValue.number >= 5000) {
      return {
        text: 'Extreme risk above 5,000m with AMS & HACE',
        textColor: 'text-[#B11F12]',
        bg: 'bg-[#B11F12]',
        // High/extreme altitudes get an attention-drawing pulsing dot.
        pulse: true,
      };
    }

    if (altValue.number >= 4000) {
      return {
        text: 'High risk above 4000m',
        textColor: 'text-[#B12013]',
        bg: 'bg-[#B12013]',
        pulse: true,
      };
    }

    return {
      text: '',
      textColor: 'text-gray-500',
      bg: 'bg-gray-500',
      pulse: false,
    };
  };

  const showText = displayInfo(trekInfo.meta.maxElevation);

  const maxAlt = convertAltitudeData(trekInfo.meta.maxElevation);
  const altNumber = maxAlt
    ? maxAlt.number.toLocaleString('en-US')
    : trekInfo.meta.maxElevation;
  const altUnit = maxAlt?.unit ?? '';

  return (
    <div
      className={cn(
        'flex flex-col gap-4 w-full md:w-75 lg:w-[400px] shrink-0 sticky top-16',
        className,
      )}
    >
      <div className="rounded-[24px] bg-[#3E6DB5] px-6 pt-6 pb-5 text-white shadow-sm">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[44px] font-extrabold leading-none tracking-tight">
            {altNumber}
          </span>
          <span className="text-lg font-semibold text-white/90">{altUnit}</span>
        </div>
        <p className="mt-2.5 text-sm text-white/85">
          Maximum altitude · {trekInfo.name.split(' (')[0]}
        </p>

        {showText?.text && (
          <div className="mt-4 flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2">
            <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
              {showText.pulse && (
                <span
                  className={cn(
                    'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
                    showText.bg,
                  )}
                />
              )}
              <span
                className={cn(
                  'relative inline-flex h-1.5 w-1.5 rounded-full',
                  showText.bg,
                )}
              />
            </span>
            <span className={cn('text-sm font-semibold', showText.textColor)}>
              {showText.text}
            </span>
          </div>
        )}
      </div>
      <div
        className={cn(
          'flex flex-col py-4  bg-[#EBF0F8] rounded-[24px] shadow-xl overflow-hidden',
        )}
      >
        {/* CTA Buttons */}
        <div className="px-4 py-4 flex flex-col gap-2.5 border-b border-gray-100">
          <CTAButtons
            name="Call Emergency (100)"
            icon={callImg}
            className="bg-[#B11F12]"
            phone="100"
          />
          <CTAButtons
            name="Request Helicopter Rescue"
            icon={helicopterImg}
            className="bg-[#2E3028]"
            phone="01-4112296"
          />
          {/* <CTAButtons
            name="Contact Nearest Hospital"
            icon={plusImg}
            className="bg-[#386CB6]"
            phone="100"
          /> */}
        </div>

        {/* Reach out section */}
        <div className={cn('flex flex-col overflow-hidden')}>
          <div className="px-5 pt-4 pb-2 flex items-center justify-between shrink-0">
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#376BB6]">
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
            {/* Specialist Hospitals */}
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">
              Specialist Hospitals
            </p>
            <div className="flex flex-col gap-2.5">
              {contactHospitalsData.map((h) => (
                <div key={h.name} className="flex flex-col gap-2">
                  <div className="flex items-center gap-6 justify-between">
                    <span className="text-[12px] text-[#2D2F27] shrink-0">
                      {h.name}
                    </span>
                    <span
                      className={cn(
                        'text-[12px] text-[#376BB6] font-medium',
                        'flex flex-wrap justify-end gap-x-1',
                      )}
                    >
                      {h.phone
                        .split(',')
                        .map((ph) => ph.trim())
                        .filter(Boolean)
                        .map((ph, idx, arr) => (
                          <span key={idx} className="whitespace-nowrap">
                            {ph}
                            {idx < arr.length - 1 ? ',' : ''}
                          </span>
                        ))}
                    </span>
                  </div>
                  <div className="h-[0.5px] w-full bg-gray-200" />
                </div>
              ))}
            </div>

            {/* Helicopter Rescue */}
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2 mt-4">
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
                      className={cn('text-[12px] text-[#376BB6] font-medium')}
                    >
                      {c.phone}
                    </span>
                    {c.address && (
                      <span className="text-[10px] text-gray-400 text-right leading-tight shrink-0">
                        {c.address}
                      </span>
                    )}
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
  phone,
}: {
  icon: string;
  name: string;
  className?: string;
  phone?: string;
}) => {
  return (
    <a
      href={phone ? `tel:${phone}` : undefined}
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
        <span className="text-sm font-semibold">{name}</span>
      </div>
      <ArrowRight className="w-4 h-4" />
    </a>
  );
};
