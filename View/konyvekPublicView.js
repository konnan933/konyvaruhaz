//összes könyv
import publicKonyv from "./konyvPublicView.js";

class publicKonyvek {
  constructor(data, szuloElem) {
    data.forEach((konyv) => {
      new publicKonyv(konyv, szuloElem);
    });
  }
}
export default publicKonyvek;
