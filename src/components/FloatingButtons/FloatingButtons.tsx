import React, { useState } from 'react';
import './FloatingButtons.css';
import { Icon } from '@iconify/react';

const FloatingButtons = () => {
	const [contactsToggled, setContactsToggled] = useState<boolean>(false);

	const toggleContactInfo = () => {
		setContactsToggled(!contactsToggled);
	};

	return (
		<div className='floating-buttons'>
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
			<button className='button phone' onClick={toggleContactInfo}>
				<Icon icon='ic:baseline-phone' className='icon'></Icon>
			</button>

			{contactsToggled && (
				<div className='contacts-popup-window'>
					<div className='flex-row-container upper-section'>
						<Icon
							icon='mdi:location'
							style={{ width: '24px', height: '24px' }}
						></Icon>
						<h4>Contact Us</h4>
						<button className='toggle-icon'>
							<Icon
								icon='fe:arrow-down'
								onClick={toggleContactInfo}
								style={{ width: '24px', height: '24px' }}
							></Icon>
						</button>
					</div>

					<a
						style={{ display: 'flex', flex: 1 }}
						href="https://www.google.com/maps/place/David+Alro'i+St+2,+Herzliya/@32.156607,34.83553,17z/data=!3m1!4b1!4m5!3m4!1s0x151d486b7ad87c23:0xf57db8933265218!8m2!3d32.1566025!4d34.8381049?entry=ttu"
						target='_blank'
						rel='noreferrer'
					>
						<img
							src='/images/location.png'
							alt='location'
							className='location-image'
						></img>
					</a>

					<p className='contact-info' style={{ margin: 0 }}>
						דויד אלרואי 2, Herzliya, Israel
					</p>

					<div className='flex-row-container lower-section'>
						<p className='contact-info'>Contact:</p>
						<p className='contact-info'>050-5277127, 050-5300554</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default FloatingButtons;
