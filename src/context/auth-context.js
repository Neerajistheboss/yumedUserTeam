import { createContext } from 'react'

export const AuthContext = createContext({
	isLoggedIn: false,
	patientName: null,
	userId: null,
	referralId: null,
	name: null,
	token: null,
	location: null,
	specialisation: null,
	city: null,
	showNodal: false,
	date: {},
	time: null,
	docName: null,
	docId: null,
	hospitalId: null,
	cost: 300,
	login: () => {},
	logout: () => {},
})
