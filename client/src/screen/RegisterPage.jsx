import React, { useState } from 'react'
import { Link, history, useHistory } from 'react-router-dom'

export default function RegisterPage() {
	const history = useHistory()
	const [newUser, setNewUser] = useState({
		username: "",
		email: "",
		location: "",
		password: "",
		profilPicture: ""
	})

	const handleChange = (e) => {
		setNewUser({
		  ...newUser,
		  [e.target.name]: e.target.value
		})
	}

	const handleSubmit = () => {
		history('/login')
	}
	

	return (
		<section className="flex flex-col md:flex-row-reverse h-screen items-center">
			<div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
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
				<div className="w-full h-100">
					<h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
						Register to your account
					</h1>

					<form className="mt-6" onSubmit={() => handleSubmit()} method="POST">
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
								minlength="6"
								className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none"
								required
							/>
						</div>

						<button
							type="submit"
							className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
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
