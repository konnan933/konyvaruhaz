// egy könyv

class publicKonyv {
  constructor(data, szuloElem) {
    this.data = data;
    szuloElem.append(`
    <div class="kartya columns-1 rounded-lg rounded-lg">
        <h2>${data.cim}</h2>
        <p>${data.szerzo}</p>
        <p>${data.ar}</p>
        <div>
        <button id=${data.id}>Kosárba</button>
        </div>
    </div>`);

    this.kosarGombElem = $(`#${this.data.id}`);

    this.kosarGombElem.on("click", () => {
      this.kattintasTrigger("kosarba");
    });
  }
  kattintasTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this.data });
    window.dispatchEvent(esemeny);
  }
}
export default publicKonyv;
