import './App.css'
import Dasboard from './screen/Dashboard'
import LandingPage from './screen/LandingPage'
import LoginPage from './screen/LoginPage'
import RegisterPage from './screen/RegisterPage'
import NotFound from './screen/NotFound'
import Loading from './screen/Loading'
import { GuardProvider, GuardedRoute } from 'react-router-guards'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const requireLogin = (to, from, next) => {
	if (to.meta.auth) {
		if (localStorage.getItem('access_token')) {
			next()
		}
		next.redirect('/login')
	} else {
		next()
	}
}

function App() {
	return (
		<Router>
			<GuardProvider guards={[requireLogin]} loading={Loading} error={NotFound}>
				<div className="App">
					<Switch>
						<GuardedRoute path="/dashboard" meta={{ auth: true }}>
							<Dasboard />
						</GuardedRoute>
						<GuardedRoute exact path="/login">
							<LoginPage />
						</GuardedRoute>
						<GuardedRoute exact path="/register">
							<RegisterPage />
						</GuardedRoute>
						<GuardedRoute exact path="/">
							<LandingPage />
						</GuardedRoute>
						<GuardProvider>
							<NotFound />
						</GuardProvider>
					</Switch>
				</div>
			</GuardProvider>
		</Router>
	)
}

export default App
