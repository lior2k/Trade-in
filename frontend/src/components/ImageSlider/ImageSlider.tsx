import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ImageSlider.css';
import { BACKEND_BASE_URL } from '../../constants/constants';

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
	const [imageIndex, setImageIndex] = useState<number>(0);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const goToPreviousImage = () => {
		const onFirstImage = imageIndex === 0;
		const newIndex = onFirstImage ? images.length - 1 : imageIndex - 1;
		setImageIndex(newIndex);
	};

	const goToNextImage = useCallback(() => {
		const onLastImage = imageIndex === images.length - 1;
		const newIndex = onLastImage ? 0 : imageIndex + 1;
		setImageIndex(newIndex);
	}, [imageIndex, images]);

	const goToIndex = (index: number) => {
		setImageIndex(index);
	};

	useEffect(() => {
		/*
			component renders -> timerRef is assigned the timeout function
			-> if arrows are not clicked timeout will be called and cause a rerender
			which will proc the useeffect again and so on and so on. if an arrow is clicked
			the timeout is cleared and the useeffect is called again meaning the timer resets.
		*/
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		timerRef.current = setTimeout(() => {
			goToNextImage();
		}, 3500);

		return () => clearTimeout(timerRef.current as NodeJS.Timeout);
	}, [goToNextImage]);

	return (
		<div className='slider'>
			<div className='arrow left' onClick={goToPreviousImage}>
				🡠
			</div>
			<div className='arrow right' onClick={goToNextImage}>
				🡢
			</div>
			<div className='overflow-hidden'>
				<div
					className='slider-container'
					style={{
						width: `${100 * images.length}%`,
						transform: `translateX(-${(imageIndex * 100) / images.length}%)`,
					}}
				>
					{images.map((imageURL, index) => (
						<div
							key={index}
							className='slide'
							style={{
								backgroundImage: `url(${BACKEND_BASE_URL}/images/${imageURL})`,
								width: `${100 / images.length}%`,
							}}
						></div>
					))}
				</div>
			</div>
			<div className='dots-container'>
				{images.map((_, index) => (
					<div key={index} className='dot' onClick={() => goToIndex(index)}>
						{index === imageIndex ? (
							<span>&#x25CF;</span>
						) : (
							<span>&#x25CB;</span>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

// empty circle &#x25CB;
// filled circle &#x25CF;

export default ImageSlider;
