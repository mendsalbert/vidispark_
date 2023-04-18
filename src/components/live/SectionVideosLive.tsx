import Heading from "shared/Heading/Heading";
import NcImage from "shared/NcImage/NcImage";
import NcPlayIcon from "shared/NcPlayIcon/NcPlayIcon";
import React, { FC, useState } from "react";

export interface VideoType {
  id: string;
  title: string;
  thumbnail: string;
}

export interface SectionVideosLiveProps {
  videos?: VideoType[];
  className?: string;
}

const VIDEOS_DEMO: VideoType[] = [
  {
    id: "RzVvThhjAKw",
    title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
    thumbnail:
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  },
];

const SectionVideosLive: FC<SectionVideosLiveProps> = ({
  videos = VIDEOS_DEMO,
  className = "",
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentVideo] = useState(0);

  const renderMainVideo = () => {
    const video: VideoType = videos[currentVideo];
    return (
      <div
        className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px]"
        title={video.title}
      >
        {isPlay ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-3xl"
          ></iframe>
        ) : (
          <>
            <div
              onClick={() => setIsPlay(true)}
              className="cursor-pointer absolute inset-0 flex items-center justify-center z-10"
            >
              <NcPlayIcon />
            </div>
            <NcImage
              containerClassName="absolute inset-0 rounded-3xl overflow-hidden will-change-transform"
              className="object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300  will-change-transform"
              src={video.thumbnail}
              title={video.title}
              alt={video.title}
            />
          </>
        )}
      </div>
    );
  };

  return (
    <div className={`nc-SectionVideos ${className}`}>
      <Heading desc="Your current settings says everyone with the live link can join. In other words your live is public">
        <div className="flex flex-row items-center ">
          <span>You are live </span>
          <span className="relative flex h-6 w-6 ml-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-red-600"></span>
          </span>
        </div>
      </Heading>
      <p>Add some settings herer</p>
      <div className="flex flex-col  sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14  lg:flex-row-reverse">
        {/* <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-7/12 dark:bg-neutral-800/80"></div> */}
        <div className="rounded-3xl bg-primary-100 z-0 sm:rounded-[50px]  xl:w-6/12 dark:bg-neutral-800/80"></div>
        <div className="flex-grow w-full   "> {renderMainVideo()}</div>
        {/* <div className="flex-grow relative  ">{renderMainVideo()}</div> */}
      </div>
      {/* <div></div> */}
      <div className="rounded-3xl bg-primary-100 sm:rounded-[50px]  full dark:bg-neutral-800/80">
        fdsfaf
      </div>
    </div>
  );
};

export default SectionVideosLive;
