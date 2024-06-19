import { HTMLAttributes } from "react";

import { cn } from "utils/cn";

export type TitleProps = {
  children: React.ReactNode;
  component?: React.ElementType;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function Title(props: TitleProps) {
  const { children, component: Component = "h2", className } = props;

  return (
    <Component
      className={cn("text-3xl font-bold md:text-4xl lg:text-5xl", className)}
    >
      {children}
    </Component>
  );
}
