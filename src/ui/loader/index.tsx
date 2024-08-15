import React from "react";
import { cn } from "../../lib/utils";
import { Loader2Icon } from "lucide-react";
import { ComponentProps } from "react";

export function Loader({
  className,
  ...props
}: ComponentProps<typeof Loader2Icon>) {
  return (
    <div>
      <Loader2Icon
        {...props}
        className={cn("mr-2 h-14 w-14 text-primary animate-spin", className)}
      />
    </div>
  );
}
