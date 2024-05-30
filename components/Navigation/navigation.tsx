"use client"

import Image from "next/image"
import contactImg from "@/public/images/contact_big.png"
import homeImg from "@/public/images/home_big.png"
import projectImg from "@/public/images/project_big.png"
import workImg from "@/public/images/work_big.png"
import blogImg from "@/public/images/blog_big.png"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { SECTION_IDS } from "@/constants/common"

const defaultState = {
	[SECTION_IDS.home.value]: false,
	[SECTION_IDS.work.value]: false,
	[SECTION_IDS.project.value]: false,
	[SECTION_IDS.blog.value]: false,
	[SECTION_IDS.contact.value]: false,
}

export const Navigation = () => {
	const [active, setActive] = useState(defaultState)

	useEffect(() => {
		let options = {
			threshold: 0.2,
		}

		let observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setActive(() => ({ ...defaultState, [entry.target.id]: true }))
				}
			})
		}, options)

		Object.values(SECTION_IDS).forEach(item => {
			observer.observe(document.querySelector(item.id) as Element)
		})
	}, [])

	return (
		<nav className='fixed bottom-0 left-1/2 -translate-x-1/2 flex gap-9 px-3 py-2 bg-white/10 backdrop-blur-sm z-20 shadow-sm shadow-primary/80 w-full justify-evenly md:w-fit md:bottom-3 md:rounded-xl'>
			<Link href={SECTION_IDS.home.id}>
				<Image
					src={homeImg}
					alt='home'
					className={cn(
						"cursor-pointer h-10 w-10 md:h-12 md:w-12",
						!active.home && "opacity-50"
					)}
					quality={9}
				/>
			</Link>
			<Link href={SECTION_IDS.work.id}>
				<Image
					src={workImg}
					alt='work'
					className={cn(
						"cursor-pointer h-10 w-10 md:h-12 md:w-12",
						!active.work && "opacity-50"
					)}
					quality={9}
				/>
			</Link>
			<Link href={SECTION_IDS.project.id}>
				<Image
					src={projectImg}
					alt='project'
					className={cn(
						"cursor-pointer h-10 w-10 md:h-12 md:w-12",
						!active.project && "opacity-50"
					)}
					quality={9}
				/>
			</Link>
			<Link href={SECTION_IDS.blog.id}>
				<Image
					src={blogImg}
					alt='blog'
					className={cn(
						"cursor-pointer h-10 w-10 md:h-12 md:w-12",
						!active.blog && "opacity-50"
					)}
					quality={9}
				/>
			</Link>
			<Link href={SECTION_IDS.contact.id}>
				<Image
					src={contactImg}
					alt='contact'
					className={cn(
						"cursor-pointer h-10 w-10 md:h-12 md:w-12",
						!active.contact && "opacity-50"
					)}
					quality={9}
				/>
			</Link>
		</nav>
	)
}
