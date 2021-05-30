import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {patchCat} from '../store/actions/action'
import EditForm from './EditForm'
export default function CatCard({ payload }) {
	const [showModal, setShowModal] = useState(false)
	// let [status, setStatus] = useState("")
	const dispatch = useDispatch()
	let { userId } = useParams()


	function handlePatchStatus() {
		let data = {
			status: payload.status
		}
		if (payload.status === true){
			data.status = false
		} else {
			data.status = true
		}
		dispatch(patchCat({payload:data, userId, id:payload.id}))
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
