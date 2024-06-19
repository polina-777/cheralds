import Image from "next/image";
import Link from "next/link";

import { Button, Container, Title } from "common/UI";

import CherryIMG from "./static/cherry-box.png";

export function DownloadCV() {
  return (
    <section className={"relative mb-16"}>
      <Container>
        <div className={"flex items-center justify-between"}>
          <div className={"flex-1"}>
            <Title className={"mb-14 text-center md:mb-9 md:text-left"}>
              Download CVs with rates – as easy <br className={"lg:hidden"} />
              as picking cherries!
            </Title>
            <div className={"flex justify-between overflow-hidden"}>
              <Link
                target={"_blank"}
                href={"https://calendly.com/lisa-cheralds/30min"}
              >
                <Button className={{ button: "self-start" }}>Click</Button>
              </Link>
              <Image
                src={CherryIMG}
                alt={"Image"}
                className={
                  "w-full max-w-[200px] -translate-y-[15%] md:max-w-[300px] lg:hidden"
                }
              />
            </div>
          </div>
          <Image
            src={CherryIMG}
            alt={"Image"}
            className={"hidden max-w-[456px] lg:block"}
          />
        </div>
      </Container>
    </section>
  );
}
