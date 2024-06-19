import Image from "next/image";
import Link from "next/link";

import { Button, Container, Title } from "common/UI";

import BlurIMG from "./static/hand-blur.png";
import HandIMG from "./static/hand.png";

export function Hand() {
  return (
    <section className={"mb-20 overflow-hidden md:mb-40 lg:overflow-visible"}>
      <Container>
        <div
          className={"relative flex items-center md:items-end lg:items-center"}
        >
          <div className={"flex-1 md:self-start lg:self-auto"}>
            <Title className={"mb-12"}>Okay, time to stop scrolling.</Title>
            <Title className={"mb-6 md:max-w-[500px] lg:max-w-none"}>
              Just book a call and we will tell you all.
            </Title>
            <Link
              href={"https://calendly.com/lisa-cheralds/30min"}
              target={"_blank"}
            >
              <Button>Book Now</Button>
            </Link>
          </div>
          <div
            className={
              "relative flex-1 -rotate-90 md:mt-10 md:max-w-[240px] lg:mt-0 lg:max-w-none lg:rotate-0"
            }
          >
            <Image src={HandIMG} alt={"Hand"} />
            <Image
              src={BlurIMG}
              alt={"Blur"}
              className={
                "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
