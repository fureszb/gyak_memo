import kartya from "./kartya.js";
import {LISTA} from "./adat.js";

$(function(){
    let szuloElem = $(".tarolo")
    for (let index = 0; index < LISTA.length; index++) {
        let k1 = new kartya(LISTA[index], index, szuloElem); 
    }
    
});