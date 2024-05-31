"use client"

import Link from "next/link"
import { FadedHeader } from "../ui/fadedHeader"
import {
	CheckCircledIcon,
	TwitterLogoIcon,
	GitHubLogoIcon,
	LinkedInLogoIcon,
} from "@radix-ui/react-icons"
import { sendEmail } from "@/actions/sendEmail"
import { useRef, useState } from "react"
import { ContactForm } from "./contactForm"
import { ErrorResponse } from "resend"
import { SECTION_IDS } from "@/constants/common"

export const ContactMe = () => {
	const [error, setError] = useState<string | ErrorResponse | null>(null)
	const [showSVG, setShowSVG] = useState(false)

	const ref = useRef<HTMLFormElement>(null)

	const sendFormData = async (formData: FormData) => {
		setError(null)

		const { error } = await sendEmail(formData)
		ref.current?.reset()

		if (!!error) {
			setError(error)
		}
		setShowSVG(true)
		setTimeout(() => {
			setShowSVG(false)
		}, 2000)
	}

	return (
		<section
			className='my-20 text-center lg:text-left'
			id={SECTION_IDS.contact.value}
		>
			<FadedHeader
				text='Contact Me'
				className='text-[clamp(3rem,_14vw,_10.625rem)]'
			/>
			<div>
				<h3 className='text-lg font-semibold text-primary '>
					Have a question or need assistance?
				</h3>
				<Link
					href='mailto:arindam.webdeveloper@gmail.com'
					className='text-accent underline cursor-pointer'
				>
					Do reach out
				</Link>
				<div className='flex gap-4 text-secondary flex-col items-center lg:flex-row mt-10'>
					<div>
						<ul className='font-semibold'>
							<li className='flex items-center gap-2 py-2'>
								<CheckCircledIcon
									width={20}
									height={20}
									className='text-secondary w-5 h-5 '
								/>
								Tailored Solutions Just for You
							</li>
							<li className='flex items-center gap-2 py-2'>
								<CheckCircledIcon
									width={20}
									height={20}
									className='text-secondary w-5 h-5 '
								/>
								Seamless Communication Throughout
							</li>
							<li className='flex items-center gap-2 py-2'>
								<CheckCircledIcon
									width={20}
									height={20}
									className='text-secondary w-5 h-5 '
								/>
								Attention to Detail in Every Step
							</li>
						</ul>
						<div className='flex gap-4 my-4 text-primary'>
							<Link
								href='https://x.com/arindam_404'
								target='_blank'
								aria-label='Twitter'
							>
								<TwitterLogoIcon
									width={30}
									height={30}
									className='hover:scale-110 hover:transition-transform'
								/>
							</Link>
							<Link
								href='https://github.com/arindam1997007'
								target='_blank'
								aria-label='GitHub'
							>
								<GitHubLogoIcon
									width={30}
									height={30}
									className='hover:scale-110 hover:transition-transform'
								/>
							</Link>
							<Link
								href='https://www.linkedin.com/in/arindam404/'
								target='_blank'
								aria-label='LinkedIn'
							>
								<LinkedInLogoIcon
									width={30}
									height={30}
									className='hover:scale-110 hover:transition-transform'
								/>
							</Link>
						</div>
					</div>
					<form
						ref={ref}
						action={sendFormData}
						className='css-email grid grid-cols-2 gap-4 bg-white/5 border border-primary/50 rounded-md px-4 py-4 backdrop-blur-xl'
					>
						<ContactForm error={error} showSVG={showSVG} />
					</form>
				</div>
			</div>
		</section>
	)
}
