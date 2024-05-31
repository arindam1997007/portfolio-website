"use client"
import { ProjectList } from "@/constants/project"
import { ProjectItem } from "./ProjectItem/projectItem"
import React from "react"
import { ArrowSVG } from "../SVG/arrow"
import { OrangeHeader } from "../ui/orangeHeader"
import { SECTION_IDS } from "@/constants/common"

export const Projects = () => {
	return (
		<section id={SECTION_IDS.project.value} className='scroll-m-8 my-20'>
			<OrangeHeader className='mb-10'>
				<h2>Projects</h2>
			</OrangeHeader>
			<div className=' mt-5'>
				{ProjectList.map((project, index) => {
					return (
						<React.Fragment key={project.id}>
							<ProjectItem project={project} index={index} />
							{index < ProjectList.length - 1 && (
								<ArrowSVG className='rotate-45 md:h-[200px] md:w-[150px] lg:h-[250px] lg:w-[200px]' />
							)}
						</React.Fragment>
					)
				})}
			</div>
		</section>
	)
}
