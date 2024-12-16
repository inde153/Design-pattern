import ChromeGrimpan from "./ChromeGrimpan";
import IEGrimpan from "./IEGrimpan";

//단일 책임 원칙 위반 팩토리 패
function grimpanFactory(type: string) {
  if (type === "ie") {
    return IEGrimpan.getInstance();
  } else if (type === "chrome") {
    return ChromeGrimpan.getInstance;
  } else {
    return ChromeGrimpan.getInstance();
  }
}

function main() {
  grimpanFactory("ie");
  grimpanFactory("chrome");
  grimpanFactory("safari");
}

main();
