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
			text: "You will not be able to return this card!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'delete'
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
	}

	return (
		<>
			<div className="group z-1 transition duration-500 ease-in-out transform hover:scale-110 w-1/2 md:w-1/3 h-2/3 p-2 relative">
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
				<div className="absolute right-4 top-3 flex flex-col ">
					<button
						onClick={() => {
							setShowModal(true)
						}}
						className="text-sm bg-white my-1 hover:bg-green-600 px-2 py-1"
					>
						Edit
					</button>
					<button
						onClick={() => {
							handleDelete()
						}}
						className="text-sm bg-red-600 my-1 hover:bg-red-700 px-2 py-1"
					>
						Delete
					</button>
				</div>
				<img
					className="object-fit w-full h-full"
					src={payload.profilePicture}
					alt=""
				/>
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
