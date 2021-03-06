<?php
// Do not allow direct access to the file.
if( ! defined( 'ABSPATH' ) ) {
    exit;
}
################################################################
# Animate Return Options | @since 1.2.0 | using in customizer
################################################################
if( ! class_exists( 'AgamaAnimate' ) ) {
	class AgamaAnimate {
		static function choices() {
			return array(
				'bounce'				=> __( 'Bounce', 'agama' ),
				'flash'					=> __( 'Flash', 'agama' ),
				'pulse'					=> __( 'Pulse', 'agama' ),
				'rubberBand'			=> __( 'Rubber Band', 'agama' ),
				'shake'					=> __( 'Shake', 'agama' ),
				'swing'					=> __( 'Swing', 'agama' ),
				'tada'					=> __( 'Tada', 'agama' ),
				'wobble'				=> __( 'Wobble', 'agama' ),
				'jello'					=> __( 'Jello', 'agama' ),
				'bounceIn'				=> __( 'Bounce In', 'agama' ),
				'bounceInDown'			=> __( 'Bounce In Down', 'agama' ),
				'bounceInLeft'			=> __( 'Bounce In Left', 'agama' ),
				'bounceInRight'			=> __( 'Bounce In Right', 'agama' ),
				'bounceInUp'			=> __( 'Bounce In Up', 'agama' ),
				'bounceOut'				=> __( 'Bounce Out', 'agama' ),
				'bounceOutDown'			=> __( 'Bounce Out Down', 'agama' ),
				'bounceOutLeft'			=> __( 'Bounce Out Left', 'agama' ),
				'bounceOutRight'		=> __( 'Bounce Out Right', 'agama' ),
				'bounceOutUp'			=> __( 'Bounce Out Up', 'agama' ),
				'fadeIn'				=> __( 'Fade In', 'agama' ),
				'fadeInDown'			=> __( 'Fade In Down', 'agama' ),
				'fadeInDownBig'			=> __( 'Fade In Down Big', 'agama' ),
				'fadeInLeft'			=> __( 'Fade In Left', 'agama' ),
				'fadeInLeftBig'			=> __( 'Fade In Left Big', 'agama' ),
				'fadeInRight'			=> __( 'Fade In Right', 'agama' ),
				'fadeInRightBig'		=> __( 'Fade In Right Big', 'agama' ),
				'fadeInUp'				=> __( 'Fade In Up', 'agama' ),
				'fadeInUpBig'			=> __( 'Fade In Up Big', 'agama' ),
				'fadeOut'				=> __( 'Fade Out', 'agama' ),
				'fadeOutDown'			=> __( 'Fade Out Down', 'agama' ),
				'fadeOutDownBig'		=> __( 'Fade Out Down Big', 'agama' ),
				'fadeOutLeft'			=> __( 'Fade Out Left', 'agama' ),
				'fadeOutLeftBig'		=> __( 'Fade Out Left Big', 'agama' ),
				'fadeOutRight'			=> __( 'Fade Out Right', 'agama' ),
				'fadeOutRightBig'		=> __( 'Fade Out Right Big', 'agama' ),
				'fadeOutUp'				=> __( 'Fade Out Up', 'agama' ),
				'fadeOutUpBig'			=> __( 'Fade Out Up Big', 'agama' ),
				'flip'					=> __( 'Flip', 'agama' ),
				'flipInX'				=> __( 'Flip In X', 'agama' ),
				'flipInY'				=> __( 'Flip In Y', 'agama' ),
				'flipOutX'				=> __( 'Flip Out X', 'agama' ),
				'flipOutY'				=> __( 'Flip Out Y', 'agama' ),
				'lightSpeedIn'			=> __( 'Light Speed In', 'agama' ),
				'lightSpeedOut'			=> __( 'Light Speed Out', 'agama' ),
				'rotateIn'				=> __( 'Rotate In', 'agama' ),
				'rotateInDownLeft'		=> __( 'Rotate In Down Left', 'agama' ),
				'rotateInDownRight'		=> __( 'Rotate In Down Right', 'agama' ),
				'rotateInUpLeft'		=> __( 'Rotate In Up Left', 'agama' ),
				'rotateInUpRight'		=> __( 'Rotate In Up Right', 'agama' ),
				'rotateOut'				=> __( 'Rotate Out', 'agama' ),
				'rotateOutDownLeft'		=> __( 'Rotate Out Down Left', 'agama' ),
				'rotateOutDownRight'	=> __( 'Rotate Out Down Right', 'agama' ),
				'rotateOutUpLeft'		=> __( 'Rotate Out Up Left', 'agama' ),
				'rotateOutUpRight'		=> __( 'Rotate Out Up Right', 'agama' ),
				'slideInUp'				=> __( 'Slide In Up', 'agama' ),
				'slideInDown'			=> __( 'Slide In Down', 'agama' ),
				'slideInLeft'			=> __( 'Slide In Left', 'agama' ),
				'slideInRight'			=> __( 'Slide In Right', 'agama' ),
				'slideOutUp'			=> __( 'Slide Out Up', 'agama' ),
				'slideOutDown'			=> __( 'Slide Out Down', 'agama' ),
				'slideOutLeft'			=> __( 'Slide Out Left', 'agama' ),
				'slideOutRight'			=> __( 'Slide Out Right', 'agama' ),
				'zoomIn'				=> __( 'Zoom In', 'agama' ),
				'zoomInDown'			=> __( 'Zoom In Down', 'agama' ),
				'zoomInLeft'			=> __( 'Zoom In Left', 'agama' ),
				'zoomInRight'			=> __( 'Zoom In Right', 'agama' ),
				'zoomInUp'				=> __( 'Zoom In Up', 'agama' ),
				'zoomOut'				=> __( 'Zoom Out', 'agama' ),
				'zoomOutDown'			=> __( 'Zoom Out Down', 'agama' ),
				'zoomOutLeft'			=> __( 'Zoom Out Left', 'agama' ),
				'zoomOutRight'			=> __( 'Zoom Out Right', 'agama' ),
				'zoomOutUp'				=> __( 'Zoom Out Up', 'agama' ),
				'hinge'					=> __( 'Hinge', 'agama' ),
				'rollIn'				=> __( 'Roll In', 'agama' ),
				'rollOut'				=> __( 'Roll Out', 'agama' ) 
			); 
		}
	}
}