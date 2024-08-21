import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const progressVariants = cva("", {
  variants: {
    color: {
      descructive: "bg-destructive",
      primary: "bg-primary",
      warn: "bg-orange-500",
      secondary: "bg-secondary",
    },
    size: {
      sm: "h-2",
      md: "h-4",
    },
  },
});

export interface ProgressCustomProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
      "color"
    >,
    VariantProps<typeof progressVariants> {}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressCustomProps
>(({ className, value, color = "primary", size = "sm", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      progressVariants({ size }),
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 transition-all",
        progressVariants({ color })
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
