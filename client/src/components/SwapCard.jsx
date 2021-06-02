import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCats, postLike, skipCard } from '../store/actions/action'
import './Component.css'
import Logo from '../assets/noData.png'
import Cards from './Cards'

export default function SwapCard() {
	const cats = useSelector((state) => state.randomCards)
	const [genderState, setGenderState] = useState('')
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCats(genderState))
	}, [genderState])

	const handleRefresh = () => {
		dispatch(getCats(genderState))
	}

	const handleLike = () => {
		if (cats.length > 0) {
			dispatch(postLike({ UserId: cats[0].UserId, CatId: cats[0].id }))
			dispatch(skipCard())
		}
	}

	const handleSkip = () => {
		dispatch(skipCard())
	}

	return (
		<>
			<div className="group absolute left-10 top-5 cursor-pointer">
				<div className="w-full h-full relative">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-12 w-12 rounded-full "
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
						/>
					</svg>
					<div className="opacity-0 group-hover:opacity-100 absolute ml-2 right-0 left-full top-1/4">
						<h1 className="text-semibold font-mono text-xl">Gender</h1>
					</div>
					<select
						className="opacity-0 absolute group-hover:opacity-100 px-4 py-2 bg-gray-400 bg-opacity-75 text-white rounded-lg"
						name="gender"
						id="gender"
						value={genderState}
						onChange={(e) => {
							setGenderState(e.target.value)
						}}
					>
						<option value="">All</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
			</div>
			<div className="tinderCards_cardContainer pb-20 pl">
				{cats.length === 0 ? (
					<div className="">
						<img src={Logo} alt="no data" />
						<h1 className="text-gray-500 p-2 bg-gray-200 rounded-xl">
							Oops, no more cats to see.
						</h1>
					</div>
				) : (
					<Cards cat={cats[0]} />
				)}
			</div>
			<div className="space-x-2 buttonSwipe">
				<div onClick={() => handleSkip()} className="buttonSwipe_skip">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="transform hover:scale-110 h-16 w-16 svg text-gray-500 hover:text-gray-900"
						title="Skip"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</div>
				<div onClick={handleRefresh} className="buttonSwipe_ref">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="transform hover:scale-110 h-2 w-2 svg text-yellow-600 hover:text-yellow-700"
						title="Refresh"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div onClick={handleLike} className="buttonSwipe_like">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="transform hover:scale-110 h-2 svg w-2 text-blue-600 hover:text-blue-700 text-sm"
						title="Like"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</div>
		</>
	)
}
