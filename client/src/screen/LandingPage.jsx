import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/catinder-03.png'
export default function LandingPage() {
	return (
		<div className="background-cat w-screen h-screen">
			<div className="h-1/6 flex">
				
			</div>
			<div className="h-5/6 flex flex-row justify-center items-center">
				<div className=" -mt-80">
				<img className=" mx-auto w-5/6" src={Logo} alt="LogoCat" />
					<h1 className="text-6xl text-white">"Find Your Cat Lover"</h1>
					<Link to="/login">
						<button className=" bg-yellow-500 hover:bg-yellow-600 font-bold py-3 px-7 rounded-2xl w-32 text-white m-5">
							Let's Go
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
