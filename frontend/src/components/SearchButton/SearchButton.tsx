import './SearchButton.css';
import { Icon } from '@iconify/react';

interface SearchButtonProps {
	type?: 'submit' | 'button';
	onPress?: () => void;
	icon?: string;
	text?: string;
	className?: string;
	style?: {};
}

const SearchButton: React.FC<SearchButtonProps> = ({
	type = 'submit',
	onPress,
	icon = 'material-symbols:search',
	text = 'חיפוש',
	className,
	style,
}) => {
	const classname = `search-button ${className}`;
	if (onPress) {
		return (
			<button type={type} className={classname} onClick={onPress} style={style}>
				<span>{text}</span>
				<Icon className='search-icon' icon={icon}></Icon>
			</button>
		);
	} else {
		return (
			<button type={type} className={classname} style={style}>
				<span>{text}</span>
				<Icon className='search-icon' icon={icon}></Icon>
			</button>
		);
	}
};

export default SearchButton;
