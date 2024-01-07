window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header__burger-btn').addEventListener('click', function() {
      document.querySelector('.header__burger-menu').classList.toggle('is-active')
    }) //выездное меню
    document.querySelector('.header__burger-btn-sidebar').addEventListener('click', function() {
        document.querySelector('.header__burger-menu').classList.toggle('is-active')
      })
  })
