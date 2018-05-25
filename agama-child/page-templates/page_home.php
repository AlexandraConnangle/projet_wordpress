<?php /* Template Name: page_home */ 

get_header();?>
	
	<?php if ( is_active_sidebar( 'sidebar-1' )) : ?>

			<div id="secondary" class="widget-area col-md-3" role="complementary">
				<?php dynamic_sidebar( 'sidebar-1' ); ?>
			</div>

	<?php endif; ?>


			<div id="primary" class="site-content">
				<div id="content" role="main">
				<?php 
					while ( have_posts()): 
						the_post(); 
						get_template_part( 'content', 'page' ); 
					endwhile;
				 ?>
				</div>
			</div>

<?php get_footer(); ?>