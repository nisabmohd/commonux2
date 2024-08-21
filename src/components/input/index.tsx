import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircleIcon, CircleCheck, SearchIcon } from "lucide-react";
import { Label } from "../label";
import { cn } from "../../lib/utils";

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
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  description?: string;
  showIcons?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      type,
      label,
      description,
      required,
      id = "inputbox",
      showIcons = true,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <Label htmlFor={id}>
            <p>
              {label}{" "}
              {
                <span
                  className={cn(
                    "text-destructive text-sm",
                    !required && "opacity-0"
                  )}
                >
                  *
                </span>
              }
            </p>
          </Label>
        )}
        <div className="relative">
          {variant == "error" && showIcons && (
            <AlertCircleIcon
              className={cn(
                "absolute w-5 h-5 text-white fill-destructive right-2 top-2.5"
              )}
            />
          )}
          {variant == "search" && showIcons && (
            <SearchIcon
              className={cn(
                "absolute w-4 h-4 text-muted-foreground right-2.5 top-3"
              )}
            />
          )}
          {variant == "success" && showIcons && (
            <CircleCheck
              className={cn(
                "absolute w-5 h-5 text-white fill-green-600 right-2 top-2.5"
              )}
            />
          )}

          <input
            id={id}
            required={required}
            type={type}
            className={cn(
              inputVariants({ variant, className }),
              disabled && "bg-gray-100"
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          />
        </div>

        {description && (
          <p
            className={cn(
              "text-[14px] text-muted-foreground",
              variant == "error" && "text-destructive"
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
