import Image from "next/image";

import { Container, Title } from "common/UI";

import Ava1 from "./static/reviews/Avatar1.png";
import Ava2 from "./static/reviews/Avatar2.png";
import Ava3 from "./static/reviews/Avatar3.png";
import Ava4 from "./static/reviews/Avatar4.png";
import BLeft from "./static/reviews/braces-left.svg";
import BRight from "./static/reviews/braces-right.svg";

export function Reviews() {
  return (
    <section className={"mb-12 pt-20"} id={"reviews"}>
      <Container>
        <div>
          <Title className={"mb-12 text-center md:text-left"}>Reviews</Title>
          <div className={"grid grid-cols-1 gap-x-20 lg:grid-cols-2"}>
            <div className={"mx-auto flex max-w-[566px] flex-col"}>
              <div
                className={
                  "flex translate-y-1/3 items-center justify-center gap-6"
                }
              >
                <Image src={BLeft} alt={"Braces"} className={"mb-8 size-10"} />
                <div
                  className={
                    "relative size-[97px] rounded-full border-4 border-green-500 md:size-[158px]"
                  }
                >
                  <Image
                    src={Ava1}
                    alt={"Avatar"}
                    fill
                    className={"object-cover"}
                  />
                </div>
                <Image src={BRight} alt={"Braces"} className={"mb-8 size-10"} />
              </div>
              <div
                className={
                  "mb-2.5 mr-3 flex-1 rounded-lg bg-black p-4 shadow-[12px_10px_0_#1AAF20]"
                }
              >
                <div
                  className={
                    "mb-4 flex justify-between text-sm font-semibold md:text-xl lg:font-black"
                  }
                >
                  <span className={"max-w-[120px]"}>CE0, Poland</span>
                  <span className={"max-w-[107px] text-right md:max-w-[180px]"}>
                    Przemyslaw Kral
                  </span>
                </div>
                <div className={"text-sm font-light md:text-lg"}>
                  <p>
                    We’ve hired 5 enginners over the past 4months, conducting
                    two interviews each and giving some a test task.
                  </p>
                  <p>The whole process was quick and effortless.</p>
                  <p>
                    The options provided were strong, cutting our hiring cycle
                    by half, if not more.
                  </p>
                  <p>
                    We managed to find candidates on the local market, as we are
                    based in poland, at local rates, much faster than using our
                    in-house hiring department.
                  </p>
                </div>
              </div>
            </div>

            <div className={"mx-auto flex max-w-[566px] flex-col"}>
              <div
                className={
                  "flex translate-y-1/3 items-center justify-center gap-6"
                }
              >
                <Image src={BLeft} alt={"Braces"} className={"mb-8 size-10"} />
                <div
                  className={
                    "relative size-[97px] rounded-full border-4 border-green-500 md:size-[158px]"
                  }
                >
                  <Image
                    src={Ava2}
                    alt={"Avatar"}
                    fill
                    className={"object-cover"}
                  />
                </div>
                <Image src={BRight} alt={"Braces"} className={"mb-8 size-10"} />
              </div>
              <div
                className={
                  "ml-3 mt-2.5 flex-1 rounded-lg bg-black p-4 shadow-[-12px_-10px_0_#1AAF20]"
                }
              >
                <div
                  className={
                    "mb-4 flex justify-between text-sm font-semibold md:text-xl lg:font-black"
                  }
                >
                  <span className={"max-w-[120px]"}>
                    Founder at GuardianVets
                  </span>
                  <span className={"max-w-[107px] text-right md:max-w-[180px]"}>
                    John Dillon
                  </span>
                </div>
                <p className={"text-sm font-light md:text-lg"}>
                  The whole hiring process was quite easy for us. We didn’t have
                  a lot of time to screen and interview candidates, so Cheralds
                  took care of it. All of our engineers have relate to our idea,
                  so we vibed on many levels beyond just the tech stack. This is
                  amazing and so rare to find.
                </p>
              </div>
            </div>

            <div className={"mx-auto flex max-w-[566px] flex-col"}>
              <div
                className={
                  "flex translate-y-1/3 items-center justify-center gap-6"
                }
              >
                <Image src={BLeft} alt={"Braces"} className={"mb-8 size-10"} />
                <div
                  className={
                    "relative size-[97px] rounded-full border-4 border-green-500 md:size-[158px]"
                  }
                >
                  <Image
                    src={Ava3}
                    alt={"Avatar"}
                    fill
                    className={"object-cover"}
                  />
                </div>
                <Image src={BRight} alt={"Braces"} className={"mb-8 size-10"} />
              </div>
              <div
                className={
                  "mb-2.5 mr-3 flex-1 rounded-lg bg-black p-4 shadow-[12px_10px_0_#1AAF20]"
                }
              >
                <div
                  className={
                    "mb-4 flex justify-between text-sm font-semibold md:text-xl lg:font-black"
                  }
                >
                  <span className={"max-w-[170px]"}>
                    Founder of Lovely Finance, Dubai
                  </span>
                  {/* <span>Przemyslaw Kral</span> */}
                </div>
                <p className={"text-sm font-light md:text-lg"}>
                  Got three Solidity devs and a DevsOps guy in just 3 days.
                  Flexible approach, good rates, and fast communication.
                  Definitely doing this again when needed.
                </p>
              </div>
            </div>

            <div className={"mx-auto flex max-w-[566px] flex-col"}>
              <div
                className={
                  "flex translate-y-1/3 items-center justify-center gap-6"
                }
              >
                <Image src={BLeft} alt={"Braces"} className={"mb-8 size-10"} />
                <div
                  className={
                    "relative size-[97px] rounded-full border-4 border-green-500 md:size-[158px]"
                  }
                >
                  <Image
                    src={Ava4}
                    alt={"Avatar"}
                    fill
                    className={"object-cover"}
                  />
                </div>
                <Image src={BRight} alt={"Braces"} className={"mb-8 size-10"} />
              </div>
              <div
                className={
                  "ml-3 mt-2.5 flex-1 rounded-lg bg-black p-4 shadow-[-12px_-10px_0_#1AAF20]"
                }
              >
                <div
                  className={
                    "mb-4 flex justify-between text-sm font-semibold md:text-xl lg:font-black"
                  }
                >
                  <span className={"max-w-[120px]"}>CEO, US</span>
                  <span className={"max-w-[107px] text-right md:max-w-[180px]"}>
                    Hugh Bartlett
                  </span>
                </div>
                <p className={"text-sm font-light md:text-lg"}>
                  Built a design department with Cheralds . Their designers
                  provided good portfolios and were very communicative on calls,
                  which is exactly what we were looking for. Would love to have
                  a chance to work on another project with them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
