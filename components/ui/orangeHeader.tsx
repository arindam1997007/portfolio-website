import { cn } from "@/lib/utils"

export const OrangeHeader = ({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) => {
	return (
		<div
			className={cn(
				" text-accent text-center font-bold tracking-wide flex flex-col basis-full lg:basis-auto text-xl lg:text-left",
				className
			)}
		>
			{children}
		</div>
	)
}
