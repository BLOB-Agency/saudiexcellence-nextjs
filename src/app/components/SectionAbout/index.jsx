import React from "react";
import SectionHeader from "../SectionHeader";

export default function SectionAbout() {
  return (
    <section className="flex flex-col justify-around gap-[24px] px-[24px] py-[96px] md:px-[24px] lg:px-[48px] bg-black/95 bg-fixed bg-cover bg-center bg-no-repeat "
    style={{backgroundImage: "url('/assets/meteor.png')",}}
    >
      <SectionHeader title={"About."} subtitle={"OUR COMPANY."} />
      <main className="grid grid-col md:justify-between gap-[48px]  ">
        <div className=" md:w-[50%] h-full  ">
          <p className="px-[24px] border-l-[2px] border-green  ">
            Saudi Excellence Holding Company is part of{" "}
            <strong className="text-green">Al-Ramez International Group</strong>
            , which was Established in 1991 with diversified business areas.
          </p>
        </div>
        <div className=" md:w-[50%] justify-self-end  h-full  text-right ">
          <p className="px-[24px] border-r-[2px] border-green  ">
            Saudi Excellence Holding Company is one of the leading companies in
            the region, providing the latest technologies in the field of{" "}
            <strong className="text-green">security</strong> and{" "}
            <strong className="text-green">defense</strong> to Saudi Government
            and Enterprises in Saudi Arabia. The company has taken upon itself
            the challenges facing the region that can be eliminated by{" "}
            <strong className="text-green">Advanced Technologies.</strong>
          </p>
        </div>
        <div className=" md:w-[50%]  h-full  ">
          <p className="px-[24px] border-l-[2px] border-green  ">
            Saudi Excellence Holding Company is part of{" "}
            <strong className="text-green">Al-Ramez International Group</strong>
            , which was Established in 1991 with diversified business areas.
          </p>
        </div>
      </main>
    </section>
  );
}
