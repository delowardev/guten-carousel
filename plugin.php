<?php
/**
 * Plugin Name: Gutenberg Carousel Block
 * Plugin URI: https://github.com/delowardev/guten-slider-xxxx/
 * Description: Siample Gutenberg Carousel Block
 * Author: delowardev
 * Author URI: https://github.com/delowardev
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Slug: guten-carousel
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
