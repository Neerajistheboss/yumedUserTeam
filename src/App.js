import React, { useEffect, useState, useCallback, useRef } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'
import Header from './Components/Navbar'
import HomePage from './Pages/HomePage'
import { AuthContext } from './context/auth-context'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import BookingPage from './Pages/BookingPage'
import SearchPage from './Pages/SearchPage'
import Footer from './Components/Footer'
import FailedPage from './Pages/FailedPage'
import SuccessPage from './Pages/SuccessPage'
import MyAccountPage from './Pages/MyAccountPage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import FaqPage from './Pages/FAQPage'
import RefundPage from './Pages/RefundPage'
import TermsPage from './Pages/TermsPage'

// import Path2 from './images/path2.png';

function App() {
	const [token, setToken] = useState(localStorage.getItem('token'))
	const [userId, setUserId] = useState(localStorage.getItem('uid'))

	const login = useCallback((uid, token) => {
		setToken(token)
		setUserId(uid)
	}, [])

	const logout = useCallback(() => {
		setToken(null)
		setUserId(null)
		localStorage.removeItem('token')
		localStorage.removeItem('uid')
	}, [])

	useEffect(() => {
		const token = localStorage.getItem('token')
		const uid = localStorage.getItem('uid')
		setToken(token)
		setUserId(uid)
		login(uid, token)
	}, [])

	const container = useRef(null)

	let routes
	if (token) {
		console.log('has token')
		routes = (
			<Switch>
				<Route path='/search'>
					<SearchPage />
				</Route>
				<Route path='/booking'>
					<BookingPage />
				</Route>
				<Route path='/account'>
					<MyAccountPage />
				</Route>
				<Route path='/fail'>
					<FailedPage />
				</Route>
				<Route path='/success'>
					<SuccessPage />
				</Route>
				<Route path='/about'>
					<AboutPage />
				</Route>
				<Route path='/faqs'>
					<FaqPage />
				</Route>
				<Route path='/refunds'>
					<RefundPage />
				</Route>
				<Route path='/contact'>
					<ContactPage />
				</Route>
				<Route path='/terms'>
					<TermsPage />
				</Route>
				<Route path='/'>
					<HomePage />
				</Route>
				<Redirect to='/' />
			</Switch>
		)
	} else {
		console.log('no token')
		routes = (
			<Switch>
				<Route path='/auth/google/:token/:id' component={HomePage} />

				<Route path='/login'>
					<LoginPage />
				</Route>
				<Route path='/account'>
					<MyAccountPage />
				</Route>
				<Route path='/booking'>
					<BookingPage />
				</Route>
				<Route path='/register'>
					<RegisterPage />
				</Route>
				<Route path='/search'>
					<SearchPage />
				</Route>

				<Route path='/about'>
					<AboutPage />
				</Route>
				<Route path='/faqs'>
					<FaqPage />
				</Route>
				<Route path='/refunds'>
					<RefundPage />
				</Route>
				<Route path='/contact'>
					<ContactPage />
				</Route>
				<Route path='/terms'>
					<TermsPage />
				</Route>
				<Route path='/success'>
					<SuccessPage />
				</Route>

				<Route exact path='/'>
					<HomePage />
				</Route>
				<Redirect to='/' />
			</Switch>
		)
	}

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!token,
				token: token,
				userId: userId,
				login: login,
				logout: logout,
			}}>
			<Router>
				<div></div>
				<Header />
				<Switch> {routes} </Switch> <Footer />
			</Router>
		</AuthContext.Provider>
	)
}

export default App
