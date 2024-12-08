const GRIMPAN_CONSTRUCTOR_SYMBOL = Symbol();

Symbol("abc") === Symbol("abc"); //false
//JS에서 private constructor를 사용하려면 symbol을 사용하면 됨

class Grimpan {
  private static instance: Grimpan;
  private constructor(canvas: HTMLElement | null) {
    if (!canvas || canvas instanceof HTMLCanvasElement) {
      throw new Error("canvas 엘리먼트를 입력하세요");
    }
  }
  intialize() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Grimpan(document.querySelector("canvas"));
    }

    return this.instance;
  }
}

export default Grimpan;
