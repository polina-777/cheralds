import Image from "next/image";

import { Container, Title } from "common/UI";

import DogPowIMG from "./static/dog-paw.png";

export function DogPow() {
  return (
    <section className={"relative"}>
      <Container>
        <div className={"flex items-center justify-between md:py-14"}>
          <div className={"w-full md:w-auto"}>
            <Title className={"mb-52 text-center md:mb-6 md:text-left"}>
              So who has tried the cherries?
            </Title>
            <p className={"text-center text-xl font-semibold md:text-left"}>
              (don&apos;t worry, you are not the first one)
            </p>
          </div>
          <div className={"hidden md:block md:w-[262px]"}></div>
        </div>
      </Container>
      <Image
        src={DogPowIMG}
        alt={"Dog pow"}
        className={
          "absolute right-0 top-1/2 max-w-[150px] -translate-y-1/2 md:max-w-[262px]"
        }
      />
    </section>
  );
}
