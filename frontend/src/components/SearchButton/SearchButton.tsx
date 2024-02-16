import './SearchButton.css';
import { Icon } from '@iconify/react';

const SearchButton = () => {
	return (
		<button type='submit' className='search-button'>
			<span>חיפוש</span>
			<Icon className='search-icon' icon='material-symbols:search'></Icon>
		</button>
	);
};

export default SearchButton;
