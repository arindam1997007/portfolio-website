"use client"
import { ProjectList } from "@/constants/project"
import { ProjectItem } from "./ProjectItem/projectItem"
import React from "react"
import { ArrowSVG } from "../SVG/arrow"
import { FadedHeader } from "../ui/fadedHeader"
import { SECTION_IDS } from "@/constants/common"

export const Projects = () => {
	return (
		<section
			id={SECTION_IDS.project.value}
			className='scroll-m-8 my-20 text-center lg:text-left'
		>
			<FadedHeader text={"Projects"} />

			<div>
				<h3 className='text-lg font-semibold text-primary mb-10'>
					Collaborations with Client
				</h3>
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
