import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

export type ContainerProps = {
  children: React.ReactNode;
} & Pick<HTMLAttributes<HTMLElement>, "className">

export function Container(props: ContainerProps) {
  const { children, className } = props;

  return (
    <div className={cn("container mx-auto max-w-[1200px] px-3", className)}>
      {children}
    </div>
  );
}
