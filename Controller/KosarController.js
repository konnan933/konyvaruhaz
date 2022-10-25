import KosarModel from "../Model/KosarModell.js";
import KosarView from "../View/public/KosarView.js";

class KosarController {
  constructor() {
    const kosarmodell = new KosarModel();
    $(window).on("torol", (event) => {
      kosarmodell.onTorles(event.detail);
    });
    $(window).on("modosit", (event) => {
      kosarmodell.onModositas(event.detail);
    });
    $(window).on("kosarba", (event) => {
      kosarmodell.onKosarba(event.detail);
      this.kosarAdatok(kosarmodell.getTomb());
    });
  }

  kosarAdatok(tomb) {
    let szuloelem = $(".kosarTartalom");
    console.log(tomb);
    new KosarView(tomb, szuloelem);
  }
}

export default KosarController;
