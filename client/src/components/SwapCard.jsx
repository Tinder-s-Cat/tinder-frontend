import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Cards } from '../components/Cards'

export default function SwapCard() {
	const cats = useSelector(state => state.randomCards)
	console.log(cats);
	const dispatch = useDispatch()

	// useEffect(() => {
		
	// }, []);

	return (
		<>
			<div className="p-56">
				<div className="w-96 m-auto ">
					{
						cats.map((cat, idx) => <Cards key={idx} cat={cat} />)
					}
				</div>
			</div>

			<button className="bg-blue hover:bg-blue-light text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
				Skip
			</button>
			<button className="bg-blue hover:bg-blue-light text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
				Refresh
			</button>
			<button className="bg-blue hover:bg-blue-light text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
				Like
			</button>
		</>
	)
}
