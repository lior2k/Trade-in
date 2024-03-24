import './NavBar.css';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const NavBar: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
	const location = useLocation();

	const isActive = (pathname: string) => {
		return location.pathname === pathname ? 'active' : '';
	};

	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

	return (
		<div className='nav-bar-container flex'>
			<Icon
				className='mobile-nav-toggle'
				onClick={() => setIsNavOpen(!isNavOpen)}
				icon={
					isNavOpen
						? 'material-symbols-light:close'
						: 'fluent:navigation-16-regular'
				}
				style={{
					width: '32px',
					height: '32px',
					color: `${
						style ? style.color : isNavOpen ? '#fff' : 'rgb(5, 11, 32)'
					}`,
				}}
			></Icon>

			<nav>
				<ul data-visible={isNavOpen} className='primary-navigation flex'>
					<li>
						<Link
							className={`nav-bar-link ${isActive('/')}`}
							to='/'
							style={style}
						>
							טרייד-אין הרצליה
						</Link>
					</li>

					<li>
						<Link
							className={`nav-bar-link ${isActive('/search')}`}
							to='/search'
							style={style}
						>
							רכבים למכירה
						</Link>
					</li>

					<li>
						<Link className='nav-bar-link' to='' style={style}>
							טרייד-אין
						</Link>
					</li>

					<li>
						<Link className='nav-bar-link' to='' style={style}>
							מימון
						</Link>
					</li>

					<li>
						<Link className='nav-bar-link' to='' style={style}>
							ליסינג
						</Link>
					</li>

					<li>
						<a
							href='https://www.google.com/search?q=%D7%98%D7%A8%D7%99%D7%99%D7%93+%D7%90%D7%99%D7%9F+%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94&oq=%D7%98%D7%A8%D7%99%D7%99%D7%93+%D7%90%D7%99%D7%9F+%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPNIBCDU3NzVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x151d486b7355097d:0x9959dc90e97f4e43,1,,,,'
							rel='noreferrer'
							target='_blank'
							className='nav-bar-link'
							style={style}
						>
							ביקורות
						</a>
					</li>
				</ul>
			</nav>

			<div>
				<img src='favicon.ico' alt='Logo' className='logo' />
			</div>
		</div>
	);
};

export default NavBar;
