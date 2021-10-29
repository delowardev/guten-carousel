/**
 * BLOCK: slider-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

// import js
import Edit from './edit';
import Save from './save';

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'core/guten-carousel', {
	title: __( 'Carousel' ), // Block title.
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'Carousel' ),
		__( 'Slider' ),
	],
	edit: Edit,
	save: Save,
	attributes: {
		images: {
			type: 'array',
			default: [],
		},
		autoplay: {
			type: 'boolean',
			default: true,
		},
		autoplayTimeout: {
			type: 'number',
			default: 1500,
		},
		autoplaySpeed: {
			type: 'number',
			default: 500,
		},
		navButtons: {
			type: 'boolean',
			default: true,
		},
		navPrevText: {
			type: 'string',
			default: 'Prev',
		},
		navNextText: {
			type: 'string',
			default: 'Next',
		},
		sliderDots: {
			type: 'boolean',
			default: true,
		},
		dotHeight: {
			type: 'number',
			default: 10,
		},
		dotWidth: {
			type: 'number',
			default: 20,
		},
		dotSpacing: {
			type: 'number',
			default: 5,
		},
	},
} );
