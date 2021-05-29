import React from 'react'
import UserProfile from './UserProfileCard'
import MatchesCard from './MatchesCard'
export default function Dashboard() {
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
									<div className="w-12 h-12">
										<img
											className="rounded-full object-fill w-full h-full cursor-pointer"
											src="https://i.imgur.com/657wEgh.jpg"
											alt="profile picture"
										/>
									</div>
								</div>
								<div className="w-6/12">
									<h1 className="text-left text-white font-semibold text-lg">
										@Username
									</h1>
								</div>
								<div className="w-3/12">
									<button className=" px-2 py-1 bg-yellow-200 hover:bg-yellow-500 rounded-xl text-yellow-900">
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
					<MatchesCard />
					<MatchesCard />
					<MatchesCard />
					<MatchesCard />
					<MatchesCard />
				</div>
			</section>
			{/* Main Dashboard isinya nested router */}
			<section className="w-9/12 h-full bg-yellow-50 flex flex-row items-center justify-center">
				<UserProfile />
			</section>
		</div>
	)
}
