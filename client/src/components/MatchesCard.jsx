import React from 'react'
import { useHistory } from 'react-router-dom'
export default function MatchesCard({ props }) {
	let history = useHistory()
	function toUserProfile() {
		history.push('/dashboard/user/1')
	}
	function toChatroom() {
		history.push('/dashboard/chat/1asdxs')
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
							src="https://i.imgur.com/657wEgh.jpg"
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
					<h1 className="text-left text-black font-sm text-lg">Ferguso</h1>
				</div>
			</div>
		</div>
	)
}
