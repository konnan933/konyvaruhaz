class KonyvView {
  constructor(elem, szuloElem) {
    this.elem = elem;
    szuloElem.append(`<tr>
        <td>${elem.id}</td>
        <td>${elem.cim}</td>
        <td>${elem.szerzo}</td>
        <td>${elem.ar}</td>
        <td><button id="modosit">Módosítás</button></td>
        <td><button id="torles">Törlés</button></td>
        </tr>`);
    this.rekordElem = szuloElem.children("tr:last-child");
    this.modositElem = this.rekordElem
      .children("td:nth-child(5)")
      .children("button");
    this.torolElem = this.rekordElem
      .children("td:nth-child(6)")
      .children("button");
    this.modositElem.on("click", () => {
      this.kattintasTrigger("modosit");
    });
    this.torolElem.on("click", () => {
      this.kattintasTrigger("torol");
    });
  }

  kattintasTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this.elem.id });
    window.dispatchEvent(esemeny);
  }
}

export default KonyvView;
