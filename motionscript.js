// 1. 데이터 리스트
const works = [
    { title: "남성 화장품 쇼핑몰 ddd 광고 모션", img: "motion-img11.jpg" },
    { title: "2025 생활 속 전자파 바로알기 공모전", img: "motion-img10.jpg" },
    { title: "넘버플레이트 외주 광고 3D 모션", img: "motion-img9.jpg" },
    { title: "디스코드 광고 3D 모션", img: "motion-img8.jpg" },
    { title: "아이폰16 광고 3D 모션", img: "motion-img7.jpg" },
    { title: "의자 텍스쳐링", img: "motion-img6.jpg" },
    { title: "chill guy 밈 릴스 제작", img: "motion-img5.jpg" },
    { title: "Johnny Stimson - Gimme Gimme 시네마틱", img: "motion-img4.jpg" },
    { title: "빅뱅 - Last Dance 시네마틱", img: "motion-img3.jpg" },
    { title: "태연 - weekend 키네틱 타이포", img: "motion-img2.jpg" },
    { title: "트윈 렌즈 카메라 모델링", img: "motion-img1.jpg" },


];

// 2. 화면에 그리는 기능
const gallery = document.getElementById('gallery');

function loadGallery() {
    works.forEach(work => {
        const div = document.createElement('div');
        div.className = 'item';
        
        div.innerHTML = `
            <img src="${work.img}" alt="${work.title}">
            <div class="caption">${work.title}</div>
        `;
        
        gallery.appendChild(div);
    });
}

// 페이지가 로드되면 실행
window.onload = loadGallery;