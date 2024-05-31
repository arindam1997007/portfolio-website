"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

import "./accordion.css"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn("border border-secondary/50 my-2 rounded-md p-2", className)}
		{...props}
	/>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className='flex'>
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				"css-primitive flex flex-1 items-center justify-between py-4 text-base font-medium ",
				className
			)}
			{...props}
		>
			{children}
			<MinusIcon className='css-minus h-4 w-4 shrink-0 text-accent  mr-2' />
			<PlusIcon className='css-plus h-4 w-4 shrink-0 text-accent  mr-2' />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className='overflow-hidden text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
		{...props}
	>
		<div className={cn("pb-4 pt-0", className)}>{children}</div>
	</AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
