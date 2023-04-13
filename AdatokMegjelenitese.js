//Az admin felületet jeleníti meg
export function megjelenitDiv(list) {
    const ARTICLE = document.querySelector("article");
    const DIVTORLES = ARTICLE.querySelectorAll(".div");
    DIVTORLES.forEach(div => div.remove());

    let htmlkod =
        `
        <div>
             <p>Neve:</p>
             <p>db:</p>
             <p>Ár:</p>
             <p>Hozzáad/Elvessz:</p>
         </div>
     `;
    for (let index = 0; index < list.length; index++) {
        htmlkod +=
            `
        <div>
            <p>${list[index].nev}</p>
            <p>${list[index].darab}</p>
            <p>${list[index].ar}Ft</p>
            <p><button class="jobb">+</button><button class="bal">- </button></p>
            <p><button class="kosar">Kosárba rakás</button></p>
        </div>`;
    }
    ARTICLE.innerHTML = htmlkod;
}


//A felhasználói, weblap elejét jeleníti meg
export function megjelenitTabla(list) {
    const ARTICLE = document.querySelector("article");
    
    let htmlkod =
        `
     
     <div class="container mt-3" class="semmi">
     <table class="table">
     <thead class="table-dark">
         <tr>
             <td>Neve</td>
             <td>db</td>
             <td>Ár</td>
             
         </tr>
     </thead>
     <tbody>`;
    for (let index = 0; index < list.length; index++) {
        htmlkod += `<tr>
             <td>${list[index].nev}</td>
             <td>${list[index].darab}</td>
             <td>${list[index].ar}Ft</td>
             
             </tr>`;
    }
    htmlkod += ` </tbody >
     </table >`;
    ARTICLE.innerHTML += htmlkod;
}

//Navigáció, oldal linkek
export function nav() {
    const NAV = document.querySelector("nav");
    let nav = "";
    nav +=
        `<ul>
        <li><a href = "index.html">Pékáruk adatainak megtekintése</a></li>
        <li><a class="active" href="admin.html">Admin felüet</a></li>
    </ul>`;
    NAV.innerHTML+=nav;
}

//hozzáadás gomb
export function hozzaAdas() {
    const ASIDE = document.querySelector("aside");
let aside = `
    <div class="semmi">
        <button>hozzáadás</button>
    </div>

    <div class="semmi">
        <button>elvétel</button>
    </div>
`;
ASIDE.innerHTML += aside;
}








/*Felnem használt vagy felesleges kódok*/
/*<td><button class="jobb">+</button><button class="bal">- </button></td>
  <td><button class="kosar">Kosárba rakás</button></td>
  <td>Hozzáad/Elvessz</td>
             <td></td>
  
  */  