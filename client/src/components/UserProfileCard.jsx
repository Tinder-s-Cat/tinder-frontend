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
								<h1 className="text-medium overflow-auto text-center">
									{userProfile.username}
								</h1>
							</div>
							<div className="">
								<h1 className="text-medium overflow-auto text-center">
									{userProfile.location}
								</h1>
							</div>
							<div className="bg-yellow-400 hover:bg-yellow-600 my-2 py-2 px-4 rounded-lg">
								<button
									onClick={() => {
										setShowModal(true)
									}}
								>
									Add cat
								</button>
							</div>
						</div>
					</div>

					<div className="w-2/3 h-full  bg-white flex p-5">
						{userProfile.Cats.length > 0 ? (
							<div class="flex overflow-x-scroll h-full hide-scroll-bar">
								<div class="flex flex-nowrap items-center space-x-6">
									{userProfile.Cats.map((el) => (
										<CatCard payload={el} />
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
