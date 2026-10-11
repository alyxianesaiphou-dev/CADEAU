let code = "";   
const bonCode = "010101";   // le code secret, 6 chiffres

const cases = document.querySelectorAll(".case");
const boutons = document.querySelectorAll(".touche button");

const ecranCode = document.querySelector(".ecran");
const ecranDate = document.querySelector(".ecran-date");

const ecranChargement = document.querySelector(".ecran-chargement");

const ecranGateau = document.querySelector(".ecran-gateau");
const compte = document.querySelector(".compte");
const boutonSouffle = document.querySelector(".bouton-souffle");

const ecranEnveloppe = document.querySelector(".ecran-enveloppe");
const enveloppe = document.querySelector(".enveloppe");
const sceau = document.querySelector(".sceau");

const ecranLettre = document.querySelector(".ecran-lettre");

boutons.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    if (bouton.classList.contains("efface")) {
        code = code.slice(0, -1);           
      } else if (code.length < 6) {
        code = code + bouton.textContent;    
      }
      afficher();
      if(code.length === 6){
        setTimeout(verifier,400);
      }
  });
});

function afficher() {
  cases.forEach(function (c, i) {
    if (i < code.length) {
      c.textContent = "•";
    } else {
      c.textContent = "";
    }
  });
}

function verifier(){
  if(code===bonCode){
    ecranCode.classList.add("cache");
    ecranDate.classList.remove("cache");
    lancerFeux();

    setTimeout(function () {
      arreterFeux();
      ecranDate.classList.add("cache");
      ecranChargement.classList.remove("cache");
      setTimeout(function () {
        changer(ecranChargement, ecranGateau);
      }, 10000);
    }, 5000);
  }
  else{
    code ="";
    afficher();
  }
}

const pluie = document.querySelector(".pluie");
const symboles = ["♥", "♡", "❥", "❣", "ღ"];
const teintes = ["#7c1226", "#dc959d", "#a8c47a", "#c22a45"];

for (let i = 0; i < 30; i++) {
  const colonne = document.createElement("div");   
  colonne.className = "colonne";

  let texte = "";
  for (let j = 0; j < 20; j++) {
    texte = texte + symboles[Math.floor(Math.random() * symboles.length)] + "\n";
  }
  colonne.textContent = texte;

  colonne.style.left = (i / 30 * 100) + "%";
  colonne.style.fontSize = (14 + Math.random() * 14) + "px";
  colonne.style.color = teintes[Math.floor(Math.random() * teintes.length)];
  colonne.style.animationDuration = (3 + Math.random() * 5) + "s";
  colonne.style.animationDelay = (-Math.random() * 8) + "s";

  pluie.appendChild(colonne);  
}

sceau.addEventListener("click", function () {
  enveloppe.classList.add("ouverte");

  setTimeout(function () {
    changer(ecranEnveloppe, ecranLettre);
  }, 1700);
});

function changer(ancien, nouveau) {
  ancien.classList.add("sort");

  setTimeout(function () {
    ancien.classList.add("cache");
    ancien.classList.remove("sort");
    nouveau.classList.remove("cache");
  }, 600);
}

boutonSouffle.addEventListener("click", function () {
  ecranGateau.classList.add("nuit");                    

  setTimeout(function () { compte.textContent = "3"; }, 1500);
  setTimeout(function () { compte.textContent = "2"; }, 2500);
  setTimeout(function () { compte.textContent = "1"; }, 3500);

  setTimeout(function () {                              
    compte.textContent = "";
    ecranGateau.classList.add("eteint");
  }, 4500);

  setTimeout(function () {                              
    lancerFeux();
  }, 5500);

  setTimeout(function () {                              
    arreterFeux();
    changer(ecranGateau, ecranEnveloppe);
  }, 12000);
});