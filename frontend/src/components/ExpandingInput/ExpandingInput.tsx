import React from 'react';
import { Icon } from '@iconify/react';
import './ExpandingInput.css';

interface ExpandingInputProps {
	isExpanded: boolean;
	setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	placeHolder: string;
	listToRender: string[];
	className?: string;
	style?: React.CSSProperties;
}

const ExpandingInput: React.FC<ExpandingInputProps> = ({
	isExpanded,
	setIsExpanded,
	value,
	setValue,
	placeHolder,
	listToRender,
	className,
	style,
}) => {
	const classname = `expanding-input-container ${className}`;
	return (
		<div
			className={classname}
			onClick={() => {
				setIsExpanded(!isExpanded);
			}}
			style={style}
		>
			<span>{value === '' ? placeHolder : value}</span>
			<div className={`expanding bradius ${isExpanded ? 'expanded' : ''}`}>
				<div
					className={`expanding-inner-wrapper ${isExpanded ? 'expanded' : ''}`}
				>
					<ul className='expanded-list'>
						{listToRender.map((value, key) => (
							<li
								className='expanded-list-item'
								key={key}
								value={value}
								onClick={() => setValue(value)}
							>
								{value}
							</li>
						))}
					</ul>
				</div>
			</div>
			{isExpanded ? (
				<Icon className='arrow-down-icon' icon='ep:arrow-up' />
			) : (
				<Icon className='arrow-down-icon' icon='ep:arrow-down' />
			)}
		</div>
	);
};

export default ExpandingInput;
