export default () => {
  $(".reviews-content").on("afterChange", function (
    event,
    slick,
    currentSlide
  ) {
    $(this)
      .find(".slick-slide.text-open")
      .not(".slick-active")
      .removeClass("text-open");
  });
  $(".reviews-text__btn").on("click", function () {
    this.parentElement.classList.toggle("text-open");
    $(".reviews-content").find(".slick-slide.slick-active").height("auto");
    $(".reviews-content").find(".slick-list").height("auto");
  });
  $(".reviews-content").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    prevArrow:
      '<svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" width="34" height="28" viewBox="0 0 34 28"><g><g><path d="M.444 13.203L9.721.473a1.09 1.09 0 0 1 1.61 0 1.266 1.266 0 0 1 0 1.713L3.997 12.85h28.865c.628 0 1.138.54 1.138 1.208 0 .67-.51 1.213-1.138 1.213H3.997l7.334 10.662c.444.472.444 1.24 0 1.712a1.1 1.1 0 0 1-.805.355 1.1 1.1 0 0 1-.805-.355L.445 14.917a1.269 1.269 0 0 1 0-1.714z"/></g></g></svg>',
    nextArrow:
      '<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="34" height="28" viewBox="0 0 34 28"><g><g><path  d="M33.686 13.156L24.373.386a1.093 1.093 0 0 0-1.616 0 1.268 1.268 0 0 0 0 1.717l7.362 10.699H1.143c-.631 0-1.143.541-1.143 1.212 0 .672.512 1.217 1.143 1.217h28.976l-7.361 10.695a1.27 1.27 0 0 0 0 1.718c.222.237.515.355.807.355.293 0 .585-.118.808-.355l9.313-12.768a1.273 1.273 0 0 0 0-1.72z"/></g></g></svg>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        },
      },
    ],
	});
	var inputFile = $(".input-file");
	var labelFile = $(".reviews-form__file");
	var fileText = $(".reviews-form__file-text");
	var fileImg = $(".reviews-form__file-img img");
	var fileIcon = $(".reviews-form__checkmark-icon");
	var fileFlag = true;
	inputFile.change(function (e) {
		if (inputFile.val() && fileFlag) {
			fileText.html("Фото загружено!");
			fileImg.hide();
			fileIcon.show();
			labelFile.addClass("rloaded");
			fileFlag = false;
		}
	});
	inputFile.click(function () {
		if (!fileFlag) {
			return false;
		}
	});
	
	$( ".reviews__btn" ).click(function() {
		$('.think').addClass('active-feed');
		$(this).removeClass('active-feed');
	});
	$('.think__btn').click(function (event) {
    let iName = $(".name__input").val();
    let iSname = $(".age__input").val();
    let iCity = $(".city__input").val();
    let iMassage = $(".inputText").val();
    if (iName == "" || iSname == "" || iCity == "" || iMassage == "") {
    } else {
			event.preventDefault();
			$('.feedback-modal').addClass('active-feed');
			setTimeout(function() {

			$('.feedback-modal').removeClass('active-feed');
			}, 3000);
			fileText.html('Загрузить ваше фото');
			labelFile.removeClass('rloaded');
			$('.think__input').val('');
			$('.inputText').val('');
			$('.think').removeClass('active-feed');
			$('.reviews-form__checkmark-icon').hide()
    }



});
};
