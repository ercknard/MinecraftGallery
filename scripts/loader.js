const fadeOut = () => {
    const loaderWrapper = document.querySelector('.wrapper');
    loaderWrapper.classList.add('fades');
  }
  
  window.addEventListener('load',fadeOut);


  