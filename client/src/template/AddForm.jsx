import React from 'react'

export default function AddForm({ setShowModal }) {
	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-auto my-6 mx-auto max-w-3xl">
					{/*content*/}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
							<h3 className="text-3xl font-semibold">Edit Cat</h3>
							<button
								className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={() => setShowModal()}
							>
								<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
									×
								</span>
							</button>
						</div>
						{/*body*/}
						<div className="relative p-6 flex-auto">
							<form className=" w-96">
								<div className="flex items-center justify-between">
									<label htmlFor="">Name:</label>
									<input
										type="text"
										className=" border-black border-2 p-2 mx-2"
									/>
								</div>
								<div className="flex items-center justify-between my-5">
									<label htmlFor="">Age:</label>
									<input
										type="text"
										className=" border-black border-2 p-2 mx-2"
									/>
								</div>
								<div className="flex items-center justify-between my-5">
									<label htmlFor="">Race:</label>
									<input
										type="text"
										className=" border-black border-2 p-2 mx-2"
									/>
								</div>
								<div className="flex items-center justify-between my-5">
									<label htmlFor="">status:</label>
									<input
										type="text"
										className=" border-black border-2 p-2 mx-2 rounded-md"
									/>
								</div>
								<div className="flex items-center justify-between my-5">
									<label htmlFor="">Description:</label>
									<textarea
										type="text"
										className=" border-black border-2 p-2 mx-2"
									/>
								</div>
							</form>
						</div>
						{/*footer*/}
						<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
							<button
								className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => setShowModal()}
							>
								Close
							</button>
							<button
								className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => setShowModal()}
							>
								Save Changes
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	)
}
