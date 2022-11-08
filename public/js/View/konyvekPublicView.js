/*Listázzuk a könyveket divekben*/
import KonyvPublicView from "./KonyvPublicView.js";

class KonyvekPublicView {
    constructor(tomb, szuloElem) {
        szuloElem.append(`<div id="fotarolo"></div>`);


        /*this.tabla = szuloElem.children("table:last-child");*/
        this.elem = szuloElem.children("#fotarolo")
        console.log(this.elem);

        tomb.forEach(konyv => {
            const konyvObj = new KonyvPublicView(konyv, this.elem);
        });
    }
}

export default KonyvekPublicView 