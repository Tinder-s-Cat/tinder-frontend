import React from 'react'

export default function MsgReceiver({ payload, profilePicture }) {
	return (
		<>
			<div className="chat-message">
				<div className="flex items-end justify-end">
					<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
						<div>
							<span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
								{payload.message}
							</span>
						</div>
					</div>
					<img
						src={profilePicture}
						alt="My profile"
						className="w-6 h-6 rounded-full order-2"
					/>
				</div>
			</div>
		</>
	)
}
