import React, { useState, useEffect } from 'react'
import CatCard from './CatCard'
import './Component.css'
import AddForm from './AddForm'
import Logo from '../assets/animasi-bergerak.gif'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById } from '../store/actions/action'
import CatUpload from '../assets/iconfinder_cat.png'
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
				<div className="h-5/6 md:w-5/6 shadow-2xl flex flex-row flex-nowrap overflow-x-auto rounded-2xl">
					<div className="w-1/3 h-full flex flex-col p-5 justify-center items-center background-cat  rounded-l-2xl">
						<div className=" rounded-3xl bg-gray-50 bg-opacity-80 py-5 flex flex-col items-center w-full">
							<div className="w-full flex justify-center">
								<div className=" w-36 h-36">
									<img
										className="rounded-full object-fill  border-yellow-300 border-4 w-full h-full"
										src={userProfile.profilePicture}
										alt="profile"
									/>
								</div>
							</div>
							<div className="">
								<h1 className="text-xl font-medium overflow-auto text-center">
									{userProfile.username}
								</h1>
							</div>
							<div className="">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
								</svg>
								<h1 className="text-medium overflow-auto text-center -mt-5 pl-5 m-2">
								{userProfile.location}
								</h1>
							</div>
							{Number(userId) === Number(localStorage.id) && (
								<div className="bg-yellow-400 hover:bg-yellow-600 my-2 py-2 px-4 rounded-lg">
									<button
										onClick={() => {
											setShowModal(true)
										}}
									>
										Add cat
									</button>
								</div>
							)}
						</div>
					</div>

					<div className="w-2/3 h-full  bg-white flex p-5">
						{userProfile.Cats.length > 0 ? (
							<div className="flex overflow-x-scroll h-full hide-scroll-bar">
								<div className="flex flex-nowrap items-center space-x-6">
									{userProfile.Cats.map((el) => (
										<CatCard key={el.id} payload={el} />
									))}
								</div>
							</div>
						) : (
							<div className=" flex flex-col justify-center items-center self-center text-center w-full">
								<img src={CatUpload} className="w-3/6" alt="cat" />
								<h1 className="text-yellow-600 p-2 bg-yellow-200 rounded-xl">
									You have't upload your cat.
								</h1>
							</div>
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 animate-bounce"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
					<button
						title="find a partner"
						onClick={() => changePage()}
						target="_blank"
						className="block w-20 h-20 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
					>
						<img
							className="object-cover object-center w-full h-full rounded-full"
							src={Logo}
						/>
					</button>
					<div>
						<h1 className="font-semibold font-mono text-yellow-900">
							Discover
						</h1>
					</div>
				</div>
			</div>
		</>
	)
}
