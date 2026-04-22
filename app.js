// 1. 필요한 요소들 가져오기
const themeBtn = document.querySelector('#themeBtn');
const greetBtn = document.querySelector('#greetBtn');
const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');
const body = document.querySelector('body');
const heroSection = document.querySelector('.hero');

// 2. 다크모드 토글 기능
themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeBtn.textContent = body.classList.contains('dark') ? '라이트모드' : '다크모드';
});

// 3. 인사하기 버튼 상호작용 (정상 작동 확인용)
greetBtn.addEventListener('click', () => {
  alert('반갑습니다! 여러분의 멋진 서비스를 기대할게요! 🚀');
  console.log('인사하기 버튼이 클릭되었습니다.');
});

// 4. 모바일 햄버거 메뉴 토글
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// 5. 페이지 로드 시 페이드인 효과 실행
window.addEventListener('load', () => {
  heroSection.classList.add('visible');
});
