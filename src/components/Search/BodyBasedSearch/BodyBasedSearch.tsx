import React from 'react';
import './BodyBasedSearch.css';

interface BodyBasedSearchProps {
	bodyStyles: Record<string, boolean>;
	handleBodyStyleToggle: (style: string) => void;
}

const BodyBasedSearch: React.FC<BodyBasedSearchProps> = ({
	bodyStyles,
	handleBodyStyleToggle,
}) => {
	return (
		<ul className='body-type-list'>
			{Object.keys(bodyStyles).map((style: string) => {
				return (
					<li key={style} onClick={() => handleBodyStyleToggle(style)}>
						<img className='image' src={`/images/${style}.png`} alt='Car'></img>
						<p style={{ margin: '0 2px', padding: '2px' }}>
							{style.charAt(0).toUpperCase() + style.slice(1)}
							<input
								type='checkbox'
								checked={bodyStyles[style]}
								style={{ cursor: 'pointer' }}
							></input>
						</p>
					</li>
				);
			})}
		</ul>
	);
};

export default BodyBasedSearch;
