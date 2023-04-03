import { megjelenitTabla } from "./AdatokMegjelenitese.js";
export function gombok(list) {
    const BALELEM = document.querySelectorAll(".bal");
    const JOBBELEM = document.querySelectorAll(".jobb");

    JOBBELEM.forEach((elem, index) => {
        elem.addEventListener("click", function () {
            list[index].darab++;
            megjelenitTabla(list);
            gombok(list);
        })
    })

    BALELEM.forEach((elem, index) => {
        elem.addEventListener("click", function () {
            if (list[index].darab > 0) {
                list[index].darab--;
                megjelenitTabla(list);
                gombok(list);
            }
        })
    })
}

      
