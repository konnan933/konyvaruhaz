class KosarView {
  constructor(data, szuloElem) {
    this.data = data;
    console.log(data);
    szuloElem.append(`
        <div class="kartya columns-1 rounded-lg rounded-lg">
            <h2>${data.cim}</h2>
            <p>${data.szerzo}</p>
            <p>${data.ar}</p>
            <div>
            <button id=s${data.id}>Szerkeztés</button>
            <button id=t${data.id}>Törlés</button>
            </div>
        </div>`);
    console.log("adsasd");
    this.kosarModGombElem = $(`#s${this.data.id}`);
    this.kosarTorGombElem = $(`#t${this.data.id}`);

    this.kosarModGombElem.on("click", () => {
      this.kattintasTrigger("modositas");
    });

    this.kosarTorGombElem.on("click", () => {
      this.kattintasTrigger("torol");
    });
  }
  kattintasTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this.data });
    window.dispatchEvent(esemeny);
  }
}
export default KosarView;
