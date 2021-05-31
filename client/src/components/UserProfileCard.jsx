import React, { useState, useEffect } from 'react'
import CatCard from './CatCard'
import './Component.css'
import AddForm from './AddForm'
import Logo from '../assets/animasi-bergerak.gif'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById } from '../store/actions/action'

export default function UserProfileCard() {
	let { userId } = useParams()
	let userProfile = useSelector((state) => state.profile)
	const dispatch = useDispatch()
	const history = useHistory()
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		dispatch(fetchUserById({ userId }))
	}, [userId])

	const changePage = () => {
		history.push('/dashboard/')
	}

	return (
		<>
			{userProfile.id !== undefined && (
				<div className="h-5/6 md:w-4/6 shadow-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 overflow-y-auto ">
					<div className="w-full h-1/3 px-24 py-10 flex items-center">
						<div className="w-3/12 m-5 flex justify-end">
							<div className="w-32 h-32">
								<img
									className="rounded-full object-fill w-full h-full"
									src={userProfile.profilePicture}
									alt="profile"
								/>
							</div>
						</div>
						<div className="flex flex-col md:flex-row w-2/3 mt-5 self-start">
							<h1 className="text-2xl text-center">{userProfile.username}</h1>
							{userId === localStorage.id && (
								<button
									className="bg-gray-300 py-2 px-4 mx-4"
									onClick={() => {
										setShowModal(true)
									}}
								>
									Add Cat
								</button>
							)}
						</div>
					</div>
					<div className="flex justify-center">
						<div className="w-5/6 border-black border-b-2 "></div>
					</div>
					<div className="w-full h-2/3 p-12 flex justify-start flex-wrap">
						{userProfile.Cats.length > 0 ? (
							userProfile.Cats.map((el) => <CatCard payload={el} />)
						) : (
							<div className="self-center w-full">No data Cats Found</div>
						)}
					</div>
				</div>
			)}
			{showModal ? (
				<>
					<AddForm setShowModal={() => setShowModal(!showModal)} />
				</>
			) : null}

			<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
				<div>
					<button
						title="find a partner"
						onClick={() => changePage()}
						target="_blank"
						className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
					>
						<img
							className="object-cover object-center w-full h-full rounded-full"
							src={Logo}
						/>
					</button>
				</div>
			</div>
		</>
	)
}
