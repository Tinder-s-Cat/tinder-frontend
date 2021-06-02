import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCats, postLike, skipCard } from '../store/actions/action'
import './Component.css'
import Logo from '../assets/noData.png'
import Cards from './Cards'

export default function SwapCard() {
	const cats = useSelector((state) => state.randomCards)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCats())
	}, [])

	const handleRefresh = () => {
		dispatch(getCats())
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
			<div className="tinderCards_cardContainer">
				{cats.length === 0 ? (
					<div className="flex flex-col justify-center items-center self-center text-center w-full pt-16">
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
