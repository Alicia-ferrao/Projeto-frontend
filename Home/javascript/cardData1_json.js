     
var cardsData1 = [
  {
    "icon": "fa fa-mobile",
    "title": "Web Design",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing eli",
    "socialIcons": [
      "fa fa-mobile",
      "fa fa-mobiler",
      "fa fa-mobile",
      "fa fa-mobile"
    ]
  },
  {
    "icon": "fa fa-pencil",
    "title": "Photography",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing eli",
    "socialIcons": [
      "fa-brands fa-facebook",
      "fa-brands fa-twitter",
      "fa-brands fa-instagram",
      "fa-brands fa-linkedin"
    ]
  },

  {
    "icon": "fa fa-pencil",
    "title": "Photography",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing eli",
    "socialIcons": [
      "fa-brands fa-facebook",
      "fa-brands fa-twitter",
      "fa-brands fa-instagram",
      "fa-brands fa-linkedin"
    ]
  },
  // Adicione mais objetos de cards conforme necessário
];

var cardWrapper1 = document.getElementById("cardWrapper1");

cardsData1.forEach(function(cardData1) {
  var card1 = document.createElement("div");
  card1.className = "card1 swiper-slide";

  var icon = document.createElement("i");
  icon.className = "fa icon_category " + cardData1.icon;

  var cardTitle = document.createElement("h2");
  cardTitle.textContent = cardData1.title;

  var description = document.createElement("p");
  description.textContent = cardData1.description;

  var icons = document.createElement("div");
  icons.className = "icons";

  // cardData.socialIcons.forEach(function(iconClass) {
  //   var icon = document.createElement("i");
  //   icon.className = "fa-brands " + iconClass;
  // //   icons.appendChild(icon);
  // });

  card1.appendChild(icon);
  card1.appendChild(cardTitle);
  card1.appendChild(description);
  // card.appendChild(icons);

  cardWrapper1.appendChild(card1);
});

var swiper = new Swiper(".slide-container1", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});



