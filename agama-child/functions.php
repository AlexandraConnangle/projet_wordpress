<?php 

//Chargement du thème enfant
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' ); 

function theme_enqueue_styles() 
{ 
	wp_enqueue_style( 'parent-style', get_template_directory_uri() .'/style.css' );
	wp_enqueue_style( 'child-style', get_stylesheet_uri(), array( 'parent-style' )); 
}

// Ajout barre de Recherche dans le menu de navigation
function add_search_box($items, $args)
{
	ob_start();
	get_search_form();
	$searchform = ob_get_contents();
	ob_end_clean();

	$items .= '<li id="searchform">' . $searchform . '</li>'; 
	return $items;
}

add_filter('wp_nav_menu_items','add_search_box', 10, 2);

?>