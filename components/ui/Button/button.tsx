import { cn } from "@/lib/utils"

export const Button = ({
	children,
	className,
	onClick,
	...rest
}: {
	children: React.ReactNode
	className?: string
	onClick?: () => void
	[rest: string]: any
}) => {
	return (
		<button
			className={cn(
				"relative w-fit px-3 py-1 overflow-hidden border-2 border-accent text-accent rounded-full  before:w-full before:h-full before:absolute before:top-0 before:-left-full before:bg-accent/70 before:transition-all before:duration-500 before:-skew-x-[45deg] active:before:left-full hover:before:left-full focus-visible:border-white text-base font-semibold lg:px-6 lg:py-3",
				className
			)}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	)
}
