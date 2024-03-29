import './HomeHeader.css';
import NavBar from '../../../components/NavBar/NavBar';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import { CarData } from '../../../constants/constants';
import { Icon } from '@iconify/react';
import CarService from '../../../services/CarService';

const HomeHeader = () => {
	const navigate = useNavigate();
	const navigateToSearchPage = (cars: CarData[]) => {
		navigate('/search', { state: { cars } });
	};

	const handleFormSubmit = async (bodyStyle: string) => {
		try {
			const cars = await CarService.getCarsByBodyStyle([bodyStyle]);
			navigateToSearchPage(cars);
		} catch (error) {
			console.error('Error fetching car by body style', error);
		}
	};

	return (
		<div className='home-header-container'>
			<NavBar />
			<div className='home-header-inner-container'>
				<h1 className='main-title'>מצא את הרכב המושלם</h1>
				<span className='sub-text'>מצא רכבים למכירה ולהחלפה</span>
				<SearchBar onSearch={navigateToSearchPage} />
			</div>

			<div className='header-bottom-form-wrapper mobile-hidden'>
				<span
					className='sub-text'
					style={{ display: 'block', marginBlock: '.75rem' }}
				>
					או חפש מודל ספציפי
				</span>
				<div>
					<form className='header-bottom-form'>
						<button
							className='transparent-button'
							type='button'
							onClick={() => handleFormSubmit('חשמלי')}
						>
							<span>חשמלי</span>
							<Icon icon='mdi:electric-charger'></Icon>
						</button>
						<button
							className='transparent-button'
							type='button'
							onClick={() => handleFormSubmit("גי'פ")}
						>
							<span>גי'פ</span>
							<Icon icon='mingcute:jeep-line'></Icon>
						</button>
						<button
							className='transparent-button'
							type='button'
							onClick={() => handleFormSubmit('מסחרי')}
						>
							<span>מסחרי</span>
							<Icon icon='mdi:truck-outline'></Icon>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
	// mingcute:jeep-line גי'פ
	// mdi:electric-charger חשמלי
	// mdi:truck-outline מסחרי
	// mdi:car-sports ספורט
	//
};

export default HomeHeader;
