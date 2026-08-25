function createHexagonGrid() { // hexagon grid

    let grid = document.querySelector(".hexagonGrid");
    let canvas = document.getElementById("hexagon");
    let hexagonImage = document.getElementById("hexagonImage");

    for (let i = 0; i < 400; i++) {
        let hexagon = document.createElement("div");
        let hexagonImg = document.createElement("img");
        hexagonImg.src = "images/other/hexagon-svgrepo-com.svg";
        hexagon.appendChild(hexagonImg);
        let row = Math.floor(i / 20);
        let col = i % 20;
        if (row % 2 === 1) {
            hexagon.style.marginLeft = '2.5vw';
        }
        hexagon.style.marginTop = '-10vh';
        grid.appendChild(hexagon);
    }
}

document.addEventListener('mousemove', (e) => { // hexagon grid animation
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

createHexagonGrid();

function mobileNavbar() { // mobile navbar
  var x = document.getElementById("mobileNavbarLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

