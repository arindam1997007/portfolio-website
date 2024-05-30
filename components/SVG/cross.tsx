"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface CrossProps {
	className?: string
	isAnimate: boolean
}

const shakeAnimation = {
	x: [0, -5, 5, -5, 0],
	transition: {
		duration: 0.25,
		ease: "easeInOut",
		times: [0, 0.05, 0.1, 0.15, 0.2, 0.25],
	},
}

export const CrossSVG = ({ className, isAnimate }: CrossProps) => {
	return (
		<>
			{isAnimate ? (
				<motion.svg
					className={cn("h-6 w-6 m-auto text-red-500 md:h-8 md:w-8", className)}
					viewBox='0 0 65 65'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					stroke='currentColor'
					animate={shakeAnimation}
				>
					<path d='M1 1L64 64M64 1L1 64' strokeWidth='3' />
				</motion.svg>
			) : (
				<svg
					className={cn("h-6 w-6 m-auto text-red-500 md:h-8 md:w-8", className)}
					viewBox='0 0 65 65'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					stroke='currentColor'
				>
					<path d='M1 1L64 64M64 1L1 64' strokeWidth='3' />
				</svg>
			)}
		</>
	)
}
