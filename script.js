let elm = (x) = {
  return x.includes("#")?
    document.querySelector(x):
    document.querySelectorAll(x)
}
window.onload = () = {
  elm("#bOne").addEventListener("click",{
    elm("#output").textContent += "Output!!";
  }
}
