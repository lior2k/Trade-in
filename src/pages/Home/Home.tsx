import NavBar from '../../components/NavBar/NavBar';
import List from '../../components/List/List';
import Search from '../../components/Search/Search';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import { car, another_car } from '../../constants/cardata';

const Home = () => {
	const cars = [car, car, car, another_car];
	return (
		<>
			<div className='home-container'>
				<NavBar />
				<List title='On Sale' carsData={cars} />
				<Search />
				<FloatingButtons />
			</div>
			<Footer />
		</>
	);
};

export default Home;
