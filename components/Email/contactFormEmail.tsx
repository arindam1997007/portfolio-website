import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Link,
	Text,
	Hr,
	Tailwind,
} from "@react-email/components"

interface ContactFormEmail {
	name: string
	email: string
	messageLines: string[]
}

export const ContactFormEmail: React.FC<ContactFormEmail> = ({
	name,
	messageLines,
	email,
}) => (
	<Tailwind>
		<Html>
			<Head />
			<Preview>{name} has contacted you from your portfolio website</Preview>
			<Body className='bg-slate-300 my-0 mx-auto'>
				<Container className='p-6 text-primary'>
					<Heading className='text-xl leading-none tracking-wide'>
						You have been reached out by {name}
					</Heading>
					{messageLines.map((message, index) => (
						<Text className='leading-normal' key={index}>
							{message}
						</Text>
					))}
					<Hr style={{ borderColor: "#B2A4E0" }} />
					<Text>
						<strong>Receipent EmailID</strong> : <Link>{email}</Link>
					</Text>
				</Container>
			</Body>
		</Html>
	</Tailwind>
)
