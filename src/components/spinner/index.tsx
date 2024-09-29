import * as React from "react";
import { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2Icon } from "lucide-react";
import { cn } from "../../lib/utils";

const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      sm: "w-5 h-5",
      md: "h-14 w-14",
      lg: "h-20 w-20",
    },
    color: {
      descructive: "text-destructive",
      primary: "text-primary",
      warn: "text-orange-500",
      secondary: "text-secondary",
    },
  },
});

export interface SpinnerProps
  extends Omit<ComponentPropsWithoutRef<typeof Loader2Icon>, "size" | "color">,
    VariantProps<typeof spinnerVariants> {}

export function Spinner({
  className,
  size = "sm",
  color = "primary",
  ...props
}: SpinnerProps) {
  return (
    <div>
      <Loader2Icon
        {...props}
        className={cn(spinnerVariants({ className, size, color }))}
      />
    </div>
  );
}
