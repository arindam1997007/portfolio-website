"use client"
import { ProjectList } from "@/constants/project"
import { ProjectItem } from "./ProjectItem/projectItem"
import React from "react"
import { ArrowSVG } from "../SVG/arrow"
import { OrangeHeader } from "../ui/orangeHeader"
import { SECTION_IDS } from "@/constants/common"

export const Projects = () => {
	return (
		<section id={SECTION_IDS.project.value} className='scroll-m-8'>
			<OrangeHeader>
				<h2>Projects</h2>
			</OrangeHeader>
			<div className=' mt-5 md:'>
				{ProjectList.map((project, index) => {
					return (
						<React.Fragment key={project.id}>
							<ProjectItem project={project} index={index} />
							{index < ProjectList.length - 1 && (
								<ArrowSVG className='rotate-45 sm:h-[250px] sm:w-[200px] md:h-[350px] md:w-[300px]' />
							)}
						</React.Fragment>
					)
				})}
			</div>
		</section>
	)
}
