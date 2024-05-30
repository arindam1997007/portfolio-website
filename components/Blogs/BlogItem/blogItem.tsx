import Image from "next/image"
import { BlogInterface } from "../blogs"
import Link from "next/link"

export const BlogItem = ({ blog }: { blog: BlogInterface }) => {
	return (
		<article className='row-span-2'>
			<Image
				src={blog.social_image}
				width='1000'
				height='500'
				alt='Blog Image'
				className='rounded-md'
			/>
			<h3 className='text-xl font-semibold my-3 lg:text-3xl'>{blog.title}</h3>
			<p className='text-secondary'>{blog.description}</p>
			<Link
				href={blog.url}
				target='_blank'
				className='text-accent mt-4 inline-block'
			>
				Read More..
			</Link>
		</article>
	)
}
