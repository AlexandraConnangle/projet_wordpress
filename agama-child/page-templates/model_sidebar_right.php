<?php /* Template Name: model_sidebar_right */ 

get_header();?>
	
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

		<?php if ( is_active_sidebar( 'sidebar-1' )) : ?>

			<div id="secondary" class="widget-area col-md-3" role="complementary">
				<?php dynamic_sidebar( 'sidebar-1' ); ?>
			</div>

		<?php endif; ?>
		

<?php get_footer(); ?>