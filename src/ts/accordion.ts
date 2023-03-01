const accordionButton = document.getElementById('js-accordion');
const accordionContets = document.getElementById('js-accordion-contents');

if (accordionButton != null && accordionContets != null) {
  accordionButton.addEventListener('click', () => {
    accordionContets.classList.toggle('h-0');
  });
}
