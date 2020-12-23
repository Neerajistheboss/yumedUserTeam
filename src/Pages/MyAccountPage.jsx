import React, { useEffect, useContext, useState } from 'react'
import Download from '../Components/Download'
import Referral from '../Components/Referral'
import AppointmentGroup from '../Components/AppointmentGroup'
import axios from 'axios'
import { AuthContext } from '../context/auth-context'
const MyAccountPage = () => {
	const auth = useContext(AuthContext)
	auth.time = null

	//scrool to top on page load
	useEffect(() =>{
        window.scrollTo(0,0)
	},[])

	
	const [refId, setRefId] = useState(auth.values.referralId)
	const [refPoint, setRefPoint] = useState(auth.values.refPoint)
	useEffect(() => {
		if (auth.values.userId) {


			axios
				.get(
					`${process.env.REACT_APP_YUVER_IP}/api/v1/users/${auth.values.userId}`
				)
				.then(function (response) {
					setRefId(response.data.data.referral.code)
					setRefPoint(response.data.data.referral.count)
					auth.setValues({ ...auth.values, refferalID: response.data.data.referral.code })
					console.log(response.data.data)
				})

			console.log("userId" + auth.values.userId)
		}
	}, [auth.values.userId])
	return (
		<div className="mt-5">
			<h3>Upcoming Appointments</h3>
			<AppointmentGroup type='Upcoming' />
			<h3>Past Appointments</h3>
			<AppointmentGroup type='Past' />
			{<Referral code={refId} point={refPoint} />}
			<Download />
		</div>
	)
}

export default MyAccountPage
