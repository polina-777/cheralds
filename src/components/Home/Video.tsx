"use client";

import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";

import { Container, Title } from "common/UI";

import { cn } from "utils/cn";

import BTN from "./static/video/player-btn.svg";
import Poster from "./static/video/video-poster.png";

export function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <section className={"mb-20"}>
      <Container>
        <div
          className={"flex flex-col gap-6 gap-y-8 md:flex-row md:items-center"}
        >
          <div className={"flex-1"}>
            <Title component={"div"} className={"mb-3 md:mb-9"}>
              NOT SURE??
            </Title>
            <Title component={"div"}>Listen to Liza</Title>
          </div>
          <div className={"flex-1"}>
            <div className={"relative w-full bg-black pb-[69%]"}>
              <Image
                src={Poster}
                alt={"Video Poster"}
                fill
                onClick={handlePlay}
                className={cn(
                  "peer z-10 cursor-pointer bg-white object-cover transition-opacity duration-500",
                  {
                    "pointer-events-none opacity-0": isPlaying,
                  },
                )}
              />
              <Image
                src={BTN}
                alt={"Video Button"}
                onClick={handlePlay}
                className={cn(
                  "absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] peer-hover:scale-105 peer-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]",
                  {
                    "pointer-events-none opacity-0": isPlaying,
                  },
                )}
              />
              {isPlaying && (
                <ReactPlayer
                  url={process.env.NEXT_PUBLIC_VIDEO_LINK}
                  controls
                  playing
                  width={"100%"}
                  height={"100%"}
                  style={{ position: "absolute" }}
                />
              )}
              <video
                controls
                width={900}
                height={600}
                src={`https://${process.env.VERCEL_URL}/static/video.MOV`}
              ></video>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
