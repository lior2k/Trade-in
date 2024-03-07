import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarData } from '../../../constants/constants';
import ListItem from '../../../components/ListItem/ListItem';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import useWindowDimensions from '../../../hooks/useWindowsDimensions';
import { useState, useEffect } from 'react';
import './HomePageCarousel.css';

const HomePageCarousel: React.FC<{ carList: CarData[] }> = ({ carList }) => {
	const ArrowRightButton = (props: any) => {
		const { onClick } = props;
		return (
			<div className='carousel-arrow arrow-right-wrapper' onClick={onClick}>
				<Icon icon='fluent:ios-arrow-right-24-regular'></Icon>
			</div>
		);
	};

	const ArrowLeftButton = (props: any) => {
		const { onClick } = props;
		return (
			<div className='carousel-arrow arrow-left-wrapper' onClick={onClick}>
				<Icon icon='fluent:ios-arrow-left-24-regular'></Icon>
			</div>
		);
	};

	const dimensions = useWindowDimensions();
	const [slidesToShow, setSlidesToShow] = useState(1);
	useEffect(() => {
		setSlidesToShow(
			dimensions.width <= 767
				? 1
				: dimensions.width <= 1365
				? 2
				: dimensions.width <= 2048
				? 3
				: 4
		);
	}, [dimensions]);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		prevArrow: <ArrowRightButton />,
		nextArrow: <ArrowLeftButton />,
		// rtl: true,
	};
	return (
		<div className='carousel-outer-wrapper bglightgrey top-minus'>
			<div className='carousel-wrapper'>
				<div className='title-wrapper'>
					<h2 className='section-title'>רכבים מובילים</h2>
					<Link to={'/search'}>
						<span className='title-link theme-link-text'>
							לכל הרכבים<Icon icon='uit:arrow-up-left'></Icon>
						</span>
					</Link>
				</div>
				<Slider {...settings}>
					{carList.map((carData, index) => (
						<ListItem
							carData={carData}
							key={index}
							onPress={() => {}}
							style={{ minWidth: '20%' }}
						/>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default HomePageCarousel;
