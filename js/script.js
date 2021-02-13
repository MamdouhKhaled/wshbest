(function () {
  var items = document.querySelectorAll('.carousel-item');
  var currentSlide  = 0;
  var nextSlide = function () {
    items[currentSlide].style.display = 'none';
    items[currentSlide].classList.toggle('active');
    currentSlide = (currentSlide+1) % items.length;
    items[currentSlide].style.display = 'block';
    items[currentSlide].classList.toggle('active');
  }
  window.setInterval(nextSlide,3000);
})();
