function validatePhoneNumber(str) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '_')
			return false;
	}
	return true;
}
 
var form = document.getElementById("form");
var user = document.getElementById("user");
var phone = document.getElementById("phone");
var message = document.getElementById("message");
var place = document.getElementsByClassName("active-btn")
var button = document.getElementById("button");
var text = document.getElementById("text");

var sending = ["Отправляется.", "Отправляется..", "Отправляется..."];
function validation() {
	if (user.value !== "" && validatePhoneNumber(phone.value) && message.value !== "" && place.value !== "") {
		form.classList.add("valid");
		form.classList.remove("invalid");
		button.style.display = "none";
		text.style.width = "100%";
		text.style.fontSize = "30px";
		
		text.textContent = sending[0];
		textSequence(0);
		function textSequence(i) {
			if (sending.length > i) {
				setTimeout(function() {
					text.textContent = sending[i];
					textSequence(++i);
				}, 300);
			}
	  	}

		setTimeout(function() {
			text.textContent = "Ваш резерв оформлен. Мы скоро с вами свяжемся!";
		}, 2000); 

		// var params = { from_name: user.value, from_phone: phone.value, from_email: email.value, from_event: celebrity.value }
		// emailjs.send("service_hllt9bm", "template_qmkwhg5", params)
		// .then(function(res){
		// 	console.log("success", res.status);
		// })
	} else {
		form.classList.remove("valid");
		form.classList.add("invalid");
		button.style.display = "none";
		text.textContent = "Ошибка: заполните обязательные поля и выберите количество персон.";
		text.style.width = "100%";

		setTimeout(function() {
			button.style.display = "block";
			text.textContent = "Нажав на кнопку “Отправить”, вы соглашаетесь на обработку файлов cookie.";
		}, 3000); 

		if (window.innerWidth > 1770) {
			text.style.fontSize = "30px";

			setTimeout(function() {
				text.style.width = "28.75rem";
				text.style.fontSize = "22px";
			}, 3000); 
		}
		
		if (window.innerWidth <= 1770) {
			text.style.fontSize = "26px";

			setTimeout(function() {
				text.style.width = "28.75rem";
				text.style.fontSize = "19px";
			}, 3000); 
		}
		
		if (window.innerWidth <= 1440) {
			text.style.fontSize = "24px";
		}
		
		if (window.innerWidth <= 1280) {
			text.style.fontSize = "22px";

			setTimeout(function() {
				text.style.width = "15rem";
				text.style.fontSize = "17px";
			}, 3000); 
		}
		
		if (window.innerWidth <= 1280) {
			text.style.fontSize = "24px";
		}
		
		if (window.innerWidth <= 1280) {
			text.style.fontSize = "24px";

			setTimeout(function() {
				text.style.width = "100%";
				text.style.fontSize = "20px";
			}, 3000); 
		}
	}
}