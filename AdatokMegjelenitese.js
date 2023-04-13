export function megjelenitDiv(list) {
    const ARTICLE = document.querySelector("article");
    const DIVTORLES = ARTICLE.querySelectorAll(".container");
    DIVTORLES.forEach(div => div.remove());

    let htmlkod =
        `
     <div class="container mt-3">
         <div>
             <p>Neve</p>
             <p>db</p>
             <p>Ár</p>
             <p>Hozzáad/Elvessz</p>
             <p></p>
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
     ARTICLE.innerHTML += htmlkod;
}


export function nav() {
    const NAV = document.querySelector("nav");
    let nav = "";
    nav +=
    `<ul>
        <li><a href = "public.html">Pékáruk adatainak megtekintése</a></li>
        <li><a class="active" href="index.html">Admin felüet</a></li>
    </ul>`;
    NAV.append(nav);
  }

/*export function kosarMegjelenites(list) {
    const ASIDE =document.querySelector("aside");
}*/









