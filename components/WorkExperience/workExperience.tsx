"use client"
import { workExperiences } from "@/constants/work"
import downloadIcon from "@/public/svg/download.svg"
import { OrangeHeader } from "../ui/orangeHeader"
import Image from "next/image"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { formatStartEndDate } from "@/lib/utils"
import { SECTION_IDS } from "@/constants/common"

export const WorkExperience = () => {
	return (
		<section className='my-20 scroll-m-8' id={SECTION_IDS.work.value}>
			<div className='flex flex-wrap lg:flex-nowrap lg:mb-24'>
				<div>
					<OrangeHeader>
						<h2>Work Experience</h2>
					</OrangeHeader>
					<p className='text-lg tracking-[0.09em] mt-6 text-center md:text-2xl lg:text-left '>
						Delivering Innovation, Design Consistency, and Superior UI
						Engineering Expertise.
					</p>
				</div>
				<Link
					href="/pdf/Arindam's Resume.pdf"
					target='_blank'
					className='cursor-pointer flex flex-col items-center ml-auto hover:text-accent h-fit mt-12 lg:mt-0'
				>
					<Image
						src={downloadIcon}
						alt='download'
						priority
						className='w-8 h-8 hidden md:w-6 md:h-6 md:block'
					/>
					<span className='text-sm whitespace-nowrap text-accent md:focus:text-accent'>
						Download Résumé
					</span>
				</Link>
			</div>
			<div className='flex'>
				<div className='w-full'>
					<Accordion
						type='single'
						collapsible
						className='w-full'
						defaultValue={workExperiences[0].id.toString()}
					>
						{workExperiences.map(work => {
							return (
								<AccordionItem key={work.id} value={work.id.toString()}>
									<AccordionTrigger className='pl-4'>
										<Image
											src={work.logo}
											alt={work.companyName}
											width={170}
											height={50}
											className='h-auto'
										/>
										<span className='whitespace-nowrap text-secondary ml-auto mr-3 relative top-[1px]'>
											{formatStartEndDate(work)}
										</span>
									</AccordionTrigger>
									<AccordionContent>
										<p className='text-secondary pl-4 mb-3'>
											{work.role} @{" "}
											<Link
												href={work.href}
												target='_blank'
												className='underline'
											>
												{work.companyName}
											</Link>
										</p>
										<ul className='list-disc  pl-4'>
											{work.description.map((desc, index) => {
												return <li key={index}>{desc}</li>
											})}
										</ul>
										<div className='flex flex-wrap gap-2 mt-2 pl-4'>
											{work.skills.map(skill => {
												return (
													<span
														key={skill}
														className=' border-accent py-1 text-accent text-sm tracking-wide font-medium'
													>
														{skill}
													</span>
												)
											})}
										</div>
									</AccordionContent>
								</AccordionItem>
							)
						})}
					</Accordion>
				</div>
			</div>
		</section>
	)
}
