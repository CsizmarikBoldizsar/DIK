var resizeBtn = document.getElementById("mapResizeBtn")
var map = document.getElementById("mapDiv")
var smol = true
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



function minI(){
    resizeBtn.style.backgroundImage = "url(Images/Icons/minIcon.png)"
}
function maxI(){
    resizeBtn.style.backgroundImage = "url(Images/Icons/maxIcon.png)"
}
resizeBtn.onclick = function(){
    if(smol){
        if (window.innerHeight > window.innerWidth){
            maxI()
        }
        else{
            minI()
        }
        console.log("click")
        map.style.transitionDuration = "0.7s"
        map.style.width = "100%"
        map.style.minWidth = "100%"
        setTimeout(() => {
            map.style.transitionDuration = null
        }, 1000);
    }
    else{
        if (window.innerHeight > window.innerWidth){
            minI()
        }
        else{
            maxI()
        }
        map.style.transitionDuration = "0.7s"
        map.style.width = "calc(100vh - 53px)"
        map.style.minWidth = "calc(100vh - 53px)"
        setTimeout(() => {
            map.style.transitionDuration = null
        }, 1000);
    }
    smol = !smol
}

for (let i = 0; i < pins.length; i++) {
    pins.item(i).addEventListener("click", function(){
        if (this.parentElement.children[1].style.display == "block"){
            this.parentElement.children[1].style.display = "none"
            this.children[0].src = "Images/Icons/mapicon.png"
        }
        else{
            this.parentElement.children[1].style.display = "block"
            this.children[0].src = "Images/Icons/pinicon.png"
        }
    });
}


if (window.innerHeight > window.innerWidth){
    map.style.width = "100%"
    map.style.minWidth = "100%"
    var smol = false
}
else{
    map.style.width = "calc(100vh - 53px)"
    map.style.minWidth = "calc(100vh - 53px)"
}