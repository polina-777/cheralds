import Image from "next/image";

import { Container, Title } from "common/UI";

import DogsBlurIMG from "./static/dogs-blur.png";
import DogsIMG from "./static/dogs.png";
import TreeIMG from "./static/tree.png";
import TriangleIMG from "./static/triangle.svg";

export function Tree() {
  return (
    <section
      id={"process"}
      className={"mb-14 bg-green_ch-900 md:mb-24 lg:mb-12"}
    >
      <Container>
        <div
          className={"mb-24 flex items-center justify-between pt-28 md:mb-40"}
        >
          <Title className={"basis-1/2"}>
            What happens when we are in the game?
          </Title>
          <div className={"relative"}>
            <Image
              src={DogsBlurIMG}
              alt={"Blur"}
              className={"absolute bottom-0 w-full translate-y-1/3"}
            />
            <Image src={DogsIMG} alt={"Dogs"} className={"relative z-10"} />
          </div>
        </div>
      </Container>
      <div className={"flex flex-col gap-x-10 gap-y-14 md:flex-row"}>
        <div className={"relative shrink-0 basis-1/2 pb-[110%] md:pb-0"}>
          <Image src={TreeIMG} alt={"Tree"} fill className={"object-cover"} />
        </div>
        <div className={"px-3 pb-12 pt-3 lg:pb-20"}>
          <ul
            className={
              "mx-auto flex max-w-[480px] flex-col gap-y-14 font-light md:text-xl lg:text-2xl"
            }
          >
            <li className={"flex gap-7"}>
              <Image src={TriangleIMG} alt={"Triangle"} />
              <p>You spend nothing on recruiting</p>
            </li>
            <li className={"flex gap-7"}>
              <Image src={TriangleIMG} alt={"Triangle"} />
              <p>
                We handle up to 5k CVs daily due to our “emerald software” magic
                and network of 2k+ Engineers
              </p>
            </li>
            <li className={"flex gap-7"}>
              <Image src={TriangleIMG} alt={"Triangle"} />
              <p>Our tech experts give you 3 cherry CVs</p>
            </li>
            <li className={"flex gap-7"}>
              <Image src={TriangleIMG} alt={"Triangle"} />
              <p>You spend 0 hours 0 minutes on recruiting</p>
            </li>
            <li className={"flex gap-7"}>
              <Image src={TriangleIMG} alt={"Triangle"} />
              <p>
                Your only investment is to have an interview with them to check
                if you vibe
              </p>
            </li>
            <li className={"flex gap-7"}>
              <Image src={TriangleIMG} alt={"Triangle"} />
              <p>Then the hiring is done and we are out of sight</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
