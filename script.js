let i = 1;

window.onload = () => {
  elm("#bOne").addEventListener("click", () => {
    elm("#output").innerHTML += `Output ${i}<br>`;
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