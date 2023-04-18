import SectionVideosLive from "components/live/SectionVideosLive";
import SectionVideos from "containers/PageHome/SectionVideos";
import React from "react";

type Props = {};

const PageLive = (props: Props) => {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        <SectionVideosLive />
      </div>
    </div>
  );
};

export default PageLive;
