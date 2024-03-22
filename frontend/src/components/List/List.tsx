import React, { useState, useEffect } from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';
import CarDetails from '../CarDetails/CarDetails';
import { CarData, widthBreakPoints } from '../../constants/constants';
import useWindowDimensions from '../../hooks/useWindowsDimensions';
import ExpandingInput from '../ExpandingInput/ExpandingInput';

interface ListProps {
	title: string;
	carsData: CarData[];
	adminProps?: { deleteItem: (_id: string) => void; isAuthenticated: boolean };
}

const List: React.FC<ListProps> = ({ title, carsData, adminProps }) => {
	const [carList, setCarList] = useState<CarData[]>(carsData);
	const [selectedCar, setSelectedCar] = useState<CarData | null>(null);

	const [itemWidth, setItemWidth] = useState<string>('');
	const windowDimensions = useWindowDimensions();
	useEffect(() => {
		windowDimensions.width <= widthBreakPoints.MOBILE
			? setItemWidth('75%')
			: windowDimensions.width <= widthBreakPoints.TABLET
			? setItemWidth('calc(50% - 1rem)')
			: setItemWidth('calc(25% - 1rem)');
	}, [windowDimensions]);

	const [sortList, setSortList] = useState<boolean>(false);
	const [sortType, setSortType] = useState<string>('');
	useEffect(() => {
		if (sortType === 'מהגבוה לנמוך') {
			carsData.sort((carA: CarData, carB: CarData) => carB.price - carA.price);
		} else if (sortType === 'מהנמוך לגבוה') {
			carsData.sort((carA: CarData, carB: CarData) => carA.price - carB.price);
		}
		setCarList([...carsData]);
	}, [sortType, carsData]);

	return (
		<>
			<div className='list-outer-container'>
				<h2 className='section-title'>{title}</h2>
				<div className='flex-row' style={{ margin: '0 auto' }}>
					<div>
						<span className='mini-title'>מציג {carsData.length} תוצאות</span>
					</div>
					<div className='flex-row'>
						<span className='sub-text'>מיין לפי</span>
						<ExpandingInput
							placeHolder='רגיל'
							isExpanded={sortList}
							setIsExpanded={setSortList}
							value={sortType}
							setValue={setSortType}
							listToRender={['מהגבוה לנמוך', 'מהנמוך לגבוה']}
							style={{
								gap: '1rem',
								padding: '.5rem',
								margin: '0',
								minWidth: '80px',
							}}
						></ExpandingInput>
					</div>
				</div>
				<div
					className='list'
					style={
						windowDimensions.width <= widthBreakPoints.MOBILE
							? { justifyContent: 'center' }
							: {}
					}
				>
					{carList.map((car: CarData, index: number) => (
						<ListItem
							carData={car}
							onPress={() => setSelectedCar(car)}
							key={index}
							width={itemWidth}
							adminProps={adminProps}
						></ListItem>
					))}
				</div>
			</div>

			{selectedCar && (
				<CarDetails
					carData={selectedCar}
					closePopUp={() => setSelectedCar(null)}
				></CarDetails>
			)}
		</>
	);
};

export default List;
