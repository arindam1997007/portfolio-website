import Blogs from "@/components/Blogs/blogs"
import { ContactMe } from "@/components/ContactMe/contactMe"
import { Footer } from "@/components/Footer/footer"
import { Navigation } from "@/components/Navigation/navigation"
import { Projects } from "@/components/Projects/projects"
import { WorkExperience } from "@/components/WorkExperience/workExperience"
import { Intro } from "@/components/intro"

export default function Home() {
	return (
		<main className=''>
			<Intro />
			<Navigation />
			<WorkExperience />
			<Projects />
			<Blogs />
			<ContactMe />

			<Footer />
		</main>
	)
}
