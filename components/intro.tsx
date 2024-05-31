"use client"

import { motion } from "framer-motion"

export const Intro = () => {
	return (
		<motion.section
			className='my-20 text-center  lg:text-left'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<p className='text-lg tracking-wider text-primary'>
				Hi! I am a skilled Front-End Developer with{" "}
				<strong>4+ years of experience</strong> in crafting modern, user-centric
				web applications using <strong>React</strong>. Led a high performing
				team of 3 members, transforming the UI and updating all core tech stacks
				for optimal performance.
			</p>
			<div className='flex mt-20 gap-3 text-secondary text-base md:gap-10'>
				<span className='flex-1'>
					Delivering iterative improvements and features, fueling continuous
					progress.
				</span>
				<span className='flex-1'>{`Leveraging React's capabilities to craft immersive applications, pushing the boundaries of frontend development.`}</span>
			</div>
		</motion.section>
	)
}
