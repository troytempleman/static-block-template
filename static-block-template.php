<?php
/**
 * Plugin Name:			Static Block Template
 * Plugin URI:			https://troytempleman.com
 * Description:			A static block template.
 * Version:				0.1.0
 * Requires at least:	6.0
 * Requires PHP:		7.0
 * Author:				Troy Templeman
 * Author URI:			https://troytempleman.com
 * License:				GPL-2.0-or-later
 * License URI:			https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:			static-block-template
 * Domain Path:			/languages
 */

// Exit if accessed directly 
if( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Register block
function static_block_template_register() {
	register_block_type( 
		__DIR__ . '/build'
	);
}
add_action( 'init', 'static_block_template_register' );
