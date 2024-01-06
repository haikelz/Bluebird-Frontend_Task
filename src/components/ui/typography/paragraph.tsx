import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

export function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  );
}
