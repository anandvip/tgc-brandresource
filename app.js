let primaryColors = (color)=>{
    let colorValue = color.getAttribute('data-color');
    console.log(colorValue)
    //console.log(colorValue[0].attributes[0].nodeValue)

   /* colorValue.forEach((color)=>{
        let colorValue = color.getAttribute("data-color");
        console.log(colorValue)
    })*/
    let primaryColorValue = document.getElementById("primeColor");
    primaryColorValue.innerText = colorValue;

    primaryColorValue.onclick = ()=>{
        document.execCommand("copy");
        console.log(primaryColorValue)
    }

    let copyColorValue = (event) => {
  event.preventDefault();
  if(event.clipboardData){
    event.clipboardData.setData("text/plain", primaryColorValue.textContent);
    console.log(event.clipboardData.getData(primaryColorValue.textContent)); 
  }

let copyHex = document.getElementById("copyHex");
copyHex.addEventListener('copy', copyColorValue);
console.log("click", primaryColorValue)
    }

}

let secondaryColors = (color)=>{
    let colorValue = color.getAttribute('data-color');
    console.log(colorValue)
    //console.log(colorValue[0].attributes[0].nodeValue)

   /* colorValue.forEach((color)=>{
        let colorValue = color.getAttribute("data-color");
        console.log(colorValue)
    })*/
    document.getElementById("secondColor").innerText = colorValue
}
