import React, { useState } from 'react';
import './ImageSlider.css';
import { BACKEND_BASE_URL } from '../../constants/constants';

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
	const [imageIndex, setImageIndex] = useState<number>(0);

	const goToPreviousImage = () => {
		const onFirstImage = imageIndex === 0;
		const newIndex = onFirstImage ? images.length - 1 : imageIndex - 1;
		setImageIndex(newIndex);
	};

	const goToNextImage = () => {
		const onLastImage = imageIndex === images.length - 1;
		const newIndex = onLastImage ? 0 : imageIndex + 1;
		setImageIndex(newIndex);
	};

	const goToIndex = (index: number) => {
		setImageIndex(index);
	};

	return (
		<div className='slider'>
			<div className='arrow left' onClick={goToPreviousImage}>
				🡠
			</div>
			<div className='arrow right' onClick={goToNextImage}>
				🡢
			</div>
			<div
				style={{
					backgroundImage: `url(${BACKEND_BASE_URL}/images/${images[imageIndex]})`,
				}}
				className='slide'
			></div>
			<div className='dots-container'>
				{images.map((image, index) => (
					<div className='dot' onClick={() => goToIndex(index)}>
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
