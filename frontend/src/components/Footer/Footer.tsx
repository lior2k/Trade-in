import './Footer.css';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
	const navigate = useNavigate();
	return (
		<div className='footer-outer-container'>
			<div className='footer-inner-container'>
				<h3>צרו קשר</h3>
				<p>
					<strong>טלפון: </strong>
					<a href='tel:050-5300554' className='link'>
						050-5300554
					</a>
				</p>
				<p>
					<strong>אימייל: </strong>
					<a href='mailto:avi.tih@gmail.com' className='link'>
						avi.tih@gmail.com
					</a>
				</p>

				<p style={{ display: 'inline' }}>
					<strong>כתובת: </strong>דוד אלרואי 2 הרצליה
				</p>
			</div>

			<div className='footer-inner-container'>
				<h3>קישורים</h3>
				<button className='footer-button link' onClick={() => navigate('/')}>
					טרייד-אין הרצליה
				</button>
				<button
					className='footer-button link'
					onClick={() => navigate('/search')}
				>
					רכבים למכירה
				</button>
			</div>

			<div className='footer-inner-container' style={{ alignItems: 'center' }}>
				<h3>סושיאל מדיה</h3>

				<a
					href='https://www.facebook.com/avitih'
					target='_blank'
					rel='noreferrer'
					className='button facebook'
					style={{ margin: '2px' }}
				>
					<Icon icon='ic:baseline-facebook' className='icon'></Icon>
				</a>

				<a
					href='https://www.instagram.com/shachoach/'
					rel='noreferrer'
					target='_blank'
					className='button instagram'
					style={{ margin: '2px' }}
				>
					<Icon icon='mdi:instagram' className='icon'></Icon>
				</a>
			</div>
		</div>
	);
};

export default Footer;
