//main.js file

jQuery('.projects-slider-wrap').slick({
  autoplay: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  arrows: true,
  dots: false,
  rtl:true,
  centerMode: true,
  centerPadding: "20vw",
  prevArrow: jQuery('.projects-prev-button'),
  nextArrow: jQuery('.projects-next-button'),
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        centerPadding: "150px"
      }
    },
    {
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        centerPadding: "0px"
      }
    }
  ]
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
        scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
    }, 500);
  }
  
});


Fancybox.bind("[data-fancybox]", {
  // Your custom options
});








  document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".read-more-block");

    blocks.forEach(block => {
      const readMoreEl = block.querySelector(".read-more");
      const readMoreButton = block.querySelector(".read-more-button");

      if (!readMoreEl || !readMoreButton) return;

      const originalText = readMoreButton.textContent;
      const lessText = readMoreButton.dataset.less || "Hide";

      // Зберігаємо елементи, які йдуть після .read-more
      const hiddenWrapper = document.createElement("div");
      hiddenWrapper.classList.add("read-more-hidden");

      let sibling = readMoreEl.nextElementSibling;
      const elementsToMove = [];

      while (sibling) {
        elementsToMove.push(sibling);
        sibling = sibling.nextElementSibling;
      }

      elementsToMove.forEach(el => hiddenWrapper.appendChild(el));
      block.appendChild(hiddenWrapper); // додали загорнутий блок

      readMoreButton.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = block.classList.contains("open");

        if (isOpen) {
          block.classList.remove("open");
          hiddenWrapper.classList.remove("read-more-visible");
          hiddenWrapper.classList.add("read-more-hidden");
          readMoreButton.textContent = originalText;
        } else {
          block.classList.add("open");
          hiddenWrapper.classList.remove("read-more-hidden");
          hiddenWrapper.classList.add("read-more-visible");
          readMoreButton.textContent = lessText;
        }
      });
    });
  });



document.addEventListener('DOMContentLoaded', () => {
    // Функція для відкриття вікна
    function openWindow(memberId) {
        const targetElement = document.getElementById(`data-member-${memberId}`);
        if (targetElement) {
            targetElement.classList.add('open');
            document.body.style.overflowY = 'hidden'; // Прибираємо вертикальний скрол
        }
    }

    // Функція для закриття вікна
    function closeWindow() {
        const openElements = document.querySelectorAll('.data-member.open');
        openElements.forEach(element => {
            element.classList.remove('open');
        });
        document.body.style.overflowY = ''; // Відновлюємо вертикальний скрол
    }

    // Обробник натискання на кнопки з data-member
    document.querySelectorAll('a[data-member]').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Запобігаємо переходу за посиланням
            const memberId = button.dataset.member;
            openWindow(memberId);
        });
    });

    // Обробник натискання на кнопки .data-member-close
    document.addEventListener('click', (event) => {
        // Використовуємо closest() для пошуку батьківського елемента з класом 'data-member-close'
        const closeButton = event.target.closest('.data-member-close');
        if (closeButton) {
            closeWindow();
        }
    });

    // Обробник натискання за межами .data-member вікна
    document.addEventListener('click', (event) => {
        const openDataMember = document.querySelector('.data-member.open');
        if (openDataMember && !openDataMember.contains(event.target) && !event.target.closest('a[data-member]')) {
            // Перевіряємо, що клік був не по кнопці відкриття і не всередині відкритого вікна
            closeWindow();
        }
    });

    // Обробник натискання клавіші Escape для закриття
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeWindow();
        }
    });
});



  document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".articles-menu li");
    const articleItems = document.querySelectorAll(".article-item");

    // Додати .active до першого пункту меню і першого .article-item
    if (menuItems.length > 0 && articleItems.length > 0) {
      menuItems[0].classList.add("active");
      articleItems[0].classList.add("active");
    }

    menuItems.forEach((menuItem) => {
      const link = menuItem.querySelector("a");

      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = link.getAttribute("data-articles");

        // Зняти .active з усіх пунктів меню і статей
        menuItems.forEach((item) => item.classList.remove("active"));
        articleItems.forEach((item) => item.classList.remove("active"));

        // Додати .active до поточного пункту меню
        menuItem.classList.add("active");

        // Знайти і активувати відповідний .article-item
        const targetArticle = document.querySelector(
          `.article-item[data-grid="${target}"]`
        );
        if (targetArticle) {
          targetArticle.classList.add("active");
        }
      });
    });
  });


document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо всі пункти меню
    const menuLinks = document.querySelectorAll('.projects-menu a');
    
    // Отримуємо всі блоки з деталями проектів
    const projectDetails = document.querySelectorAll('.project-details');
    const menuItems = document.querySelectorAll('.projects-menu li');
    
    // Функція для активації вибраного проекту
    function activateProject(projectName) {
        // Видаляємо клас active з усіх елементів меню та проектів
        menuLinks.forEach(link => link.classList.remove('active'));
        menuItems.forEach(item => item.classList.remove('active'));
        projectDetails.forEach(project => project.classList.remove('active'));

        // Додаємо клас active до вибраного елемента меню
        const activeLink = document.querySelector(`.projects-menu a[data-project="${projectName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Додаємо клас active до відповідного елемента меню (li)
        const activeItem = activeLink.closest('li');
        if (activeItem) {
            activeItem.classList.add('active');
        }

        // Додаємо клас active до відповідного проекту
        const activeProject = document.querySelector(`.project-details[data-project-details="${projectName}"]`);
        if (activeProject) {
            activeProject.classList.add('active');
        }
    }

    // Спочатку активуємо перший проект автоматично, без потреби знати його назву
    const firstProject = menuLinks[0].getAttribute('data-project');
    if (firstProject) {
        activateProject(firstProject); // активуємо перший проект
    }

    // Додаємо обробник для натискання на пункти меню
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Запобігаємо переходу по лінку
            const projectName = this.getAttribute('data-project');
            activateProject(projectName);
        });
    });
});




const slider = document.getElementById('before-after-slider');
const before = document.getElementById('before-image');
if (before && slider) {
  const beforeImage = before.getElementsByTagName('img')[0];

const resizer = document.getElementById('resizer');

let active = false;

//Sort overflow out for Overlay Image
document.addEventListener("DOMContentLoaded", function() {
  let width = slider.offsetWidth;
  console.log(width);
  beforeImage.style.width = width + 'px';
});

//Adjust width of image on resize 
window.addEventListener('resize', function() {
  let width = slider.offsetWidth;
  console.log(width);
  beforeImage.style.width = width + 'px';
})


  resizer.addEventListener('mousedown',function(){
    active = true;
  resizer.classList.add('resize');

  });

  document.body.addEventListener('mouseup',function(){
    active = false;
  resizer.classList.remove('resize');
  });

  document.body.addEventListener('mouseleave', function() {
    active = false;
    resizer.classList.remove('resize');
  });




document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

resizer.addEventListener('touchstart',function(){
  active = true;
  resizer.classList.add('resize');
});

document.body.addEventListener('touchend',function(){
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('touchcancel',function(){
  active = false;
  resizer.classList.remove('resize');
});

//calculation for dragging on touch devices
document.body.addEventListener('touchmove',function(e){
  if (!active) return;
  let x;
  
  let i;
  for (i=0; i < e.changedTouches.length; i++) {
  x = e.changedTouches[i].pageX; 
  }
  
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

function slideIt(x){
    let transform = Math.max(0,(Math.min(x,slider.offsetWidth)));
    before.style.width = transform+"px";
    resizer.style.left = transform-0+"px";
}

//stop divs being selected.
function pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
}
}
