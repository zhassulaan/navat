let langs = document.querySelectorAll(".nav-menu"),
	link = document.querySelectorAll(".nav-item"),
	// header = document.querySelector("header"),
	home = document.querySelector(".home"),
	about = document.querySelector(".about"),
	open_kitchen = document.querySelector(".open-kitchen"),
	vip = document.querySelector(".vip"),
	interior = document.querySelectorAll(".interior"),
	children = document.querySelector(".children"),
	locations = document.querySelector(".locations"),
	reserv = document.querySelector(".reserv"),
	contacts = document.querySelector(".contacts"),
	footer = document.querySelector(".footer"),
	menu = document.querySelector(".menu"),
	img_cont = document.querySelectorAll(".image-container");

link.forEach(el => {
	el.addEventListener("click", () => {
		if (window.innerWidth > 768) {
			langs[0].querySelector(".active").classList.remove("active");
			el.classList.add("active");
		} else {
			langs[1].querySelector(".active").classList.remove("active");
			el.classList.add("active");
		}
 
		let attr = el.getAttribute("language");
 
		// header.querySelector(".toggle-btn").children[0].textContent = data[attr].menu;
		home.querySelector(".title").textContent = data[attr].title[0];
		home.querySelector(".subtitle").textContent = data[attr].subtitle;
		home.querySelector(".button-text").textContent = data[attr].button[0];
		for (let i = 0; i < 5; i++)
			home.querySelectorAll(".text1")[i].textContent = data[attr].features[i];
		about.querySelector(".title").textContent = data[attr].title[1];
		about.querySelector(".text1").textContent = data[attr].about_text[0];
		about.querySelectorAll(".footer-text")[0].textContent = data[attr].about_text[1];
		about.querySelectorAll(".footer-text")[1].textContent = data[attr].about_text[1];
		about.querySelector(".corner-box").children[0].textContent = data[attr].about_text[2];
		open_kitchen.querySelector(".title").textContent = data[attr].title[2];
		open_kitchen.querySelector(".titleM").textContent = data[attr].title[6];
		open_kitchen.querySelector("#interior-text").textContent = data[attr].texts[0];
		open_kitchen.querySelector(".textM").textContent = data[attr].texts[0];
		vip.querySelector(".title").textContent = data[attr].title[3];
		vip.querySelector(".titleM").textContent = data[attr].title[3];
		vip.querySelector("#interior-text").textContent = data[attr].texts[1];
		vip.querySelector(".textM").textContent = data[attr].texts[1];
		interior[2].querySelector(".title").textContent = data[attr].title[4];
		interior[2].querySelector(".titleM").textContent = data[attr].title[4];
		interior[2].querySelector("#interior-text").textContent = data[attr].texts[2];
		interior[2].querySelector(".textM").textContent = data[attr].texts[2];
		children.querySelector(".title").textContent = data[attr].title[5];
		children.querySelector(".titleM").textContent = data[attr].title[5];
		children.querySelector("#interior-text").textContent = data[attr].texts[3];
		children.querySelector(".textM").textContent = data[attr].texts[3];
		for (let i = 0; i < 16; i++) {
			if (i % 4 == 0) {
				img_cont[i].querySelector(".image-mid").textContent = data[attr].pic_texts[0];
				img_cont[i].querySelector(".image-text").querySelector("p").textContent = data[attr].pic_texts[3];
			}
			else
				img_cont[i].querySelector(".image-mid").textContent = data[attr].pic_texts[1];
			img_cont[i].querySelector(".image-title").textContent = data[attr].pic_texts[2];
		}
		locations.querySelector(".title").textContent = data[attr].title[6];
		locations.querySelector(".text").textContent = data[attr].texts[4];
		reserv.querySelector(".title").textContent = data[attr].title[7];
		for (let i = 0; i < 4; i++)
			reserv.querySelectorAll(".text")[i].textContent = data[attr].reserv_text[i];
		for (let i = 0; i < 3; i++)
			reserv.querySelectorAll("input")[i].placeholder = data[attr].form[i];
		reserv.querySelector(".button-text").textContent = data[attr].button[1];
		contacts.querySelector(".title").textContent = data[attr].title[8];
		for (let i = 0; i < 4; i++) {
			contacts.querySelectorAll(".subtitle")[i].textContent = data[attr].contacts_text[i];
			contacts.querySelectorAll(".text")[1].textContent = data[attr].contacts_text[4];
		}
		for (let i = 0; i < 2; i++)
			footer.querySelectorAll("p")[i].textContent = data[attr].footer[i];
		for (let i = 0; i < 8; i++)
			menu.querySelectorAll(".menu-link")[i].textContent = data[attr].title[i];
		menu.querySelectorAll("p")[1].textContent = data[attr].menu_text[0];
		menu.querySelectorAll("p")[2].textContent = data[attr].menu_text[1];
		menu.querySelector("h1").textContent = data[attr].menu;
	});
 });

let data = {
	russian: {
		menu: "Меню",
		menu_text: ["Телефон:", "Соц. сети"],
		title: ["Новая Чайхана NAVAT", "Скоро открытие", "Открытая кухня", "VIP-залы", "Интерьер", "Детский этаж", "Локация", "Резерв", "Контакты"],
		subtitle: "| Президентский парк",
		button: ["Забронировать столик", "Отправить"],
		features: ["Круто!", "Необычно!", "Вау!", "Завораживает!", "Свежо!"],
		about_text: ["Новой, сенсационной, ПЯТОЙ ЧАЙХАНЫ NAVAT В АЛМАТЫ!", "Готовьтесь удивляться и вдохновляться вместе с нами!", "Эстетика. Стиль. Традиции."],
		texts: ["Наши кулинарные маэстро наконец выйдут «на сцену», чтобы вы видели весь процесс готовки легендарных блюд.", "Хотите почувствовать себя ханами и султаншами? Авторский дизайн, дорогая отделка, эксклюзивные картины, звукоизоляция, приватность и даже персональный банкетный менеджер – всё это ждет вас в новых VIP-залах.", "Мы знаем, как вы любите наш разноцветный восточный дизайн. Однако в этот раз мы решили удивить вас интеллигентной выдержанностью цветов и солидной отделкой, чтобы дать нашей любимой Чайхане NAVAT глоток свежего и даже модного «воздуха».", "Мы соорудили целый этаж только для ваших детей! Здесь они смогут «вылить» всю свою энергию в развлекательно-познавательных играх и отдохнуть на пуфиках, гамаках или теплом, мягком полу.", "Чистый воздух, завораживающий вид на президентский парк и алматинские горы прямо из наших панорамных окон."],
		pic_texts: ["Активное фото", "Фото-превью", "Название зоны", "НЕБОЛЬШОЕ ОПИСАНИЕ. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
		reserv_text: ["Забронируйте столик заранее через онлайн-заявку или по телефону +7 777 825 11 11", "Выберите количество гостей:", "Количество гостей:", "Нажав на кнопку “Отправить”, вы соглашаетесь на обработку файлов cookie."],
		form: ["Имя*", "Телефон*", "Сообщение"],
		contacts_text: ["Телефон:", "Адрес:", "E-mail:", "СОЦ. СЕТИ:", "Алматы, Мирас м-н"],
		footer: ["@Navat 2022. Все права защищены.", "Сайт создан: athenaplus.kz"]
	},
	english: {
		menu: "Menu",
		menu_text: ["Phone number:", "Soc. networks"],
		title: ["New Teahouse NAVAT", "Opening soon", "Open kitchen", "VIP-halls", "Interior", "Children's floor", "Location", "Reserve", "Contacts"],
		subtitle: "| Presidential park",
		button: ["Reserve a table", "Send"],
		features: ["Cool!", "Unusual!", "Wow!", "Fascinating!", "Fresh!"],
		about_text: ["New, sensational, FIFTH NAVAT TEAHOUSE IN ALMATY!", "Get ready to be amazed and inspired with us!", "Aesthetics. Style. Traditions."],
		texts: ["Our culinary maestros will finally take the stage so that you can see the whole process of preparing legendary dishes.", "Do you want to feel like khans and sultanas? Author's design, expensive finishes, exclusive paintings, soundproofing, privacy and even a personal banquet manager - all this awaits you in the new VIP rooms.", "We know how much you love our colorful oriental designs. However, this time we decided to surprise you with an intelligent consistency of colors and solid finishes to give our beloved Teahouse NAVAT a breath of fresh and even fashionable “air”.", "We built an entire floor just for your kids! Here they will be able to “pour out” all their energy in entertaining and educational games and relax on ottomans, hammocks or a warm, soft floor.", "Clean air, breathtaking view of the presidential park and Almaty mountains right from our panoramic windows."],
		pic_texts: ["Active photo", "Photo-preview", "Zone name", "A LITTLE DESCRIPTION. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
		reserv_text: ["Book a table in advance through an online application or by phone +7 777 825 11 11", "Select the number of guests:", "Number of guests:", "By clicking on the «Submit» button, you agree to the processing of cookies."],
		form: ["Name*", "Phone number*", "Message"],
		contacts_text: ["Phone number:", "The address:", "E-mail:", "SOC. NETWORKS:", "Almaty, Miras dist."],
		footer: ["@Navat 2022. All rights reserved.", "The site was created by: athenaplus.kz"]
	},
	kazakh: {
		menu: "Мәзір",
		menu_text: ["Телефон:", "Әлеу. желілер"],
		title: ["Жана шайхана NAVAT", "Жакында ашылады", "Ашык ас Yй", "VIP-залдар", "Интерьер", "Балалар кабаты", "Орналасуы", "Резерв", "Байланыстар"],
		subtitle: "| Президенттік саябақ",
		button: ["Орынды брондау", "Жіберу"],
		features: ["Керемет!", "Ерекше!", "Уау!", "Тамаша!", "Жана!"],
		about_text: ["Жаңа, сенсациялық, АЛМАТЫДАҒЫ БЕСІНШІ НАВАТ ШАЙХАНАСЫ!", "Бізбен бірге таңдануға және шабыттануға дайын болыңыз!", "Эстетика. Стиль. Дәстүр."],
		texts: ["Сіздер аңызға айналған тағамдарды дайындау процесін тамашалау үшін, біздің аспаздық шеберлеріміз «сахнаға» шығады.", "Сіз өзіңізді хандар мен сұлтандар сияқты сезінгіңіз келе ме? Авторлық дизайн, қымбат әрлеу, эксклюзивті картиналар, дыбыс оқшаулау, құпиялылық және тіпті жеке банкет менеджері - мұның бәрі сізді жаңа VIP бөлмелерде күтеді.", "Біздің түрлі-түсті шығыс дизайнымызды қаншалықты жақсы көретініңізді білеміз. Дегенмен, бұл жолы біз сүйікті NAVAT шайханасына балғын және тіпті сәнді «ауа» беру үшін түстердің интеллектуалды консистенциясы мен қатты әрлеуімен таң қалдыруды жөн көрдік.", "Біз тек сіздің балаларыңыз үшін тұтас еден жасадық! Мұнда олар ойын-сауық және танымдық ойындарға бар күш-қуатын «төгіп», жұмсақ орындықтарда, гамактарда немесе жылы, жұмсақ еденде демалуға болады.", "Біздің панорамалық терезелерден таза ауа, президент саябағы мен Алматы тауларының керемет көрінісін көре аласыз."],
		pic_texts: ["Белсенді сурет", "Сурет-превью", "Аймак атауы", "КІШКЕНЕ СИПАТТАУ. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
		reserv_text: ["Үстелді алдын ала онлайн өтінім немесе +7 777 825 11 11 телефоны арқылы брондаңыз", "Қонақтардың санын таңдаңыз:", "Қонақтар саны:", "«Жіберу» түймесін басу арқылы сіз cookie файлдарын өңдеуге келісесіз."],
		form: ["Аты*", "Телефон*", "Хабар"],
		contacts_text: ["Телефон:", "Мекенжай:", "E-mail:", "ӘЛЕУ. ЖЕЛІЛЕР:", "Алматы, Мирас м-н"],
		footer: ["@Navat 2022. Барлық құқықтар сақталған.", "Сайт жасаған: athenaplus.kz"]
	}
};