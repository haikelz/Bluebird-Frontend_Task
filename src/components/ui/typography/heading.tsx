import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as: "h1" | "h2" | "h3" | "h4";
};

export function Heading({ children, as, className, ...props }: HeadingProps) {
  return (
    <>
      {as === "h1" ? (
        <h1
          className={cn(
            "scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl",
            className
          )}
          {...props}
        >
          {children}
        </h1>
      ) : as === "h2" ? (
        <h2
          className={cn(
            "scroll-m-20 text-3xl font-black tracking-tight",
            className
          )}
          {...props}
        >
          {children}
        </h2>
      ) : as === "h3" ? (
        <h3
          className={cn(
            "scroll-m-20 text-2xl font-black tracking-tight",
            className
          )}
          {...props}
        >
          {children}
        </h3>
      ) : as === "h4" ? (
        <h4
          className={cn(
            "scroll-m-20 text-xl font-black tracking-tight",
            className
          )}
          {...props}
        >
          {children}
        </h4>
      ) : null}
    </>
  );
}
