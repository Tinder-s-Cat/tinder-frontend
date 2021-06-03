import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function RegisterPage() {
	const history = useHistory()
	const [newUser, setNewUser] = useState({
		username: '',
		email: '',
		location: '',
		password: '',
		profilePicture: '',
	})

	const handleChange = (e) => {
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		axios({
			method: 'POST',
			url: 'http://3.129.14.220:3000/register',
			data: {
				username: newUser.username,
				email: newUser.email,
				password: newUser.password,
				profilePicture: newUser.profilePicture,
				lat: newUser.lat,
				lng: newUser.lng,
				location: newUser.location,
			},
		})
			.then((response) => {
				// console.log(newUser);
				console.log(response, 'ini adalah response')
				if (
					newUser.username === '' ||
					newUser.email === '' ||
					newUser.password === '' ||
					newUser.profilPicture === '' ||
					newUser.location === ''
				) {
					console.log('tidak dapat register')
				} else {
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
					history.push('/login')
				}
			})
			.catch((error) => {
				console.log(error)
				// let str = error.response.data.errors.join('\n')
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'something wrong',
					// html: '<pre>'+ str +'</pre>'
				})
			})
	}

	const getLocation = () => {
		navigator.geolocation.getCurrentPosition(function (coor) {
			axios({
				method: 'GET',
				url: `https://api.opencagedata.com/geocode/v1/json?q=${coor.coords.latitude}+${coor.coords.longitude}&key=6bfeaaf22afb419d95cfda8e999af2a6`,
			})
				.then(({ data }) => {
					console.log(data, 'INI DATA')
					const newLocation = data.results[0].components.city
					const lat = data.results[0].geometry.lat
					const lng = data.results[0].geometry.lng
					setNewUser({
						...newUser,
						location: newLocation,
						lat: lat,
						lng: lng,
					})
					// console.log(newUser.location, 'INI LOKASI');
				})
				.catch((err) => {
					console.log(err)
				})
		})
	}

	return (
		<section className="flex flex-col md:flex-row-reverse h-screen items-center">
			<div className=" bg-yellow-400 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
				<img
					src="https://images.unsplash.com/photo-1610119543583-172a8b7bd36c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGNhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<div
				className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
            flex items-center justify-center"
			>
				<div className="w-full h-full overflow-y-auto">
					<h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
						Create Your Account
					</h1>

					<form onSubmit={(event) => handleSubmit(event)} className="mt-6">
						<div>
							<label className="block text-gray-700">Username</label>
							<input
								type="username"
								name="username"
								value={newUser.username}
								onChange={handleChange}
								placeholder="Enter your username"
								className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
								autofocus
								autocomplete
								required
							/>
						</div>
						<div>
							<label className="block text-gray-700">Email Address</label>
							<input
								type="email"
								name="email"
								value={newUser.email}
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
								value={newUser.password}
								onChange={handleChange}
								placeholder="Enter Password"
								className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none"
								required
							/>
						</div>

						<div className="mt-4">
							<label className="block text-gray-700">Profile Picture</label>
							<input
								type="text"
								name="profilePicture"
								value={newUser.profilePicture}
								onChange={handleChange}
								placeholder="Enter your profilePicture"
								className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none"
								required
							/>
						</div>

						<div className="mt-4">
							<label className="block text-gray-700">Location: </label>
							<input
								type="location"
								disabled
								name="location"
								value={newUser.lat}
								onChange={handleChange}
								placeholder="Set Latitude"
								className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:bg-yellow-400
                    focus:bg-white focus:outline-none"
							/>
						</div>

						<div className="mt-4">
							<input
								type="location"
								disabled
								name="location"
								value={newUser.lng}
								onChange={handleChange}
								placeholder="Set Longitude"
								className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none"
							/>
						</div>

						<div className="mt-4 flex space-x-2">
							<input
								type="location"
								disabled
								name="location"
								value={newUser.location}
								onChange={handleChange}
								placeholder="Enter Your Location"
								className="w-4/6 px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none"
							/>
							<button
								type="button"
								onClick={getLocation}
								className=" w-auto bg-yellow-500 hover:bg-yellow-400 rounded-lg shadow-xl bottom-1/2 font-medium text-white px-6 py-2 float-right my-3"
							>
								SET LOCATION
							</button>
						</div>

						<button
							type="submit"
							className="w-full block bg-yellow-500 hover:bg-yellow-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                    px-4 py-3 mt-6"
						>
							Register
						</button>
					</form>

					<hr className="my-6 border-gray-300 w-full" />
					<p className="mt-8">Already have account?</p>
					<Link to="/login">
						<p className="mt-2 text-blue-400 hover:text-blue-600 cursor-pointer">
							Login
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
	)
}
