const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('#aside');

// 처음엔 ☰로 시작
hamburger.textContent = '☰';

hamburger.addEventListener('click', () => {
aside.classList.toggle('open');

// 상태에 따라 변경
if (aside.classList.contains('open')) {
hamburger.textContent = '✕';
} else {
hamburger.textContent = '☰';
}
});