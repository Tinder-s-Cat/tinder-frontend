import React from 'react'

export function LoginPage() {
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
					className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center"
				>
					<div className="w-full h-100">
						<h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
							Log in to your account
						</h1>

						<form className="mt-6" action="#" method="POST">
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

							<div className="text-right mt-2">
								<h1 className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
									Forgot Password?
								</h1>
							</div>

							<button
								type="submit"
								className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                        px-4 py-3 mt-6"
							>
								Log In
							</button>
						</form>

						<hr className="my-6 border-gray-300 w-full" />
						<p className="mt-8">Need an account?</p>
					</div>
				</div>
			</section>

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

						<form className="mt-6" action="#" method="POST">
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

							<div className="text-right mt-2">
								<h1 className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
									Forgot Password?
								</h1>
							</div>

							<button
								type="submit"
								className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                        px-4 py-3 mt-6"
							>
								Log In
							</button>
						</form>

						<hr className="my-6 border-gray-300 w-full" />
						<p className="mt-8">Need an account?</p>
					</div>
				</div>
			</section>
		</>
	)
}
