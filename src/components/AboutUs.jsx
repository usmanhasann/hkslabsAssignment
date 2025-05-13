import React from "react";
import AboutUsImg from "../assets/img/aboutusImg.png";
const AboutUs = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="text-center">
        <span className="text-sm text-gray-400 mb-4 block">
          Need more than that?
        </span>
        <h3 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Drive Results with Fractional CRO/UX <br />
          Partnership
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-19 max-w-3xl mx-auto">
        <div className="w-full md:w-1/2 text-left mt-7">
          <p className="text-gray-600 text-base mb-4">
            Our Fractional CRO/UX service provides a team of experts who act as
            your CRO/UX department. Deep diving into data, uncovering insights,
            and providing actionable suggestions to drive improvement.
          </p>
          <p className="text-gray-600 text-base mb-5">
            We leverage your team's expertise to determine execution and
            priorities. Unlock your team's full potential of data-driven growth
            with our support and guidance.
          </p>
          <button className="bg-yellow-400 text-black px-5 py-2.5 rounded-md font-medium cursor-pointer hover:bg-yellow-500 transition-colors">
            Book a Call
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={AboutUsImg}
            className="w-full max-w-sm"
            alt="Team Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
