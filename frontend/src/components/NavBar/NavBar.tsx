import './NavBar.css';
import { useNavigate } from 'react-router-dom';

// to do - change the first button style to a 'Brand'
const NavBar = () => {
	const navigate = useNavigate();

	return (
		<div className='nav-bar-outer-container'>
			<button className='nav-bar-button' onClick={() => navigate('/')}>
				Trade In Herzliya
			</button>
			<button className='nav-bar-button' onClick={() => navigate('/search')}>
				Cars for Sale
			</button>
			<button className='nav-bar-button'>Trade-in</button>
			<button className='nav-bar-button'>Funding</button>
			<button className='nav-bar-button'>Leasing</button>
			<a
				href='https://www.google.com/search?q=%D7%98%D7%A8%D7%99%D7%99%D7%93+%D7%90%D7%99%D7%9F+%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94&oq=%D7%98%D7%A8%D7%99%D7%99%D7%93+%D7%90%D7%99%D7%9F+%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPNIBCDU3NzVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x151d486b7355097d:0x9959dc90e97f4e43,1,,,,'
				rel='noreferrer'
				target='_blank'
				className='nav-bar-button'
			>
				Reviews
			</a>
		</div>
	);
};

export default NavBar;
