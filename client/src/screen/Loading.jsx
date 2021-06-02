import React from 'react'
import Logo from '../assets/animasi-bergerak.gif'

export default function Loading() {
	return (
		<div className="h-screen w-screen bg-yellow-400 flex flex-col justify-center items-center">
			<img src={Logo} className="w-2/6" alt="" />
			<h1 className="bg-gray-600 text-white text-xl p-1 rounded-lg">
				Please Wait
			</h1>
		</div>
	)
}
