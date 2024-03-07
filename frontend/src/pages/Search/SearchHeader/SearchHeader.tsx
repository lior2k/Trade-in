import React from 'react';
import './SearchHeader.css';
import NavBar from '../../../components/NavBar/NavBar';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { CarData } from '../../../constants/constants';

const SearchHeader = () => {
	return (
		<div className='search-header-container'>
			<NavBar style={{ color: '#FFF' }} />
			<div className='search-header-inner-container'>
				<SearchBar onSearch={() => {}} />
			</div>
		</div>
	);
};

export default SearchHeader;
