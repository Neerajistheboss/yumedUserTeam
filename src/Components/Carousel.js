// import React, { useState, Fragment } from 'react';
// import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Container } from 'reactstrap';

// const items = [
//     {
//         src: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
//         altText: 'Slide 1',
//         caption: 'Slide 1',
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//     },
//     {
//         src: 'https://images.unsplash.com/photo-1590998059126-835260504b90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
//         altText: 'Slide 2',
//         caption: 'Slide 2',
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//     },
//     {
//         src: 'https://images.unsplash.com/photo-1590998059151-2217b31426ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
//         altText: 'Slide 3',
//         caption: 'Slide 3',
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//     },
//     {
//         src: 'https://images.unsplash.com/photo-1590402494727-0375eeaacf68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
//         altText: 'Slide 4',
//         caption: 'Slide 4',
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//     }
// ];

// const Testimonials = () => {

//     const [activeIndex, setActiveIndex] = useState(0);
//     const [animating, setAnimating] = useState(false);

//     const next = () => {
//         if (animating) return;
//         const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//         setActiveIndex(nextIndex);
//     }

//     const previous = () => {
//         if (animating) return;
//         const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//         setActiveIndex(nextIndex);
//     }

//     const goToIndex = (newIndex) => {
//         if (animating) return;
//         setActiveIndex(newIndex);
//     }

//     const slides = items.map((item) => {
//         return (
//             <CarouselItem
//                 onExiting={() => setAnimating(true)}
//                 onExited={() => setAnimating(false)}
//                 key={item.src}>
//                 <div style={{ backgroundColor: 'rgb(185,247,232)' }} >
//                     <Container style={{ textAlign: 'center', paddingTop: '70px', paddingBottom: '100px' , fontSize:'1.3rem' }}>
//                         <p>{item.text}</p>
//                     </Container>
//                 </div>
//                 <CarouselCaption captionText={item.captionText} captionHeader={item.captionText} />
//             </CarouselItem>
//         );
//     });

//     return (
//         <Fragment>
//             <h2 style={{ 'textAlign':'center' , 'backgroundColor':'rgb(185, 247, 232 )' , 'marginBottom':'0', 'paddingTop':'25px' }}>What Our Users Have To Say?</h2>
//             <Carousel
//                 activeIndex={activeIndex}
//                 next={next}
//                 previous={previous} >
//                 <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
//                 {slides}
//                 <CarouselControl direction='prev' directionText='previous' onClickHandler={previous} />
//                 <CarouselControl direction='next' directionText='next' onClickHandler={next} />
//             </Carousel>
//         </Fragment>
//     );
// }

// export default Testimonials;

// import React from 'react'
// import CarouselSlide from './CarouselSlide'

// const Carousel = () => {
// 	return (
// 		<div
// 			id='carouselExampleControls'
// 			class='carousel slide bg-light'
// 			data-ride='carousel'>
// 			<h3 className='text-center my-3'>What our customers say</h3>
// 			<div class='carousel-inner py-3'>
// 				<div class='carousel-item active'>
// 					<CarouselSlide />
// 				</div>
// 				<div class='carousel-item '>
// 					<CarouselSlide />
// 				</div>
// 				<div class='carousel-item '>
// 					<CarouselSlide />
// 				</div>
// 			</div>
// 			<a
// 				class='carousel-control-prev'
// 				href='#carouselExampleControls'
// 				role='button'
// 				data-slide='prev'>
// 				<span class='carousel-control-prev-icon' aria-hidden='true'></span>
// 				<span class='sr-only'>Previous</span>
// 			</a>
// 			<a
// 				class='carousel-control-next'
// 				href='#carouselExampleControls'
// 				role='button'
// 				data-slide='next'>
// 				<span class='carousel-control-next-icon' aria-hidden='true'></span>
// 				<span class='sr-only'>Next</span>
// 			</a>
// 		</div>
// 	)
// }
// export default Carousel


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