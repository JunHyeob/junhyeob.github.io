// 1. 데이터 리스트
const works = [
    { title: "기의 순환을 경험으로 담아낸 호텔 문화상품디자인", img: "iden-img8.jpg" },
    { title: "WAYDRAFT 로고 및 명함 디자인 외주", img: "iden-img7.jpg" },
    { title: "JUSTCLICK 캐릭터 공모전", img: "iden-img6.jpg" },
    { title: "부산 제품 대여 브랜드 하모", img: "iden-img5.jpg" },
    { title: "경남 K 어워즈 우족한 곰탕 패키지 디자인", img: "iden-img4.jpg" },
    { title: "부산국제어워즈 부산시장 살리기 프로젝트 노나묵자", img: "iden-img3.jpg" },
    { title: "대구대학교 군사학과 잠바 디자인", img: "iden-img2.jpg" },
    { title: "블루어워즈 캉주니 캐릭터 디자인", img: "iden-img1.jpg" },
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