import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editCat } from '../store/actions/action'
import Swal from 'sweetalert2'

export default function EditForm({ setShowModal, payload }) {
	let [cat, setCat] = useState({
		name: payload.name,
		age: payload.age,
		race: payload.race,
		gender: payload.gender,
		profilePicture: payload.profilePicture,
		status: payload.status,
		description: payload.description,
	})
	const dispatch = useDispatch()
	let { userId } = useParams()
	function handleEdit() {
		let data = {
			name: cat.name,
			age: cat.age,
			race: cat.race,
			gender: cat.gender,
			profilePicture: cat.profilePicture,
			description: cat.description,
		}
		dispatch(editCat({ payload: data, userId, id: payload.id }))
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer)
				toast.addEventListener('mouseleave', Swal.resumeTimer)
			},
		})

		Toast.fire({
			icon: 'success',
			title: 'Edit success!',
		})
		setShowModal()
	}
	function addName(event) {
		setCat({ ...cat, name: event.target.value })
	}
	function addAge(event) {
		setCat({ ...cat, age: event.target.value })
	}
	function addRace(event) {
		console.log(cat.race)
		setCat({ ...cat, race: event.target.value })
	}
	function addStatus(event) {
		setCat({ ...cat, status: event.target.value })
	}
	function addDescription(event) {
		setCat({ ...cat, description: event.target.value })
	}
	function addGender(event) {
		setCat({ ...cat, gender: event.target.value })
	}
	function addProfilePicture(event) {
		setCat({ ...cat, profilePicture: event.target.value })
	}

	return (
		<>
			<div className="transition delay-700 duration-500 ease-in-out transform justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-auto my-6 mx-auto max-w-3xl">
					{/*content*/}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
							<h3 className="text-3xl font-semibold">Edit Cat</h3>
							<button
								className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={() => setShowModal()}
							>
								<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
									×
								</span>
							</button>
						</div>
						{/*body*/}
						<div className="relative p-4 flex-auto">
							<form className="text-left">
								<div>
									<label className="block text-gray-600" htmlFor="">
										Name:
									</label>
									<input
										type="text"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value={cat.name}
										onChange={addName}
									/>
								</div>
								<div>
									<label className="block text-gray-600" htmlFor="">
										Age:
									</label>
									<input
										type="text"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value={cat.age}
										onChange={addAge}
									/>
								</div>
								<div>
									<label className="block text-gray-600" htmlFor="">
										Race:
									</label>
									<input
										type="text"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value={cat.race}
										onChange={addRace}
									/>
								</div>
								{/* <div className="flex items-center justify-between my-5">
									<label htmlFor="">status:</label>
									<input
										type="text"
										className=" border-black border-2 p-2 mx-2 rounded-md"
										value={cat.status}
										onChange={
											addStatus
										}
									/>
								</div> */}
								<div>
									<label className="block text-gray-600" htmlFor="">
										gender:
									</label>
									<select
										name="gender"
										id=""
										value={cat.gender}
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										onChange={addGender}
									>
										<option value="male">Male</option>
										<option value="female">Female</option>
									</select>
								</div>
								<div>
									<label className="block text-gray-600" htmlFor="">
										Profile Picture:
									</label>
									<input
										type="text"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value={cat.profilePicture}
										onChange={addProfilePicture}
									/>
								</div>
								<div>
									<label className="block text-gray-600" htmlFor="">
										Description:
									</label>
									<textarea
										type="text"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value={cat.description}
										onChange={addDescription}
									/>
								</div>
							</form>
						</div>
						{/*footer*/}
						<div className="flex items-center justify-end px-10 py-2 border-t border-solid border-blueGray-200 rounded-b">
							<button
								className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => setShowModal()}
							>
								Close
							</button>
							<button
								className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={(event) => {
									event.preventDefault()
									handleEdit()
								}}
							>
								Save Changes
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	)
}
