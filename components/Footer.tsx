import React from 'react'

interface FooterElement {
	title: string
	links: Array<{
		name: string
		link: string
	}>
}

interface FooterProps {
	footerElements: FooterElement[]
}

const Footer: React.FC<FooterProps> = ({ footerElements }) => {
	return (
		<footer className='bg-gray-100'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-14 px-16 py-10'>
				{footerElements.map(element => (
					<div>
						<h5 className='uppercase font-semibold text-gray-900'>
							{element.title}
						</h5>
						{element.links.map(link => (
							<p className='text-xs text-gray-700 my-3'>
								<a href={link.link}>{link.name}</a>
							</p>
						))}
					</div>
				))}
			</div>
		</footer>
	)
}

export default Footer
