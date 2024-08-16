import * as React from "react";

import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircleIcon, CircleCheck, SearchIcon } from "lucide-react";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        search: "pr-8",
        error: "pr-8 border-2 border-red-500",
        success: "pr-8",
      },
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {variant == "error" && (
          <AlertCircleIcon className="absolute w-5 h-5 text-white fill-destructive right-2 top-2.5" />
        )}
        {variant == "search" && (
          <SearchIcon className="absolute w-4 h-4 text-muted-foreground right-2 top-3" />
        )}
        {variant == "success" && (
          <CircleCheck className="absolute w-5 h-5 text-white fill-green-600 right-2 top-2.5" />
        )}
        <input
          type={type}
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
