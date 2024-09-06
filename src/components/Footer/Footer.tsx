import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

import { Container } from "common/UI";
import CheraldsText from "components/static/cheralds.svg";

import { SubscribeForm } from "./SubscribeForm";

export function Footer() {
  return (
    <footer id={"contact"} className={"bg-green_ch-900 pb-7 pt-4"}>
      <Container className={"max-w-[1250px]"}>
        <div
          className={
            "mb-14 flex flex-col justify-between gap-x-8 gap-y-6 md:mb-12 md:flex-row"
          }
        >
          <div className={"shrink-0"}>
            <Image
              src={CheraldsText}
              alt={"Text logo"}
              className={"mb-2 w-full max-w-52"}
            />

            <p className={"hidden font-light md:block"}>
              Cherries of the tech world hide here
            </p>
          </div>
          <SubscribeForm />
        </div>
        <div
          className={
            "mb-10 flex grid-cols-5 flex-col items-start gap-x-4 gap-y-5 text-xl font-bold md:mb-6 md:grid md:text-2xl"
          }
        >
          <Link
            href={"#who_needs_us"}
            className={"transition-colors hover:text-green_ch-400"}
          >
            Who needs us
          </Link>
          <Link
            href={"#how_it_works"}
            className={"transition-colors hover:text-green_ch-400"}
          >
            How it works
          </Link>
          <Link
            href={"#process"}
            className={"transition-colors hover:text-green_ch-400"}
          >
            Our process
          </Link>
          <Link
            href={"#reviews"}
            className={"transition-colors hover:text-green_ch-400"}
          >
            Reviews
          </Link>
          <div className={"flex flex-col gap-y-4 text-base font-light"}>
            <div className={"text-xl font-bold md:text-2xl"}>Contact us</div>
            <p>Mikolaja Kopernika 13A</p>
            <p>80-208</p>
            <p>Gdansk, Poland</p>
          </div>
        </div>
        <div
          className={
            "mb-6 flex flex-col-reverse justify-between gap-y-6 rounded-[10px] bg-white px-14 py-7 md:flex-row md:items-center"
          }
        >
          <div className={"flex gap-x-10 text-xs font-semibold text-black"}>
            <Link
              href={"/terms-and-conditions"}
              className={"transition-colors hover:underline"}
            >
              Terms & Conditions
            </Link>
            <Link
              href={"/privacy-policy"}
              className={"transition-colors hover:underline"}
            >
              Privacy policy
            </Link>
          </div>
          <div className={"flex items-start gap-5"}>
            <Link
              href={"https://x.com/_cheralisa"}
              target={"_blank"}
              className={"text-black transition-colors hover:text-green_ch-700"}
            >
              <RiTwitterXFill className={"size-7"} />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/cheralds/"}
              target={"_blank"}
              className={"text-black transition-colors hover:text-green_ch-700"}
            >
              <FaLinkedin className={"size-7"} />
            </Link>
            <Link
              href={"https://www.upwork.com/agencies/1803028630746333184/"}
              target={"_blank"}
              className={"text-black transition-colors hover:text-green_ch-700"}
            >
              <FaSquareUpwork className={"size-7"} />
            </Link>
          </div>
        </div>
        <div className={"select-none text-center text-sm font-light"}>
          Cheralds &copy; 2024
        </div>
      </Container>
    </footer>
  );
}
