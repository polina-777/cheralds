"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { Button, ButtonBase, Container } from "common/UI";
import Logo from "components/static/Logo.svg";

import { cn } from "utils/cn";

export const links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Who needs us",
    url: "#who_needs_us",
  },
  {
    label: "How it works",
    url: "#how_it_works",
  },
  {
    label: "Our process",
    url: "#process",
  },
  {
    label: "Reviews",
    url: "#reviews",
  },
  {
    label: "Contact",
    url: "#contact",
  },
];

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.overflow = menuIsOpen ? "hidden" : "";
  }, [menuIsOpen]);

  return (
    <header className={"fixed inset-x-0 top-0 z-50 w-full"}>
      <Container className={"max-w-[1250px]"}>
        <div className={"flex items-center justify-between gap-x-4 py-8"}>
          <Link href={"/"} className={"hidden lg:block"}>
            <Image
              className={"max-w-[160px] drop-shadow-[1px_5px_20px_#106318]"}
              src={Logo}
              alt={"Logo"}
            />
          </Link>
          <div
            className={
              "hidden flex-1 items-center justify-between gap-x-6 md:flex lg:flex-initial xl:gap-x-12"
            }
          >
            <nav
              className={
                "-my-1 flex flex-wrap items-center justify-center gap-x-6 text-lg font-light xl:gap-x-8"
              }
            >
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.url}
                  className={cn(
                    "whitespace-nowrap transition-colors hover:text-green_ch-400",
                  )}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
            <Link
              href={"https://calendly.com/lisa-cheralds/30min"}
              target={"_blank"}
            >
              <Button>Talk to sales</Button>
            </Link>
          </div>
          <ButtonBase
            onClick={() => setMenuIsOpen(true)}
            title={"Open burger menu"}
            className={{
              button: "transition-colors hover:text-green_ch-500 md:hidden",
            }}
          >
            <FiMenu className={"size-6"} />
          </ButtonBase>
          <BurgerMenu open={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
        </div>
      </Container>
    </header>
  );
}

export const BurgerMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter={"ease-out transition transform duration-500"}
          enterFrom={"translate-x-full"}
          enterTo={"translate-x-0"}
          leave={"ease-in transition transform"}
          leaveFrom={"opacity-100 translate-x-0"}
          leaveTo={"opacity-0 translate-x-full"}
        >
          <DialogPanel
            className={cn(
              "fixed right-0 top-0 z-[100] h-full max-h-full w-full max-w-full overflow-y-auto overflow-x-hidden bg-black",
            )}
          >
            <div className={"relative overflow-hidden pb-4 pl-14 pr-3 pt-28"}>
              <ButtonBase
                className={{
                  button: "absolute right-10 top-9 outline-none",
                }}
                onClick={onClose}
                startIcon={
                  <FiX
                    className={
                      "size-6 transition-colors hover:text-green_ch-500"
                    }
                  />
                }
              />
              <div className={"inline-flex flex-col items-center gap-y-10"}>
                <nav
                  className={"flex flex-col gap-y-6 text-center sm:gap-y-10"}
                >
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.url}
                      onClick={onClose}
                      className={cn(
                        "py-2 transition-colors hover:text-green_ch-400",
                      )}
                    >
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </nav>
                <Link
                  href={"https://calendly.com/lisa-cheralds/30min"}
                  target={"_blank"}
                >
                  <Button colorVariant={"white"}>Talk to sales</Button>
                </Link>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};
