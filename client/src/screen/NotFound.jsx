import React from 'react'
import Logo from '../assets/noData.png'
export default function NotFound() {
	return (
		<div className="h-screen w-screen bg-yellow-400 flex flex-col justify-center items-center">
			<img src={Logo} className="w-1/6 animate-pulse" alt="" />
			<h1 className="bg-gray-600 text-white text-xl rounded-lg p-1">
				404 Not Found
			</h1>
		</div>
	)
}
