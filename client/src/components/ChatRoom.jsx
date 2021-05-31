import React, { useEffect, useState } from 'react'
import socket from '../api/socket'
import MsgReceiver from './MsgReceiver'
import MsgSender from './MsgSender'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchChatMessage, fetchFriendMatch } from '../store/actions/action'

export default function ChatRoom() {
	let { chatroomId, username } = useParams()
	let dispatch = useDispatch()
	const friends = useSelector((state) => state.listFriends)
	const [msg, setMsg] = useState('')
	let chatMessage = useSelector((state) => state.chatMessage)
	const [profilePicture, setProfilePicture] = useState('')
	let messagesEnd = React.createRef()

	useEffect(() => {
		// dispatch(fetchFriendMatch())
		socket.emit('join-room', chatroomId)
	}, [chatroomId])

	useEffect(() => {
		let temp = friends.filter((el) => el.username === username)
		setProfilePicture(temp.length > 0 ? temp[0].profilePicture : '')
		console.log(temp, 'ini TEMP')
		if (temp.length > 0) {
			dispatch(
				fetchChatMessage({
					ChatRoomId: chatroomId,
					isMatchId: temp[0].IsMatchId,
				})
			)
		}
	}, [friends, chatroomId])

	useEffect(() => {
		messagesEnd.scrollIntoView({ behavior: 'smooth' })
	}, [chatMessage])

	function handleSendMessage(event) {
		event.preventDefault()
		socket.emit('send-message', {
			message: msg,
			UserId: localStorage.id,
			ChatRoomId: chatroomId,
		})
		setMsg('')
	}

	const handleKeyPress = (event) => {
		event.preventDefault()
		if (event.key === 'Enter' && msg !== '') {
			socket.emit('send-message', {
				message: msg,
				UserId: localStorage.id,
				ChatRoomId: chatroomId,
			})
			setMsg('')
		}
	}
	return (
		<div className=" bg-white p:2 sm:p-6  justify-between flex flex-col w-5/6 h-5/6 rounded-3xl shadow-lg">
			<div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
				<div className="flex items-center space-x-4">
					<img
						src={profilePicture}
						alt=""
						className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
					/>
					<div className="flex flex-col leading-tight">
						<div className="text-2xl mt-1 flex items-center">
							<span className="text-gray-700 font-bold text-xl mr-3">
								{username}
							</span>
							{/* <span className="text-green-500">
								<svg width="10" height="10">
									<circle cx="5" cy="5" r="5" fill="currentColor"></circle>
								</svg>
							</span> */}
						</div>
					</div>
				</div>
			</div>
			<div
				id="messages"
				className="flex flex-col space-y-4 p-3 h-full overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
			>
				{/* Chat Message */}
				{chatMessage.map((el, index) => {
					if (Number(el.UserId) === Number(localStorage.id)) {
						return (
							<MsgReceiver
								key={index}
								profilePicture={localStorage.profilePicture}
								payload={el}
							/>
						)
					} else {
						return (
							<MsgSender
								key={index}
								profilePicture={profilePicture}
								payload={el}
							/>
						)
					}
				})}
				<div
					className="bg-red-600"
					ref={(el) => {
						messagesEnd = el
					}}
				></div>
			</div>
			<div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
				<div className="relative flex items-center">
					<button
						type="button"
						className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="h-6 w-6 text-gray-600"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg>
					</button>
					<input
						type="text"
						value={msg}
						onKeyUp={(e) => handleKeyPress(e)}
						onChange={(e) => {
							setMsg(e.target.value)
						}}
						placeholder="Write Something"
						className="w-5/6 focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3"
					/>
					<div className=" ml-2 items-center inset-y-0 hidden sm:flex">
						<button
							onClick={(e) => {
								handleSendMessage(e)
							}}
							type="button"
							className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-6 w-6 transform rotate-90"
							>
								<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
