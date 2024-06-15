import { cn } from "@/lib/utils"

export const FadedHeader = ({
	text,
	className,
}: {
	text: string
	className?: string
}) => {
	return (
		<div className={cn("relative text-[14vw] min-h-[0.6lh]", className)}>
			<h2
				className={cn(
					"absolute -z-10 bg-gradient-to-b from-accent/55 to-background to-80% bg-clip-text text-transparent text-center w-full"
				)}
			>
				{text}
			</h2>
		</div>
	)
}
