import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { addCat } from '../store/actions/action'
import Swal from 'sweetalert2'

export default function AddForm({ setShowModal }) {
	let [cat, setCat] = useState({
		name: "",
		age: "",
		race: "",
		gender: "",
		profilePicture: "",
		status: true,
		description: ""
	})
	let { userId } = useParams()
	const dispatch = useDispatch()
	function handleAdd(){

		let payload = {
			name: cat.name,
			age: cat.age,
			race: cat.race,
			status: cat.status,
			gender: cat.gender,
			profilePicture: cat.profilePicture,
			description: cat.description,
		}
		console.log('MASUK 2', payload)
		dispatch(addCat({payload,userId}))
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Successfully Added Your Cats',
			showConfirmButton: false,
			timer: 1500
		  })
		// setCat('')
		setShowModal()
	}
	function addName(event){
		setCat({...cat,name:event.target.value})
	}
	function addAge(event){
		setCat({...cat,age:event.target.value})
	}
	function addRace(event){
		console.log(cat.race)
		setCat({...cat,race:event.target.value})
	}
	function addStatus(event){
		setCat({...cat,status:event.target.value})
	}
	function addDescription(event){
		setCat({...cat,description:event.target.value})
	}
	function addGender(event){
		setCat({...cat,gender:event.target.value})
	}
	function addProfilePicture(event){
		setCat({...cat,profilePicture:event.target.value})
	}

	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-auto my-6 mx-auto max-w-3xl">
					{/*content*/}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
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
							<form className=" w-96"> 
								<div className="flex items-center justify-between">
									<label htmlFor="">Name:</label>
									<input
										type="text"
										className=" border-black border-2 p-2 mx-2"
										value={cat.name}
										onChange={
											addName
										}

									/>
								</div>
								<div className="flex items-center justify-between my-5">
									<label htmlFor="">Age:</label>
									<input
										type="text"
										className=" border-black border-2 p-2 mx-2"
										value={cat.age}
										onChange={
											addAge
										}
									/>
								</div>
								<div className="flex items-center justify-between my-5">
									<label htmlFor="">Race:</label>
									<input
										type="text"
										className=" border-black border-2 p-2 mx-2"
										value={cat.race}
										onChange={
											addRace
										}
									/>
								</div>
								<div className="flex items-center justify-between my-5">
									<label htmlFor="">status:</label>
									<input
										type="text"
										className=" border-black border-2 p-2 mx-2 rounded-md"
										value={cat.status}
										onChange={
											addStatus
										}
									/>
								</div>
								<div className="flex items-center justify-between my-5">
									<label htmlFor="">Gender:</label>
									<input
										type="text"
										className=" border-black border-2 p-2 mx-2 rounded-md"
										value={cat.gender}
										onChange={
											addGender
										}
									/>
								</div>
								<div className="flex items-center justify-between my-5">
									<label htmlFor="">ProfilePicture:</label>
									<input
										type="text"
										className=" border-black border-2 p-2 mx-2 rounded-md"
										value={cat.profilePicture}
										onChange={
											addProfilePicture
										}
									/>
								</div>
								<div className="flex items-center justify-between my-5">
									<label htmlFor="">Description:</label>
									<textarea
										type="text"
										className=" border-black border-2 p-2 mx-2"
										value={cat.description}
										onChange={
											addDescription
										}
									/>
								</div>
							</form>
						</div>
						{/*footer*/}
						<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
							<button
								className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => setShowModal()}
							>
								Close
							</button>
							<button
								className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={(event) =>{
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
