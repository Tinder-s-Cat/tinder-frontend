import React from 'react'

export default function CatCard({ status }) {
	return (
		<div className="group z-1 transition duration-500 ease-in-out transform hover:scale-110 w-1/2 md:w-1/3 h-2/3 p-2 relative">
			{status ? (
				<h1 className="absolute bg-green-500 hover:bg-green-600 px-2 py-1 top-5 left-4 text-sm text-white font-semibold cursor-pointer">
					active
				</h1>
			) : (
				<h1 className="absolute bg-yellow-500 hover:bg-yellow-600 px-2 py-1 top-5 left-4 text-sm text-white font-semibold cursor-pointer">
					inactive
				</h1>
			)}
			<img
				className="object-fit w-full h-full"
				src="https://i.imgur.com/AD3MbBi.jpg"
				alt=""
			/>
		</div>
	)
}
