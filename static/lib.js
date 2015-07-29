/**
 * Created by mani on 14-6-29.
 */
$(document).ready(function() {

	var initCarousel = function (e) {
		setTimeout(function () {
			$(".carousel").each(function () {
				var carousel = $(this);
				var config = '';
				try {
					config = carousel.attr('config');
					config = jQuery.parseJSON(config);
				} catch (e) {
					console.log(e);
				}
				if (config) {
					carousel.owlCarousel(config);
				}
			});
		}, e.type == 'action:posts' ? 500 : 100);
	};

    $(window).on('action:topic.loaded', initCarousel);
	$(window).on('action:posts.edited', initCarousel);
});