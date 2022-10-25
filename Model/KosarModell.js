class KosarModel {
  KosarTomb = [];

  constructor() {}

  onKosarba(data) {
    this.KosarTomb.push(data);
    console.log(this.KosarTomb);
  }
  onTorles(data) {
    const ujTomb = this.KosarTomb.filter((kosar) => {
      return data.id != kosar.id;
    });
    this.KosarTomb = ujTomb;
  }
  onModositas(data) {
    const index = this.KosarTomb.findIndex((kosar) => {
      return data.id === kosar.id;
    });
    this.KosarTomb[index] = data;
  }
  getTomb() {
    return this.KosarTomb[this.KosarTomb.length - 1];
  }
}

export default KosarModel;
