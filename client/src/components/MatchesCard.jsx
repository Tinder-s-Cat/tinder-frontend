import React from 'react'
import { useHistory } from 'react-router-dom'
export default function MatchesCard({ payload }) {
	let history = useHistory()
	function toUserProfile() {
		history.push(`/dashboard/user/${payload.UserId}`)
	}
	function toChatroom() {
		history.push(`/dashboard/chat/${payload.id}`)
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
				<div
					className="w-9/12 cursor-pointer"
					onClick={() => {
						toChatroom()
					}}
				>
					<h1 className="text-left text-black font-sm text-lg">
						{payload.username}
					</h1>
				</div>
			</div>
		</div>
	)
}
