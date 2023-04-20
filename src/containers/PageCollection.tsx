import React, { FC } from "react";
import { Helmet } from "react-helmet";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import NcImage from "shared/NcImage/NcImage";
import CardNFT from "components/CardNFT";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import collectionBanner from "images/nfts/collectionBanner.png";
import { nftsImgs } from "contains/fakeData";
import NftMoreDropdown from "components/NftMoreDropdown";
import ButtonDropDownShare from "components/ButtonDropDownShare";
import TabFilters from "components/TabFilters";
import SectionSliderCollections from "components/SectionSliderCollections";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import Nav from "shared/Nav/Nav";
import NavItem from "shared/NavItem/NavItem";
import NavItem2 from "components/NavItem2";
import { UserAddIcon } from "@heroicons/react/solid";

export interface PageCollectionProps {
  className?: string;
}

const PageCollection: FC<PageCollectionProps> = ({ className = "" }) => {
  const [tabActive, setTabActive] = React.useState("Popular");

  return (
    <div
      className={`nc-PageCollection  ${className}`}
      data-nc-id="PageCollection"
    >
      <Helmet>
        <title>Collection || Ciscryp NFT Template</title>
      </Helmet>

      {/* HEADER */}
      <div className="w-full">
        <div className="relative w-full h-20 md:h-20 2xl:h-20"></div>
        <div className="relative container -mt-14 lg:-mt-20">
          <div className=" bg-white dark:bg-neutral-900 p-4 dark:border dark:border-neutral-700 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row lg:items-center">
            <Nav
              className="p-1 bg-white dark:bg-neutral-800 rounded-full shadow-lg"
              containerClassName=" relative flex justify-center w-full text-sm md:text-base"
            >
              {[
                {
                  name: "Popular",
                },
                {
                  name: "Following",
                },
                {
                  name: "New & Noteworthy",
                },
              ].map((item, index) => (
                <NavItem2
                  key={index}
                  isActive={tabActive === item.name}
                  onClick={() => setTabActive(item.name)}
                >
                  <div className="flex items-center justify-center sm:space-x-2.5 text-xs sm:text-sm ">
                    {/* <span
                      className="hidden sm:inline-block"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    ></span> */}

                    <span>{item.name}</span>
                  </div>
                </NavItem2>
              ))}
            </Nav>{" "}
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-20 lg:space-y-28">
        <main>
          {/* TABS FILTER */}
          <TabFilters />

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 lg:mt-10">
            {Array.from("11111111").map((_, index) => (
              <CardNFT key={index} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary loading>Show me more</ButtonPrimary>
          </div>
        </main>

        {/* === SECTION 5 === */}
        <div className="relative py-20 lg:py-28">
          <BackgroundSection />
          <SectionSliderCollections />
        </div>

        {/* SUBCRIBES */}
        <SectionBecomeAnAuthor />
      </div>
    </div>
  );
};

export default PageCollection;
