document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger"),
    navList = document.querySelector(".nav__list"),
    navLinks = document.querySelectorAll(".nav__link"),
    overlay = document.querySelector(".overlay"),
    btnDarkMode = document.querySelector(".dark-mode-btn"),
    btn = document.querySelector(".btn"),
    animeElements = document.querySelectorAll(".anime-element");

  // Проверка темной темы в localStorage

  if (localStorage.getItem("darkMode") === "dark") {
    btnDarkMode.classList.add("dark-mode-btn-active");
    const isDark = document.body.classList.add("dark");
  }

  // Включение ночного режима по кнопке

  btnDarkMode.addEventListener("click", () => {
    btnDarkMode.classList.toggle("dark-mode-btn-active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
      localStorage.setItem("darkMode", "dark");
    } else {
      localStorage.setItem("darkMode", "light");
    }
  });

  // Запуск анимации по кнопке

  if (btn) {
    btn.addEventListener("click", () => {
      animeElements.forEach((elem) => {
        elem.classList.toggle("anime");
      });
    });
  }

  // Открытие меню при нажатии на гамбургер

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
    hamburger.classList.toggle("hamburger_active");
    btnDarkMode.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  // Функция закрытия меню и удаления активных классов с элементов

  function removeActiveClass() {
    navList.classList.remove("active");
    hamburger.classList.remove("hamburger_active");
    btnDarkMode.classList.remove("active");
    overlay.classList.remove("active");
  }

  // Закрытие меню при нажатии на любой пунк в меню

  navLinks.forEach((item) => {
    item.addEventListener("click", removeActiveClass);
  });

  // Закрытие меню при нажатии вне области меню

  overlay.addEventListener("click", removeActiveClass);

  //   formBtn.addEventListener("click", () => {
  //     if (userName.value && userTel.value) {
  //       modal.classList.add("activate");
  //       setTimeout(() => {
  //         modal.classList.remove("activate");
  //       }, 2000);
  //     }
  //   });

  //   Форма обратной связи

  //   $(document).ready(function () {
  //     $("form").submit(function (e) {
  //       e.preventDefault();
  //       $.ajax({
  //         type: "POST",
  //         url: "mailer/smart.php",
  //         data: $(this).serialize(),
  //       }).done(function () {
  //         $(this).find("input").val("");
  //         $("form").trigger("reset");
  //       });
  //       return false;
  //     });
  //   });
});
