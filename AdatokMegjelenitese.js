//Az admin felületet jeleníti meg
export function megjelenitDiv(list) {
    const ARTICLE = $("article");
    const DIVTORLES = ARTICLE.find(".div");
    DIVTORLES.remove();

    let htmlkod = `<div class="row"> `;
    for (let index = 0; index < list.length; index++) {
        htmlkod +=
            `    
        
        <div class="col-3 col-3">
            <p>Neve: ${list[index].nev}</p>
            <p>db:${list[index].darab}</p>
            <p>Ár: ${list[index].ar}Ft</p>
            <p>Kép: <img src="${list[index].kep}"</p>
            <p><button class="jobb btn btn-primary">+</button><button class="bal btn btn-primary">- </button></p>
            <p><button class="kosar btn btn-success" id="id${index}">Kosárba rakás</button></p>
            <p><button class="megnezem btn btn-info" id="id${index}">Megnézem</button></p>
        </div>`;
    }
    ARTICLE.html(htmlkod);
}


//A felhasználói, weblap elejét jeleníti meg
export function megjelenitTabla(list) {
    const ARTICLE = $("article");

    let htmlkod =
        `
    
     <div class="container mt-3 semmi" >
     <table class="table" id="torol">
     <thead class="table-dark">
         <tr>
             <td>Neve</td>
             <td>db</td>
             <td>Ár</td>
             <td></td>
         </tr>
     </thead>
     <tbody>`;
    for (let index = 0; index < list.length; index++) {
        htmlkod += `<tr>
             <td>${list[index].nev}</td>
             <td>${list[index].darab}</td>
             <td>${list[index].ar}Ft</td>
             <td><button class="btn btn-danger" id="x${index}">X</button></td>
             </tr>`;
    }
    htmlkod += ` </tbody >
     </table >`;
    ARTICLE.append(htmlkod);

    
}

//Navigáció, oldal linkek
export function nav() {
    const NAV = $("nav");
    let nav = "";
    nav +=
        `<ul>
        <li><a href = "index.html">Pékáruk adatainak megtekintése</a></li>
        <li><a class="active" href="admin.html">Admin felüet</a></li>
    </ul>`;
    NAV.append(nav);
}

export function adminHozzaad() {
    const ASIDE = $("aside");
    let aside = "";
    aside +=
        `<nav class="navbar navbar-expand-sm bg-light">

        <div class="container-fluid">
          
          <ul class="navbar-nav">
                <li class="nav-item">
                <label>Név:</label>
                <br>
                <input type="text"></input>
            </li>
                <li class="nav-item">  
                <label>darab:</label>
                <br>
                <input type="text"></input>
            </li>
                <li class="nav-item">
                <label>Ár:</label>
                <br>
                <input type="text" ></input>
            </li>
          </ul>

        </div>
      
      </nav>`;
    ASIDE.append(aside);
}


//hozzáadás gomb
export function hozzaAdas() {
    const ASIDE = $("aside");
    let aside = `
        <div class="semmi">
            <button>hozzáadás</button>
        </div>

    `;
    ASIDE.append(aside);
}

//kosár megjelenítése
export function kosarMegjelenit() {
    const ASIDE = $("aside");
    let aside = `
        <div class="semmi">
        <p class="szamol">0</p>
        </div>
    `;
    ASIDE.append(aside);
}


/*Kiszedett scriptek 

`
        <div class="row">
        <div class="col-3 col-3">
             <p>Neve:</p>
             <p>db:</p>
             <p>Ár:</p>
             <p>Hozzáad/Elvessz:</p>
         </div>
     `
*/