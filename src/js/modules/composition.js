export default () => {
	// $( ".illness-box__title" ).click(function() {
	// 	$(this).parent().toggleClass("active");
	// });
	$( ".composition-box__head" ).click(function() {
		$('.composition__box').removeClass("active");
		$(this).parent().addClass("active");
	});
	let windowHeight = $(window).height();

	function animationA(params) {
		$(params).each(function () {
			let self = $(this),
				height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass("active");
			} 
			// else {
			// 	self.removeClass("active");
			// }
		});
	}
	$(document).on("scroll", function () {
		
		animationA(".peel__box");
		animationA(".composition-item__ingredient");
		animationA(".study__box");
		animationA(".use__pack");
		animationA(".statistic__img");
		animationA(".composition-list__img");
		animationA(".certificates__item--center");
		
	});
};
