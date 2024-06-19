import Image from "next/image";

import { Container } from "common/UI";

import DogIMG from "./static/mini-dog.png";

export function MiniDog() {
  return (
    <section className={"bg-green_ch-500"}>
      <Container>
        <div className={"flex items-center justify-between py-10"}>
          <p
            className={
              "basis-[60%] font-indie_flower text-2xl md:basis-[45%] md:text-5xl"
            }
          >
            Time Equals Money for a cool start Up like Yours!
          </p>
          <Image
            src={DogIMG}
            alt={"Dog"}
            className={"max-w-[150px] md:max-w-[200px] lg:max-w-[260px]"}
          />
        </div>
      </Container>
    </section>
  );
}
