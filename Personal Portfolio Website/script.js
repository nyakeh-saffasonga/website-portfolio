let grid = document.querySelector(".hexagonGrid");
let canvas = document.getElementById("hexagon");
let hexagonImage = document.getElementById("hexagonImage")

function createHexagonGrid() {
    for (let i = 0; i < 400; i++) {
        let hexagon = document.createElement("div");
        let hexagonImg = document.createElement("img");
        hexagonImg.src = "assets/images and gifs/hexagon-svgrepo-com.svg";
        hexagon.appendChild(hexagonImg);
        let row = Math.floor(i / 20);
        let col = i % 20;
        if (col % 2 === 1) {
            hexagon.style.transform = 'translateY(4vw)';
        }
        grid.appendChild(hexagon);
    }
}

createHexagonGrid();

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const hexagons = document.querySelectorAll('.hexagonGrid div');
    hexagons.forEach(hex => {
        const rect = hex.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);
        const maxDistance = 200; // pixels
        const scale = Math.max(0.5, 1 - distance / maxDistance);
        hex.style.transform = `scale(${scale})`;
    });
});

