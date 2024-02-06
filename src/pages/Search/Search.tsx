import React from 'react';
import './Search.css';
import NavBar from '../../components/NavBar/NavBar';

import SearchBar from '../../components/SearchBar/SearchBar';
import List from '../../components/List/List';

import Footer from '../../components/Footer/Footer';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';

const Search = () => {
	return (
		<>
			<NavBar />
			<div className='search-page-container'>
				<SearchBar />
				<List title={'Search Results'} />
			</div>
			<FloatingButtons />
			<Footer />
		</>
	);
};

export default Search;
