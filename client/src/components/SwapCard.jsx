import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Cards } from '../components/Cards'
import { skipCard, getCats, postLike } from '../store/actions/action'

export default function SwapCard() {
	const cats = useSelector((state) => state.randomCards)
	// console.log(cats);
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
			<div className="flex flex-col">
				<div className="p-16">
					<div className="w-96 m-auto ">
						{/* {
							cats.map((cat, idx) => <Cards key={idx} cat={cat} />)
						} */}

						{cats.length === 0 ? (
							<div>DATA NOT FOUND</div>
						) : (
							<Cards cat={cats[0]} />
						)}
					</div>
				</div>

				<div className="space-x-2">
					<button
						onClick={() => handleSkip()}
						className="bg-blue-500 text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
					>
						Skip
					</button>
					<button
						onClick={handleRefresh}
						className="bg-blue-500  text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
					>
						Refresh
					</button>
					<button
						onClick={handleLike}
						className="bg-blue-500  text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
					>
						Like
					</button>
				</div>
			</div>
		</>
	)
}
