/*Ide kerülnek majd a további javascript fájlok meghívása*/ 
import { megjelenitTabla } from "./AdatokMegjelenitese.js";
import {gombok, hozzaad  } from "./GombokHsznalata.js";
window.addEventListener('load', init)
function init() {
  const PEKARUK = [{ nev: "Kakaóscsiga", darab: 1, ar: 350, alapar:350}, { nev: "Zsemle", darab: 1, ar: 90, alapar:90 }, { nev: "Kifli", darab: 1, ar: 120, alapar:120 }, { nev: "Redbull", darab: 1, ar: 350, alapar:350 }, { nev: "Csokis tej", darab: 1, ar: 220, alapar:220 }];

  megjelenitTabla(PEKARUK);
  gombok(PEKARUK);
  hozzaad(PEKARUK);
     
}









