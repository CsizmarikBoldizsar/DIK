var img = document.getElementsByClassName("img")

var exit = document.getElementById("exit")

for (let i = 0; i < img.length; i++) {
    img.item(i).addEventListener("click", function(){
        window.open(img[i].src,"_blank")
    })
}



exit.addEventListener("click", function(){
    console.log("clicked")
    this.style.display = "none"
    document.getElementById("ZOOM").remove()
    document.getElementById("ZOOMED").style.opacity = null
    document.getElementById("ZOOMED").removeAttribute(this.id)
})