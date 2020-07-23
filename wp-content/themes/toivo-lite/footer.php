<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #main and all content after
 *
 * @package Toivo Lite
 */
?>

					</main><!-- #main -->
				</div><!-- #primary -->

			<?php get_sidebar( 'primary' ); // Loads the sidebar-primary.php template. ?>
			
			</div><!-- .wrap-inside -->
		</div><!-- .wrap -->
	</div><!-- #content -->
	
	<?php get_sidebar( 'subsidiary' ); // Loads the sidebar-subsidiary.php template. ?>

	<footer id="colophon" class="site-footer" role="contentinfo" <?php hybrid_attr( 'footer' ); ?>>
		
		<div class="site-info">
			<a href="https://https://my-hero-academy.com//">© 2019 https://Boku-Academia-Manga.com/. All rights reserved.</a> | <a href="https://https://my-hero-academy.com//privacy-policy/">Privacy Policy</a> | <a href="https://https://my-hero-academy.com//terms-and-conditions/">Terms and Conditions</a> | <a href="https://https://my-hero-academy.com//return-policy/">Return Policy</a>
		</div><!-- .site-info -->
		
	</footer><!-- #colophon -->
	
	<?php do_action( 'toivo_after_footer' ); // Hook after footer. ?>
	
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
