(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openMobileBtn: document.querySelector('[data-mobile-open]'),
    openModalReadBtn: document.querySelector('[data-modal-read-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeMobileBtn: document.querySelector('[data-mobile-close]'),
    closeModalReadBtn: document.querySelector('[data-modal-read-close]'),
    modal: document.querySelector('[data-modal]'),
    modal: document.querySelector('[data-read-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openMobileBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeMobileBtn.addEventListener('click', toggleModal);
  refs.closeModalReadBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();