import React from 'react';
import './SearchHeader.css';
import NavBar from '../../../components/NavBar/NavBar';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { CarData } from '../../../constants/constants';

interface SearchHeaderProps {
	setCarList: React.Dispatch<React.SetStateAction<CarData[]>>;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ setCarList }) => {
	const onSearch = (newCarList: CarData[]) => {
		setCarList(newCarList);
	};

	return (
		<div className='search-header-container'>
			<NavBar style={{ color: '#fff' }} />
			<div className='search-header-inner-container'>
				<SearchBar onSearch={onSearch} />
			</div>
		</div>
	);
};

export default SearchHeader;
