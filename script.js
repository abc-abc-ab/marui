let i = 1;

window.onload = () => {
  elm("#bOne").addEventListener("click", () => {
    elm("#output").textContent += "output";
    i++;
  })
}

/** 
 * @param {string} x */
function elm(x){
  return x.includes("#")?
    document.querySelector(x):
    document.querySelectorAll(x)
}