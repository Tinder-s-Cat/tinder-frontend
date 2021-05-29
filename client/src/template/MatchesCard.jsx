import React from 'react'

export default function MatchesCard() {
	return (
		<div
			className="w-full border-gray-100 border-b-2 px-8 py-2 hover:bg-gray-100"
			style={{ height: '12%' }}
		>
			<div className="h-full flex justify-start items-center">
				<div className="w-3/12">
					<div className="w-12 h-12">
						<img
							className="rounded-full object-fill w-full h-full cursor-pointer"
							src="https://i.imgur.com/657wEgh.jpg"
							alt="profile picture"
						/>
					</div>
				</div>
				<div className="w-9/12">
					<h1 className="text-left text-black font-sm text-lg">Ferguso</h1>
				</div>
			</div>
		</div>
	)
}
