import React, { useState } from 'react'
import CatCard from './CatCard'
import EditForm from './EditForm'

export default function UserProfileCard() {
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<div className="h-5/6 md:w-4/6 shadow-2xl overflow-y-auto bg-white">
				<div className="w-full h-1/3 px-24 py-10 flex items-center">
					<div className="w-3/12 m-5 flex justify-end">
						<div className="w-32 h-32">
							<img
								className="rounded-full object-fill w-full h-full"
								src="https://i.imgur.com/657wEgh.jpg"
								alt="profile picture"
							/>
						</div>
					</div>
					<div className="flex flex-col md:flex-row w-2/3 mt-5 self-start">
						<h1 className="text-2xl text-center">@username</h1>
						<button
							className="bg-gray-300 py-2 px-4 mx-4"
							onClick={() => {
								setShowModal(true)
							}}
						>
							Edit Profile
						</button>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="w-5/6 border-black border-b-2 "></div>
				</div>
				<div className="w-full h-2/3 p-12 flex justify-start flex-wrap">
					<CatCard status={true} />
					<CatCard />
					<CatCard />
					<CatCard />
				</div>
			</div>
			{showModal ? (
				<>
					<EditForm setShowModal={() => setShowModal(!showModal)} />
				</>
			) : null}
		</>
	)
}