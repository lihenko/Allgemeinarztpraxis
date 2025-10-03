//main.js file

jQuery('.home-slider').slick({
  autoplay: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  arrows: true,
  dots: false,
  infinite: true,
  speed: 800,
  autoplaySpeed: 4000,
  fade: true, // добре для паралаксу
  cssEase: 'linear',
  prevArrow: jQuery('.home-slider-prev'),
  nextArrow: jQuery('.home-slider-next'),
});

jQuery('.line-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    variableWidth: true,
    speed: 30000,
    dots: false,
    arrows: false,
    cssEase: 'linear',
    waitForAnimate: false,
    pauseOnFocus: false, 
    pauseOnHover: false
  });


jQuery(document).ready(function () {
  const slider = jQuery('.benefits-slider');

  // ініціалізація slick
  slider.slick({
  autoplay: false,
  slidesToScroll: 5,
  slidesToShow: 9,
  arrows: true,
  dots: false,
  infinite: true,
  cssEase: 'ease-in-out',
  speed: 1500,
  prevArrow: jQuery('.benefits-slider-prev'),
  nextArrow: jQuery('.benefits-slider-next'),
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 510,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 410,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

  let scrolledOnce = false; // прапорець, щоб не повторювати автопрокрутку

  // IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !scrolledOnce) {
        slider.slick('slickNext');
        scrolledOnce = true; // тільки один раз
      }
    });
  }, { threshold: 0.5 }); // коли видно мінімум 50% слайдера

  const sliderEl = document.querySelector('.benefits-slider');
  if (sliderEl) {
    observer.observe(sliderEl);
  }

});

jQuery('.contact-slider').slick({
  autoplay: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  arrows: true,
  dots: true,
  infinite: true,
  speed: 800,
  autoplaySpeed: 4000,
  prevArrow: jQuery('.contact-slider-prev'),
  nextArrow: jQuery('.contact-slider-next'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});


// Scroll to top
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);


function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

jQuery(document).on('click', 'a[href^="#"]', function (event) {
  if (jQuery(this).attr('href') == '#') {
    return;
  } else {
    event.preventDefault();
    jQuery('html, body').animate({
        scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top - 50
    }, 500);
  }
  
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.service-data').forEach((section) => {
    const more = section.querySelector('.service-more-description');
    const btn  = section.querySelector('.service-more-button a');
    const flexWrap = section.closest('.flex.flex-wrap'); // контейнер з items-end
    if (!more || !btn || !flexWrap) return;

    const OPEN_TEXT  = '+  mehr erfahren';
    const CLOSE_TEXT = '– weniger anzeigen';

    // Початкова підготовка
    more.classList.remove('hidden');
    more.style.overflow   = 'hidden';
    more.style.maxHeight  = '0px';
    more.style.transition = 'max-height 300ms ease';
    more.dataset.open = '0';

    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('role', 'button');

    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const isOpen = more.dataset.open === '1';

      if (isOpen) {
        // Закриваємо
        more.style.maxHeight = more.scrollHeight + 'px';
        requestAnimationFrame(() => {
          more.style.maxHeight = '0px';
        });
        more.dataset.open = '0';
        btn.textContent = OPEN_TEXT;
        btn.setAttribute('aria-expanded', 'false');

        // Додаємо items-end після завершення анімації
        const onClose = (ev) => {
          if (ev.propertyName === 'max-height' && more.dataset.open === '0') {
            //flexWrap.classList.add('items-end');
            more.removeEventListener('transitionend', onClose);
          }
        };
        more.addEventListener('transitionend', onClose);

      } else {
        // Відкриваємо
        more.style.maxHeight = more.scrollHeight + 'px';
        more.dataset.open = '1';
        btn.textContent = CLOSE_TEXT;
        btn.setAttribute('aria-expanded', 'true');

        // Одразу прибираємо items-end
        //flexWrap.classList.remove('items-end');

        const onOpen = (ev) => {
          if (ev.propertyName === 'max-height' && more.dataset.open === '1') {
            more.style.maxHeight = '';
            more.removeEventListener('transitionend', onOpen);
          }
        };
        more.addEventListener('transitionend', onOpen);
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const moreBox = document.querySelector('.bio-more-info');
  const btn     = document.querySelector('.bio-more-button');

  if (!moreBox || !btn) return;

  const OPEN_TEXT  = '+  mehr erfahren';
  const CLOSE_TEXT = '– weniger anzeigen';

  // Підготовка для плавного відкривання
  moreBox.classList.remove('hidden');
  moreBox.style.overflow   = 'hidden';
  moreBox.style.maxHeight  = '0px';
  moreBox.style.transition = 'max-height 300ms ease';
  moreBox.dataset.open = '0';

  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('role', 'button');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = moreBox.dataset.open === '1';

    if (isOpen) {
      // Закриваємо
      moreBox.style.maxHeight = moreBox.scrollHeight + 'px';
      requestAnimationFrame(() => {
        moreBox.style.maxHeight = '0px';
      });
      moreBox.dataset.open = '0';
      btn.textContent = OPEN_TEXT;
      btn.setAttribute('aria-expanded', 'false');
    } else {
      // Відкриваємо
      moreBox.style.maxHeight = moreBox.scrollHeight + 'px';
      moreBox.dataset.open = '1';
      btn.textContent = CLOSE_TEXT;
      btn.setAttribute('aria-expanded', 'true');

      const onEnd = (ev) => {
        if (ev.propertyName === 'max-height' && moreBox.dataset.open === '1') {
          moreBox.style.maxHeight = '';
          moreBox.removeEventListener('transitionend', onEnd);
        }
      };
      moreBox.addEventListener('transitionend', onEnd);
    }
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    function toggleItem() {
      // Закриваємо всі інші
      items.forEach(i => {
        const ans = i.querySelector(".faq-answer");
        if (i !== item) {
          i.classList.remove("open");
          ans.style.maxHeight = null;
          ans.style.opacity = 0;
        }
      });

      // Перемикаємо поточний
      if (item.classList.contains("open")) {
        item.classList.remove("open");
        answer.style.maxHeight = null;
        answer.style.opacity = 0;
      } else {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = 1;
      }
    }

    // Відкривати і по кліку, і по наведенню
    question.addEventListener("click", toggleItem);
    question.addEventListener("mouseover", toggleItem);
    item.addEventListener("mouseleave", toggleItem);
  });
});


document.addEventListener("scroll", function () {
  const header = document.getElementById("fixed-header");
  if (!header) return; // якщо елементу немає

  if (window.scrollY > 300) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});


AOS.init({
  duration: 800, // нова тривалість анімації
  easing: 'ease-in-out', // плавність анімації
  once: true,
  offset: 80,
  delay: 50,
});


jQuery('.terminbuchung-trigger').on('click', function (event) {
  event.preventDefault();
});


window.addEventListener("scroll", () => {
  const r1 = moveWithScroll(".Rezeptbestellung-img", 150, 300);
  const r2 = moveWithScroll(".Terminbuchung-img", 150, 450);

  const eresept = document.querySelector(".eresept-img");
  if (!eresept) return;

  if (r1.reached && r2.reached) {
    eresept.classList.add("zoom-in");
  } else {
    eresept.classList.remove("zoom-in"); // ховаємо в будь-якому іншому випадку
  }
});

function moveWithScroll(selector, startOffset, distance) {
  const el = document.querySelector(selector);
  if (!el) return { reached: false };

  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // від 0 до 1
  const progress = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);
  let offset = startOffset - progress * distance;
  if (offset < 0) offset = 0;

  el.style.transform = `translateY(${offset}px)`;

  // вважаємо "на місці", якщо offset == 0
  return { reached: offset === 0 };
}


(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.de = {}));
}(this, (function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {},
      };
  var German = {
      weekdays: {
          shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
          longhand: [
              "Sonntag",
              "Montag",
              "Dienstag",
              "Mittwoch",
              "Donnerstag",
              "Freitag",
              "Samstag",
          ],
      },
      months: {
          shorthand: [
              "Jan",
              "Feb",
              "Mär",
              "Apr",
              "Mai",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Okt",
              "Nov",
              "Dez",
          ],
          longhand: [
              "Januar",
              "Februar",
              "März",
              "April",
              "Mai",
              "Juni",
              "Juli",
              "August",
              "September",
              "Oktober",
              "November",
              "Dezember",
          ],
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "KW",
      rangeSeparator: " bis ",
      scrollTitle: "Zum Ändern scrollen",
      toggleTitle: "Zum Umschalten klicken",
      time_24hr: true,
  };
  fp.l10ns.de = German;
  var de = fp.l10ns;

  exports.German = German;
  exports.default = de;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


document.addEventListener("DOMContentLoaded", function(){
  flatpickr("#datepicker", {
    dateFormat: "d.m.Y",   // і для value, і для відображення
    locale: "de",
    maxDate: (() => {
      let d = new Date();
      d.setFullYear(d.getFullYear() - 18);
      return d;
    })(),
    minDate: (() => {
      let d = new Date();
      d.setFullYear(d.getFullYear() - 110);
      return d;
    })()
  });
});
