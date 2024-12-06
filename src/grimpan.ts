class Grimpan {
  private static instance: Grimpan;
  constructor(canvas: HTMLElement | null) {
    if (!canvas || canvas instanceof HTMLCanvasElement) {
      throw new Error("canvas 엘리먼트를 입력하세요");
    }
  }
  intialize() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Grimpan(document.querySelector("canvas"));
    }
  }
}

export default Grimpan;
