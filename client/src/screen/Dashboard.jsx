import React, { useEffect } from 'react'
import UserProfile from '../components/UserProfileCard'
import MatchesCard from '../components/MatchesCard'
import SwapCard from '../components/SwapCard'
import ChatRoom from '../components/ChatRoom'
import { useHistory, Switch, Route, useRouteMatch } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFriendMatch, addChatMessage } from '../store/actions/action'
import socket from '../api/socket'
import Swal from 'sweetalert2'
import Logo from '../assets/animasi-bergerak.gif'

export default function Dashboard() {
	let { path } = useRouteMatch()
	let friendMatch = useSelector((state) => state.listFriends)
	const dispatch = useDispatch()
	let history = useHistory()

	useEffect(() => {
		socket.on('receive-message', (data) => {
			console.log('chat masuk', data)
			dispatch(addChatMessage(data))
		})

		socket.on('refetch-receive', (data) => {
			console.log('fetching friend', data)
			dispatch(fetchFriendMatch())
		})

		socket.on('welcome', (data) => {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 3000,
				timerProgressBar: true,
				didOpen: (toast) => {
					toast.addEventListener('mouseenter', Swal.stopTimer)
					toast.addEventListener('mouseleave', Swal.resumeTimer)
				},
			})

			Toast.fire({
				icon: 'success',
				title: data,
			})
		})

		dispatch(fetchFriendMatch())
		return () => {
			socket.close()
		}
	}, [])

	function handleLogout() {
		localStorage.clear()
		history.push('/')
	}
	// const useProfile = useSelector(state => state.profile)
	// console.log(useProfile, 'INI ADALAH PROFILE');

	return (
		<div className="h-screen w-screen bg-gray-200 flex flex-row">
			{/* Sidebar */}
			<section className="h-full bg-white" style={{ width: '20%' }}>
				{/* header sidebar */}
				<div className="w-full h-1/6 ">
					<div className="h-1/2 bg-yellow-400">
						<div className="w-full h-full px-5">
							<div className="h-full flex justify-start items-center">
								<div className="w-1/3">
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
								<div className="w-3/5">
									<h1 className="text-left text-white font-semibold text-lg">
										{localStorage.username}
									</h1>
								</div>
								<div className="w-3/12 ml-20">
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
					{friendMatch.length === 0 ? (
						<div className="flex flex-col justify-center items-center self-center text-center w-full pt-16">
							<img src={Logo} alt="no data" />
							<h1 className="text-yellow-600 p-2 bg-yellow-200 rounded-xl">
								no friends here. go discover one!
							</h1>
						</div>
					) : (
						friendMatch.map((el) => <MatchesCard key={el.id} payload={el} />)
					)}
				</div>
			</section>
			{/* Main Dashboard isinya nested router */}
			<section
				className=" h-full bg-yellow-500 flex flex-row items-center justify-center drop-shadow-2xl relative"
				style={{ width: '80%' }}
			>
				<Switch>
					<Route exact path={path}>
						<SwapCard />
					</Route>
					<Route path={`${path}/user/:userId`}>
						<UserProfile />
					</Route>
					<Route path={`${path}/chat/:chatroomId/:username`}>
						<ChatRoom />
					</Route>
				</Switch>
			</section>
		</div>
	)
}
