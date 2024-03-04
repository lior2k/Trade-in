import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarData } from '../../../constants/constants';
import ListItem from '../../../components/ListItem/ListItem';
import { Icon } from '@iconify/react';
import useWindowDimensions from '../../../hooks/useWindowsDimensions';
import './HomePageCarousel.css';

const HomePageCarousel: React.FC<{ carList: CarData[] }> = ({ carList }) => {
	const dimensions = useWindowDimensions();
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: dimensions.width < 1600 ? 3 : 4,
			// slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			// slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			// slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<div className='carousel-outer-wrapper bglightgrey top-minus'>
			<div className='carousel-wrapper'>
				<div className='title-wrapper'>
					<h2 className='section-title'>רכבים מובילים</h2>
					<span className='sub-text theme-link-text'>
						לכל הרכבים<Icon icon='uit:arrow-up-left'></Icon>
					</span>
				</div>
				<Carousel
					swipeable={false}
					draggable={false}
					// showDots={true}
					responsive={responsive}
					ssr={false} // means to render carousel on server-side.
					infinite={true}
					//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
					autoPlay={true}
					autoPlaySpeed={5000}
					keyBoardControl={true}
					customTransition='all 0.5s linear'
					// transitionDuration={500}
					containerClass='carousel-container'
					// removeArrowOnDeviceType={['tablet', 'mobile']}
					//   deviceType={this.props.deviceType}
					// dotListClass='custom-dot-list-style'
					itemClass='carousel-item'
				>
					{carList.map((carData, index) => (
						<ListItem carData={carData} key={index} onPress={() => {}} />
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default HomePageCarousel;
