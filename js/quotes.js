let quoteSlideIndex = 0;
showQuoteSlides();

function showQuoteSlides() {
  let slides = document.getElementsByClassName("quote-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  quoteSlideIndex++;
  if (quoteSlideIndex > slides.length) {
    quoteSlideIndex = 1;
  }
  slides[quoteSlideIndex - 1].style.display = "flex";
  setTimeout(showQuoteSlides, 10000);
}