// Section Main
(function () {
    var titleMainOne = document.querySelector('.georgia__wrap__up__content');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('georgia__up__content-animation');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();

// Section Main
(function () {
    var titleMainOne = document.querySelector('.georgia__wrap__down__content');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('georgia__up__content-animation');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();


// Section Main
(function () {
    var titleMainOne = document.querySelector('.georgia__wrap__up__image');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('image-opacity');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();



// Section Main
(function () {
    var titleMainOne = document.querySelector('.georgia__wrap__down__image');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('image-opacity');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();