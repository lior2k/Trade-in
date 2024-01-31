import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import './List.css';
import { useRef } from 'react';
import ListItem from '../ListItem/ListItem';
import CarDetails from '../CarDetails/CarDetails';
import { CarData, car, another_car } from '../../constants/cardata';
import axios from 'axios';

const List = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const listRef = useRef<HTMLDivElement>(null);
	const demoCarList = [
		car,
		another_car,
		car,
		another_car,
		another_car,
		car,
		car,
		another_car,
	];
	const [carList, setCarList] = useState<JSX.Element[]>([]);
	const [selectedCar, setSelectedCar] = useState<CarData | null>(null);
	useEffect(() => {
		// fetchPopularCars();
		let carArray = demoCarList.map((car: CarData) => (
			<div onClick={() => setSelectedCar(car)}>
				<ListItem carData={car} />
			</div>
		));
		setCarList(carArray);
	}, []);

	const fetchPopularCars = async () => {
		try {
			const response = await axios.get('url');
			// set car list
		} catch (err) {
			console.log(err);
		}
	};

	const handleArrowClick = (dir: string) => {
		if (listRef.current === undefined || listRef.current === null) {
			return;
		}
		let dist = listRef.current.getBoundingClientRect().x - 50;
		if (dir === 'left' && slideNumber > 0) {
			setSlideNumber(slideNumber - 1);
			listRef.current.style.transform = `translateX(${dist + 400}px)`;
		}
		if (dir === 'right' && slideNumber < 6) {
			setSlideNumber(slideNumber + 1);
			listRef.current.style.transform = `translateX(${dist - 400}px)`;
		}
	};

	return (
		<div style={{ width: '100%' }}>
			{/* list */}
			<div className='list-outer-container'>
				<span className='title'>Popular Cars</span>
				<div className='list-wrapper-container'>
					<Icon
						icon='material-symbols:arrow-back-ios'
						className='left-icon'
						onClick={() => handleArrowClick('left')}
					></Icon>

					<div className='list' ref={listRef}>
						{carList}
					</div>

					<Icon
						icon='material-symbols:arrow-forward-ios'
						className='right-icon'
						onClick={() => handleArrowClick('right')}
					></Icon>
				</div>
			</div>

			{/* pop up window */}
			{selectedCar && (
				<div className='selected-car-info-window'>
					<button
						className='selected-car-close-button'
						onClick={() => {
							setSelectedCar(null);
						}}
					>
						<Icon
							className='selected-car-close-icon'
							icon='material-symbols:close'
						></Icon>
					</button>
					<CarDetails carData={selectedCar}></CarDetails>
				</div>
			)}
		</div>
	);
};

export default List;
