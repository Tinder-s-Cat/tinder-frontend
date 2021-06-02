import React from 'react'
import './Component.css'

export default function Cards(cat) {
	return (
		<div className="w-full h-5/6 group transition duration-500 ease-in-out transform hover:scale-110 hover:flex-grow shadow-xl">
			<div
				className="card"
				style={{ backgroundImage: `url(${cat.cat.profilePicture})` }}
			>
				<div className="absolute opacity-0 py-2 px-5 group-hover:opacity-100 w-full left-0 right-0 bottom-0 h-2/6 bg-white overflow-y-auto bg-opacity-75 rounded-xl">
					<p className="card-name">
						{cat.cat.name} ({cat.cat.race})
					</p>
					<span className="card-gender text-left font-medium capitalize text-lg">{cat.cat.gender},  {cat.cat.age} months</span>
					<h3 className="flex flex-row flex-wrap space-x-1 font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-red-500 float-left"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								clip-rule="evenodd"
							/>
						</svg>
						{cat.cat.User.location}
					</h3>
					<div className="flex flex-row flex-wrap space-x-1 font-medium">
						<h1 className="py-28">Description: </h1>
					</div>
					<span className="card-desc text-yellow-600 bg-yellow-200 rounded-xl">{cat.cat.description} </span>
				</div>
			</div>
		</div>
	)
}
