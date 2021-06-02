import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { patchCat, deleteCat } from '../store/actions/action'
import EditForm from './EditForm'
import Swal from 'sweetalert2'

export default function CatCard({ payload }) {
	const [showModal, setShowModal] = useState(false)
	// let [status, setStatus] = useState("")
	const dispatch = useDispatch()
	let { userId } = useParams()

	function handlePatchStatus() {
		let data = {
			status: payload.status,
		}
		if (payload.status === true) {
			data.status = false
		} else {
			data.status = true
		}
		dispatch(patchCat({ payload: data, userId, id: payload.id }))
	}

	function handleDelete() {
		Swal.fire({
			title: 'Are you sure?',
			text: 'You will not be able to return this card!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'delete',
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(deleteCat({ id: payload.id, userId }))
				Swal.fire(
					'Deleted!',
					'Your card has been deleted successfully',
					'success'
				)
			}
		})
		// if (userId === localStorage.id) {
		// 	dispatch(deleteCat({ id: payload.id, userId }))
		// }
	}

	return (
		<>
			<div className="w-80 h-5/6 group transition duration-500 ease-in-out transform hover:scale-110 hover:flex-grow shadow-xl">
				<div className="relative w-full h-full">
					<img
						className="object-cover h-full w-full rounded-2xl"
						src={payload.profilePicture}
						alt=""
					/>
					{payload.status ? (
						<button
							onClick={(event) => {
								event.preventDefault()
								handlePatchStatus()
							}}
							className="absolute bg-green-500 hover:bg-green-600 px-2 py-1 top-5 left-4 text-sm text-white font-semibold cursor-pointer"
						>
							active
						</button>
					) : (
						<button
							onClick={(event) => {
								event.preventDefault()
								handlePatchStatus()
							}}
							className="absolute bg-yellow-500 hover:bg-yellow-600 px-2 py-1 top-5 left-4 text-sm text-white font-semibold cursor-pointer"
						>
							inactive
						</button>
					)}
					{userId === localStorage.id && (
						<div className="absolute right-4 top-3 flex flex-row space-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8 text-yellow-200 bg-black bg-opacity-70 hover:text-yellow-600 cursor-pointer"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								onClick={() => {
									setShowModal(true)
								}}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8 text-red-400 hover:text-red-600 bg-black cursor-pointer bg-opacity-70 8ove8:text-red-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								onClick={() => {
									handleDelete()
								}}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
								/>
							</svg>
						</div>
					)}
					<div className="absolute opacity-0 py-2 px-5 group-hover:opacity-100 w-full left-0 right-0 bottom-0 h-2/6 bg-white bg-opacity-75 rounded-xl ">
						<div className="w-full h-full flex flex-col justify-start overflow-y-auto items-start">
							<div className="">
								<h1 className="text-left font-bold capitalize text-xl">
									{payload.name} ({payload.race})
								</h1>
							</div>
							<div>
								<h1 className="text-left font-medium capitalize text-lg">
									{payload.gender}, {payload.age}yo
								</h1>
							</div>
							<div className="flex flex-row flex-wrap space-x-1">
								<div>
									<h1 className="text-left font-medium text-medium">
										Description:
									</h1>
								</div>
							</div>
							<div className="px-1">
								<h1 className="text-left">{payload.description}</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			{showModal ? (
				<EditForm
					payload={payload}
					setShowModal={() => {
						setShowModal(!showModal)
					}}
				/>
			) : null}
		</>
	)
}
