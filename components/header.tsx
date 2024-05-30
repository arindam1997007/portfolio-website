"use client"
import Image from "next/image"
import profilePic from "@/public/images/profilePic.png"
import { motion } from "framer-motion"
import { OrangeHeader } from "./ui/orangeHeader"
import { SECTION_IDS } from "@/constants/common"

const wavingAnimation = {
	rotate: [0, -20, 20, -10, 10, 0],
	transition: { duration: 1.5, delay: 0.7 },
}

export const Header = () => {
	return (
		<header
			className='flex relative gap-3 justify-between  items-center flex-wrap-reverse lg:flex-nowrap scroll-m-80'
			id={SECTION_IDS.home.value}
		>
			<OrangeHeader>
				<motion.h1
					initial={{ y: -300 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.2 }}
				>
					Arindam Chowdhury
				</motion.h1>
				<motion.h2
					initial={{ y: -300 }}
					animate={{ y: 0 }}
					transition={{ delay: 0.3 }}
					className='opacity-80'
				>
					Coding one pixel at a time.
				</motion.h2>
			</OrangeHeader>
			<motion.div
				className='relative mx-auto'
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
			>
				<Image
					className='w-[100px] h-[100px] max-w-fit rounded-full border-2 border-sky-200 relative md:w-[200px] md:h-[200px] lg:mr-0'
					src={profilePic}
					alt='profile picture'
					quality={100}
					priority
				/>
				<motion.span
					className='text-xl absolute bottom-0 right-[8%] origin-bottom-right md:text-2xl md:bottom-[9%]'
					animate={wavingAnimation}
					whileHover={wavingAnimation}
				>
					👋
				</motion.span>
			</motion.div>
		</header>
	)
}
