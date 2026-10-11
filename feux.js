const toile = document.querySelector(".feux");
const pinceau = toile.getContext("2d");
const couleurs = ["#f4e8cf", "#f7dcd8", "#dc959d", "#d6a94a", "#ffffff", "#ff9fb0"];

let etincelles = [];
let feuxActifs = false;
let minuterie;

function ajusterToile() {
  toile.width = window.innerWidth;
  toile.height = window.innerHeight;
}
window.addEventListener("resize", ajusterToile);
ajusterToile();

function explosion() {
  const x = Math.random() * toile.width;
  const y = Math.random() * toile.height * 0.7;
  const couleur = couleurs[Math.floor(Math.random() * couleurs.length)];

  for (let i = 0; i < 60; i++) {
    const angle = Math.random() * Math.PI * 2;
    const vitesse = 1.5 + Math.random() * 5;
    etincelles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * vitesse,
      vy: Math.sin(angle) * vitesse,
      vie: 1,
      couleur: couleur
    });
  }
}

function dessiner() {
  pinceau.clearRect(0, 0, toile.width, toile.height);

  etincelles.forEach(function (e) {
    e.vx = e.vx * 0.985;             
    e.vy = e.vy * 0.985 + 0.045;     
    e.x = e.x + e.vx;
    e.y = e.y + e.vy;
    e.vie = e.vie - 0.012;           

    pinceau.globalAlpha = Math.max(e.vie, 0);
    pinceau.strokeStyle = e.couleur;
    pinceau.lineWidth = 2.5;
    pinceau.lineCap = "round";
    pinceau.beginPath();
    pinceau.moveTo(e.x - e.vx * 3, e.y - e.vy * 3);
    pinceau.lineTo(e.x, e.y);
    pinceau.stroke();
  });

  etincelles = etincelles.filter(function (e) {
    return e.vie > 0;
  });

  if (feuxActifs || etincelles.length > 0) {
    requestAnimationFrame(dessiner);
  }
}

function lancerFeux() {
  feuxActifs = true;
  explosion();
  minuterie = setInterval(explosion, 450); 
  dessiner();
}

function arreterFeux() {
  feuxActifs = false;
  clearInterval(minuterie);
}