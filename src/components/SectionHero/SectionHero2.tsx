import React, { FC } from "react";
import imagePng from "images/hero-right-3.png";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import HeroSearchForm from "components/HeroSearchForm/HeroSearchForm";
import { Link } from "react-router-dom";

export interface SectionHero2Props {
  className?: string;
}

const SectionHero2: FC<SectionHero2Props> = ({ className = "", children }) => {
  return (
    <div
      className={`nc-SectionHero2 flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-36 xl:pb-60 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-semibold text-4xl md:text-5xl xl:text-6xl !leading-[114%] ">
            Create, Stream, Monetize Your Video Content 🚀
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Empower Your Video Creativity Today!
          </span>
          <div className="flex flex-row items-center justify-center space-x-2">
            <ButtonPrimary>
              <span>Start your search</span>
              <span>
                <svg className="w-5 h-5 ml-2.5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </ButtonPrimary>
            <Link to="/live">
              <ButtonPrimary
                sizeClass="px-4 py-3 sm:px-5"
                className="bg-red-500  hover:bg-red-700"
              >
                Go Live
                <span className="relative flex h-3 w-3 ml-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-200"></span>
                </span>
              </ButtonPrimary>
            </Link>
          </div>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={imagePng} alt="hero" />
        </div>
      </div>

      {/* <div className="z-10 mb-12 lg:mb-0 lg:-mt-20 xl:-mt-48 w-full">
        <HeroSearchForm />
      </div> */}
    </div>
  );
};

export default SectionHero2;
