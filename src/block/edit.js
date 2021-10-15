const { Platform } = wp.element;

const { __ } = wp.i18n;

const { MediaPlaceholder } = wp.blockEditor;

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const PLACEHOLDER_TEXT = Platform.isNative ?
	__( 'ADD MEDIA' ) :
	__( 'Drag images, upload new ones or select files from your library.' );

export default function Edit( props ) {
	const { className, attributes: { images }, setAttributes } = props;

	const setImages = ( _img ) => {
		setAttributes( { images: _img } );
	};

	const hasImages = !! images.length;
	const hasImageIds = hasImages && images.some( ( image ) => !! image.id );

	return (
		<div className={ className }>

			<div className="images">
				{
					images.map( img => (
						<img key={ img.id } src={ img.url } alt={ img.alt } />
					) )
				}
			</div>

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
