import * as React from "react";
import { AlertCircleIcon, CircleCheck, SearchIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { cn } from "../../lib/utils";
import { Label } from "../label";

const inputVariants = cva(
  "flex h-9 w-full rounded-md border-2 border-stone-200 bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        search: "pr-8",
        error: "pr-8 border-2 border-red-500",
        warn: "pr-8 border-2 border-orange-500",
        success: "pr-8 border-2 border-green-600",
      },
      size: {
        default: "h-8",
        sm: "h-8 text-[13px]",
        md: "h-10",
        lg: "h-11",
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

function inputHeightClass(
  size: VariantProps<typeof inputVariants>["size"],
  variant?: VariantProps<typeof inputVariants>["variant"]
) {
  if (variant == "search") {
    return clsx({
      "right-2.5 top-[0.51rem]": size == "sm",
      "right-2.5 top-[0.5rem]": size == "default",
      "right-2.5 top-[0.75rem]": size == "md",
      "right-2.5 top-[0.78rem] w-5 h-5": size == "lg",
    });
  }
  return clsx({
    "right-2 top-1.5": size == "sm",
    "right-2 top-[0.52rem]": size == "default",
    "right-2 top-[0.6rem]": size == "md",
    "right-2 top-2.5 h-6 w-6": size == "lg",
  });
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
      size = "default",
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <Label className="text-abb-grey-90 pl-0.5" htmlFor={id}>
            {label}{" "}
            {required && (
              <span
                className={cn(
                  "text-destructive text-sm",
                  !required && "opacity-0"
                )}
              >
                *
              </span>
            )}
          </Label>
        )}
        <div className="relative">
          {variant == "error" && showIcons && (
            <AlertCircleIcon
              className={cn(
                "absolute w-5 h-5 text-white fill-destructive",
                inputHeightClass(size)
              )}
            />
          )}
          {variant == "search" && showIcons && (
            <SearchIcon
              className={cn(
                "absolute w-4 h-4 text-muted-foreground text-stone-500",
                inputHeightClass(size, variant)
              )}
            />
          )}
          {variant == "success" && showIcons && (
            <CircleCheck
              className={cn(
                "absolute w-5 h-5 text-white fill-green-600",
                inputHeightClass(size)
              )}
            />
          )}
          {variant == "warn" && showIcons && (
            <AlertCircleIcon
              className={cn(
                "absolute w-5 h-5 text-white fill-orange-500",
                inputHeightClass(size)
              )}
            />
          )}
          <input
            id={id}
            required={required}
            type={type}
            className={cn(
              inputVariants({ variant, className, size }),
              disabled && "bg-stone-200 !border-stone-300"
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
              variant == "error" && "text-destructive",
              variant == "success" && "text-green-600",
              variant == "warn" && "text-orange-500"
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
