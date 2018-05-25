<?php
/**
 * The Header template
 *
 * @package Theme-Vision
 * @subpackage Agama
 * @since Agama 1.0
 */ 

// Do not allow direct access to the file.
if( ! defined( 'ABSPATH' ) ) {
    exit;
} ?>

<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>

	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width" />
	
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	
	<?php wp_head(); ?>
    
    
<!-- Open Graphs and Twitter Card Start -->
    <?php
    if (is_single()) //Si c'est un article
    {
        if(has_post_thumbnail()) //S'il y a une image à la une
        {
            $url_thumbnail = wp_get_attachment_url(get_post_thumbnail_id ($post->ID));
        }
        else 
        {
            $url_thumbnail = 'http://www.wordpress.alexandra-connangle.net/wp-content/uploads/2018/03/meta_logo_tourisme_strasbourg.png';
        }
        
        $description = strip_tags(get_the_excerpt($post->ID));
        
        ?>
        <meta property="og:title" content="<?php echo get_the_title(); ?> | Office du Tourisme de Strasbourg et sa Région"/>
		<meta property="og:type" content="article"/>
		<meta property="og:url" content="<?php echo the_permalink(); ?>"/>
		<meta property="og:image" content="<?php echo $url_thumbnail; ?>"/>
		<meta property="og:description" content="<?php echo $description; ?>"/>
        
        <meta name="twitter:card" content="summary"/>
		<meta name="twitter:site" content="@odtstrasbourg"/>
		<meta name="twitter:title" content="<?php echo get_the_title(); ?> | Office du Tourisme de Strasbourg et sa Région"/>
		<meta name="twitter:description" content="<?php echo $description; ?>"/>
		<meta name="twitter:image" content="<?php echo $url_thumbnail; ?>"/>
         <?php
    }
    else //Si ce n'est pas un article
    {
        $current_url = 'http://' .$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
        $url_thumbnail = 'http://www.wordpress.alexandra-connangle.net/wp-content/uploads/2018/03/meta_logo_tourisme_strasbourg.png';
        
        if (is_category()) //Si c'est une catégorie
        {
            $current_category = single_cat_title("", false);
            $description = category_description( $category_id );
            
            ?>
            <meta property="og:title" content="<?php echo $current_category ?> | Office du Tourisme de Strasbourg et sa Région"/>
            <meta name="twitter:title" content="<?php echo $current_category ?> | Office du Tourisme de Strasbourg et sa Région"/>
            <?php
        }
        else
        {
            $description = "Pour son histoire, son art de vivre et sa gastronomie, Strasbourg mérite votre visite !... Retrouvez toutes les informations et activités disponibles sur Strasbourg et sa Région en consultant le site officiel de l'Office du Tourisme...";
            
            ?>
            <meta property="og:title" content="<?php echo get_the_title(); ?> | Office du Tourisme de Strasbourg et sa Région"/>
            <meta name="twitter:title" content="<?php echo get_the_title(); ?> | Office du Tourisme de Strasbourg et sa Région"/>
            <?php
        }
        
        ?>
		<meta property="og:type" content="website"/>
		<meta property="og:url" content="<?php echo $current_url; ?>"/>
		<meta property="og:image" content="<?php echo $url_thumbnail; ?>"/>
		<meta property="og:description" content="<?php echo $description; ?>"/>
    
        <meta name="twitter:card" content="summary"/>
		<meta name="twitter:site" content="@odtstrasbourg"/>
		<meta name="twitter:description" content="<?php echo $description; ?>"/>
		<meta name="twitter:image" content="<?php echo $url_thumbnail; ?>"/>
         <?php
    }
    ?><!-- Open Graphs and Twitter Card End -->

</head>

<body <?php body_class('stretched'); ?>>

<!-- Main Wrapper Start -->
<div id="main-wrapper">
	
	<!-- Header Start -->
	<header id="masthead" class="site-header clearfix <?php Agama::header_class(); ?>" role="banner">
		
		<?php Agama_Helper::get_header(); ?>
		
		<?php Agama_Helper::get_header_image(); ?>
		
	</header><!-- Header End -->
	
	<?php Agama_Helper::get_slider(); ?>
	
	<?php Agama_Helper::get_breadcrumb(); ?>

	<div id="page" class="hfeed site">
		<div id="main" class="wrapper">
			<div class="vision-row clearfix">
				
				<?php Agama_Helper::get_front_page_boxes(); ?>
				
				<?php Agama_Helper::get_agama_blue_contents(); ?>
				