"use client"
import Image from "next/image"
import Link from "next/link"
import { ProjectInterface } from "@/constants/project"
import { useState } from "react"
import { cn, formatStartEndDate } from "@/lib/utils"
import { motion } from "framer-motion"

import "./projectItem.css"

export const ProjectItem = ({
	project,
	index,
}: {
	project: ProjectInterface
	index: number
}) => {
	const [isFlipped, setIsFlipped] = useState(false)

	const getIndexBasedClassName = (type: string) => {
		switch (type) {
			case "animateRotate":
				if (index % 2 === 0) return isFlipped ? "180deg" : "360deg"
				else return isFlipped ? "-180deg" : "-360deg"
			default:
				return
		}
	}

	return (
		<div className={cn("css-project-div")}>
			<div className={cn("text-lg font-bold text-center z-10 lg:text-left")}>
				<Link
					className='css-project--name text-accent'
					href={project.href}
					target='_blank'
				>
					{project.name}
				</Link>
				<p className='css-project--date text-base'>
					{formatStartEndDate(project)}
				</p>
			</div>
			<div className={cn("css-card w-full aspect-[673/403]")}>
				<motion.div
					className='css-card-container relative h-full'
					animate={{ rotateY: getIndexBasedClassName("animateRotate") }}
					transition={{ ease: "linear" }}
				>
					<div className='css-card-front absolute inset-0'>
						<Image
							src={project.backgroundImage}
							alt={project.name}
							className='rounded-md opacity-60 cursor-pointer h-full object-cover'
							onClick={() => setIsFlipped(!isFlipped)}
						/>
						<span className='absolute bottom-1 left-1/2 -translate-x-1/2 font-semibold'>
							Tap to reveal!
						</span>
					</div>

					<motion.div
						className='css-card-back absolute inset-0 flex flex-col justify-center bg-gradient-to-b from-black to-transparent  cursor-pointer text-[8px] rounded-md p-4 min-[400px]:text-xs sm:p-10 sm:text-base '
						onClick={() => setIsFlipped(!isFlipped)}
					>
						<ul className='list-disc '>
							{project.description.map((desc, index) => {
								return (
									<li key={index} className='min-[400px]:pb-2'>
										{desc}
									</li>
								)
							})}
						</ul>
						<div className='flex flex-wrap gap-2 mt-2 sm:gap-4 '>
							{project.skills.map(skill => {
								return (
									<span
										key={skill}
										className='border-accent py-1 text-accent tracking-wide font-medium text-[8px] min-[400px]:text-xs sm:text-base'
									>
										{skill}
									</span>
								)
							})}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}
