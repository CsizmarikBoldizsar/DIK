var box = document.getElementById("box")
var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var pins = document.getElementsByClassName("pinButton")


b2.disabled = true
w = window.getComputedStyle(box.children[0]).getPropertyValue("width")

b1.onclick = function(){
    box.style.transform = "translate(-"+w+",0px)"
    this.disabled = true
    b2.disabled = false
}

b2.onclick = function(){
    box.style.transform = "translate(0px,0px)"
    this.disabled = true
    b1.disabled = false
}




for (let i=0; i < pins.length; i++) {
    pins[i].addEventListener("click",function(){
        if (pins[i].children[1].style.display == "block"){
            pins[i].children[1].style.display = "none"
        }
        else{
            pins[i].children[1].style.display = "block"
        }
    })
}

