import './HomeHeader.css';
import NavBar from '../../../components/NavBar/NavBar';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import { CarData } from '../../../constants/constants';

const HomeHeader = () => {
	const navigate = useNavigate();
	const navigateToSearchPage = (cars: CarData[]) => {
		navigate('/search', { state: { cars } });
	};

	return (
		<div className='home-header-container'>
			<NavBar />
			<div className='home-header-inner-container'>
				<h1 className='main-title'>מצא את הרכב המושלם</h1>
				<span className='sub-text'>מצא רכבים למכירה ולהחלפה</span>
				<SearchBar onSearch={navigateToSearchPage} />
			</div>
		</div>
	);
};

export default HomeHeader;
