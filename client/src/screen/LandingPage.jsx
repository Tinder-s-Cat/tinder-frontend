import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/tindercat.png'
export default function LandingPage() {
	return (
		<div className="background-cat w-screen h-screen">
			<div className="h-1/6 flex">
				<img src={Logo} alt="LogoCat" />
			</div>
			<div className="h-5/6 flex flex-row justify-center items-center">
				<div className="-mt-10">
					<h1 className="text-6xl text-white">"Find Your Cat Lover"</h1>
					<Link to="/login">
						<button className="bg-red-600 hover:bg-red-800 font-bold py-3 px-7 rounded-3xl text-white m-5">
							Login
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
