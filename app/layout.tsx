import { League_Spartan } from "next/font/google"
import { Header } from "@/components/header"

import "./globals.css"
import "./layout.css"

const leagueSpartan = League_Spartan({ weight: ["400"], subsets: ["latin"] })
export const metadata = {
	title: "Arindam Chowdhury",
	description:
		"Arindam Chowdhury is a frontend developer with 4+ years of experience in React | Resume Portfolio website",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${leagueSpartan.className}  bg-background text-primary relative`}
			>
				<div className='css-background-gradient absolute top-10 h-[30vh] w-[80%] blur-[10rem] rounded-full left-[50%] translate-x-[-50%] -z-10' />
				<div className='mx-auto my-20 max-w-[100ch] px-3 sm:px-10'>
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
