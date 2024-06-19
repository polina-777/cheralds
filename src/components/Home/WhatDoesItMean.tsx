import Image from "next/image";

import { Container, Title } from "common/UI";

import BlackCol from "./static/black-column.png";
import Circle from "./static/dashed-circle.png";
import DogIMG from "./static/dog.png";
import RedCol from "./static/red-column.png";

export function WhatDoesItMean() {
  return (
    <section>
      <Container>
        <div
          className={
            "flex flex-wrap gap-y-16 md:gap-x-24 md:gap-y-4 lg:gap-x-40"
          }
        >
          <Title className={"basis-1/2 self-center md:basis-full"}>
            What Does It Mean?
          </Title>
          <div className={"min-h-[150px] flex-1"}>
            <div className={"relative mx-auto h-full max-w-[433px]"}>
              <Image
                src={DogIMG}
                alt={"Dog"}
                fill
                className={
                  "object-contain drop-shadow-[1px_5px_50px_rgba(37,215,44,.8)] md:drop-shadow-[1px_5px_90px_rgba(37,215,44,.8)]"
                }
              />
              <Image
                src={Circle}
                fill
                alt={"Dashed circle"}
                className={"object-contain"}
              />
            </div>
          </div>
          <div
            className={
              "flex flex-1 basis-full justify-center gap-x-14 md:grow-0 md:basis-auto md:justify-between"
            }
          >
            <div>
              <div className={"mb-2.5 pr-1 text-center text-xl font-light"}>
                100%
              </div>
              <div className={"flex gap-x-1"}>
                <span className={"text-vertical text-xl font-light"}>
                  Emerald
                </span>
                <div>
                  <Image
                    src={RedCol}
                    alt={"Red column"}
                    className={"mb-1 max-w-20"}
                  />
                  <div className={"mb-3 font-karantina text-2xl"}>
                    100% True
                  </div>
                  <div className={"max-w-[116px] text-xl font-light"}>
                    We find top Cherries in the world
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={"mb-2.5 pr-5 text-center text-xl font-light"}>
                100%
              </div>
              <div className={"flex gap-x-1"}>
                <span className={"text-vertical text-xl font-light"}>
                  Che<span className={"text-green_ch-400"}>RR</span>y
                </span>
                <div>
                  <Image
                    src={BlackCol}
                    alt={"Red column"}
                    className={"mb-1 max-w-20"}
                  />
                  <div className={"mb-3 font-karantina text-2xl"}>
                    100% True
                  </div>
                  <div className={"max-w-[135px] text-xl font-light"}>
                    We look cute and nice, but we are strong
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
