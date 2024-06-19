import Image from "next/image";

import TapesIMG from "./static/tapes.png";

export function Tapes() {
  return (
    <section className={"mb-20 overflow-hidden py-3 lg:py-0"}>
      <Image
        src={TapesIMG}
        alt={"Tapes image"}
        className={
          "mx-auto w-full max-w-screen-2xl scale-[1.7] md:scale-125 lg:scale-100"
        }
      />
    </section>
  );
}
