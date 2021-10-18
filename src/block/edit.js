
// local import
import Slider from './slider';

// wp
const { Platform } = wp.element;
const { __ } = wp.i18n;
const { MediaPlaceholder } = wp.blockEditor;

// const
const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];
const PLACEHOLDER_TEXT = Platform.isNative ?
	__( 'ADD MEDIA' ) :
	__( 'Drag images, upload new ones or select files from your library.' );

// comp
export default function Edit( props ) {
	const {
		className,
		attributes: { images },
		setAttributes,
		isSelected,
	} = props;

	const setImages = ( _images ) => {
		const __images = _images.map( ( {
			id,
			alt,
			url,
			sizes,
		} ) => ( {
			id,
			alt,
			url,
			sizes,
			href: '',
		} ) );
		setAttributes( { images: __images } );
	};

	const hasImages = !! images.length;
	const hasImageIds = hasImages && images.some( ( image ) => !! image.id );

	return (
		<div className={ className }>

			<Slider
				isSelected={ isSelected }
				images={ images }
				setAttributes={ setAttributes }
			/>

			<MediaPlaceholder
				addToGallery={ hasImageIds }
				isAppender={ hasImages }
				onSelect={ setImages }
				multiple={ true }
				value={ images }
				accept="image/*,video/*"
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				labels={ {
					title: ! hasImages && __( 'Carousel' ),
					instructions: ! hasImages && PLACEHOLDER_TEXT,
				} }
			/>

		</div>
	);
}
