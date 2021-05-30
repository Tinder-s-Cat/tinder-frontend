import React, { useEffect } from 'react'
import UserProfile from '../components/UserProfileCard'
import MatchesCard from '../components/MatchesCard'
import SwapCard from '../components/SwapCard'
import ChatRoom from '../components/ChatRoom'
import { useHistory, Switch, Route, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFriendMatch } from '../store/actions/action'
export default function Dashboard() {
	let { path } = useRouteMatch()
	let friendMatch = useSelector((state) => state.listFriends)
	const dispatch = useDispatch()
	let history = useHistory()

	useEffect(() => {
		dispatch(fetchFriendMatch())
	}, [])

	function handleLogout() {
		localStorage.clear()
		history.push('/')
	}
	return (
		<div className="h-screen w-screen bg-gray-200 flex flex-row">
			{/* Sidebar */}
			<section className="w-3/12 h-full bg-white">
				{/* header sidebar */}
				<div className="w-full h-1/6 ">
					<div className="h-1/2 bg-yellow-400">
						<div className="w-full h-full px-5">
							<div className="h-full flex justify-start items-center">
								<div className="w-3/12">
									<div
										className="w-12 h-12"
										onClick={() => {
											history.push(`/dashboard/user/${localStorage.id}`)
										}}
									>
										<img
											className="rounded-full object-fill w-full h-full cursor-pointer"
											src={localStorage.profilePicture}
											alt="profile"
										/>
									</div>
								</div>
								<div className="w-6/12">
									<h1 className="text-left text-white font-semibold text-lg">
										{localStorage.username}
									</h1>
								</div>
								<div className="w-3/12">
									<button
										onClick={() => {
											handleLogout()
										}}
										className=" px-2 py-1 bg-yellow-200 hover:bg-yellow-500 rounded-xl text-yellow-900"
									>
										Logout
									</button>
								</div>
							</div>
							<div className="w-full h-full flex flex-row justify-start items-center">
								<button className="px-4 py-2 hover:bg-yellow-200 border-yellow-400 border-b-8 rounded-md font-medium">
									Matches
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="h-5/6 w-full overflow-y-auto">
					{friendMatch.length > 0 &&
						friendMatch.map((el) => <MatchesCard key={el.id} payload={el} />)}
				</div>
			</section>
			{/* Main Dashboard isinya nested router */}
			<section className="w-9/12 h-full bg-yellow-50 flex flex-row items-center justify-center">
				<Switch>
					<Route exact path={path}>
						<SwapCard />
					</Route>
					<Route path={`${path}/user/:userId`}>
						<UserProfile />
					</Route>
					<Route path={`${path}/chat/:chatroomId`}>
						<ChatRoom />
					</Route>
				</Switch>
			</section>
		</div>
	)
}
