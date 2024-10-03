import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, SquareMinus } from "lucide-react";

import { cn } from "../../lib/utils";

type CheckboxProps = React.ComponentPropsWithoutRef<
  {
    type: "full" | "semi";
  } & typeof CheckboxPrimitive.Root
>;

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, type = "full", ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-[1rem] w-[1rem] shrink-0 rounded-[2.5px] border border-neutral-300 ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-none",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      {type === "full" ? (
        <Check className="h-4 w-4" strokeWidth={3} />
      ) : (
        <SquareMinus className="h-4 w-4" strokeWidth={3} />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
