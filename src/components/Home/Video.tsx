import Image from "next/image";

import { Container, Title } from "common/UI";

import Poster from "./static/video-poster.jpg";

//TODO Video

export function Video() {
  return (
    <section className={"mb-20"}>
      <Container>
        <div
          className={"flex flex-col gap-6 gap-y-8 md:flex-row md:items-center"}
        >
          <div className={"flex-1"}>
            <Title component={"div"} className={"mb-3 md:mb-9"}>
              NOT SURE??
            </Title>
            <Title component={"div"}>Listen to Liza</Title>
          </div>
          <div className={"flex-1"}>
            <Image src={Poster} alt={"video"} />
            {/* <video>
              <source src="/blue.mp4" />
            </video> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
