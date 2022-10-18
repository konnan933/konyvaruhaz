class KonyvModel {
    #konyvekTomb = [];

    constructor() {
        
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.#konyvekTomb = data.konyv;
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    onTorles(data){
        console.log(data);
    }
    onModositas(data){
        console.log(data);
    }
}

export default KonyvModel;