"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/shadcn/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "before:top-0 data-[side=left]:slide-in-from-right-2 data-[side=top]:slide-in-from-bottom-2 before:left-0 before:z-[51] before:absolute bg-popover before:bg-white dark:before:bg-black data-[side=bottom]:slide-in-from-top-2 data-[side=right]:slide-in-from-left-2 before:bg-opacity-70 dark:before:bg-opacity-70 shadow-md before:[-webkit-backdrop-filter:blur(12px)] before:backdrop-blur-md p-4 border before:border before:border-neutral-400 before:dark:border-neutral-700 dark:border-neutral-700 rounded-md before:rounded-md outline-none w-64 before:w-full before:h-full text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
