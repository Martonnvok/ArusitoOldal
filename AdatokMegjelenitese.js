//A piaci rész felületet jeleníti meg
import { xKattintas } from "./GombokHsznalata.js";
export function megjelenitDiv(list) {
  const ARTICLE = $("article");
  const DIVTORLES = ARTICLE.find(".div");
  const MODALID = $("#myModal .modal-contenct")
  DIVTORLES.remove();

  let htmlkod = `<div class="semmi row"> `;
  for (let index = 0; index < list.length; index++) {
    htmlkod +=
      `    
        
        <div class=" col-3 col-3">
            <p>Neve: ${list[index].nev}</p>
            <p>db:${list[index].darab}</p>
            <p>Ár: ${list[index].ar}Ft</p>
            <p>Kép: <img class="img-fluid" src="${list[index].kep}" alt="kep${index}"></p>
            <p><button class="jobb btn btn-primary">+</button><button class="bal btn btn-primary">- </button></p>
            <p><button class="kosar btn btn-success" id="id1${index}">Kosárba rakás</button></p>
            <p><button class="class2 megnezem btn btn-info" data-bs-toggle="modal">Megnézem</button></p>
        </div>`;
  }

 

  /*
  const KOSARAK = $(".class2");
  KOSARAK.on("click",function()  {
  let id = even.target.id;
  let bruh = `
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
  </button>
  
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
  
        <div class="modal-header">
          <h4 class="modal-title">${list[id].nev}</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
  
        <div class="modal-body">
          Modal body..
        </div>
  
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
  
      </div>
    </div>
  </div>

    `;
    MODALID.html(bruh);
  })
  megjegyzés: data-bs-target="#myModal"
  */
  ARTICLE.html(htmlkod);
}

//Az admin, weblap elejét jeleníti meg

export function megjelenitTabla(adatok) {

  const ARTICLE = $("article");

  let htmlkod = `
    <div class="container mt-3 semmi">
      <table class="table" id="torol">
        <thead class="table-dark">
          <tr>
            <td>Neve</td>
            <td>db</td>
            <td>Ár</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
  `;
  for (let index = 0; index < adatok.length; index++) {
    htmlkod += `
          <tr>
            <td>${adatok[index].nev}</td>
            <td>${adatok[index].darab}</td>
            <td>${adatok[index].ar}Ft</td>
            <td><button class="btn btn-danger" id="x${index}">X</button></td>
          </tr>
    `;
  }
  htmlkod += `
        </tbody>
      </table>
    </div>
  `;
  ARTICLE.append(htmlkod);
  xKattintas(adatok);
}

//Navigáció, oldal linkek
export function nav() {
  const HEADER = $("header");
  let header = "";
  header += `<h1>Oláh Pékség</h1>`;
  const NAV = $("nav");
  let nav = "";
  nav +=
    `
        <nav class=" navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" >Navigációk</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Főoldal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="admin.html">Admin felület</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
  NAV.append(nav);
}

export function adminHozzaad() {
  const HEADER = $("header");
  let header = "";
  header += `<h1>Oláh Pékség</h1>`;
  const ASIDE = $("aside");
  let aside = `
      <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <label>Név:</label>
              <br>
              <input type="text" id="nev">
            </li>
            <li class="nav-item">  
              <label>Darab:</label>
              <br>
              <input type="text" id="darab">
            </li>
            <li class="nav-item">
              <label>Ár:</label>
              <br>
              <input type="text" id="ar">
            </li>
          </ul>
        </div>
      </nav>
    `;
  ASIDE.append(aside);
  HEADER.append(header);
}


//hozzáadás gomb
export function hozzaAdas(adatok) {
  const ASIDE = $("aside");
  let aside = `
      <div class="semmi">
        <button id="b">Hozzáadás</button>
      </div>
    `;
  ASIDE.append(aside);

  $("#b").click(() => {
    let nev = $("#nev").val();
    let darab = $("#darab").val();
    let ar = $("#ar").val();
    adatok.push({ nev: nev, darab: darab, ar: ar });

    $("article").empty();
    megjelenitTabla(adatok);
  });
}

//kosár megjelenítése
export function kosarMegjelenit() {
  const ASIDE = $("aside");
  let aside = `
        <div class="semmi">
        <p>Kosár össz:</p>
        <p class="szamol">0</p>
        </div>
    `;
  ASIDE.append(aside);

  
}

export function mutat(list) {
  
    
}