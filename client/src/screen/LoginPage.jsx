import React from 'react'
import { Link, useHistory } from 'react-router-dom'
export default function LoginPage() {
	let history = useHistory()

	function handleLogin(event) {
		event.preventDefault()
		history.push('/dashboard/user/1')
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
							onSubmit={(e) => handleLogin(e)}
							className="mt-6"
							action="#"
							method="POST"
						>
							<div>
								<label className="block text-gray-700">Email Address</label>
								<input
									type="email"
									name=""
									id=""
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
									name=""
									id=""
									placeholder="Enter Password"
									minlength="6"
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
