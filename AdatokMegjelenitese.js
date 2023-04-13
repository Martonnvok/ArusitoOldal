export function megjelenitTabla(list) {
    const ARTICLE = document.querySelector("article");
    const TABLETORLES = ARTICLE.querySelector(".table");
    if (TABLETORLES) {
        TABLETORLES.remove();
    }
    let htmlkod =
        `
     
     <div class="container mt-3">
     <table class="table">
     <thead class="table-dark">
         <tr>
             <td>Neve</td>
             <td>db</td>
             <td>Ár</td>
             <td>Hozzáad/Elvessz</td>
             <td></td>
         </tr>
     </thead>
     <tbody>`;
    for (let index = 0; index < list.length; index++) {
        htmlkod += `<tr>
             <td>${list[index].nev}</td>
             <td>${list[index].darab}</td>
             <td>${list[index].ar}Ft</td>
             <td><button class="jobb">+</button><button class="bal">- </button></td>
             <td><button class="kosar">Kosárba rakás</button></td>
             </tr>`;
    }
    htmlkod += ` </tbody >
     </table >`;
     ARTICLE.innerHTML += htmlkod;
}

export function kosarMegjelenites(list) {
    const ASIDE =document.querySelector("aside");
}









