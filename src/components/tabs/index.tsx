import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  listContentCustomProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(listVariants({ variant, className }))}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const listVariants = cva(
  "flex items-center justify-start rounded-md bg-muted text-muted-foreground",
  {
    variants: {
      variant: {
        main: "h-[32px] bg-white border-b-[1px] border-b-[#dfdfdf] rounded-none",
        side: "h-[40px] bg-white",
        subSide:
          "h-[32px] inline-flex items-center justify-around w-[100%] bg-[#f5f5f5] rounded-[5px]",
      },
    },
  }
);

export interface listContentCustomProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof listVariants> {}

const tabVariants = cva(
  "inline-flex items-center justify-center bg-dbdbdb px-[16px] py-[8px] whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground",
  {
    variants: {
      variant: {
        main: "data-[state=active]:border-t-[1px] data-[state=active]:border-l-[1px] data-[state=active]:border-r-[1px] bg-[#dbdbdb] data-[state=active]:border-t-[#0052ff] data-[state=active]:border-l-[#dfdfdf] data-[state=active]:border-r-[#dfdfdf] mx-[8px] data-[state=active]:border-l-[#dbdbdb] data-[state=active]:border-r-[#dbdbdb] rounded-[0px] h-[32px]",
        side: "data-[state=active]:border-b-[1px] data-[state=active]:border-b-[#0052ff] bg-white rounded-none",
        subSide:
          "bg-[#f5f5f5] h-[24px] w-[80%] mx-[4px] my-[4px] data-[state=active]:bg-[#d6def7] rounded-[5px]",
      },
    },
  }
);

export interface TabsContentCustomProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabVariants> {}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsContentCustomProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabVariants({ variant, className }))}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 pt-4",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
