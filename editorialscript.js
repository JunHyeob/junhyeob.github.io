// 1. 데이터 리스트
const works = [
    { title: "토끼 토토의 감정 가방 동화책", img: "ed-img4.jpg" },
    { title: "슈퍼마리오에 대해", img: "ed-img3.jpg" },
    { title: "컴퓨터 속 세상 훔쳐보기", img: "ed-img2.jpg" },
    { title: "브루탈리즘에 대해", img: "ed-img1.jpg" },
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