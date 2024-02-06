import NavBar from '../../components/NavBar/NavBar';
import List from '../../components/List/List';
import Search from '../../components/Search/Search';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
	return (
		<>
			<div className='home-container'>
				<NavBar />
				<List title='On Sale' />
				<Search />
				<FloatingButtons />
			</div>
			<Footer />
		</>
	);
};

export default Home;
