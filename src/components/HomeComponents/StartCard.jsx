import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import React from 'react';

const StatCard = ({ end, suffix = "", label, duration = 2, fontSize = "text-7xl" }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  // Split suffix like "K sq. ft." → "K", "sq. ft."
  const [mainSuffix, subSuffix] = suffix?.split(" ") ?? ["", ""];

  return (
    <div ref={ref} className="p-10">
      <h3 className={`flex items-start ${fontSize} font-serif mb-2 text-white`}>
        <span>
          {inView ? <CountUp end={end} duration={duration} /> : 0}
          {mainSuffix}
        </span>
        {subSuffix && (
          <span className="ml-1 mt-[6px] text-sm lg:text-base italic text-gray-300">
            {subSuffix}
          </span>
        )}
      </h3>
      <p className="text-sm text-gray-400 max-w-xs leading-relaxed">{label}</p>
    </div>
  );
};

export default StatCard;
