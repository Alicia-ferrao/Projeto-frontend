var cardsData = [
    {
      "imageSrc": "./img/3.jpg",
      "title": "Web Design",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "socialIcons": [
        "fa-brands fa-facebook",
        "fa-brands fa-twitter",
        "fa-brands fa-instagram",
        "fa-brands fa-linkedin"
      ]
    },
  
    {
      "imageSrc": "./img/2.jpg",
      "title": "Web Design",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "socialIcons": [
        "fa-brands fa-facebook",
        "fa-brands fa-twitter",
        "fa-brands fa-instagram",
        "fa-brands fa-linkedin"
      ]
    },
    {
      "imageSrc": "./img/4.jpg",
      "title": "Photography",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "socialIcons": [
        "fa-brands fa-facebook",
        "fa-brands fa-twitter",
        "fa-brands fa-instagram",
        "fa-brands fa-linkedin"
      ]
    },
    // Adicione mais objetos de cards conforme necessário
  ];
  
  var cardWrapper = document.getElementById("cardWrapper");
  
  cardsData.forEach(function(cardData) {
    var card = document.createElement("div");
    card.className = "card swiper-slide";
  
    var imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
  
    var image = document.createElement("img");
    image.src = cardData.imageSrc;
    image.alt = "";
    image.style.width = "100px";
    image.style.height = "100px";
    image.style.borderRadius = "50%";
    imageContainer.appendChild(image);
  
    var title = document.createElement("h2");
    title.textContent = cardData.title;
  
    var description = document.createElement("p");
    description.textContent = cardData.description;
  
    var icons = document.createElement("div");
    icons.className = "icons_card1";
    cardData.socialIcons.forEach(function(iconClass) {
      var icon = document.createElement("i");
      icon.className = "fa-brands " + iconClass;
      icons.appendChild(icon);
    });
  
    card.appendChild(imageContainer);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(icons);
  
    cardWrapper.appendChild(card);
  });
  
  var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
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
  
  
  