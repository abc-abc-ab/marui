let i = localStorage.getItem("int") || 1;

window.onload = () => {
  elm("#output").innerHTML = localStorage.getItem("output");
  elm("#bOne").addEventListener("click", () => {
    elm("#output").innerHTML += `Output ${i}<br>`;
    i++;
    localStorage.setItem("output", elm("#output").innerHTML)
    localStorage.setItem("int", i)
  })
  elm("#bTwo").addEventListener("click", () => {
    elm("#output").innerHTML = ""
    i = 1;
    localStorage.setItem("output", "")
    localStorage.setItem("int", 1)
  })
}

/** 
 * @param {string} x */
function elm(x){
  return x.includes("#")?
    document.querySelector(x):
    document.querySelectorAll(x)
}

let Log = (() => {
  function Log (level, text) {
    this.level = new String(level);
    this.text = new String(text);
    let _prv = "";
   this.execute = () => {
        if (this.level === ("log" || "info" || "warn" || "error")){
         eval(`console.${this.level}("${this.text.replace(/"/g, '\\"')}"${_prv?", ":""}"${_prv.replace(/"/g, '\\"')}")`);
        }
        else{
         new TypeError(`TypeError: ${this.level} is Not a level.`)
        }
      }
    this.style = (style) => {
        if (typeof style == "string"){
          this.text = "%s" + this.text
          _prv = style;
        }
        else{
          this.text = this.text.replace(/^%s/i, "");
          _prv = "";
        }
      }
  }

  return Log;
})()

let lg = new Log("log", "This is a info.");
lg.style("font-size: 30px")
lg.execute();