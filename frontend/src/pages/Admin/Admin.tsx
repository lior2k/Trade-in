import React from 'react';
import './Admin.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import List from '../../components/List/List';
import Footer from '../../components/Footer/Footer';
import { car } from '../../constants/cardata';

const Admin = () => {
	return (
		<>
			<NavBar />
			<div
				className='admin-container'
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<SearchBar />
				<List title='On Sale' carsData={[car, car, car]}></List>
				<List
					title='Search Results'
					carsData={[car, car, car, car, car, car, car, car]}
				></List>
			</div>
			<Footer />
		</>
	);
};

export default Admin;
