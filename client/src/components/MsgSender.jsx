import React from 'react'

export default function MsgSender({ payload }) {
	return (
		<div className="chat-message">
			<div className="flex items-end">
				<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
					<div>
						<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
							{payload.message}
						</span>
					</div>
				</div>
				<img
					src={payload.id}
					alt="My profile"
					className="w-6 h-6 rounded-full order-1"
				/>
			</div>
		</div>
	)
}
