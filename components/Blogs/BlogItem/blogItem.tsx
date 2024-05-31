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
				className='rounded-md opacity-80'
			/>
			<h3 className='text-lg font-semibold my-3'>{blog.title}</h3>
			<p className='text-secondary text-base'>{blog.description}</p>
			<Link
				href={blog.url}
				target='_blank'
				className='text-accent inline-block lg:mt-4'
			>
				Read More..
			</Link>
		</article>
	)
}
