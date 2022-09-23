// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.menu-open'),
//     closeMenuBtn: document.querySelector('.menu-close'),
//     menu: document.querySelector('.mobile-menu'),
//     menuList: document.querySelector('.mobile-menu__list'),
//   };
  
//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);
//   refs.menuList.addEventListener('click', removeMenu);

//   function toggleMenu() {
//     document.body.classList.toggle('no-scroll');
//     refs.menu.classList.toggle('is-hidden');
//   }
//   function removeMenu() {
//     refs.menu.classList.add('is-hidden');
//     document.body.classList.remove('no-scroll');
//   }
// })();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();