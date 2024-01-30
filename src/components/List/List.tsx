import { Icon } from '@iconify/react';
import React from 'react';
import './List.css';
import { useRef } from 'react';
import { useState } from 'react';
import ListItem from '../ListItem/ListItem';
import { car, another_car } from '../../constants/cardata';

const List = () => {
	const [slideNumber, setSlideNumber] = useState(0);

	const listRef = useRef<HTMLDivElement>(null);

	const handleClick = (dir: string) => {
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
		<div className='list-outer-container'>
			<span className='list-title'>Hot Cars in Stock</span>
			<div className='list-wrapper-container'>
				<Icon
					icon='material-symbols:arrow-back-ios'
					className='left-icon'
					onClick={() => handleClick('left')}
				></Icon>

				<div className='list' ref={listRef}>
					<ListItem carData={car} />
					<ListItem carData={car} />
					<ListItem carData={another_car} />
					<ListItem carData={another_car} />
					<ListItem carData={car} />
					<ListItem carData={another_car} />
					<ListItem carData={car} />
					<ListItem carData={another_car} />
					<ListItem carData={car} />
					<ListItem carData={car} />
					<ListItem carData={another_car} />
				</div>

				<Icon
					icon='material-symbols:arrow-forward-ios'
					className='right-icon'
					onClick={() => handleClick('right')}
				></Icon>
			</div>
		</div>
	);
};

export default List;
