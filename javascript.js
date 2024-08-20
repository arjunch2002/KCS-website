
const animatedElement = document.querySelector('.y-div');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const elementTop = animatedElement.offsetTop;
  const elementHeight = animatedElement.offsetHeight;

  if (scrollPosition >= elementTop - elementHeight) {
    animatedElement.classList.add('animate');
  } else {
    animatedElement.classList.remove('animate');
  }
});