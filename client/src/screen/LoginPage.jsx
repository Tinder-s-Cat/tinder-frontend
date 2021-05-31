import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function LoginPage() {
	let history = useHistory()

	const [dataLogin, setLogin] = useState({
		email: '',
		password: '',
	})

	const handleChange = (e) => {
		setLogin({
			...dataLogin,
			[e.target.name]: e.target.value,
		})
	}

	const handleLogin = (event) => {
		event.preventDefault()
		axios({
			method: 'POST',
			url: 'http://localhost:3000/login',
			data: {
				email: dataLogin.email,
				password: dataLogin.password,
			},
		})
			.then((response) => {
				// console.log(response, 'ini adalah response login ');
				console.log(response.data)
				localStorage.setItem('id', response.data.id)
				localStorage.setItem('access_token', response.data.access_token)
				localStorage.setItem('username', response.data.username)
				localStorage.setItem('location', response.data.location)
				localStorage.setItem('profilePicture', response.data.profilePicture)
				history.push(`/dashboard/user/${response.data.id}`)
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
					title: 'Register success!',
				})
			})
			.catch((err) => {
				console.log(`err`, err)
			})
	}

	return (
		<>
			<section className="flex flex-col md:flex-row h-screen items-center">
				<div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
					<img
						src="https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80"
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>

				<div
					className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center"
				>
					<div className="w-full h-100">
						<h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
							Log in to your account
						</h1>

						<form
							onSubmit={(event) => handleLogin(event)}
							className="mt-6"
							action="#"
							method="POST"
						>
							<div>
								<label className="block text-gray-700">Email Address</label>
								<input
									type="email"
									name="email"
									value={dataLogin.email}
									onChange={handleChange}
									placeholder="Enter Email Address"
									className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
									autofocus
									autocomplete
									required
								/>
							</div>

							<div className="mt-4">
								<label className="block text-gray-700">Password</label>
								<input
									type="password"
									name="password"
									value={dataLogin.password}
									onChange={handleChange}
									placeholder="Enter Password"
									className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none"
									required
								/>
							</div>

							<button
								type="submit"
								className="w-full block bg-yellow-500 hover:bg-yellow-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                        px-4 py-3 mt-6"
							>
								Log In
							</button>
						</form>

						<hr className="my-6 border-gray-300 w-full" />
						<p className="mt-8">Need an account?</p>
						<Link to="/register">
							<p className="mt-2 text-blue-400 hover:text-blue-600 cursor-pointer">
								Register
							</p>
						</Link>
						<Link to="/">
							<p className="mt-10 text-gray-400 hover:text-gray-600 cursor-pointer">
								Back to Landing Page
							</p>
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
