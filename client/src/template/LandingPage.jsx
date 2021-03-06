import React from 'react'

export default function LandingPage() {
	return (
		<div className="background-cat w-screen h-screen">
			<div className="h-1/6 flex">
				<h1 className="text-4xl m-5 font-semibold text-white">Tinder Cat</h1>
			</div>
			<div className="h-5/6 flex flex-row justify-center items-center">
				<div className="-mt-10">
					<h1 className="text-6xl text-white">"Find Your Cat Lover"</h1>
					<button className="bg-red-600 hover:bg-red-800 font-bold py-3 px-7 rounded-3xl text-white m-5">
						Login
					</button>
				</div>
			</div>
		</div>
	)
}
