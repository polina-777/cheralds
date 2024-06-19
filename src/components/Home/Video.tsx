import { Container, Title } from "common/UI";

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
            <video
              className={"bg-white"}
              poster={"./static/video/video-poster.jpg"}
              src={"https://www.youtube.com/watch?v=ZvhFIblIWF8"}
              controls
            >
              <source
                src={"https://www.youtube.com/watch?v=ZvhFIblIWF8"}
                className={"h-full w-full"}
              />
            </video>

            <video
              className={"bg-white"}
              poster={"./static/video/video-poster.jpg"}
              src={"./static/video/video.MOV"}
              controls
            >
              <source
                src={"./static/video/video.MOV"}
                className={"h-full w-full"}
              />
            </video>

            <iframe
              src={"https://www.youtube.com/watch?v=ZvhFIblIWF8"}
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
