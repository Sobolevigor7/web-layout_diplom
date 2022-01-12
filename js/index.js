

console.log(window.innerWidth);


/*Обрабатываем поле ввода цена изданий - добавляем маску и проверяем на соответствие цен (цена от не больше цены до)*/

function dischargeFrom(){
  $('#price-from').val(String($('#price-from').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
}


dischargeFrom();
$('#price-from').keyup(function(){
  dischargeFrom();

  var pricefrom = document.getElementById('price-from').value;
  pricefrom = parseInt((pricefrom.replace(/\s+/g, '')),10);

  var priceto = document.getElementById('price-to').value;
  priceto = parseInt((priceto.replace(/\s+/g, '')),10);

  if (pricefrom > priceto) {
    alert("Цена От не может быть выше ДО")
    $('#price-from').val(String($('#price-to').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
  }
});

function dischargeTo(){
  $('#price-to').val(String($('#price-to').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
}
dischargeTo();
$('#price-to').keyup(function(){
  dischargeTo();
});


/*Бургер*/
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".header__burger").addEventListener('click', function(burgerClick){
    burgerClick.currentTarget.classList.toggle('header__burger_active');
    document.querySelector('.nav__list').classList.toggle('nav__list_active');
    document.querySelector('.header-wrap').classList.toggle('header-wrap-active');
  })
});


//Выпадающие дроплисты
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".art-directions__label").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".art-directions__dropdown");
    document.querySelectorAll(".art-directions__label").forEach(el => {
      if (el != btn) {
        el.classList.remove("art-directions__label_active");
      }
    });
    document.querySelectorAll(".art-directions__dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("art-directions__dropdown_active");
      }
    })
    dropdown.classList.toggle("art-directions__dropdown_active");
    btn.classList.toggle("art-directions__label_active")
  })
})
document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".art-directions")) {
    document.querySelectorAll(".art-directions__dropdown").forEach(el => {
        el.classList.remove("art-directions__dropdown_active");
    })
     document.querySelectorAll(".art-directions__label").forEach(el => {
        el.classList.remove("art-directions__label_active");
    });
  }
})
})

document.addEventListener("DOMContentLoaded", function() {//свайпер hero
const swiper = new Swiper('#hero__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: 'false',
  },



})})


document.addEventListener("DOMContentLoaded", function() { //свайпер галереи
  let gallerySwiper = new Swiper('.gly-swiper', {

    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 2
    },

    spaceBetween: 50,

    // If we need pagination
    pagination: {
      el: '.gly-swiper__pagination',
      type: 'fraction'
    },
    focusableElements:'.gly-slide',

    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1
        },
        spaceBetween: 0
      },
      576: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 30
      },

      1200: {
        slidesPerView: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 50
      }
    },


    // Navigation arrows
    navigation: {
      nextEl: '.gly-swiper__button-next',
      prevEl: '.gly-swiper__button-prev',
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      lastSlideMessage: 'Это последний слайд',

    }

  })})

  document.addEventListener("DOMContentLoaded", function() {
  const element = document.querySelector('#filter-choices__select'); //Подключаем инициализируем селект.
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText:'',
    shouldSort: false,
    shouldSortItems: false,
    duplicateItemsAllowed: false
    //placeholder: true
    //placeholderValue: null
});
  })

  document.addEventListener("DOMContentLoaded", function() { //Реализуем модальное окно
    var swiperSlides = document.querySelector('#gallery__swiper').querySelectorAll('.gly-slide');
    var modal = document.querySelector('.gallery__modal');
    var modalBtn = modal.querySelector('.modal__content-description-closebtn');
    swiperSlides.forEach(el =>
      el.addEventListener("click", function(cl){
        var img=this.querySelector("img");
        var link = img.getAttribute("src");
        const path = cl.currentTarget.dataset.pantdescr;
        modal.classList.add("modal-active");
        modalBtn.focus();
        modal.querySelector("img").setAttribute("src", link);
        document.querySelectorAll('.modal__content-descritpion-block').forEach(function(descrChange) {
          descrChange.classList.remove('modal__content-descritpion-block-active');
          document.querySelector(`[data-ptarget="${path}"]`).classList.add('modal__content-descritpion-block-active');
          console.log(path);
        }
        )
      }))
      modalBtn.addEventListener("click", function() {
        modal.classList.remove("modal-active");
      }
      )


      //Отлавливаем открытие/закрытие окна с помощью клавиатуры
    swiperSlides.forEach(el =>
    //Отлавливаем нажатие Enter или Space
      el.addEventListener("keydown", function(cl){
        const p = `${cl.key}`;
        if (p==="Enter"||p===" ") {
        var img=this.querySelector("img");
        var link = img.getAttribute("src");
        const path = cl.currentTarget.dataset.pantdescr;
        modal.classList.add("modal-active");
        modal.focus();
        modal.querySelector("img").setAttribute("src", link);
        document.querySelectorAll('.modal__content-descritpion-block').forEach(function(descrChange) {
          descrChange.classList.remove('modal__content-descritpion-block-active');
          document.querySelector(`[data-ptarget="${path}"]`).classList.add('modal__content-descritpion-block-active');
        }
        )
      }
    }))
      modalBtn.addEventListener("keydown", function() {
        modal.classList.remove("modal-active");
      }
     )
  });

  //Аккордеон
  document.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".acc").accordion ({
      heightStyle: "content",
      collapsible: true,
      active: 0,
      icons: false,
    });

    /*перемена страны*/
    document.querySelectorAll(".countries-selector__country-btn").forEach(function(changeCountry){
      changeCountry.addEventListener("click",function (btnCntry){
        let conpath=btnCntry.currentTarget.dataset.catpath;
        document.querySelectorAll(".catalogue__tab").forEach(function(el){
          el.classList.remove("catalogue__tab-active");
        });
        document.querySelectorAll(".countries-selector__country-btn").forEach(function(el){
          el.classList.remove("countries-selector__country-btn-active");
        });
        document.querySelector(`[data-cattarget="${conpath}"]`).classList.add("catalogue__tab-active");
        this.classList.add("countries-selector__country-btn-active");
      })
    })
    /*Перемена художника*/
  document.querySelectorAll(".catalogue__tab-active").forEach(function(changePainter){
    let btnPainter = changePainter.querySelectorAll(".acc__item-content-tab");
    //console.log(btnPainter);
    let articles = changePainter.querySelectorAll(".paintors__card");
    btnPainter.forEach(function(el){el.addEventListener("click",function(event){
      let catpath = event.target.dataset.catpaintpath;
     // console.log(catpath)
      let cattarget = changePainter.querySelector(`[data-catpainttarget="${catpath}"]`);
      //console.log(cattarget);
      articles.forEach(function(painter) {
        painter.classList.remove("paintors__card-active")
      })
     cattarget.classList.add("paintors__card-active")
        })
      })
     })
  })
});
//Кнопка события и слайдер

  let btn = document.querySelector(".events__button");
  //console.log(btn);
  const slider = document.querySelector(".events__swiper");
  let swiperslider = document.querySelectorAll(".list-item");
  //console.log(swiperslider);
  btn.addEventListener("click", function(){

    swiperslider.forEach(el => {
      el.style.display="flex"
    })
    this.style.display="none";

  })


  let mySwiper;


function mobileSlider() {
    if (window.innerWidth <= 576 && slider.dataset.mobile == 'false') {
      console.log("swiper events started");
      mySwiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        slideClass: "events__slide",
        pagination: {
          el: '.events__swiper-pagination',
          clickable: true,
        },
      });

      slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 576 && slider.dataset.mobile == 'true') {
      slider.dataset.mobile = 'false';
      if (slider.classList.contains('swiper-initialized')) {
        mySwiper.destroy();
      }
    }
  }


  mobileSlider()

  window.addEventListener('resize', () => {
    mobileSlider();
  });



  document.addEventListener("DOMContentLoaded", function() { //свайпер изданий

    publicationsSwiper = new Swiper('#pb-swiper', {

      //slidesPerView: 6,
      //slidesPerGroup: 3,
      slidesPerView: 3,
      //slidesPerGroup: 1,
      spaceBetween: 50,
      slideClass: "pb-slide",
      //loop: true,

      // If we need pagination
      pagination: {
        el: '.pb-swiper-container__pagination',
        type: 'fraction'
      },
      focusableElements:'.pb-slide',

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        576: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },

        1201: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 28
        },

        1300: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 48
        },

        1400: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50
        }
      },



      // Navigation arrows
      navigation: {
        nextEl: '.pb-swiper-container__button-next',
        prevEl: '.pb-swiper-container__button-prev',
      },

      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        lastSlideMessage: 'Это последний слайд',

      },



  })
});

/*Тултипы*/

(() => {
  tippy('.js-tooltip-btn', {
    theme: 'blanchard',
    maxWidth: 264,
  });
})();

/*свайпер проектов*/

 //свайпер проектов

  var swiper = new Swiper(".pp-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    //loop: true,
    //loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 28
      },

      1201: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50
      },

      1300: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },

      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
    },},



  });

    //Яндекс карта

       // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.


    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.757, 37.6],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14.4,
            controls: []
        });

        var zoomControl = new ymaps.control.ZoomControl({
          options: {
              size: "small",
              position: {
                bottom: 360,
                right: 10
              }
          }
      });
    myMap.controls.add(zoomControl);

    var geolocationControl = new ymaps.control.GeolocationControl({

      options: {float: "right",
      position: {
        bottom: 300,
        right: 10
      },
    }
  });
  myMap.controls.add(geolocationControl);
    var myPlacemark = new ymaps.Placemark ([55.75846806898367,37.60108849999989],{},{
      iconLayout: 'default#image',
      iconImageHref: 'img/maps-marker.svg',
      iconImageSize: [20, 20]
    });

    myMap.geoObjects.add(myPlacemark);
    };


    var selector = document.getElementById("tel__input");

    var im = new Inputmask("+7(999) 999-99-99");
    im.mask(selector);

    /*Валидация - беру старую версию плагина - в новом почему-то при нажатии кнопки submit форма не отправляется на проверочный сайт.*/

    new JustValidate('.form', {
      colorWrong: '#D11616',
      rules: {

        name: {
            required: true,
            minLength: 3,
            maxLength: 30,
            function: (name, value) => {
              var nameSelector = document.getElementById("name__input")
              var nameMask = /^[А-Я а-я ёЁ a-zA-Z]+$/;
              var maskCheck = nameMask.exec(nameSelector.value);
              var submit = 'ok';
              //console.log('submit is ', submit)
              if (!maskCheck) submit = 'not ok'
              console.log('submit is ', submit)
              return submit === 'ok';
            }
          },
          tel: {
              required: true,
             function: (name, value) => {
              const phone = selector.inputmask.unmaskedvalue()
              console.log(phone)

              return Number(phone) && phone.length ===10
              }
          }
      },
      messages: {
        name:
        {
          required: 'Поле обязательно',
          minLength: 'Имя не менее 3 символов',
          maxLength: 'Имя не более 30 символов',
          function:  'Недопустимый формат'
        },
        tel: 'Укажите ваш телефон'
      }
      });

