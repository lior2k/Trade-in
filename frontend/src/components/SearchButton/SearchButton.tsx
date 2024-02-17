import './SearchButton.css';
import { Icon } from '@iconify/react';

interface SearchButtonProps {
	type: 'submit' | 'button';
	onPress?: () => void;
	icon: string;
	text: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({
	type,
	onPress,
	icon,
	text,
}) => {
	if (onPress) {
		return (
			<button type={type} className='search-button' onClick={onPress}>
				<span>{text}</span>
				<Icon className='search-icon' icon={icon}></Icon>
			</button>
		);
	} else {
		return (
			<button type={type} className='search-button'>
				<span>{text}</span>
				<Icon className='search-icon' icon={icon}></Icon>
			</button>
		);
	}
};

export default SearchButton;
