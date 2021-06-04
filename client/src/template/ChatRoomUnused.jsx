import React from 'react'

export default function ChatRoom({ room }) {
	return (
		<div className="h-5/6 w-full md:w-4/6 shadow-2xl overflow-y-auto bg-white rounded-2xl">
			<div
				className="w-full bg-red-200 flex flex-row justify-start items-center"
				style={{ height: '10%' }}
			>
				<div className="w-2/12 h-full flex justify-center items-center">
					<div className="w-12 h-12">
						<img
							className="rounded-full object-fill w-full h-full"
							src="https://i.imgur.com/657wEgh.jpg"
							alt="profile picture"
						/>
					</div>
				</div>
				<div className="w-9/12 -ml-4">
					<h1 className="text-left font-medium text-xl">@username</h1>
				</div>
			</div>
			<div
				className="w-full py-4 px-4 bg-white overflow-y-auto"
				style={{ height: '80%' }}
			>
				<div className="h-full w-full bg-white flex flex-col justify-start">
					<div className="self-start bg-yellow-300 px-3 py-1">
						<h1 className="text-left">
							receiveralsknclasknc;lansckansclknaslnckasnckascjknksnanclknknasdkjckjdsabckjnadcjnsadncksnadkcjnndasjck
						</h1>
					</div>
					<div className="self-end">
						<h1>sender</h1>
					</div>
				</div>
			</div>
			<div className="w-full bg-red-200" style={{ height: '10%' }}></div>
		</div>
	)
}
