import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselSlide from './CarouselSlide'
// import Image1 from '../images/user1.jpg'
// import Image2 from '../images/user2.jpg'
import Image3 from '../images/user3.jpeg'
import Image4 from '../images/user-4.jpg'
import './Carousal.css'
const Slider = () => {
	return (
		<>
			<div className="carousel-wrapper">
				<Carousel infiniteLoop useKeyboardArrows autoPlay stopOnHover interval={3000} showArrows={true} showIndicators showThumbs={false}>
					<div className="bg">

						<h1 className="text-center"> What our Users Say </h1>
						<div className="col-12">
							<img src={Image3} alt="User3" />
							<p className="text-center">
								" Being a working person I hardly get free time.
								And consulting to a doctor was a hectic process for me.
								I am really thankful to YuMedic for solving this &   from past 2 years
								I am getting quality healthcare experience easily by using YuMedic. "
                    			<br />
								<br />
								<span className="text-center">
									- Krishna Kumar Mehta
								</span>
							</p>

						</div>
					</div>

					<div className="bg">

						<h1 className="text-center"> What our Users Say </h1>

						<img src={Image4} alt="User4" />
						<p className="text-center">
							" Living in a distant city like bangalore,
							I always had problems in getting appoitments for my parents in Dhanbad,
							as they had to go for regular health checkups.
							YuMedic served as a boon to me, which enabled me to get appointments for them,
							sitting in bangalore, without any difficulties! "
							<br />
							<br />
							<span className="text-center">
								- Shadman Basher
								</span>
						</p>

					</div>

					{/* <div className="bg">

						<h1 className="text-center"> What our Users Say? </h1>

						<img src={Image1} alt="User3" />
						<p className="text-center">
							" Being a working person I hardly get free time.
							And consulting to a doctor was a hectic process for me.
							I am really thankful to YuMedic for solving this &   from past 2 years
							I am getting quality healthcare experience easily by using YuMedic. "
                    </p>
						<p className="text-center">
							- Krishna Kumar Mehta
					</p>

					</div> */}

				</Carousel>
			</div>
		</>
	);
}

export default Slider;