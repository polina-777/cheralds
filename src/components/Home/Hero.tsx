import Image from "next/image";
import Link from "next/link";

import { Button, Container, Title } from "common/UI";

import MainIMG from "./static/hero-main-img.png";

export function Hero() {
  return (
    <section>
      <Container>
        <div
          className={
            "flex flex-col-reverse items-center justify-between gap-y-10 pb-12 pt-4 md:flex-row md:pt-12 lg:pb-8"
          }
        >
          <div className={"md:max-w-[354px] lg:max-w-[454px]"}>
            <Title
              component={"h1"}
              className={
                "mb-10 inline-block text-4xl !leading-[1.05] md:text-5xl lg:text-[56px]"
              }
            >
              Emerald Cherries Of The Tech World Hide Here
            </Title>
            <Link
              href={"https://calendly.com/lisa-cheralds/30min"}
              target={"_blank"}
            >
              <Button>Get a quote</Button>
            </Link>
          </div>
          <div className={"max-w-[438px]"}>
            <Image
              src={MainIMG}
              alt={"Main image"}
              className={"drop-shadow-[1px_5px_70px_rgba(37,215,44,.8)]"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
