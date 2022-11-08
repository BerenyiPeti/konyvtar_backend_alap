/*Egy darab könyvet jelenít meg */
class KonyvView {
    #elem
  constructor(elem, szuloElem) {
    //console.log("KonyvView");
    //console.log(elem);
    //console.log(elem.id);
    this.#elem=elem
    szuloElem.append(`<div class="konyvTarolo">
    <li>Id: ${elem.id}</li>
    <li>Cím: ${elem.cim}</li>
    </div>`)

    this.recordElem=szuloElem.children("tr:last-child")
    //console.log(this.recordElem);
    this.modositElem=this.recordElem.children("td:nth-child(5)").children("button")
    this.torolElem=this.recordElem.children("td:nth-child(6)").children("button")
    //console.log(this.modositElem);

    this.modositElem.on("click",()=>{
        //console.log("módosítás a view-ban");
        this.kattintasTrigger("modosit")
    })

    this.torolElem.on("click",()=>{
        //console.log("törlés a view-ban");
        this.kattintasTrigger("torol")
    })

    

  }

  kattintasTrigger(esemenyNeve) {
    //console.log(esemenyNeve, "a view-ban");
    const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem.id})
    window.dispatchEvent(esemeny)
  }


}

export default KonyvView;
