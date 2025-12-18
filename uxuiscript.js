// 1. 데이터 리스트
const works = [
    { title: "남성 화장품 쇼핑몰 ddd", img: "uxui-img2.jpg" },
    { title: "디자이너를 위한 작업 공간 대여 서비스 uedem", img: "uxui-img1.jpg" },

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