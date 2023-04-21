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
import SectionSliderCardNftVideo from "components/SectionSliderCardNftVideo";
import PageLearderboard from "./PageLeaderboard/pageLearderboard";
import PageMarketplace from "./PageMarketplace/PageMarketplace";
import VideoTab from "components/VideoTab";

export interface PageCollectionProps {
  className?: string;
}

const PageCollection: FC<PageCollectionProps> = ({ className = "" }) => {
  const [tabActive, setTabActive] = React.useState("Popular");
  const pageRendererHandler = () => {
    switch (tabActive) {
      case "Videos":
        return <VideoTab />;
      case "Leaderboard":
        return <PageLearderboard />;
      case "Marketplace":
        return <PageMarketplace />;
      case "Start Live":
        return <SectionSliderCardNftVideo />;
      case "Vidisverse":
        return <SectionSliderCardNftVideo />;
      case "Following":
        return <SectionSliderCardNftVideo />;
      case "Followers":
        return <SectionSliderCardNftVideo />;
      case "Upload":
        return <SectionSliderCardNftVideo />;
      default:
        break;
    }
  };
  return (
    <div
      className={`nc-PageCollection  ${className}`}
      data-nc-id="PageCollection"
    >
      <Helmet>
        <title>Collection || Ciscryp NFT Template</title>
      </Helmet>

      <div className="">
        <div className="container py-16 lg:pb-28 lg:pt-20 space-y-20 lg:space-y-28">
          <main className="flex flex-row w-full justify-between space-x-10">
            <div className=" bg-white dark:bg-neutral-900 h-max  p-0 dark:border dark:border-neutral-700 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col  lg:items-center">
              <Nav
                className="py-5 space-y-6 flex flex-col rounded-full shadow-lg"
                containerClassName=" relative flex flex justify-center w-full text-sm md:text-base"
              >
                {[
                  {
                    name: "Videos",
                    icon: ` <svg class="w-7 h-7"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-zoom"  stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17.011 9.385v5.128l3.989 3.487v-12z"></path>
                    <path d="M3.887 6h10.08c1.468 0 3.033 1.203 3.033 2.803v8.196a.991 .991 0 0 1 -.975 1h-10.373c-1.667 0 -2.652 -1.5 -2.652 -3l.01 -8a.882 .882 0 0 1 .208 -.71a.841 .841 0 0 1 .67 -.287z"></path>
                 </svg>
              `,
                  },
                  {
                    name: "Leaderboard",
                    icon: `<svg xmlns="http://www.w3.org/2000/svg"  class="w-7 h-7" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z"></path>
                    <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232"></path>
                    <path d="M8 9v2"></path>
                    <path d="M7 10h2"></path>
                    <path d="M14 10h2"></path>
                 </svg>
               `,
                  },
                  {
                    name: "Marketplace",
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 21l18 0"></path>
                    <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
                    <path d="M5 21l0 -10.15"></path>
                    <path d="M19 21l0 -10.15"></path>
                    <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                 </svg>
               `,
                  },
                  {
                    name: " Start Live",
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8rounded-full text-red-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18.364 19.364a9 9 0 1 0 -12.728 0"></path>
                    <path d="M15.536 16.536a5 5 0 1 0 -7.072 0"></path>
                    <path d="M12 13m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                 </svg>
              
              `,
                  },
                  {
                    name: "Vidisverse",
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 8v8.5a2.5 2.5 0 0 0 2.5 2.5h1.06a3 3 0 0 0 2.34 -1.13l1.54 -1.92a2 2 0 0 1 3.12 0l1.54 1.92a3 3 0 0 0 2.34 1.13h1.06a2.5 2.5 0 0 0 2.5 -2.5v-8.5a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2z"></path>
                    <path d="M8 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                 </svg>
               `,
                  },
                  {
                    name: "Following",
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    <path d="M16 19h6"></path>
                    <path d="M19 16v6"></path>
                 </svg>
               `,
                  },
                  {
                    name: "Followers",
                    icon: `<svg xmlns="http://www.w3.org/2000/svg"  class="w-7 h-7" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                 </svg>
               `,
                  },
                  {
                    name: "Upload",
                    icon: `<svg xmlns="http://www.w3.org/2000/svg"  class="w-7 h-7"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                    <path d="M7 9l5 -5l5 5"></path>
                    <path d="M12 4l0 12"></path>
                 </svg>
               `,
                  },
                ].map((item, index) => (
                  <NavItem2
                    key={index}
                    isActive={tabActive === item.name}
                    onClick={() => setTabActive(item.name)}
                  >
                    <div className="flex items-center justify-center sm:space-x-2.5 text-xs sm:text-sm ">
                      <span
                        className="hidden sm:inline-block"
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      ></span>
                      {/* <span>{item.name}</span> */}
                    </div>
                  </NavItem2>
                ))}
              </Nav>{" "}
            </div>

            {/* TABS FILTER */}
            {/* <TabFilters /> */}

            {/* LOOP ITEMS */}
            {pageRendererHandler()}
            {/* <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
              {Array.from("11111111").map((_, index) => (
                <CardNFT key={index} />
              ))}
            </div> */}
          </main>

          {/* === SECTION 5 === */}
          {/* <div className="relative py-20 lg:py-28">
            <BackgroundSection />
            <SectionSliderCollections />
          </div> */}

          {/* SUBCRIBES */}
          <SectionBecomeAnAuthor />
        </div>
      </div>
    </div>
  );
};

export default PageCollection;
