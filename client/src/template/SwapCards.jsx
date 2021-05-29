import React from 'react'

export function SwapCards() {
	return (
		<>
			<div class="p-56">
				<div class="w-96 m-auto ">
					<div class=" grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
						<div className="col-span-3 row-span-4 p-1 m-1">
							<img
								src="https://images.unsplash.com/photo-1559235038-1b0fadf76f78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
								alt="Placeholder"
								className="rounded-t-xl object-cover h-48 w-full"
							/>
						</div>

						<div className="col-span-3 row-span-1">
							<div className="flex align-bottom flex-col leading-none p-2 md:p-4">
								<div className="flex flex-row justify-between items-center">
									<img
										alt="Placeholder"
										className="block rounded-full"
										src="https://picsum.photos/32/32/?random"
									/>
									<span className="ml-2 text-sm"> John Doe </span>
								</div>
							</div>
						</div>

						<div className="col-span-3 row-span-1">
							<header className="flex items-center justify-between leading-tight p-2 md:p-4">
								<h1 className="text-lg">
									<h1 className="no-underline hover:underline text-black">
										Title
									</h1>
								</h1>
								<p className="text-grey-darker text-sm">9 min ago</p>
							</header>
						</div>

						<div className="col-span-3 row-span-1">
							<ul className="flex flex-row pl-2 text-gray-600 hide-scroll-bar">
								<li className="py-1">
									<div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
										<h1 className="">#hogehoge</h1>
									</div>
								</li>
								<li className="py-1">
									<div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
										<h1 className="">#hogehoge</h1>
									</div>
								</li>

								<li className="py-1">
									<div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
										<h1 className="">#hogehoge</h1>
									</div>
								</li>
								<li className="py-1">
									<div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
										<h1 className="">#hogehoge</h1>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}