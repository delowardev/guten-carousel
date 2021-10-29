import { useState, useEffect, Fragment, useRef } from 'react';
import Image from './image';

const { __ } = wp.i18n;

export default function Slider( props ) {
	const { images, setAttributes, attributes: {
		autoplay,
		autoplayTimeout,
		autoplaySpeed,
		navButtons,
		navPrevText,
		navNextText,
		sliderDots,
		dotHeight,
		dotWidth,
		dotSpacing,
	} } = props;
	const [ selectedItem, setSelectedItem ] = useState( null );
	const [ slide, setSlide ] = useState( 0 );
	const [ slideState, setSlideState ] = useState( '' );
	const total = images.length;
	const slideLoop = useRef();

	const _onSelectImage = ( index ) => {
		setSelectedItem( index );
	};

	const _onRemove = ( index ) => {
		const _images = images.slice();
		_images.splice( index, 1 );
		setAttributes( { images: _images } );
	};

	const _slideTo = ( index ) => {
		if ( typeof index !== 'number' ) {
			return;
		}
		let _index = index;
		if ( index > total - 1 ) {
			_index = total - 1;
		}
		if ( index < 0 ) {
			_index = 0;
		}
		setSlide( _index );
	};

	const _nextSlide = () => {
		setSlide( ( prev ) => prev >= total - 1 ? 0 : prev + 1 );
	};

	const _prevSlide = () => {
		setSlide( ( prev ) => prev < 1 ? total - 1 : prev - 1 );
	};

	const wrapperStyle = {
		'--autoplay-speed': autoplaySpeed + 'ms',
		'--dot-height': dotHeight + 'px',
		'--dot-width': dotWidth + 'px',
		'--dot-spacing': dotSpacing + 'px',
	};

	const style = {
		transform: `translateX(${ ( slide * -100 ) }%)`,
	};

	const pause = () => {
		clearInterval( slideLoop.current );
		setSlideState( '⏸ Paused' );
	};

	const resume = () => {
		clearTimeout( slideLoop.current );
		slideLoop.current = ( setInterval( _nextSlide, autoplayTimeout ) );
		setSlideState( '🔴 Running' );
	};

	useEffect( () => {
		if ( autoplay ) {
			resume();
		} else {
			pause();
		}
	}, [ images, autoplay, autoplayTimeout, autoplaySpeed ] );

	return (
		<Fragment>
			<div>Slider state: { slideState }</div>

			<div
				onMouseEnter={ pause }
				onMouseLeave={ resume }
				className="guten-carousel-control-wrap"
				style={ wrapperStyle }

			>

				{
					sliderDots && (
						<div className="guten-carousel-dots">
							{ images.map( ( _, index ) => (
								<button onClick={ _slideTo.bind( null, index ) } className={ `guten-carousel-dot${ slide === index ? ' guten-carousel-dot-active' : '' }` } />
							) ) }
						</div>
					)
				}

				{
					navButtons && (
						<div className="guten-carousel-navs">
							<button onClick={ _prevSlide } className="guten-carousel-nav guten-carousel-nav-left">
								{ navPrevText || __( 'Prev' ) }
							</button>
							<button onClick={ _nextSlide } className="guten-carousel-nav guten-carousel-nav-right">
								{ navNextText || __( 'Next' ) }
							</button>
						</div>
					)
				}

				<div className="guten-carousel-wrap">
					<div className="guten-carousel" style={ style }>
						{
							images.map( ( image, index ) => (
								<div onMouseLeave={ _onSelectImage.bind( null, null ) } onMouseEnter={ _onSelectImage.bind( null, index ) } className="guten-carousel-slide" key={ image.id }>
									<Image
										onRemove={ _onRemove.bind( null, index ) }
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
			</div>
		</Fragment>
	);
}
