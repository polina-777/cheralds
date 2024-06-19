import Image from "next/image";

import { Container, Title } from "common/UI";

import ArrDown from "./static/how-hiring-works/ArrDown.svg";
import Arr1 from "./static/how-hiring-works/arr1.svg";
import Arr2 from "./static/how-hiring-works/arr2.svg";
import Arr3 from "./static/how-hiring-works/arr3.svg";
import Man1 from "./static/how-hiring-works/man1.png";
import Man2 from "./static/how-hiring-works/man2.png";
import Man3 from "./static/how-hiring-works/man3.png";
import Blur from "./static/how-hiring-works/newspaper-blur.png";
import NewsPaper from "./static/how-hiring-works/newspaper.png";
import Squere from "./static/how-hiring-works/squere.svg";

export function HowHiringWorks() {
  return (
    <section
      id={"how_it_works"}
      className={"overflow-hidden pb-24 pt-20 md:pb-40 md:pt-28"}
    >
      <Container>
        <div>
          <Title className={"mx-auto mb-20 max-w-[630px] text-center"}>
            How Hiring Works Without Us
          </Title>
          <div className={"flex flex-col gap-y-14 md:gap-y-20"}>
            <div
              className={
                "flex flex-col items-start gap-y-14 md:flex-row md:items-center lg:items-start"
              }
            >
              <div
                className={
                  "relative max-w-[175px] md:max-w-[244px] lg:max-w-[322px] lg:translate-y-10"
                }
              >
                <Image
                  src={Man1}
                  alt={"Image"}
                  className={"relative z-10 w-full"}
                />
                <Image
                  src={Blur}
                  alt={"Image"}
                  className={"absolute bottom-0 translate-y-1/4"}
                />
                <Image
                  src={ArrDown}
                  alt={"Image"}
                  className={
                    "absolute bottom-0 left-[10%] top-[110%] z-10 sm:left-14 md:hidden"
                  }
                />
                <Image
                  src={Arr1}
                  alt={"Image"}
                  className={
                    "absolute left-1/2 top-[100%] z-30 hidden md:block"
                  }
                />
              </div>
              <div className={"w-full pl-[15%]"}>
                <div
                  className={
                    "relative mx-auto w-full rounded-2xl bg-green_ch-500 md:mx-0 md:max-w-[486px] md:px-[22px] md:py-[14px]"
                  }
                >
                  <div
                    className={
                      "flex min-h-[144px] items-center rounded-2xl border-2 border-dashed border-white px-4 py-9 font-bold sm:px-10 md:text-xl md:font-semibold lg:text-2xl"
                    }
                  >
                    <p className={"w-full text-center md:text-left"}>
                      You hire recruiters
                    </p>
                  </div>
                  <Image
                    src={Squere}
                    alt={"Squere"}
                    className={
                      "absolute bottom-[110%] right-[10%] max-w-24 md:hidden md:max-w-36 lg:left-[105%] lg:top-1/2 lg:block"
                    }
                  />
                </div>
              </div>
            </div>

            <div
              className={
                "flex flex-col items-start gap-y-14 md:flex-row md:items-center"
              }
            >
              <div className={"w-full flex-1"}></div>
              <div
                className={
                  "relative max-w-[175px] md:max-w-[244px] lg:max-w-[322px]"
                }
              >
                <Image
                  src={NewsPaper}
                  alt={"Image"}
                  className={"relative z-10 w-full"}
                />
                <Image
                  src={Blur}
                  alt={"Image"}
                  className={"absolute bottom-0 translate-y-1/4"}
                />
                <Image
                  src={ArrDown}
                  alt={"Image"}
                  className={
                    "absolute bottom-0 left-[10%] top-[110%] z-10 sm:left-14 md:hidden"
                  }
                />
              </div>
              <div className={"w-full pl-[15%] md:w-auto md:pl-0"}>
                <div
                  className={
                    "relative mx-auto w-full rounded-2xl bg-green_ch-500 md:mx-0 md:max-w-[486px] md:px-[22px] md:py-[14px]"
                  }
                >
                  <div
                    className={
                      "flex min-h-[144px] items-center rounded-2xl border-2 border-dashed border-white px-4 py-9 font-bold sm:px-10 md:text-xl md:font-semibold lg:text-2xl"
                    }
                  >
                    <p>They handle only 10-50 CVs daily</p>
                  </div>
                  <Image
                    src={Squere}
                    alt={"Squere"}
                    className={
                      "absolute bottom-[110%] right-[10%] max-w-24 md:hidden"
                    }
                  />
                </div>
              </div>
            </div>

            <div
              className={
                "flex flex-col items-start gap-y-14 md:flex-row md:items-center"
              }
            >
              <div
                className={
                  "relative max-w-[175px] md:max-w-[244px] lg:max-w-[322px]"
                }
              >
                <Image
                  src={Man2}
                  alt={"Image"}
                  className={"relative z-10 w-full"}
                />
                <Image
                  src={Blur}
                  alt={"Image"}
                  className={"absolute bottom-0 translate-y-1/2"}
                />
                <Image
                  src={ArrDown}
                  alt={"Image"}
                  className={
                    "absolute bottom-0 left-[10%] top-[110%] z-10 sm:left-14 md:hidden"
                  }
                />
                <Image
                  src={Arr2}
                  alt={"Image"}
                  className={
                    "absolute bottom-[100%] left-[80%] z-20 hidden md:block lg:bottom-[85%] lg:left-full"
                  }
                />
                <Image
                  src={Arr3}
                  alt={"Image"}
                  className={
                    "absolute left-1/2 top-[102%] z-20 hidden max-w-32 md:block lg:bottom-[85%] lg:top-[110%] lg:max-w-none"
                  }
                />
              </div>
              <div className={"w-full pl-[15%]"}>
                <div
                  className={
                    "relative mx-auto w-full rounded-2xl bg-green_ch-500 md:mx-0 md:max-w-[486px] md:px-[22px] md:py-[14px]"
                  }
                >
                  <div
                    className={
                      "flex min-h-[144px] items-center rounded-2xl border-2 border-dashed border-white px-4 py-9 font-bold sm:px-10 md:text-xl md:font-semibold lg:text-2xl"
                    }
                  >
                    <p>
                      You screen them for hours, sometimes miss follow-ups, or
                      rush through
                    </p>
                  </div>
                  <Image
                    src={Squere}
                    alt={"Squere"}
                    className={
                      "absolute bottom-[110%] right-[10%] max-w-24 md:hidden md:max-w-36 lg:left-[105%] lg:top-1/2 lg:block"
                    }
                  />
                </div>
                <div
                  className={
                    "relative mx-auto w-full md:mx-0 md:max-w-[486px] md:px-[22px]"
                  }
                >
                  <div
                    className={
                      "flex items-center rounded-2xl px-4 pt-2.5 font-bold sm:px-10 md:text-xl md:font-semibold lg:text-2xl"
                    }
                  >
                    <p>(typical for a workaholic startup owner)</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                "flex flex-col items-start gap-y-14 md:flex-row md:items-center"
              }
            >
              <div className={"w-full flex-1"}></div>
              <div
                className={
                  "relative max-w-[175px] md:max-w-[244px] lg:max-w-[322px]"
                }
              >
                <Image
                  src={Man3}
                  alt={"Image"}
                  className={"relative z-10 w-full"}
                />
                <Image
                  src={Blur}
                  alt={"Image"}
                  className={"absolute bottom-0 translate-y-1/2 scale-[2]"}
                />
              </div>
              <div className={"w-full pl-[15%] md:w-auto md:pl-[5%]"}>
                <div
                  className={
                    "relative mx-auto w-full rounded-2xl bg-green_ch-500 md:mx-0 md:max-w-[486px] md:px-[22px] md:py-[14px]"
                  }
                >
                  <div
                    className={
                      "flex min-h-[144px] flex-col justify-center rounded-2xl border-2 border-dashed border-white px-4 py-9 font-bold sm:px-10 md:text-xl md:font-semibold lg:text-2xl"
                    }
                  >
                    <p className={"mb-4"}>
                      At the end, you basically pick lemons instead of cherries
                    </p>
                    <p>Remember, raccoons aren&apos;t corgis.</p>
                  </div>
                  <Image
                    src={Squere}
                    alt={"Squere"}
                    className={
                      "absolute bottom-[110%] right-[10%] max-w-24 md:hidden"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
