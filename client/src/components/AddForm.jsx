import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addCat, fetchUserById } from '../store/actions/action'
import Swal from 'sweetalert2'
import axios from 'axios'

export default function AddForm({ setShowModal }) {
	let [cat, setCat] = useState({
		name: '',
		age: '',
		race: '',
		gender: 'male',
		status: false,
		description: '',
	})
	const fileInput = React.createRef()
	let { userId } = useParams()
	const dispatch = useDispatch()
	function handleAdd() {
		let payload = {
			name: cat.name,
			age: cat.age,
			race: cat.race,
			status: cat.status,
			gender: cat.gender,
			description: cat.description,
		}

		const formData = new FormData()
		formData.append('profilePicture', fileInput.current.files[0])
		formData.append('name', payload.name)
		formData.append('age', payload.age)
		formData.append('description', payload.description)
		formData.append('race', payload.race)
		formData.append('status', payload.status)
		formData.append('gender', payload.gender)
		axios({
			method: 'POST',
			url: `http://localhost:3000/cat/lengkap`,
			headers: {
				access_token: localStorage.access_token,
			},
			data: formData,
		})
			.then((response) => {
				console.log('INI DATA>>>>', response)
				dispatch(fetchUserById({ userId }))
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Successfully Added Your Cats',
					showConfirmButton: false,
					timer: 1500,
				})
			})
			.catch((err) => {
				Swal.fire({
					position: 'center',
					icon: 'error',
					title: 'Something Wrong happened',
					showConfirmButton: false,
					timer: 1000,
				})
				console.log(`err`, err)
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
	// function addStatus(event) {
	// 	setCat({ ...cat, status: event.target.value })
	// }
	function addDescription(event) {
		setCat({ ...cat, description: event.target.value })
	}
	function addGender(event) {
		setCat({ ...cat, gender: event.target.value })
	}
	// function addProfilePicture(event) {
	// 	console.log(event.target.files[0], 'asacs')
	// 	// setCat({ ...cat, profilePicture: event.target.files })
	// }

	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-auto my-6 mx-auto max-w-3xl">
					{/*content*/}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
							<h3 className="text-3xl font-semibold">Add Cat</h3>
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
						<div className="relative p-6 flex-auto">
							<form className=" text-left">
								<div className="">
									<label className="block text-gray-600" htmlFor="">
										Name:
									</label>
									<input
										type="text"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value={cat.name}
										onChange={addName}
										placeholder="Nobu e.g"
									/>
								</div>
								<div>
									<label className="block text-gray-600" htmlFor="">
										Age:
									</label>
									<input
										type="number"
										min={0}
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value={cat.age}
										onChange={addAge}
										placeholder="Age in Years"
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
										placeholder="himalayan e.g"
									/>
								</div>
								<div className="block text-gray-600">
									<label className="block text-gray-600" htmlFor="">
										Gender:
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
									{/* <input
										type="text"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value={cat.gender}
										onChange={addGender}
									/> */}
								</div>
								<div>
									<label className="block text-gray-600" htmlFor="">
										ProfilePicture:
									</label>
									<input
										id="file"
										type="file"
										name="file"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										ref={fileInput}
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
									handleAdd()
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
