import KonyvekView from "../View/KonyvekView.js";
import PublicKonyvek from "../View/konyvekPublicView.js";
import KonyvModel from "../Model/KonyvModel.js";

class KonyvController {
  constructor() {
    const konyvmodel = new KonyvModel();
    konyvmodel.adatBe("../adat.json", this.konyvAdatok);
    $(window).on("torol", (event) => {
      konyvmodel.onTorles(event.detail);
    });
    $(window).on("modosit", (event) => {
      konyvmodel.onModositas(event.detail);
    });
    $(window).on("kosarba", (event) => {
      konyvmodel.onKosarba(event.detail);
    });
  }

  konyvAdatok(tomb) {
    let szuloelem = $("main");
    new KonyvekView(tomb, szuloelem);
    new PublicKonyvek(tomb, $(".kartyak"));
  }
}

export default KonyvController;
