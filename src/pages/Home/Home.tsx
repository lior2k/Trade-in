import NavBar from '../../components/NavBar/NavBar';
import List from '../../components/List/List';
import Search from '../../components/Search/Search';

const Home = () => {
	return (
		<div className='home-container'>
			<NavBar />
			<List />
			<Search />
		</div>
	);
};

export default Home;
