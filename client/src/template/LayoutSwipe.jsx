import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TinderCard from 'react-tinder-card'
import { getCats, postLike, skipCard } from '../store/actions/action'
import Logo from '../assets/404.svg'
import './Component.css'

export default function SwapCard() {
	const cats = useSelector(state => state.randomCards)
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

	return(
		<div>
			<h1>INI ADALAH DI CARD</h1>
			{/* {JSON.stringify(cats, null, 2)} */}
			<div className="tinderCards_cardContainer">
			{
				cats.length === 0 ?
				<div>
					<img src={Logo} alt="logo" />
				</div>
				:
					<TinderCard
					className="swipe"
					preventSwipe={["up", "down"]}
					>
						<div
						className="card"
						style={{ backgroundImage: `url(${cats[0].profilePicture})` }}
						>
							<h3>{cats[0].name}</h3>
						</div>
					</TinderCard>
			}
			</div>
			<div className="space-x-2 ">
					<button
						onClick={() => handleSkip()}
						className="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-black rounded"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
					<button
						onClick={handleRefresh}
						className="bg-blue-500  text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-black rounded"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
						</svg>
					</button>
					<button
						onClick={handleLike}
						className="bg-blue-500  text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-black rounded"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
						</svg>
					</button>
				</div>
		</div>
	)
}