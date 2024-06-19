// Get all pages and buttons
const pages = document.querySelectorAll('.page');
const nextButtons = document.querySelectorAll('[id^="next-btn"]');
const backButton = document.getElementById('back-btn');

let currentPage = 0;

pages[currentPage].classList.add('show');

nextButtons.forEach((nextBtn, index) => {
  nextBtn.addEventListener('click', () => {
    if (index < pages.length - 1) {
      pages[currentPage].classList.remove('show');
      currentPage++;
      pages[currentPage].classList.add('show');
      if (currentPage === pages.length - 1) {
        setTimeout(() => {
          pages[currentPage].classList.add('pop-out');
        }, 100);
      }
      showNextPage();
    }
  });
});

if (backButton) {
  backButton.addEventListener('click', () => {
    pages[currentPage].classList.remove('show');
    currentPage = 0;
    pages[currentPage].classList.add('show');
    showIntroPage();
  });
}

function showNextPage() {
  setTimeout(() => {
    nextButtons.forEach((nextBtn) => {
      nextBtn.classList.add('loading');
    });
    setTimeout(() => {
      nextButtons.forEach((nextBtn) => {
        nextBtn.classList.remove('loading');
      });
    }, 1000);
  }, 100);
}

function showIntroPage() {
  setTimeout(() => {
    backButton.classList.add('loading');
    setTimeout(() => {
      backButton.classList.remove('loading');
    }, 1000);
  }, 100);
}
