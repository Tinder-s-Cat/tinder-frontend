import './App.css'
import Dasboard from './screen/Dashboard'
import LandingPage from './screen/LandingPage'
import LoginPage from './screen/LoginPage'
import RegisterPage from './screen/RegisterPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/dashboard">
						<Dasboard />
					</Route>
					<Route path="/login">
						<LoginPage />
					</Route>
					<Route path="/register">
						<RegisterPage />
					</Route>
					<Route path="/">
						<LandingPage />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
