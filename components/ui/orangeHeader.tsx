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
				"text-2xl text-center font-bold tracking-wide flex flex-col basis-full text-accent md:text-5xl lg:basis-auto lg:text-left",
				className
			)}
		>
			{children}
		</div>
	)
}
