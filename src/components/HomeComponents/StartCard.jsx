// StatCard.jsx
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import React from "react";

const StartCard = ({
  end,
  suffix = "",
  label,
  duration = 2,
  fontSize = "text-7xl",
  textColor = "text-white", // <- default is white
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [mainSuffix, subSuffix] = suffix?.split(" ") ?? ["", ""];

  return (
    <div ref={ref} className="p-6 text-left border border-gray-300 bg-transparent">
      <h3 className={`${fontSize} font-serif mb-2 ${textColor}`}>
        {inView ? <CountUp end={end} duration={duration} /> : 0}{" "}
        {mainSuffix}
        {subSuffix && (
          <sup className={`text-sm ml-1 align-top ${textColor}`}>{subSuffix}</sup>
        )}
      </h3>
      <p className={`text-sm ${textColor === "text-white" ? "text-gray-400" : "text-[#5F5F5F]"}`}>
        {label}
      </p>
    </div>
  );
};

export default StartCard;
