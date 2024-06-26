import { is } from "ramda";

import tailwindConfig from "../../tailwind.config";

import resolveConfig from "tailwindcss/resolveConfig";
import { Screen } from "tailwindcss/types/config";

export const isStr = is(String);

const { theme } = resolveConfig(tailwindConfig);
const { screens } = theme ?? {};

export function getBreakpoint(name: string) {
  // @ts-expect-error screens types is not correct
  const breakpoint = screens?.[name] as string | Screen | Screen[] | undefined;
  if (!breakpoint) {
    throw new Error(`No breakpoint found with name ${name}`);
  }
  return breakpoint;
}

export function getBreakpointWidth(name: string) {
  const breakpoint = getBreakpoint(name);

  if (isStr(breakpoint)) {
    return parseInt(breakpoint.replace("px", ""));
  }

  throw new Error(`Breakpoint ${name} type is not supported`);
}
