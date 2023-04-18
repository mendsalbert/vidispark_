import SectionGridLeaderboard from "components/Leaderboard/SectionGridLeaderboard";
import React from "react";

type Props = {};

const PageLearderboard = (props: Props) => {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        <SectionGridLeaderboard />
      </div>
    </div>
  );
};

export default PageLearderboard;
