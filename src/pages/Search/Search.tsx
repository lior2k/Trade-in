import React from 'react';
import './Search.css';
import NavBar from '../../components/NavBar/NavBar';

import AdvancedSearchBar from '../../components/AdvancedSearchBar/AdvancedSearchBar';

import Footer from '../../components/Footer/Footer';

const Search = () => {
	return (
		<div>
			<NavBar />
			<AdvancedSearchBar />
			<Footer />
		</div>
	);
};

export default Search;
