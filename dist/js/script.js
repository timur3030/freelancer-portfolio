document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger"),
    navList = document.querySelector(".nav__list"),
    navLinks = document.querySelectorAll(".nav__link"),
    overlay = document.querySelector(".overlay"),
    btnDarkMode = document.querySelector(".dark-mode-btn");

  //   if (document.documentElement.scrollTop > 0) {
  //     header.classList.add("blackBackground");
  //   }

  //   window.addEventListener("scroll", function () {
  //     if (document.documentElement.scrollTop > 0) {
  //       header.classList.add("blackBackground");
  //     } else {
  //       header.classList.remove("blackBackground");
  //     }
  //   });

  btnDarkMode.addEventListener("click", () => {
    btnDarkMode.classList.toggle("dark-mode-btn-active");
    document.body.classList.toggle("dark");
  });

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
    hamburger.classList.toggle("hamburger_active");
    btnDarkMode.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  function removeActiveClass() {
    navList.classList.remove("active");
    hamburger.classList.remove("hamburger_active");
    btnDarkMode.classList.remove("active");
    overlay.classList.remove("active");
  }

  navLinks.forEach((item) => {
    item.addEventListener("click", removeActiveClass);
  });

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
