import React from "react";
import SectionHeader from "../SectionHeader";

export default function SectionVision() {
  return (
    <section
      className="flex flex-col  justify-around gap-[24px] px-[24px] py-[96px] md:px-[24px] lg:px-[48px] bg-black/95 bg-fixed bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/assets/vision-bg.png')" }}
    >
      <SectionHeader
        title={"Our Vision."}
        subtitle={"AI IS THE NEW DOOR FOR SUCCESS."}
      />
      <main className="grid grid-col md:justify-between gap-[48px]  ">
        <div className=" grid grid-col gap-[48px] h-full  px-[12px] md:px-[48px] text-justify  ">
          <p className=" font-[400] ">
            We are passionate people, that build a unique environment for those
            who dare to innovate, break the rules of gravity, think out of the
            box and contribute to the human legacy of technology. AI, Robotics,
            Blockchain, Industry 4.0, Gaming, Web 3.0, and IIoT became such
            prevalent that it is shaping our vision of the future. At Saudi
            Excellence, we spot at early stage talents and start-up certainly
            designing tomorrow’s landscape.
          </p>
          <p className=" font-[400] ">
            This raising economy requires overcoming unique challenges, and we
            want to support you on your journey. Our focus is on the earliest
            stages of a startup (seed, pre-seed, and even pre-pitch deck) where
            we hope our help can make the biggest difference.
          </p>
          <p className=" font-[400] ">
            To build the next generation of tech giants, your team will require
            both industry know-how and new technology expertise. Saudi
            Excellence walk by your side with an ethical manner, strong
            expertise, and AAA network to scout the “Outstanding”
          </p>
        </div>
      </main>
    </section>
  );
}
