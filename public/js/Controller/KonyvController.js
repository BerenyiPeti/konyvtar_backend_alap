import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/konyvekPublicView.js";
import KonyvPublicView from "../View/konyvekPublicView.js";

class KonyvController {
    constructor() {
        //console.log("KonyvController");
        const token = $('meta[name="csrf-token"]').attr("content");
        const konyvmodel = new KonyvModel(token);
        const adminGomb = $("#adminGomb")
        const fooldalGomb = $("#fooldalGomb")
         
        this.vegpont = "konyvek"
        adminGomb.on("click", ()=>{
            $("main").empty()

            konyvmodel.adatBe(this.vegpont, this.konyvAdatokAdmin);

        })

        $(window).on("modosit",(event)=>{
            //console.log("controllerben módosít", event.detail);
            konyvmodel.adatModosit(this.vegpont, event.detail)
        })

        $(window).on("torol",(event)=>{
            //console.log("controllerben töröl", event.detail);
            konyvmodel.adatTorol(this.vegpont, event.detail)
        })

        fooldalGomb.on("click", ()=>{
            $("main").empty()
            //$("main").html("ez a főoldal")
            konyvmodel.adatBe("../adat.json", this.konyvAdatokPublikus);
        })
    }

    konyvAdatokAdmin(tomb) {
        //console.log(tomb);
        let szuloelem = $("main")
        new KonyvekView(tomb, szuloelem)
        //new KonyvekPublicView(tomb, szuloelem)
    }

    konyvAdatokPublikus(tomb) {
        let szuloelem = $("main")
        new KonyvekPublicView(tomb, szuloelem)
        //szuloelem.append("<p>ez a főoldal</p>")
    }
}

export default KonyvController;