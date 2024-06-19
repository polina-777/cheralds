import { forwardRef, useId, useState } from "react";

import { cn } from "utils/cn";

type BaseProps = {
  label?: string;
  className?: {
    inputWrapper?: string;
    input?: string;
    wrapper?: string;
  };
  helperText?: string;
  error?: boolean;
};

export type TextInputProps = BaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const { className, helperText, error, ...inputProps } = props;
    const [isFocused, setIsFocused] = useState(false);
    const id = useId();

    return (
      <div className={cn("flex flex-col gap-y-1.5", className?.wrapper)}>
        <div
          className={cn(
            "flex flex-nowrap items-center overflow-hidden rounded-2xl border border-white",
            {
              "border-green_ch-400": isFocused && !error,
              "border-red-500": error,
            },
            className?.inputWrapper,
          )}
        >
          <input
            id={id}
            className={cn(
              "block flex-1 bg-transparent px-6 py-3 text-xl font-light text-white outline-none placeholder:text-white",
              className?.input,
            )}
            ref={ref}
            type={inputProps.type ?? "text"}
            {...{
              ...inputProps,
              onFocus: (e) => {
                inputProps?.onFocus?.(e);
                setIsFocused(true);
              },
              onBlur: (e) => {
                inputProps?.onBlur?.(e);
                setIsFocused(false);
              },
            }}
          />
        </div>

        {helperText && (
          <p
            className={cn("ml-2", {
              "text-red-500": error,
              "text-gray-500": !error,
            })}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";
