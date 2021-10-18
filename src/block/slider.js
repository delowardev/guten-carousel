import { useState, useEffect, Fragment } from 'react';
import Image from './image';

export default function Slider( props ) {
	const { images, setAttributes, isSelected } = props;
	const [ selectedItem, setSelectedItem ] = useState( null );
	const [ slide, setSlide ] = useState( 0 );
	const [ slideLoop, setSlideLoop ] = useState( null );
	const [ slideState, setSlideState ] = useState( '' );
	const total = images.length;

	const _onSelectImage = ( index ) => {
		setSelectedItem( index );
	};

	const _onRemove = ( index ) => {
		const _images = images.slice();
		_images.splice( index, 1 );
		setAttributes( { images: _images } );
	};

	const _onMoveBackward = ( x ) => {
		const y = x - 1;
		const _images = images.slice();
		_images[ x ] = _images.splice( y, 1, images[ x ] )[ 0 ];
		setAttributes( { images: _images } );
	};

	const _onMoveForward = ( x ) => {
		const y = x + 1;
		const _images = images.slice();
		_images[ x ] = _images.splice( y, 1, images[ x ] )[ 0 ];
		setAttributes( { images: _images } );
	};

	const _nextSlide = () => {
		setSlide( ( prev ) => {
			return prev >= total - 1 ? 0 : prev + 1;
		} );
	};
	//
	// const _prevSlide = () => {
	// 	setSlide( ( prev ) => prev < 1 ? images.length : prev - 1 );
	// };

	const style = {
		transform: `translateX(${ ( slide * -100 ) }%)`,
	};

	const pause = () => {
		clearInterval( slideLoop );
		setSlideState( '⏸ Paused' );
	};

	const resume = () => {
		clearTimeout( slideLoop );
		setSlideLoop( setInterval( _nextSlide, 2000 ) );
		setSlideState( '🔴 Running' );
	};

	useEffect( () => {
		resume();
	}, [ images ] );

	return (
		<Fragment>
			<div>Slider state: { slideState }</div>
			<div onMouseEnter={ pause } onMouseLeave={ resume } className="guten-carousel-wrap">
				<div className="guten-carousel" style={ style }>
					{
						images.map( ( image, index ) => (
							<div onMouseLeave={ _onSelectImage.bind( null, null ) } onMouseEnter={ _onSelectImage.bind( null, index ) } className="guten-carousel-slide" key={ image.id }>
								<Image
									onRemove={ _onRemove.bind( null, index ) }
									onMoveBackward={ _onMoveBackward.bind( null, index ) }
									onMoveForward={ _onMoveForward.bind( null, index ) }
									index={ index }
									isSelected={ selectedItem === index }
									image={ image }
									isFirstItem={ index === 0 }
									isLastItem={ index + 1 === images.length }
								/>
							</div>
						) )
					}
				</div>
			</div>
		</Fragment>
	);
}
