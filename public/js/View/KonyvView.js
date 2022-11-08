class KonyvView {
    #elem
  constructor(elem, szuloElem) {
    //console.log("KonyvView");
    //console.log(elem);
    //console.log(elem.id);
    this.#elem=elem
    szuloElem.append(`<tr>
    <td>${elem.id}</td>
    <td>${elem.cim}</td>
    <td>${elem.szerzo}</td>
    <td>${elem.ar}</td>
    <td><button id=M"${elem.id}"class="modositas">módosítás</button></td>
    <td><button id=T${elem.id}class"torles">törlés</button></td>
    </tr>`)

    this.recordElem=szuloElem.children("tr:last-child")
    //console.log(this.recordElem);
    this.modositElem=this.recordElem.children("td:nth-child(5)").children("button")
    this.torolElem=this.recordElem.children("td:nth-child(6)").children("button")
    //console.log(this.modositElem);

    this.modositElem.on("click",()=>{
        //console.log("módosítás a view-ban");
        this.#elem.cim = "kiskacsa"
        this.kattintasTrigger("modosit")
    })

    this.torolElem.on("click",()=>{
        //console.log("törlés a view-ban");
        this.kattintasTrigger("torol")
    })

    

  }

  kattintasTrigger(esemenyNeve) {
    //console.log(esemenyNeve, "a view-ban");
    console.log(this.#elem);
    const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem})
    window.dispatchEvent(esemeny)
  }


}

export default KonyvView;
