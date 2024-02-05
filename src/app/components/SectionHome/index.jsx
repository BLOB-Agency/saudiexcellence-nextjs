import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
export default function SectionHome() {
  return (
    <section className="relative sm:max:min-h-[100vh] min-h-auto w-full flex flex-col gap-[50px] overflow-hidden">
      <video
        className="object-cover z-[-1] h-[100vh] w-full bg-black"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/desert.mp4" type="video/mp4" />
      </video>
      <div className="z-[2] absolute flex flex-col gap-[50px] justify-center items-center bg-black/50 w-full h-full">
        <h2 className="text-center font-[700] text-[20px]">
          AI will impact every industry all over <strong className="text-green">the world.</strong>
        </h2>
        <a href="#about" className="w-fit">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="w-[3em] text-green-500"
            style={{ color: "#CAE54C" }}
          />
        </a>
      </div>
    </section>
  );
}
