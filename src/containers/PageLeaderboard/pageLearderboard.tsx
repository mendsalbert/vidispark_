import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridLeaderboard from "components/Leaderboard/SectionGridLeaderboard";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import React from "react";

type Props = {};

const PageLearderboard = (props: Props) => {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        <BackgroundSection />
        <SectionGridLeaderboard />
        {/* <SectionGridAuthorBox
          sectionStyle="style2"
          data={Array.from("11111111")}
          boxCard="box4"
        />{" "} */}
      </div>
    </div>
  );
};

export default PageLearderboard;
