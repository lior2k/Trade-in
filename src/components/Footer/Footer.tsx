import React from 'react';
import './Footer.css';
import { Icon } from '@iconify/react';

const Footer = () => {
	return (
		<div className='footer-outer-container'>
			<div className='footer-inner-container'>
				<h3>Contact Information</h3>
				<p>
					<strong>Phone: </strong>
					<a href='tel:050-5300554'>050-5300554</a>
				</p>
				<p>
					<strong>Email: </strong>
					<a href='mailto:avi.tih@gmail.com'>avi.tih@gmail.com</a>
				</p>

				<p style={{ display: 'inline' }}>
					<strong>Address: </strong>David Alro'i St 1, Herzliya
				</p>
			</div>

			<div className='footer-inner-container'>
				<h3>Links</h3>
				<a href='/'>Home</a>
				<a href='/about'>About</a>
			</div>

			<div className='footer-inner-container'>
				<h3>Social Media</h3>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
					}}
				>
					<a
						href='https://www.facebook.com/avitih'
						target='_blank'
						rel='noreferrer'
						className='button facebook'
					>
						<Icon icon='ic:baseline-facebook' className='icon'></Icon>
					</a>

					<a
						href='https://www.instagram.com/shachoach/'
						rel='noreferrer'
						target='_blank'
						className='button instagram'
					>
						<Icon icon='mdi:instagram' className='icon'></Icon>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
