import React, { FC, useEffect, useState } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import CardNFTVideo from "./CardNFTVideo";
import { Link } from "react-router-dom";

export interface SectionSliderCardNftVideoProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
}

const UNIQUE_CLASS = "glide_SectionSliderCardNftVideo_";
const OPTIONS: Glide.Options = {
  perView: 3,
  gap: 32,
  bound: true,
  breakpoints: {
    1280: {
      gap: 28,
      perView: 2.5,
    },
    1024: {
      gap: 20,
      perView: 2.3,
    },
    768: {
      gap: 20,
      perView: 1.5,
    },
    500: {
      gap: 20,
      perView: 1,
    },
  },
};

const VideoTab: FC<SectionSliderCardNftVideoProps> = ({
  className = "",
  itemClassName = "",
}) => {
  const [slider] = useState(new Glide(`.${UNIQUE_CLASS}`, OPTIONS));

  useEffect(() => {
    let moutedSlider = slider.mount();
    return () => moutedSlider.destroy();
  }, [slider]);

  return (
    <div className={`nc-SectionSliderCardNftVideo ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`}>
        <Heading
          desc="Click on play icon and enjoy freshly uploaded videos"
          hasNextPrev
        >
          Recently uploaded Videos
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="grid grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1643101809204-6fb869816dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              "https://images.unsplash.com/photo-1643101808200-0d159c1331f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              "https://images.unsplash.com/photo-1643101808513-0552e31e4d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              "https://images.unsplash.com/photo-1638913974023-cef988e81629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            ].map((item, index) => (
              <li key={index} className={`grid grid-cols-4`}>
                <CardNFTVideo featuredImage={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoTab;
