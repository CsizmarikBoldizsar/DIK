var box = document.getElementById("box")
var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
b2.disabled = true
w = window.getComputedStyle(box.children[0]).getPropertyValue("width")

b1.onclick = function(){
    console.log("click")
    
    console.log(w)
    box.style.transform = "translate(-"+w+",0px)"
    this.disabled = true
    b2.disabled = false
}

b2.onclick = function(){
    console.log("click")
    box.style.transform = "translate(0px,0px)"
    this.disabled = true
    b1.disabled = false
}

