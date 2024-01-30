import './NavBar.css';

// to do - change the first button style to a 'Brand'
const NavBar = () => {
	return (
		<div className='nav-bar-outer-container'>
			<button className='nav-bar-button'>Trade In Herzliya</button>
			<button className='nav-bar-button'>Cars for Sale</button>
			<button className='nav-bar-button'>Leasing</button>
			<button className='nav-bar-button'>Funding</button>
			<button className='nav-bar-button'>Sell Your Car</button>
			<button className='nav-bar-button'>Reviews</button>
		</div>
	);
};

export default NavBar;
