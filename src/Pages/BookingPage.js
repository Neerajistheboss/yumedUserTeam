import React, { useState, useContext, useEffect } from 'react'
// import DocCard from '../components/DocCard'
import { AuthContext } from '../context/auth-context'
import SubmitBtn from '../Components/submitBtn'
import DT from '../Components/DT'
const BookingPage = () => {
	const auth = useContext(AuthContext)
	const [formCompleted, setFormCompleted] = useState(true)
	const [btnStyle, setBtnStyle] = useState('btn-light disabled border m-3')
	const [btnText, setBtnText] = useState('Fill Details to Proceed')
	const [fields, setFields] = useState({
		patientName: '',
		age: '',
		gender: '',
		address: '',
		phone: '',
		time: auth.timeSlot,
	})
	useEffect(() => {
		if (!auth.isLoggedIn) setBtnText('Log In First')
		setBtnStyle('btn-warning disabled border m-3 text-white')
	}, [auth.isLoggedIn])

	const doctor = {
		specailisation: 'Medicine',
		education: 'MBBS',
		experience: 10,
		normalFee: 300,
	}

	const textChangeHandler = (event) => {
		const value = event.target.value

		setFields({
			...fields,
			[event.target.name]: value,
		})

		if (
			fields.patientName.length > 1 &&
			fields.age.length > 1 &&
			fields.gender.length > 1 &&
			fields.address.length > 1 &&
			fields.phone.length > 1
		) {
			setFormCompleted(true)
			auth.patientName = fields.patientName
			setBtnStyle('btn-primary m-3 ')
			setBtnText('Make Payment')
		} else {
			setFormCompleted(false)
			setBtnStyle('btn-light disabled border m-3')
			setBtnText('Fill Details to Proceed')
		}
	}

	return (
		<div className='container-fluid'>
			<DT />
			{/* <DocCard doc={doctor} bookbtn={false}/> */}
			<h3 className='text-center'>Bookin Details</h3>

			<div className='mt-3 pl-1'>
				<div className='form-group row'>
					<label className='col-2' htmlFor='name'>
						Patient Name
					</label>
					<div className='col-8'>
						<input
							value={fields.name}
							onChange={textChangeHandler}
							type='text'
							name='patientName'
							className='form-control'
							id='name'
							aria-describedby='emailHelp'></input>
					</div>
				</div>
				<div className='form-group row'>
					<label className='col-2' htmlFor='age'>
						Age
					</label>
					<div className='col-8'>
						<input
							value={fields.age}
							onChange={textChangeHandler}
							type='text'
							name='age'
							className='form-control'
							id='age'
							aria-describedby='emailHelp'></input>
					</div>
				</div>

				<div class='form-group row pl-3'>
					<label className='mr-3' htmlFor='age'>
						Gender
					</label>
					<input
						className=' align-self-center'
						onClick={textChangeHandler}
						type='radio'
						name='gender'
						id='exampleRadios2'
						value='male'
					/>
					<label className='align-self-center' for='exampleRadios2'>
						Male
					</label>
					<input
						className=' align-self-center'
						onClick={textChangeHandler}
						type='radio'
						name='gender'
						id='exampleRadios2'
						value='female'
					/>
					<label className='align-self-center' for='exampleRadios2'>
						Female
					</label>
				</div>

				<div className='form-group row'>
					<label className='col-2' htmlFor='address'>
						Address
					</label>
					<div className='col-8'>
						<input
							value={fields.address}
							onChange={textChangeHandler}
							type='text'
							name='address'
							className='form-control'
							id='address'
							aria-describedby='emailHelp'></input>
					</div>
				</div>
				<div className='form-group row'>
					<label className='col-2' htmlFor='phone'>
						Phone
					</label>
					<div className='col-8'>
						<input
							value={fields.phone}
							onChange={textChangeHandler}
							type='text'
							name='phone'
							className='form-control'
							id='phone'
							aria-describedby='emailHelp'></input>
					</div>
				</div>
			</div>

			<hr class='my-4' />
			<div>
				<h5>Payement Details</h5>
				<div class='justify-content-between d-flex my-1'>
					<span>Appointment Fee</span> <span>300</span>
				</div>
				<div class='justify-content-between d-flex my-1'>
					<span>Service Charge</span>
					<span>0</span>
				</div>
				<div class='justify-content-between d-flex my-1'>
					<span>Discount</span>
					<span>0</span>{' '}
				</div>
				<div class='justify-content-between d-flex my-1'>
					<span>GST on Service Charge</span>
					<span>18%</span>
				</div>
				<div class='justify-content-between d-flex my-1'>
					<span>Total </span>
					<span>350</span>
				</div>
			</div>
			<hr class='my-4' />
			<div className='text-center'>
				{<SubmitBtn fun='payment' className={btnStyle} text={btnText} />}
			</div>
			{/* {!formCompleted&&<h3>Fill the form to continue</h3>} */}
		</div>
	)
}

export default BookingPage
