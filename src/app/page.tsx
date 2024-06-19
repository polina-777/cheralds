import { DogPow } from "components/Home/DogPow";
import { DownloadCV } from "components/Home/DownloadCV";
import { Hand } from "components/Home/Hand";
import { Hero } from "components/Home/Hero";
import { HowHiringWorks } from "components/Home/HowHiringWorks";
import { HowToGetCherryTree } from "components/Home/HowToGetCherryTree";
import { MiniDog } from "components/Home/MiniDog";
import { Reviews } from "components/Home/Reviews";
import { RoadMap } from "components/Home/RoadMap";
import { Tapes } from "components/Home/Tapes";
import { Tree } from "components/Home/Tree";
import { Video } from "components/Home/Video";
import { WhatDoesItMean } from "components/Home/WhatDoesItMean";

export default async function Home() {
  return (
    <>
      <Hero />
      <Tapes />
      <WhatDoesItMean />
      <RoadMap />
      <MiniDog />
      <HowHiringWorks />
      <Tree />
      <DownloadCV />
      <DogPow />
      <Reviews />
      <HowToGetCherryTree />
      <Hand />
      <Video />
    </>
  );
}
