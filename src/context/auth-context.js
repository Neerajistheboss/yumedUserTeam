import { createContext } from 'react'
import moment from 'moment'
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
	date: moment().format('MM-DD-YYYY'),
	time: null,
	docName: null,
	docId: null,
	hospitalId: '5ed4d26c7004f434b8f8d34e',
	cost: 300,
	login: () => {},
	logout: () => {},
})
