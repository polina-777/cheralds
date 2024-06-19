import Image from "next/image";

import { Container, Title } from "common/UI";

import CardIMG1 from "./static/how-to-get/card1.png";
import CardIMG2 from "./static/how-to-get/card2.png";
import CardIMG3 from "./static/how-to-get/card3.png";
import CardIMG4 from "./static/how-to-get/card4.png";
import ArrowLeft from "./static/how-to-get/how-to-get-arrow.svg";
import BlurIMG from "./static/how-to-get/how-to-get-blur.png";
import IMG1 from "./static/how-to-get/img1.png";
import IMG2 from "./static/how-to-get/img2.png";
import IMG3 from "./static/how-to-get/img3.png";
import IMG4 from "./static/how-to-get/img4.png";
import N1 from "./static/how-to-get/num1.svg";
import N2 from "./static/how-to-get/num2.svg";
import N3 from "./static/how-to-get/num3.svg";
import N4 from "./static/how-to-get/num4.svg";
import Num1 from "./static/how-to-get/number1.svg";
import Num2 from "./static/how-to-get/number2.svg";
import Num3 from "./static/how-to-get/number3.svg";
import Num4 from "./static/how-to-get/number4.svg";
import ArrowRight from "./static/how-to-get/prescreened-arrow.svg";
import DogBlurIMG from "./static/how-to-get/prescreened-dog-blur.png";
import DogIMG from "./static/how-to-get/prescreened-dog.png";

export function HowToGetCherryTree() {
  return (
    <section className={"mb-32"}>
      <Container>
        <div className={"mb-24"}>
          <Title
            className={
              "mx-auto mb-6 max-w-[280px] text-center md:mx-0 md:max-w-[550px] md:text-left"
            }
          >
            How to get to the cherry tree?
          </Title>
          <div
            className={
              "mb-14 flex flex-col justify-between gap-x-10 gap-y-14 md:flex-row md:items-center"
            }
          >
            <div className={"relative self-start md:self-auto lg:basis-5/12"}>
              <Image
                src={IMG1}
                alt={"Image"}
                className={"max-w-[260px] md:mx-auto md:max-w-[327px]"}
              />
              <Image
                src={BlurIMG}
                alt={"Blur image"}
                className={"absolute bottom-0 -z-10 translate-y-1/3"}
              />
            </div>
            <Image
              src={ArrowLeft}
              alt={"Arrow image"}
              className={"mb-10 hidden lg:block"}
            />
            <div
              className={
                "flex items-center gap-x-3 self-end text-xl font-semibold md:self-auto lg:-translate-y-1/4"
              }
            >
              <Image src={N1} alt={"Number"} />
              <div
                className={
                  "max-w-[440px] rounded-2xl bg-green_ch-500 md:px-[22px] md:py-[14px]"
                }
              >
                <div
                  className={
                    "rounded-2xl border-2 border-dashed border-white px-4 py-9 sm:px-10"
                  }
                >
                  <p>
                    Spend 30 minutes with our cherry expert to sync on your
                    needs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              "mb-14 flex flex-col justify-between gap-x-10 gap-y-14 md:flex-row md:items-center"
            }
          >
            <div className={"relative self-start md:self-auto lg:basis-5/12"}>
              <Image
                src={IMG2}
                alt={"Image"}
                className={"max-w-[260px] md:mx-auto md:max-w-[327px]"}
              />
              <Image
                src={BlurIMG}
                alt={"Blur image"}
                className={"absolute bottom-0 -z-10 translate-y-1/3"}
              />
            </div>
            <Image
              src={ArrowLeft}
              alt={"Arrow image"}
              className={"mb-10 hidden lg:block"}
            />
            <div
              className={
                "flex items-center gap-x-3 self-end text-xl font-semibold md:self-auto lg:-translate-y-1/4"
              }
            >
              <Image src={N2} alt={"Number"} />
              <div
                className={
                  "max-w-[440px] rounded-2xl bg-green_ch-500 md:px-[22px] md:py-[14px]"
                }
              >
                <div
                  className={
                    "rounded-2xl border-2 border-dashed border-white px-4 py-9 sm:px-10"
                  }
                >
                  <p className={"mb-5"}>
                    Get CVs for your request in 2-3 days.
                  </p>
                  <p>All prescreened and ready for the interview</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              "mb-14 flex flex-col justify-between gap-x-10 gap-y-14 md:flex-row md:items-center"
            }
          >
            <div className={"relative self-start md:self-auto lg:basis-5/12"}>
              <Image
                src={IMG3}
                alt={"Image"}
                className={"max-w-[260px] md:mx-auto md:max-w-[327px]"}
              />
              <Image
                src={BlurIMG}
                alt={"Blur image"}
                className={"absolute bottom-0 -z-10 translate-y-1/3"}
              />
            </div>
            <Image
              src={ArrowLeft}
              alt={"Arrow image"}
              className={"mb-10 hidden lg:block"}
            />
            <div
              className={
                "flex items-center gap-x-3 self-end text-xl font-semibold md:self-auto lg:-translate-y-1/4"
              }
            >
              <Image src={N3} alt={"Number"} />
              <div
                className={
                  "max-w-[440px] rounded-2xl bg-green_ch-500 md:px-[22px] md:py-[14px]"
                }
              >
                <div
                  className={
                    "rounded-2xl border-2 border-dashed border-white px-4 py-9 sm:px-10"
                  }
                >
                  <p>
                    Have an interview with them. On average, 3 interviews is a
                    cherry spot for hiring to be done
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              "mb-14 flex flex-col justify-between gap-x-10 gap-y-14 md:flex-row md:items-center"
            }
          >
            <div className={"relative self-start md:self-auto lg:basis-5/12"}>
              <Image
                src={IMG4}
                alt={"Image"}
                className={"max-w-[260px] md:mx-auto md:max-w-[327px]"}
              />
              <Image
                src={BlurIMG}
                alt={"Blur image"}
                className={"absolute bottom-0 -z-10 translate-y-1/3"}
              />
            </div>
            <Image
              src={ArrowLeft}
              alt={"Arrow image"}
              className={"mb-10 hidden lg:block"}
            />
            <div
              className={
                "flex items-center gap-x-3 self-end text-xl font-semibold md:self-auto lg:-translate-y-1/4"
              }
            >
              <Image src={N4} alt={"Number"} />
              <div
                className={
                  "max-w-[440px] rounded-2xl bg-green_ch-500 md:px-[22px] md:py-[14px]"
                }
              >
                <div
                  className={
                    "rounded-2xl border-2 border-dashed border-white px-4 py-9 sm:px-10"
                  }
                >
                  <p>
                    Enjoy the life with the new cherry emerald team addition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"mb-16"}>
          <Title className={"mb-5 lg:text-3xl"}>
            But are they really prescreened?
          </Title>

          <p className={"text-xl font-semibold"}>
            (Our sweet buddies make sure they are, man)
          </p>
          <div
            className={
              "relative mx-auto mt-12 max-w-[60vw] md:max-w-[40vw] lg:hidden"
            }
          >
            <Image
              src={DogIMG}
              alt={"Dog"}
              className={"mx-auto max-w-[150px] md:max-w-[213px]"}
            />
            <Image
              src={DogBlurIMG}
              alt={"Blur"}
              className={"absolute bottom-0 translate-y-1/2"}
            />
          </div>
        </div>

        <div className={"flex flex-col gap-6 lg:flex-row"}>
          <div className={"space-y-6 lg:w-2/5"}>
            <div
              className={
                "relative mx-auto flex max-w-[80vw] items-center gap-x-3 rounded-3xl bg-green_ch-500 px-6 py-4 lg:mx-auto lg:max-w-none"
              }
            >
              <Image
                src={CardIMG1}
                alt={"Card image"}
                className={"w-1/4 max-w-24 sm:max-w-none md:w-2/5"}
              />
              <p className={"font-semibold sm:text-lg md:text-2xl"}>
                Cherries are{" "}
                <span className={"font-black text-black"}>
                  carefully selected
                </span>{" "}
                by our{" "}
                <span className={"line-through"}>emerald connoisseurs</span>{" "}
                recruiters
              </p>
              <Image
                src={Num1}
                alt={"Number"}
                className={"absolute bottom-5 right-8 w-6"}
              />
            </div>
            <div
              className={
                "relative mx-auto flex max-w-[80vw] items-center gap-x-3 rounded-3xl bg-green_ch-500 px-6 py-4 lg:mx-auto lg:max-w-none"
              }
            >
              <Image
                src={CardIMG2}
                alt={"Card image"}
                className={"w-1/4 max-w-24 sm:max-w-none md:w-2/5"}
              />
              <p className={"font-semibold sm:text-lg md:text-2xl"}>
                <span className={"font-black text-black"}>CHOSEN</span> ones
                have 1 hour interviews with our{" "}
                <span className={"line-through"}>cherries eliminators</span>{" "}
                Tech Leads
              </p>
              <Image
                src={Num2}
                alt={"Number"}
                className={"absolute bottom-5 right-8 w-6"}
              />
            </div>
          </div>
          <div className={"hidden w-1/5 flex-col items-center lg:flex"}>
            <Image
              src={ArrowRight}
              alt={"Arrow image"}
              className={"mb-24 mt-3 max-w-[130px]"}
            />
            <Image
              src={DogIMG}
              alt={"Dog"}
              className={"w-full max-w-[265px]"}
            />
          </div>
          <div className={"space-y-6 lg:w-2/5"}>
            <div
              className={
                "relative mx-auto flex w-full max-w-[80vw] items-center gap-x-3 rounded-3xl bg-green_ch-500 px-6 py-4"
              }
            >
              <Image
                src={CardIMG3}
                alt={"Card image"}
                className={"w-1/4 max-w-24 sm:max-w-none md:w-2/5"}
              />
              <p className={"font-semibold sm:text-lg md:text-2xl"}>
                <span className={"font-black text-black"}>UNRIPE</span> cherries
                are killed mercilessly
              </p>
              <Image
                src={Num3}
                alt={"Number"}
                className={"absolute bottom-5 right-8 w-6"}
              />
            </div>
            <div
              className={
                "relative mx-auto flex max-w-[80vw] items-center gap-x-3 rounded-3xl bg-green_ch-500 px-6 py-4"
              }
            >
              <Image
                src={CardIMG4}
                alt={"Card image"}
                className={"w-1/4 max-w-24 sm:max-w-none md:w-2/5"}
              />
              <p className={"font-semibold sm:text-lg md:text-2xl"}>
                <span className={"line-through"}>Corgi groomers</span> sales guy
                confirms it all{" "}
                <span className={"font-black text-black"}>makes sense</span> for
                you and share it with you!
              </p>
              <Image
                src={Num4}
                alt={"Number"}
                className={"absolute bottom-5 right-8 w-7"}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
