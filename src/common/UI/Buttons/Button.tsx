import { cn } from "utils/cn";

import { ButtonBase, ButtonBaseProps } from "./ButtonBase";

export type ButtonProps<T> = {
  colorVariant?: "black" | "white";
  fullWidth?: boolean;
} & ButtonBaseProps<T>;

export function Button<T>(props: ButtonProps<T>) {
  const {
    colorVariant = "black",
    fullWidth = false,
    children,
    className,
    loading = false,
    ...buttonBaseProps
  } = props;

  return (
    <ButtonBase
      loading={loading}
      className={{
        button: cn(
          "min-w-[120px] cursor-pointer justify-center rounded-[10px] px-6 py-3.5 text-center font-bold transition-colors ease-linear disabled:cursor-not-allowed",
          {
            "disabled:opacity-50": !loading,
          },
          {
            "opacity-80": loading,
          },
          {
            // Black
            "bg-black text-white": colorVariant === "black",
            "hover:text-green_ch-500 active:text-green_ch-400 disabled:hover:text-white":
              colorVariant === "black" && !loading,
          },
          {
            // White
            "bg-white text-black": colorVariant === "white",
            "hover:text-green_ch-500 active:text-green_ch-700 disabled:hover:text-black":
              colorVariant === "white" && !loading,
          },
          {
            "w-full": fullWidth,
          },
          className?.button,
        ),

        loadingIcon: className?.loadingIcon,
      }}
      {...buttonBaseProps}
    >
      {children}
    </ButtonBase>
  );
}
