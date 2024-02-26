var resizeBtn = document.getElementById("mapResizeBtn")
var map = document.getElementById("mapDiv")
var smol = false
var pins = document.getElementsByClassName("pinBtn")

console.log(document.location.hash)
console.log(!(document.location.hash == ""))
window.onload = function(){
    if (!(document.location.hash == "")) {
        document.title = "Map - " + document.location.hash.replace("#","")
        window.scrollBy(0,-60)
        document.getElementById(document.location.hash.replace("#","")).children[0].click()
        history.pushState("", "", window.location.pathname + window.location.search)
    }
}







resizeBtn.onclick = function(){
    if(smol){
        console.log("click")
        map.style.width = "100%"
        resizeBtn.style.backgroundImage = "url(Images/Icons/minIcon.png)"
    }
    else{
        console.log("click")
        map.style.width = "50%"
        resizeBtn.style.backgroundImage = "url(Images/Icons/maxIcon.png)"
    }
    smol = !smol
}

for (let i = 0; i < pins.length; i++) {
    pins.item(i).addEventListener("click", function(){
        if (this.parentElement.children[1].style.display == "block"){
            this.parentElement.children[1].style.display = "none"
            this.children[0].src = "Images/Icons/mapIcon.png"
        }
        else{
            this.parentElement.children[1].style.display = "block"
            this.children[0].src = "Images/Icons/pinicon.png"
        }
    });
}
