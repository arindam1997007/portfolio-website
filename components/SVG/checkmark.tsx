"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface CheckmarkProps {
	className?: string
	isAnimate: boolean
}

export const CheckmarkSVG = ({ className, isAnimate }: CheckmarkProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={cn(
				"h-6 w-6 m-auto text-emerald-600 md:h-10 md:w-10",
				className
			)}
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
		>
			{isAnimate ? (
				<motion.path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					d='M4.5 12.75l6 6 9-13.5'
				/>
			) : (
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='M4.5 12.75l6 6 9-13.5'
				/>
			)}
		</svg>
	)
}
