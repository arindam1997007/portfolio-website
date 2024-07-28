import { StaticImageData } from "next/image"
import tcsLogo from "@/public/images/tcs-logo.svg"
import mediaNetLogo from "@/public/images/media-net-logo.svg"
import greneRoboticsLogo from "@/public/images/grene-robotics-logo.webp"
import highRadiusLogo from "@/public/images/highradius-logo.svg"

export interface WorkExperienceInterface {
	id: number
	companyName: string
	role?: string
	description: string[]
	startDate: Date
	endDate: Date | null
	skills: string[]
	logo: string | StaticImageData
	href: string
}

export const workExperiences: WorkExperienceInterface[] = [
	{
		id: 1,
		companyName: "Media.Net",
		role: "Senior Web Application Developer",
		description: [
			"Contributed to over 50 components as part of sprint requirements, ensuring code reusability and creating custom hooks for the separation of business logic while achieving pixel-perfect UI designs.",
			"Optimized performance in two different components, reducing re-rendering time from approximately 4 seconds to 500 milliseconds.",
			"Utilized ImmutableJS in the Redux store to minimize bugs during data mutations.",
			"Implemented complex UI designs, with the help of SASS and Styled-Components.",
			"Participated in code reviews for senior developers, identifying inaccuracies and suggesting optimizations.",
			"Replaced useContext with react-redux, optimizing rendering efficiency by reducing unnecessary re-renders by approximately 50%.",
		],
		startDate: new Date(2023, 10),
		endDate: new Date(2024, 7),
		skills: [
			"ReactJS",
			"Redux.js",
			"SASS",
			"Typescript",
			"Styled-Components",
			"Javascript",
		],
		logo: mediaNetLogo,
		href: "https://www.media.net/",
	},
	{
		id: 2,
		companyName: "Grene Robotics",
		role: "Web Developer",
		description: [
			"Led a 9-month UI redesign project, upgrading React to version 18 and transitioning from CRA to Webpack, resulting in a 10% performance improvement and enhanced development efficiency.",
			"Included GZip compression to compress JS and CSS files from server to client by over 500%.",
			"Successfully implemented an Electron application with React 18, leveraging the power of web sockets for real time data updates.",
			"Utilized Electron.js and integrated SQLite as a local database, reducing data fetching time from 1 second to mere milliseconds, resulting in a substantial performance boost using nodejs.",
			"In nodejs for the backend of our desktop application, created RTSP stream instances to convert RTSP videos to MPEG format and sent them using web sockets to the React application.",
			"Integrated Mapbox GL, providing an interactive map with features like zooming, panning, and markers. Integrated Mapbox's diverse map layers and styles, including dark mode, light mode, and satellite view.",
		],
		endDate: new Date(2023, 9),
		startDate: new Date(2021, 10),
		skills: [
			"ReactJS",
			"Electron.js",
			"NodeJS",
			"Redux.js",
			"Chakra-UI",
			"Mapbox GL",
			"Javascript",
		],
		logo: greneRoboticsLogo,
		href: "https://grenerobotics.com/",
	},
	{
		id: 3,
		companyName: "HighRadius",
		role: "Associate Technical Consultant-II",
		description: [
			"Used JAVA, Spring, Hibernate to process the data between the back-end and UI, and REST API to transfer data between endpoints.",
			"Contributed significantly to the development of an API for the payments team, ensuring seamless data transfer of successful transactions. This enhancement increased efficiency in handling transactions and provided real-time insights to the payments team, resulting in a 25% reduction in transaction processing time.",
		],
		endDate: new Date(2021, 8),
		startDate: new Date(2021, 4),
		skills: ["JAVA v8", "Spring", "Hibernate"],
		logo: highRadiusLogo,
		href: "https://www.highradius.com/",
	},
	{
		id: 4,
		companyName: "Tata Consultancy Services",
		role: "System Engineer",
		description: [
			"Created numerous script to enhance and automated daily tasks by 40% using Bash and Python",
			"Monitored daily activities and solved disputes of the clients",
			"Ensured client satisfaction with follow up mails.",
		],
		endDate: new Date(2021, 3),
		startDate: new Date(2018, 7),
		skills: ["Bash", "Python"],
		logo: tcsLogo,
		href: "https://www.tcs.com/",
	},
]
