import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/catinder-03.png'
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
						<button className="bg-red-600 hover:bg-red-800 font-bold py-3 px-7 rounded-2xl w-24 text-white m-5">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
