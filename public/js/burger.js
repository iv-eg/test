const burger = document.querySelector('.header__burger');
const listBox = document.querySelector('.header__list-box');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger--active')
    listBox.classList.toggle('header__list-box--active')
    body.classList.toggle('lock')
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJidXJnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnVyZ2VyJyk7XG5jb25zdCBsaXN0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbGlzdC1ib3gnKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19idXJnZXItLWFjdGl2ZScpXG4gICAgbGlzdEJveC5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX2xpc3QtYm94LS1hY3RpdmUnKVxuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbG9jaycpXG59KSJdLCJmaWxlIjoiYnVyZ2VyLmpzIn0=