import React from 'react'
import { useHistory } from 'react-router-dom'
export default function MatchesCard({ payload }) {
	let history = useHistory()
	function toUserProfile() {
		history.push(`/dashboard/user/${payload.UserId}`)
	}
	function toChatroom() {
		history.push(`/dashboard/chat/${payload.id}/${payload.username}`)
	}
	return (
		<div
			className="w-full border-gray-100 border-b-2 px-8 z-0 hover:bg-gray-100"
			style={{ height: '12%' }}
		>
			
			<div className="h-full flex justify-start items-center">
				<div className="w-3/12">
					<div className="w-12 h-12" onClick={() => toUserProfile()}>
						<img
							className="rounded-full z-50 object-fill w-full h-full cursor-pointer"
							src={payload.profilePicture}
							alt="profile"
						/>
					</div>
				</div>
					<h1 className="text-left text-black font-sm text-lg">
						{payload.username}
					</h1>
					<div
					className="w-9/12 cursor-pointer"
					
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 float-right text-yellow-600" viewBox="0 0 20 20" fill="currentColor" 
					onClick={() => {
						toChatroom()
					}}
					>
						<path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
						<path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
					</svg>
				</div>
			</div>
		</div>
	)
}
