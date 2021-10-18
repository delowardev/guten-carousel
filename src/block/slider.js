import { useState } from 'react';
import Image from './image';

export default function Slider( props ) {
	const { images, setAttributes, isSelected } = props;

	const [ selectedItem, setSelectedItem ] = useState( null );

	const onSelectImage = ( index ) => {
		setSelectedItem( index );
	};

	const onRemove = ( index ) => {
		const _images = images.slice();
		_images.splice( index, 1 );
		setAttributes( { images: _images } );
	};

	const onMoveBackward = ( x ) => {
		const y = x - 1;
		const _images = images.slice();
		_images[ x ] = _images.splice( y, 1, images[ x ] )[ 0 ];
		setAttributes( { images: _images } );
	};

	const onMoveForward = ( x ) => {
		const y = x + 1;
		const _images = images.slice();
		_images[ x ] = _images.splice( y, 1, images[ x ] )[ 0 ];
		setAttributes( { images: _images } );
	};

	return (
		<div className="guten-carousel">
			{
				images.map( ( image, index ) => (
					<div className="guten-carousel-slide" key={ image.id }>
						<Image
							onRemove={ onRemove.bind( null, index ) }
							onMoveBackward={ onMoveBackward.bind( null, index ) }
							onMoveForward={ onMoveForward.bind( null, index ) }
							index={ index }
							isSelected={ selectedItem === index && isSelected }
							onSelect={ onSelectImage.bind( null, index ) }
							image={ image }
							isFirstItem={ index === 0 }
							isLastItem={ index + 1 === images.length }
						/>
					</div>
				) )
			}
		</div>
	);
}
