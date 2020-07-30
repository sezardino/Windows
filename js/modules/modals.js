const modals = (trigerSelector, modalSelector, closeBtnSelector, timeOut = false, closeClickOverlay = true ) => {
  
  const trigers = document.querySelectorAll(trigerSelector),
        modal = document.querySelector(modalSelector),
        closeBtn = modal.querySelector(closeBtnSelector),
        windows = document.querySelectorAll('[data-modal]');
  
  const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';



    modal.addEventListener('click', function(evt) {
      if (evt.target.classList.contains(modalSelector.slice(1)) && closeClickOverlay) {
        closeModal()
      }
    })
  };

  const closeModal = () => {
    windows.forEach(item => {
      item.style.display = 'none';
    });

    modal.style.display = '';
    document.body.style.overflow = '';
  }

  const onTrigerClick = (evt) => {
    evt.preventDefault();
    
    windows.forEach(item => {
      item.style.display = 'none';
    });
    openModal();
  };    
  const onCloseBtnClick = (evt) => {
    evt.preventDefault();
    closeModal()
  };

  const openModalTimer = (time) => {
    if (timeOut) {
      setTimeout(() => openModal(), time)}
  };
  openModalTimer(600000);

  trigers.forEach(triger => triger.addEventListener('click', onTrigerClick))
  closeBtn.addEventListener('click', onCloseBtnClick);
};

export default modals;