const closedEyes = document.querySelector('.closed');
const openEyes = document.querySelector('.open');

// Add event listener
closedEyes.addEventListener("click", () => {
    if(openEyes.classList.contains('open')) {
        openEyes.classList.add('active');
        closedEyes.classList.remove('active');
    }
});

openEyes.addEventListener('click', () => {
    if (closedEyes.classList.contains('closed')) {
        closedEyes.classList.add('active');
        openEyes.classList.remove('active');
    }
});