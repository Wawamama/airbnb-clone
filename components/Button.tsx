import React from 'react'

interface ButtonProps {
	title: string
	onClick: () => void
	bgColor?: string
	txColor?: string
	rounded?: boolean
}

const Button: React.FC<ButtonProps> = ({
	title,
	onClick,
	bgColor = 'bg-red-400',
	txColor = 'text-white',
	rounded = false,
}) => {
	return (
		<button
			onClick={onClick}
			className={`${
				rounded && 'rounded-full'
			} px-2 py-1 text-sm flex-grow ${bgColor} ${txColor}`}
		>
			{title}
		</button>
	)
}

export default Button
