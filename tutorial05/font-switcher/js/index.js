const makeBigger = () => {
   const textElement = document.querySelector(".content");
   const defaultSize = getComputedStyle(textElement).fontSize;
   const sizeNumber = Number(defaultSize.substring(0, defaultSize.length - 2));
   console.log(sizeNumber);
   textElement.style.fontSize = `${sizeNumber + 10}px`;
};

const makeSmaller = () => {
   const textElement = document.querySelector(".content");
   const defaultSize = getComputedStyle(textElement).fontSize;
   const sizeNumber = Number(defaultSize.substring(0, defaultSize.length - 2));
   console.log(sizeNumber);
   textElement.style.fontSize = `${sizeNumber - 10}px`;
};

document.querySelector(".a1").onclick = makeBigger;
document.querySelector(".a2").onclick = makeSmaller;

