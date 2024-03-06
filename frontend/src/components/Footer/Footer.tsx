import './Footer.css';
import { Icon } from '@iconify/react';

const Footer = () => {
	const handleBackToTop = () => {
		// Scroll to the top of the page when the button is clicked
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // You can adjust the scrolling behavior
		});
	};

	return (
		<div className='footer-outer-container'>
			<div className='footer-container'>
				<div className='rights-text' style={{ color: '#FFF' }}>
					<span className='sub-text'>
						© טרייד אין הרצליה - כל הזכויות שמורות
					</span>
				</div>
				<button
					className='back-to-top-button bradius'
					onClick={handleBackToTop}
				>
					<Icon icon='mdi:arrow-up'></Icon>
				</button>
			</div>
		</div>
	);
};

export default Footer;
