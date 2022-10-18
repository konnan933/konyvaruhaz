import KonyvView from "./KonyvView.js";

class KonyvekView {
    constructor(tomb, szuloElem) {
        szuloElem.append(`<table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Cím</th>
                <th>Szerző</th>
                <th>Ár</th>
                <th>Módosítás</th>
                <th>törlés</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>`);
        this.tabla = szuloElem.children("table:last-child");
        this.tbody = this.tabla.children("tbody")

        tomb.forEach(konyv => {
            new KonyvView(konyv, this.tbody);
        });
    }
}

export default KonyvekView;