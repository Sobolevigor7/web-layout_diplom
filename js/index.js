
//Первочачальная установка высоты мобильного меню
document.addEventListener("DOMContentLoaded", function() {
if (window.innerWidth < 1200) {

//console.log(ch);
 let wrapPadding = window.getComputedStyle(document.querySelector(".header-wrap")).getPropertyValue('padding-top').slice(0, -2);
 //console.log (wrapPadding);
 var ch = document.querySelector(".hero__container").offsetHeight;
 //console.log(ch);
 var result = Number(wrapPadding) + Number(ch);
 //console.log(result);
document.querySelector(".header-wrap").style.height = result + "px";
}});

//Ловим изменения ширины окна и подстраиваем высоту мобильного меню
visualViewport.addEventListener("resize", function(){

  if (window.innerWidth < 1200) {
    let wrapPadding = window.getComputedStyle(document.querySelector(".header-wrap")).getPropertyValue('padding-top').slice(0, -2);
    var ch = document.querySelector(".hero__container").offsetHeight;// + wrapPadding + "px";
    var result = Number(wrapPadding) + Number(ch);
   document.querySelector(".header-wrap").style.height = result + "px";  }
  else {
    document.querySelector(".header-wrap").style.height = "auto";
    //console.log("auto width activated");
  }
});



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
    document.querySelector(".header__burger").style.zIndex = "3";
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

    slidesPerView: 1,
    slidesPerGroup: 1,
    grid: {
      rows: 1
    },

    spaceBetween: 10,

    // If we need pagination
    pagination: {
      el: '.gly-swiper__pagination',
      type: 'fraction'
    },
    focusableElements:'.gly-slide',

    breakpoints: {

      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 34
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
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

    //Реализуем модальное окно
  document.addEventListener('DOMContentLoaded', function(){
    var swiperSlides = document.querySelector('#gallery__swiper').querySelectorAll('.gly-slide');
    var modal = document.querySelector('.gallery__modal');
    var modalBtn = modal.querySelector('.modal__content-description-closebtn');
    swiperSlides.forEach(el =>
      el.addEventListener("click", function(cl){
          const path = cl.currentTarget.dataset.pantdescr;
          if (path != "none") { //Если есть контент для модального окна.
            var img=this.querySelector("img");
            var link = img.getAttribute("src");
            link = link.slice(4); //Добавляем к имени файла ссылку на модальное изображение.
            link="img/modal_" + link;


          if (innerWidth <= 1200 && innerWidth > 992) { //в зависимости от ширины окна добавляем ссылку на соответствющий размер изображения.
            link = link.slice(0, -8);
            link=link + "1024.jpg";
          }

          if (innerWidth <= 992 && innerWidth > 576) {
            link = link.slice(0, -8);
            link=link + "768.jpg";
          }


          if (innerWidth <= 576) {
            link = link.slice(0, -8);
            link=link + "320.jpg";
          }

          modal.classList.add("modal-active");
          document.querySelector("body").style.overflow="hidden";
          modalBtn.focus();
          modal.querySelector("img").setAttribute("src", link);
          document.querySelectorAll('.modal__content-descritpion-block').forEach(function(descrChange) {
            descrChange.classList.remove('modal__content-descritpion-block-active');
            document.querySelector(`[data-ptarget="${path}"]`).classList.add('modal__content-descritpion-block-active');
          }
          )
          window.addEventListener('resize', function(){
            modal.classList.remove("modal-active");
            document.querySelector("body").style.overflow="visible";
          })

          modalBtn.addEventListener("click", function() {
            modal.classList.remove("modal-active");
            document.querySelector("body").style.overflow="visible";
          })
        }
       })
      )
      //Отлавливаем открытие/закрытие окна с помощью клавиатуры
    swiperSlides.forEach(el =>
    //Отлавливаем нажатие Enter или Space
      el.addEventListener("keydown", function(cl){
        const p = `${cl.key}`;
        if (p==="Enter"||p===" ") { //смотрим нажатие на клавишу
        var img=this.querySelector("source");
        var link = img.getAttribute("srcset");
        var link = img.getAttribute("srcset");
        link = link.slice(4); //Добавляем к имени файла ссылку на модальное изображение.
        link="img/modal_" + link;
        const path = cl.currentTarget.dataset.pantdescr;
        if (path != "none") { //Если есть контент для модального окна.
        modal.classList.add("modal-active");
        document.querySelector("body").style.overflow="hidden";
        modal.focus();
        modal.querySelector("img").setAttribute("src", link);
        document.querySelectorAll('.modal__content-descritpion-block').forEach(function(descrChange) {
          descrChange.classList.remove('modal__content-descritpion-block-active');
          document.querySelector(`[data-ptarget="${path}"]`).classList.add('modal__content-descritpion-block-active');
        }
        )}
      }
    }));
      modalBtn.addEventListener("keydown", function() {
        modal.classList.remove("modal-active");
        document.querySelector("body").style.overflow="visible";
      });
      modalBtn.addEventListener("click", function() {
        modal.classList.remove("modal-active");
        document.querySelector("body").style.overflow="visible";
      })
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


function mobileSlider() {
    if (window.innerWidth <= 576 && slider.dataset.mobile == 'false') {
     // console.log("swiper events started");
      mySwiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 18,
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

  //открытие закрытие списка категорий изданий в мобильной версии.
  document.addEventListener("DOMContentLoaded", function() {
    const selectorBtn = document.querySelector(".selector__category");
    selectorBtn.addEventListener("click",function(){
      this.classList.toggle("selector__category_active")
    }
    )
  });

  //Свайпер изданий - десктоп и отключение в мобильной версии

    function pubMobileSwiper() {
      const pubslider = document.getElementById('pb-swiper');
      if (window.innerWidth > 576 && pubslider.dataset.pubdesktop=="true") {
       // console.log("publications swiper started");
        publicationsSwiper = new Swiper('#pb-swiper', {
          slidesPerView: 3,
          spaceBetween: 50,
          slideClass: "pb-slide",
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
              spaceBetween: 34
            },
            993: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 50
            },
            1100: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 100
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
          navigation: {
            nextEl: '.pb-swiper-container__button-next',
            prevEl: '.pb-swiper-container__button-prev',
          },
          a11y: {
            prevSlideMessage: 'Предыдущий слайд',
            nextSlideMessage: 'Следующий слайд',
            lastSlideMessage: 'Это последний слайд',
          },

      });
      pubslider.dataset.pubdesktop = "false";
      }
      if (window.innerWidth <=576 && pubslider.dataset.pubdesktop == "false") {
        pubslider.dataset.pubdesktop = "true";
        if (pubslider.classList.contains("swiper-initialized")) {
          publicationsSwiper.destroy();
          document.querySelectorAll(".pb-slide").forEach(el => {
            el.removeAttribute("role");
            el.removeAttribute("aria-label");
          })
          document.querySelector(".pb-swiper__wrapper").removeAttribute("aria-live");
          document.querySelector(".pb-swiper__wrapper").removeAttribute("id");
          //console.log("pubSwiper destroyed");
        }
      }
    };

  document.addEventListener("DOMContentLoaded", function() { //свайпер изданий
    pubMobileSwiper();
    window.addEventListener('resize', function(){
      pubMobileSwiper();
    }
    )
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
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      568: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
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

    document.addEventListener("DOMContentLoaded", function() {
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
            controls: [],


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


      /*if (innerWidth < 992) {
        myMap.setCenter([[55.76198307340678,37.602512157798394]])
      }*/





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

    if ($(window).width() < 992) {
      myMap.setCenter([55.756731956298054,37.58968046987114]);
    }

    if ($(window).width() < 567) {
      myMap.setCenter([55.757, 37.6]);
      myMap.controls.remove(zoomControl) //убираем кнопки зума
      myMap.controls.remove(geolocationControl); //убираем кнопку геолокации
    }
    $(window).resize(function () {
      if ($(window).width() < 992 && $(window).width() > 567 ) {
        myMap.setCenter([55.756731956298054,37.58968046987114]);
        myMap.controls.add(zoomControl); //Возвращаем кнопки зума и геолокации в случае изменения ширины экрана.
        myMap.controls.add(geolocationControl);
      }
      else{
        if ($(window).width() <= 567) {
          myMap.setCenter([55.757, 37.6]);
          myMap.controls.remove(zoomControl);
          myMap.controls.remove(geolocationControl);

        }
      }
    });
    };
  });




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
              //console.log("name is " + nameMask)
              var maskCheck = nameMask.exec(nameSelector.value);
              //console.log(maskCheck);
              var submit = 'ok';
              //console.log('submit is ', submit)
              if (!maskCheck) submit = 'not ok'
              //console.log('submit is ', submit)
              return submit === 'ok';
            }
          },
          tel: {
              required: true,
             function: (name, value) => {
              const phone = selector.inputmask.unmaskedvalue()
              //console.log(phone)

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
      },
      submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log("Отправлено");
              alert('Отправлено');
            }
          }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        thisForm.reset();
      }
      });

      document.addEventListener("DOMContentLoaded", function() { //Первоначальная установка параметров раскрытия поиска

        if ( window.innerWidth > 992 && innerWidth<=1200) {
          searchField1200();

        } else if (window.innerWidth<= 992) {
          searchField992();

        }
        else {}
      });



      window.addEventListener("resize", function(){ //Переустановка раскрытия поиска (если повернули планшет)

        if ( window.innerWidth > 992 && innerWidth<=1200) {
          searchField1200();
         // console.log("resize 1200")
        } else if (window.innerWidth<= 992) {
          //else  {searchField992();
          searchField992();
          /*console.log("resize 992");
          console.log("resize");*/
        }

        else if (window.innerWidth > 1200) {
          var searchInput = document.querySelector(".search-form__input");
          searchInput.setAttribute("placeholder", "Поиск по сайту"); //Возвращаем placeholder
        }


      });

//Раскрытие окна поиска в мобильной версии 1200 - 992
//Если я правильно понял задумку дизайнера - окно раскрывается однажды и больше не закрывается.


  function searchField1200(){
    var btnOpen = document.getElementById("button1200");
    var searchForm = document.querySelector(".header__search-form");
    var searchInput = document.querySelector(".search-form__input");
    var burger = document.querySelector(".header__burger");
    var logo = document.querySelector(".header__logo");
    var btnClose = document.querySelector(".header__search-button-close");
    searchInput.setAttribute("placeholder", "") //Убираю placeholder
    searchForm.classList.remove("header__search-form_active"); //возвращаю форму в неактивное состояние
    searchInput.classList.remove("search-form__input_active");//возвращаю поле ввода в неактивное состояние
    btnClose.classList.add("element-hidden"); //Скрываю кнопку закрытия (если при открытом окне поиска планшет повернули)
    logo.classList.remove("element-hidden");//Лого показываем
    burger.classList.remove("element-hidden");
    btnOpen.style.visibility="visible";
    //console.log ("1200 var set");
    btnOpen.addEventListener("click", function(){
      //console.log("1200click");
      searchForm.classList.add("header__search-form_active");
      searchInput.classList.add("search-form__input_active");
      this.style.visibility="hidden";
    }, {once: true})
  }



//Раскрытие окна поиска в мобильной версии 992 - 768
//Если я правильно понимаю - окно должно открываться и закрываться по кнопке.



  function searchField992() {
    var btnOpen = document.getElementById("button992");
    var btnClose = document.querySelector(".header__search-button-close");
    var searchForm = document.querySelector(".header__search-form");
    var searchInput = document.querySelector(".search-form__input");
    var burger = document.querySelector(".header__burger");
    var logo = document.querySelector(".header__logo");
    searchInput.setAttribute("placeholder", "") //Убираю placeholder
    searchForm.classList.remove("header__search-form_active"); //возвращаю форму в неактивное состояние
    searchInput.classList.remove("search-form__input_active");//возвращаю поле ввода в неактивное состояние
    //burger.classList.remove("header__burger_active"); //возвращаю бургер в неактивное состояне
    burger.classList.remove("element-hidden"); //возвращаю бургер в неактивное состояне
    logo.classList.remove("element-hidden");//Лого показываем
    burger.style.zIndex="3";
    btnOpen.style.visibility="visible";
    btnClose.classList.add("element-hidden");
    btnOpen.addEventListener("click", function() {

      if (innerWidth <= 576) {
      searchForm.classList.add("header__search-form_active");
      searchInput.classList.add("search-form__input_active");
      burger.style.zIndex="0";

      searchInput.addEventListener("animationend", function (){
        btnClose.classList.remove("element-hidden"); //вывод кнопки закрытия после окончания анимации
      }, {once: true});}
      else {
      searchForm.classList.add("header__search-form_active");
      searchInput.classList.add("search-form__input_active");
      burger.classList.add("element-hidden");
      btnOpen.style.visibility="hidden";
      logo.classList.add("element-hidden");
      searchInput.addEventListener("animationend", function (){
        btnClose.classList.remove("element-hidden"); //вывод кнопки закрытия после окончания анимации
      }, {once: true});}

      btnClose.addEventListener("click", function(){
        //console.log("button close pressed");
        searchInput.classList.add("search-form__input_closed");
        searchInput.addEventListener("animationend", closeAnimation, {once: true}) //сразу отключаем после вызова.
        function closeAnimation(){
        //  console.log("Animation end");

        burger.classList.remove("element-hidden");
        burger.style.zIndex="3";
        logo.classList.remove("element-hidden");
        btnOpen.style.visibility="visible";
        searchInput.value=""; //очищаем поле если нажата кнопка закрытия поля
        searchInput.classList.remove("search-form__input_closed");
        searchForm.classList.remove("header__search-form_active");

       // console.log("function animationend finished");
      }
      searchInput.classList.remove("search-form__input_active");
        this.classList.add("element-hidden");
       // console.log("close procedure ended");
      }
      )
    })
  };

  //Плавный скролл.

$(document).ready(function(){
  $(".link").on('click', function(event) {
    function getWindowWidth () {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }
    if (this.hash !== "" && this.hash !== "#paintor_description") { //отлавливаем обычный клик в декстопе и не на художнике
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } // End if
    else {
      if (this.hash == "#paintor_description" && getWindowWidth () > 580) { // если клик на художнике и это не мобильная версия - ничего не делаем
        event.preventDefault();
        return;
      }
    else { // поведение в мобильной версии - работают все ссылки, в т.ч. художник.

      var hash = this.hash;
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        //scrollTop: $(hash).offset().top
        scrollTop: $(hash).offset().top
        //"scrollTop": "0" }, 600);
      }, 800, function(){
        window.location.hash = hash;
      });
      }}

  });
});




