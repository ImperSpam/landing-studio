$(document).on('ready', function(){
	$(".offer-slider").slick({
		dots: false,
		arrows: true,
		infinite: false,
		speed: 800,
        slidesToShow: 1,
        variableWidth: true,
        centerPadding: 0,
        appendArrows: $(".offer-slider-nav"),
        prevArrow: '<div class="slick-arrow slick-prev"><img src="static/img/left-arrow.png" alt=""></div>',
		nextArrow: '<div class="slick-arrow slick-next"><img src="static/img/right-arrow.png" alt=""></div>',
});
$('.offer-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(".offer-slider-nav-index-current").text(currentSlide + 1)
  });
});


$(document).on('ready', function(){
	var callback_btn = document.getElementById('callback-button');
	var callback_modal = document.getElementById("callback-form");
	var callback_close = document.getElementById("modal-form-close")
	callback_btn.onclick = function(){
		callback_modal.style.display = "flex";
	}
	window.onclick = function(event) {
		if (event.target == callback_modal) {
			callback_modal.style.display = "none";
		}
		callback_close.onclick = function(){
			callback_modal.style.display = "none"
		}
	}
});

$(document).on('ready', function(){
	var telegram_choise = document.getElementById('telegram_choise');
	var mail_choise = document.getElementById('mail_choise');
	var input_contact = document.getElementById('input-contact');
	telegram_choise.onclick = function(){
		telegram_choise.classList.add("active");
		mail_choise.classList.remove("active");
		input_contact.setAttribute("name", "telegram");
		input_contact.setAttribute("placeholder", "Введите ваш Telegram");
		input_contact.classList.remove("input-mail");
		input_contact.classList.add("input-telegram")
	}
	mail_choise.onclick = function(){
		telegram_choise.classList.remove("active");
		mail_choise.classList.add("active");
		input_contact.setAttribute("name", "mail");
		input_contact.setAttribute("placeholder", "Введите ваш Mail");
		input_contact.classList.add("input-mail");
		input_contact.classList.remove("input-telegram")
	}
});