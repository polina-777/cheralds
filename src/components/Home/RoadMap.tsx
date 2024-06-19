import Image from "next/image";

import { Container } from "common/UI";

import Corgi3Arrow from "./static/road-map/arrow-corgi3.svg";
import ScientistArrowIMG from "./static/road-map/arrow-down1.svg";
import DownArrow2IMG from "./static/road-map/arrow-down2.svg";
import Man2Arrows from "./static/road-map/arrows.png";
import ArrowBoy from "./static/road-map/arroy-boy.svg";
import BoyBlur from "./static/road-map/boy-blur.png";
import Boy from "./static/road-map/boy.png";
import Corgi2 from "./static/road-map/corgi2.png";
import Corgi3 from "./static/road-map/corgi3.png";
import CorgiArrow from "./static/road-map/corgi-arrow.svg";
import Corgi3Blur from "./static/road-map/corgi-blur3.png";
import Corgi from "./static/road-map/corgi.png";
import DashedArrowIMG from "./static/road-map/dashed-arrow.svg";
import Man2 from "./static/road-map/man2.png";
import Man from "./static/road-map/man-lonely.png";
import ManAndDog from "./static/road-map/man-with-dog.png";
import ScientistIMG from "./static/road-map/scientist.png";

export function RoadMap() {
  return (
    <section id={"who_needs_us"} className={"overflow-hidden pt-28"}>
      <Container>
        <div
          className={
            "mb-20 flex flex-col gap-y-20 md:flex-row md:items-center md:gap-x-28 lg:gap-x-40"
          }
        >
          <div className={"mx-auto w-[80vw] md:mx-0 md:w-full"}>
            <div
              className={
                "mx-auto w-full rounded-2xl bg-green_ch-500 md:max-w-[486px] md:px-[22px] md:py-[14px]"
              }
            >
              <div
                className={
                  "rounded-2xl border-2 border-dashed border-white px-4 py-9 sm:px-10"
                }
              >
                <p
                  className={
                    "font-bold md:text-xl md:font-semibold lg:text-2xl"
                  }
                >
                  When you do something cool you have to focus
                </p>
              </div>
            </div>
            <Image
              src={ScientistArrowIMG}
              alt={"Arrow"}
              className={
                "-mt-5 ml-6 w-full max-w-10 -rotate-12 md:ml-[10%] md:mt-3 md:max-w-20 md:rotate-0"
              }
            />
            <Image src={ScientistIMG} className={"w-full"} alt={"Image"} />
          </div>
          <div className={"mx-auto w-[80vw] md:mx-0 md:w-full"}>
            <div
              className={
                "mx-auto w-full rounded-2xl bg-green_ch-500 md:max-w-[486px] md:px-[22px] md:py-[14px]"
              }
            >
              <div
                className={
                  "rounded-2xl border-2 border-dashed border-white px-4 py-9 sm:px-10"
                }
              >
                <p
                  className={
                    "font-bold md:text-xl md:font-semibold lg:text-2xl"
                  }
                >
                  Act fast, think smart and remember about your other duties,
                  like this
                </p>
              </div>
            </div>
            <Image
              src={DownArrow2IMG}
              alt={"Arrow"}
              className={
                "-mt-6 mb-5 ml-auto mr-[10%] w-full max-w-14 md:mr-[20%] md:mt-6 md:max-w-20"
              }
            />
            <Image
              src={ManAndDog}
              className={
                "mx-auto w-full max-w-[70%] drop-shadow-[1px_5px_80px_#25D72C]"
              }
              alt={"Image"}
            />
          </div>
        </div>

        <div
          className={
            "mx-auto mb-20 flex w-[80vw] flex-col items-center md:mx-0 md:mb-32 md:w-full md:flex-row-reverse"
          }
        >
          <div
            className={
              "mx-auto w-full rounded-2xl bg-green_ch-500 md:max-w-[486px] md:px-[22px] md:py-[14px]"
            }
          >
            <div
              className={
                "rounded-2xl border-2 border-dashed border-white px-4 py-9 sm:px-10"
              }
            >
              <p
                className={"font-bold md:text-xl md:font-semibold lg:text-2xl"}
              >
                Jerry owns AI start-up and spends 12 hours at work (obviously)
              </p>
            </div>
          </div>
          <Image
            src={DashedArrowIMG}
            alt={"Arrow"}
            className={
              "-rotate-[145deg] md:translate-x-1/4 md:translate-y-full md:rotate-0"
            }
          />
          <Image
            src={Man}
            className={"w-full max-w-[234px] md:max-w-[324px] lg:max-w-[414px]"}
            alt={"Image"}
          />
        </div>

        <div
          className={
            "mx-auto mb-20 flex w-[80vw] flex-col items-center md:mx-0 md:mb-32 md:flex-row md:justify-start"
          }
        >
          <div
            className={
              "mx-auto w-full rounded-2xl bg-green_ch-500 md:mx-0 md:max-w-[486px] md:px-[22px] md:py-[14px]"
            }
          >
            <div
              className={
                "rounded-2xl border-2 border-dashed border-white px-4 py-9 sm:px-10"
              }
            >
              <p
                className={"font-bold md:text-xl md:font-semibold lg:text-2xl"}
              >
                His loyal buddy Cherald waits for him at home
              </p>
            </div>
          </div>
          <Image
            src={CorgiArrow}
            alt={"Arrow"}
            className={
              "-mr-[60%] mb-4 w-full max-w-24 rotate-90 md:-mr-6 md:w-auto md:max-w-32 md:rotate-0"
            }
          />
          <Image
            src={Corgi}
            className={"w-full max-w-[208px] md:max-w-[270px]"}
            alt={"Image"}
          />
        </div>

        <div className={"mx-auto mb-20 w-[80vw] md:mb-32"}>
          <div className={"flex flex-col items-center"}>
            <div
              className={
                "mx-auto w-full rounded-2xl bg-green_ch-500 md:mx-0 md:max-w-[486px] md:px-[22px] md:py-[14px]"
              }
            >
              <div
                className={
                  "rounded-2xl border-2 border-dashed border-white px-4 py-9 sm:px-10"
                }
              >
                <p
                  className={
                    "font-bold md:text-xl md:font-semibold lg:text-2xl"
                  }
                >
                  Both feel lonely and need help to grow
                </p>
              </div>
            </div>
            <Image
              src={Man2Arrows}
              alt={"Arrows"}
              className={
                "mx-auto -mt-4 w-full max-w-[286px] md:mt-5 md:max-w-[346px] lg:max-w-[486px]"
              }
            />
          </div>
          <div
            className={"flex items-center justify-between lg:justify-around"}
          >
            <div className={"max-w-[177px] md:max-w-[289px] lg:max-w-[323px]"}>
              <Image src={Man2} alt={"Arrow"} className={"w-full"} />
            </div>
            <div className={"max-w-[177px] md:max-w-[274px] lg:max-w-[288px]"}>
              <Image src={Corgi2} className={"w-full"} alt={"Image"} />
            </div>
          </div>
        </div>

        <div
          className={
            "mx-auto mb-20 flex w-[80vw] flex-col items-center md:mb-32 md:flex-row md:items-start"
          }
        >
          <div
            className={
              "w-full rounded-2xl bg-green_ch-500 md:mx-0 md:max-w-[486px] md:px-[22px] md:py-[14px]"
            }
          >
            <div
              className={
                "rounded-2xl border-2 border-dashed border-white px-4 py-9 text-center font-bold sm:px-10 md:text-xl md:font-semibold lg:text-2xl"
              }
            >
              <p className={"mb-5"}>They should delegate</p>
              <p>HIRING</p>
            </div>
          </div>
          <Image
            src={ArrowBoy}
            alt={"Arrow"}
            className={
              "mb-12 w-full max-w-16 rotate-45 self-start md:mt-10 md:max-w-28 md:rotate-0 md:self-auto lg:max-w-[206px]"
            }
          />
          <div
            className={
              "relative w-full max-w-[212px] md:-mt-8 md:ml-auto md:max-w-[335px]"
            }
          >
            <Image
              src={Boy}
              className={"relative z-10 mb-10 w-full"}
              alt={"Image"}
            />
            <Image
              src={BoyBlur}
              className={"absolute bottom-0 w-full scale-150"}
              alt={"Image"}
            />
          </div>
        </div>

        <div
          className={
            "mx-auto mb-20 flex w-[80vw] flex-col items-center md:mx-0 md:mb-32 md:w-full md:flex-row-reverse md:items-start"
          }
        >
          <div
            className={
              "mx-auto w-full rounded-2xl bg-green_ch-500 md:mx-0 md:max-w-[486px] md:px-[22px] md:py-[14px]"
            }
          >
            <div
              className={
                "rounded-2xl border-2 border-dashed border-white px-4 py-9 font-bold sm:px-10 md:text-xl md:font-semibold lg:text-2xl"
              }
            >
              <p className={"mb-5"}>It’s boring and expensive process.</p>
              <p>Why not have someone do it x2 faster and for less?</p>
            </div>
          </div>
          <Image
            src={Corgi3Arrow}
            alt={"Arrow"}
            className={
              "mb-12 ml-[40%] mt-3 -rotate-[25deg] md:ml-0 md:mt-[10%] md:max-w-[200px] md:flex-1 md:rotate-0"
            }
          />
          <div
            className={
              "relative w-full max-w-[164px] md:mx-auto md:-mt-10 md:max-w-[259px] lg:max-w-[336px]"
            }
          >
            <Image
              src={Corgi3}
              className={"relative z-10 w-full"}
              alt={"Image"}
            />
            <Image
              src={Corgi3Blur}
              className={"absolute -bottom-3 w-full scale-150"}
              alt={"Image"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
