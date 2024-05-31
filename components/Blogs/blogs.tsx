import Link from "next/link"
import { Button } from "../ui/Button/button"
import { OrangeHeader } from "../ui/orangeHeader"
import { BlogItem } from "./BlogItem/blogItem"
import { SECTION_IDS } from "@/constants/common"

export interface BlogInterface {
	id: number
	social_image: string
	title: string
	description: string
	url: string
}

export default async function Blogs() {
	const blogData = await fetch(
		"https://dev.to/api/articles?username=arindam1997007"
	)
	const blogResponse = await blogData.json()

	return (
		<section className='my-20 scroll-m-8' id={SECTION_IDS.blog.value}>
			<OrangeHeader className='mb-10'>
				<h2>Blogs</h2>
			</OrangeHeader>
			<div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
				<Button className='my-5 order-last lg:order-first' tabIndex='-1'>
					<Link href='https://dev.to/arindam1997007' target='_blank'>
						See All
					</Link>
				</Button>
				{blogResponse.slice(0, 3).map((blog: BlogInterface) => {
					return <BlogItem blog={blog} key={blog.id} />
				})}
			</div>
		</section>
	)
}
