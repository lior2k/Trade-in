import './SearchButton.css';
import { Icon } from '@iconify/react';

interface SearchButtonProps {
	type?: 'submit' | 'button';
	onPress?: () => void;
	icon?: string;
	text?: string;
	style?: {};
}

const SearchButton: React.FC<SearchButtonProps> = ({
	type = 'submit',
	onPress,
	icon = 'material-symbols:search',
	text = 'חיפוש',
	style,
}) => {
	if (onPress) {
		return (
			<button
				type={type}
				className='search-button'
				onClick={onPress}
				style={style}
			>
				<span>{text}</span>
				<Icon className='search-icon' icon={icon}></Icon>
			</button>
		);
	} else {
		return (
			<button type={type} className='search-button' style={style}>
				<span>{text}</span>
				<Icon className='search-icon' icon={icon}></Icon>
			</button>
		);
	}
};

export default SearchButton;
