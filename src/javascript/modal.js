(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openMobileBtn: document.querySelector('[data-mobile-open]'),
    // openModalReadBtn: document.querySelector('[data-modal-read-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeMobileBtn: document.querySelector('[data-mobile-close]'),
    // closeModalReadBtn: document.querySelector('[data-modal-read-close]'),
    modal: document.querySelector('[data-modal]'),
    // modal: document.querySelector('[data-read-modal]'),

    //  MODALS JS
    openIceCream: document.querySelector('[data-icecream-open]'),
    closeIceCream: document.querySelector('[data-icecream-close]'),
    icecreammodal: document.querySelector('[data-icecream-modal]'),

    openIceCoffee: document.querySelector('[data-icecoffee-open]'),
    closeIceCoffee: document.querySelector('[data-icecoffee-close]'),
    IceCoffeemodal: document.querySelector('[data-icecoffee-modal]'),

    openMilkShakes: document.querySelector('[data-milkshakes-open]'),
    closeMilkShakes: document.querySelector('[data-milkshakes-close]'),
    milkShakesmodal: document.querySelector('[data-milkshakes-modal]'),

    openReadMore: document.querySelector('[data-readmore-open]'),
    closeReadMore: document.querySelector('[data-readmore-close]'),
    readMoremodal: document.querySelector('[data-readmore-modal]'),

    openLocation: document.querySelector('[data-location-open]'),
    closeLocation: document.querySelector('[data-location-close]'),
    locationmodal: document.querySelector('[data-location-modal]'),

    openFranchise: document.querySelector('[data-franchise-open]'),
    closeFranchise: document.querySelector('[data-franchise-close]'),
    franchisemodal: document.querySelector('[data-franchise-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openMobileBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  // refs.closeMobileBtn.addEventListener('click', toggleModal);
  // refs.closeModalReadBtn.addEventListener('click', toggleModal);

  //MODAL JS
  refs.openIceCream.addEventListener('click', toggleIceCream);
  refs.closeIceCream.addEventListener('click', toggleIceCream);

  refs.openIceCoffee.addEventListener('click', toggleIceCoffee);
  refs.closeIceCoffee.addEventListener('click', toggleIceCoffee);

  refs.openMilkShakes.addEventListener('click', toggleMilkShakes);
  refs.closeMilkShakes.addEventListener('click', toggleMilkShakes);

  refs.openReadMore.addEventListener('click', toggleReadMore);
  refs.closeReadMore.addEventListener('click', toggleReadMore);

  refs.openLocation.addEventListener('click', toggleLocation);
  refs.closeLocation.addEventListener('click', toggleLocation);

  refs.openFranchise.addEventListener('click', toggleFranchise);
  refs.closeFranchise.addEventListener('click', toggleFranchise);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }

  function toggleIceCream() {
    document.body.classList.toggle('modal-open');
    refs.icecreammodal.classList.toggle('is-hidden');
  }

  function toggleIceCoffee() {
    document.body.classList.toggle('modal-open');
    refs.IceCoffeemodal.classList.toggle('is-hidden');
  }

  function toggleMilkShakes() {
    document.body.classList.toggle('modal-open');
    refs.milkShakesmodal.classList.toggle('is-hidden');
  }

  function toggleReadMore() {
    document.body.classList.toggle('modal-open');
    refs.readMoremodal.classList.toggle('is-hidden');
  }

  function toggleLocation() {
    document.body.classList.toggle('modal-open');
    refs.locationmodal.classList.toggle('is-hidden');
  }

  function toggleFranchise() {
    document.body.classList.toggle('modal-open');
    refs.franchisemodal.classList.toggle('is-hidden');
  }
})();
