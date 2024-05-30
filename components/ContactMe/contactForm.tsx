import { cn } from "@/lib/utils"
import { CheckmarkSVG } from "../SVG/checkmark"
import { CrossSVG } from "../SVG/cross"
import { useFormStatus } from "react-dom"
import { PulseLoader } from "../ui/PulseLoader/pulseLoader"
import { ErrorResponse } from "resend"

export const ContactForm = ({
	error,
	showSVG,
}: {
	error: string | ErrorResponse | null
	showSVG: boolean
}) => {
	const { pending } = useFormStatus()

	const renderButtonContent = () => {
		if (showSVG) {
			if (!!error) return <CrossSVG isAnimate />

			return <CheckmarkSVG isAnimate />
		} else if (pending) {
			return <PulseLoader />
		} else {
			return "SUBMIT"
		}
	}

	const renderButtonBorder = () => {
		if (showSVG) {
			if (error) return "border-red-500"
			return "border-emerald-600"
		} else return "border-white/30 hover:border-white "
	}

	return (
		<>
			<input
				aria-label='Name'
				placeholder='Name'
				className='bg-slate-800	px-2 py-2 rounded-md placeholder:text-primary capitalize'
				name='name'
				required
			/>
			<input
				aria-label='Email Id'
				placeholder='Email'
				type='email'
				className='bg-slate-800	px-2 py-2 rounded-md placeholder:text-primary'
				name='email'
				required
			/>
			<textarea
				aria-label='Message'
				placeholder='Your message..'
				className='col-span-2 bg-slate-800	px-2 py-2 rounded-md placeholder:text-primary min-h-40 max-h-96 whitespace-pre-wrap'
				name='message'
				required
			/>
			<button
				className={cn(
					"col-span-2 px-2 py-2 rounded-full border-2 cursor-pointer text-white/70 font-semibold w-16 aspect-square justify-self-center hover:text-white text-xs md:text-base md:w-24",
					renderButtonBorder()
				)}
				disabled={pending}
			>
				{renderButtonContent()}
			</button>
			{error && (
				<span className='text-[10px] text-red-400 col-span-2'>
					{typeof error === "string" ? error : error.message}
				</span>
			)}
		</>
	)
}
