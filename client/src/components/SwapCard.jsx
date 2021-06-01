import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCats, postLike, skipCard } from '../store/actions/action'
import Logo from '../assets/404.svg'
import './Component.css'
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
		<div>
			<div className="tinderCards_cardContainer">
				{cats.length === 0 ? (
					<div>
						<img src={Logo} alt="logo" />
					</div>
				) : (
					<Cards cat={cats[0]} />
				)}
			</div>
			<div className="space-x-2 media">
				<button onClick={() => handleSkip()} className="button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-2 w-2 svg text-gray-500 hover:text-gray-900"
						title="Skip"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<button onClick={handleRefresh} className="button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-2 w-2 svg text-green-500 hover:text-green-700"
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
				</button>
				<button onClick={handleLike} className="button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-2 w-2 svg text-yellow-600 hover:text-yellow-700 text-sm"
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
				</button>
			</div>
		</div>
	)
}
