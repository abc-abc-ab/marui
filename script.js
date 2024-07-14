let i = localStorage.getItem("int") || 1;

window.onload = () => {
  elm("#output").innerHTML = localStorage.getItem("output") || "";
  elm("#bOne").addEventListener("click", () => {
    // Comment Update Foo
    elm("#output").innerHTML += `Output ${i} <br>`;
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

function elm(x){
    return x.includes("#")?
      document.querySelector(x):
      document.querySelectorAll(x)
}

let Log = (() => {
  function Log (level, text) {
    if (/log|info|warn|error|debug/.test( level )){
      this.level = String(level);
    }
    else{
      throw TypeError(`${level} is Not a level.`);
    }
    this.text = JSON.stringify(text).replace(/^"|"$/g, "");
    let _prv = "";
    Log.prototype.execute = () => {
         console[this.level](this.text + `( ${this.level} )`, _prv)
      }
    Log.prototype.style = (style) => {
        if (typeof style == "string"){
          if (!this.text.includes("%c")){
            this.text = "%c" + this.text
          }
          _prv = style;
        }
        else if (style instanceof Array){
          if (!this.text.includes("%c")){
            this.text = "%c" + this.text
          }
          let StringJ = style.join("; ");
          _prv = StringJ;
        }
        else {
          this.text = this.text.replace(/^%c/i, "");
          _prv = "";
        }
        
    }
  }

  return Log;
})()

let ElementControl = (() => {
  function ElementControl(t){
    if (t instanceof HTMLElement){
      this.target = t;
    }
  }

  return ElementControl;
})()

let AddText  = (() => {
  function AddText(t, s, o){
    if (t instanceof HTMLElement){
      this.target = t;
    }
    this.sentence = new String(s);
    if (o instanceof TextOption){
      this.option = o;
    }
    this.execute = () => {
        if (this.option.format == "HTML"){
          this.target.insertAdjacentHTML("beforeend", this.sentence)
        }
        else if(this.option.format == "Text"){
          this.target.insertAdjacentHTML("beforeend", this.sentence.replace())
        }
      }
    }

  return AddText;
})

let TextOption = (() => {
  function TextOption(format){
    if (format == ("HTML" || "Text"))
      this.format = new String(format);
  }

  return TextOption;
})()

function convert10(x) {
  let result = "";
  let inputStrings = String(x);

  if (inputStrings == "") {
      throw SyntaxError('x is null.');
  }
  let inputStringsLength = inputStrings.length;

  for (let i = 0; i < inputStringsLength; i++) {
      result = result + "&#" + inputStrings.charCodeAt(i) + ";";
  }
  return result;
}

let lg = new Log("log", "This is a info.");
lg.style(["font-size: 30px", "color: #10a0ff"])
lg.execute();



new Log("info", "Javascrciptエラーは、ありません。").execute()