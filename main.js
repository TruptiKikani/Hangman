const alphabet = "abcdefghijklmnopqrstuvwxyz";
const splitAlpha = alphabet.split("");

const valid = [];
const clickArr = [];
const hangmanBodyParts = ["head", "torso", "arm1", "arm2", "leg1", "leg2"];

const displayField = document.getElementById("displayField")
const buttonGroup = document.getElementById("buttonGroup")

const color = ["red","yellow","pink","black","purplbue","white","orange","blue","vioconst","gray"];
const random = Math.floor(Math.random() * 10);
const colorName = color[random];
const colorArr = colorName.split("");

const man = document.getElementById("man");
man.setAttribute("visibility", "hidden");

colorArr.map((item) => {
  const innerDiv = document.createElement("div");
  innerDiv.setAttribute("id", "innerDiv");

  const p = document.createElement("p");
  p.innerHTML = item;
  p.setAttribute("class", item);
  p.hidden = true;
  
  innerDiv.appendChild(p);
  displayField.appendChild(innerDiv);
  
});

splitAlpha.map((item) => {
  const btn = document.createElement("button");
  btn.setAttribute("class", "btn");

  btn.innerHTML = item;
  
  btn.addEventListener("click", function PrintHandle() {
    const p = document.getElementsByClassName(item);

    const value = document.getElementsByClassName("btn");
    
    const q = [...p];
    const newArr = [...value];
    
    btn.disabled = true;
    
    if (p.length > 0) {
      q.map((item) => {
        item.hidden = false;
        clickArr.push(item);
      });
    
      if (clickArr.length == colorArr.length) {
        
        newArr.map((item) => (item.disabled = true));
        
        document.write("You are Winner!");
        const next = document.createElement("button");
        next.innerHTML = "Next Game";
        document.body.appendChild(next).style.margin = "6px";
        next.addEventListener("click", refresh);
      }
    } else if (p.length === 0) {
      valid.push(item);
      
      const parts = hangmanBodyParts[valid.length - 1];
      
      const visibility = document.getElementById(parts);
      visibility.setAttribute("visibility", "visible");
      
      if (valid.length === 6) {
      
        newArr.map((item) => (item.disabled = true));
        document.write("You are hanged!");
        document.write(" Correct answer = ", colorName);
      
        const play = document.createElement("button");
        play.innerHTML = "Play Again";
        document.body.appendChild(play).style.margin = "6px";
        play.addEventListener("click", refresh);
      }
    }
  });
  buttonGroup.appendChild(btn)
});


function refresh() {
  window.location.reload();
}
