let i = 1;

window.onload = () => {
  elm("#output").innerHTML = localStorage.getItem("output");
  elm("#bOne").addEventListener("click", () => {
    elm("#output").innerHTML += `Output ${i}<br>`;
    i++;
    localStorage.setItem("output", elm("#output").innerHTML)
  })
}

/** 
 * @param {string} x */
function elm(x){
  return x.includes("#")?
    document.querySelector(x):
    document.querySelectorAll(x)
}