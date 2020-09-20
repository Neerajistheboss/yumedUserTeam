import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
// import DocCard from '../components/DocCard'
import { AuthContext } from '../context/auth-context'
import Booking from '../Components/Booking'
import moment from 'moment'
const SearchPage = (props) => {
	const auth = useContext(AuthContext)
	let fromhospital = false
	let hospital
	try {
		console.log('inside try')
		const hid = props.match.params.id
		auth.hospitalId = hid
		if (hid) {
			fromhospital = true
			hospital = hid
			console.log(hospital)
		}
		auth.fromHospital = true
		auth.specialisation = null
		auth.city = null
	} catch (error) {
		console.log(error)
	}
	console.log('auth.hospitalId' + hospital)

	let [doctors, setDoctors] = useState([])

	const [divText, setDivText] = useState('Searching Doctors')

	auth.date = moment().format('YYYY/MM/DD')

	useEffect(() => {
		if (!fromhospital) {
			console.log(auth.fromHospital)
			let searchFilter = JSON.parse(localStorage.getItem('filter'))

			auth.specialisation = searchFilter.specialisation
			auth.city = searchFilter.city
			auth.hospitalId = searchFilter.hospitalId
			auth.time = null
			hospital = searchFilter.hospitalId
		}

		let queryStr = `http://${process.env.REACT_APP_YUVER_IP}/api/v1/doctors?`
		if (auth.specialisation)
			queryStr = queryStr + `specialisation=${encodeURI(auth.specialisation)}`
		if (auth.city) queryStr = queryStr + `&city=${auth.city}`
		if (auth.docName) queryStr = queryStr + `&name=${auth.docName}`
		if (auth.hospitalId) queryStr = queryStr + `&hospital=${hospital}`
		console.log(queryStr)
		axios.get(`${queryStr}`).then(function (response) {
			const doctorList = response.data.data
			console.log('doctorList' + doctorList.length)
			setDoctors(doctorList)
			if (doctorList.length == 0) setDivText('Sorry No Doctors Found')
		})
	}, [])

	// let doctors=[{}];

	// useEffect(()=>{
	//     axios.get("http://localhost:8080/api/doctors/search?specialisation=ENT")
	//      .then(function(response){
	//        doctors=response.data.doctors
	//        console.log(doctors)
	//         // setEntries(doctors)

	//      })
	// },[])
	// const doctorList //use axios to search for list of doctors base in parameters in auth context

	return (
		<div style={{ backgroundColor: '#eee', minHeight: '85vh' }}>
			{doctors.length > 0 ? (
				doctors.map((doctor) => (
					<Booking
						photo={'https://i.ibb.co/hFJnBtL/download.jpg'}
						dName={doctor.name}
						speciality={doctor.specialisation}
						hospitalName={doctor.hospital.name}
						city={doctor.city}
						docId={doctor._id}
						hospitalId={doctor.hospital._id}
						avgReviews='2.5'
						numberReviews='Number of Reviews'
						description='Description'
						fee={doctor.normalFee}
					/>
				))
			) : (
				<div
					className='shadow m-3 bg-white '
					style={{ width: '100%', marginTop: '10vh', height: '10vh' }}>
					<h1 className='text-center'>{divText}</h1>
				</div>
			)}
			{/* <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" /> */}
		</div>
	)
}

export default SearchPage
