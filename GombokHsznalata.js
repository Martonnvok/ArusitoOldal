import { megjelenitTabla } from "./AdatokMegjelenitese.js";
export function gombok(list) {
    const BALELEM = document.querySelectorAll(".bal");
    const JOBBELEM = document.querySelectorAll(".jobb");

    JOBBELEM.forEach((elem, index) => {
        elem.addEventListener("click", function () {
            list[index].darab++;
            list[index].ar += [index].darab; //árak növekedése a mennyiség szerint
            megjelenitTabla(list);
            gombok(list);
        })
    })

    BALELEM.forEach((elem, index) => {
        elem.addEventListener("click", function () {
            if (list[index].darab > 0) {
                list[index].darab--;
                list[index].ar -= [index].darab;//árak csökkenése a mennyiség szerint
                megjelenitTabla(list);
                gombok(list);
            }
        })
    })
}



export function hozzaad(list) {
    /*
    const KOSAR = document.querySelectorAll(".kosar");
    let szamol = 0;
    KOSAR.forEach((elem, index) => {
        elem.addEventListener("click", function () {
            megjelenitTabla(list); // csak azért, hogy frissüljön a kosárban lévő termékek darabszáma
            szamol = 0; // nullázzuk a változót
            for (let i = 0; i < list.length; i++) {
                if (list[i].kosarban) {
                    szamol += list[i].darab * list[i].ar;
                }
            }
            console.log(szamol); // kiírjuk az összeget a konzolra
        })
    })
    */
}


