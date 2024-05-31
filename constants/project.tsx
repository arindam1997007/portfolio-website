import { StaticImageData } from "next/image"

import lanzeMockup from "@/public/images/Lanze-Mockup.jpg"
import infatuationMockup from "@/public/images/Infatuation-Mockup.jpg"

export interface ProjectInterface {
	id: number
	name: string
	startDate: Date
	endDate: Date | null
	description: string[]
	backgroundImage: StaticImageData
	href: string
	skills: string[]
}

export const ProjectList: ProjectInterface[] = [
	{
		id: 1,
		name: "Lanze",
		startDate: new Date(2023, 6),
		endDate: new Date(2023, 8),
		description: [
			"Created various pages and seamlessly integrated it with the necessary APIs. Additionally, created custom hooks for code reusability. ",
			"Integrated crucial packages like wagmi and @web3modal/react. ",
			"Designed various custom components that can be reused throughout the application. a Connect Wallet Modal component. Furthermore, I fortified the application's security by restricting protected pages if invalid cookie is present.",
		],
		backgroundImage: lanzeMockup,
		href: "https://lanze.org/",
		skills: ["NextJS", "SCSS", "Typescript"],
	},
	{
		id: 2,
		name: "Bohemian",
		startDate: new Date(2022, 5),
		endDate: new Date(2022, 7),
		description: [
			"Used Firebase for Authentication and Authorization.",
			"Used Cloud Firestore for DB and integrated it with Cloud Functions.",
			"Integrated Stripe with Firebase such that payment can be done.",
			"Used React and Chakra UI with custom global designs to create a responsive UI.",
			"Features included Adding products (admin only), Searching, Filtering, Sorting, and Buying products from the store.",
		],
		backgroundImage: infatuationMockup,
		href: "https://infatuation-c13ec.web.app/",
		skills: ["ReactJS", "Zustand", "Firebase", "Chakra UI"],
	},
]
