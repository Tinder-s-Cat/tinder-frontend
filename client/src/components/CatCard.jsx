import React, { useState } from 'react'
import EditForm from './EditForm'
export default function CatCard({ status }) {
	const [showModal, setShowModal] = useState(false)
	function handlePatchStatus() {}

	return (
		<>
			<div className="group z-1 transition duration-500 ease-in-out transform hover:scale-110 w-1/2 md:w-1/3 h-2/3 p-2 relative">
				{status ? (
					<button
						onClick={() => {
							handlePatchStatus()
						}}
						className="absolute bg-green-500 hover:bg-green-600 px-2 py-1 top-5 left-4 text-sm text-white font-semibold cursor-pointer"
					>
						active
					</button>
				) : (
					<button
						onClick={() => {
							handlePatchStatus()
						}}
						className="absolute bg-yellow-500 hover:bg-yellow-600 px-2 py-1 top-5 left-4 text-sm text-white font-semibold cursor-pointer"
					>
						inactive
					</button>
				)}
				<button
					onClick={() => {
						setShowModal(true)
					}}
					className="absolute right-4 top-5 text-sm bg-white hover:bg-green-600 px-2 py-1"
				>
					Edit
				</button>
				<img
					className="object-fit w-full h-full"
					src="https://i.imgur.com/AD3MbBi.jpg"
					alt=""
				/>
			</div>
			{showModal ? (
				<EditForm
					setShowModal={() => {
						setShowModal(!showModal)
					}}
				/>
			) : null}
		</>
	)
}
