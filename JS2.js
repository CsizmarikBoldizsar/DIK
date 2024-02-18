var img = document.getElementsByClassName("img")

for (let i = 0; i < img.length; i++) {
    img.item(i).addEventListener("click", function(){
        window.open(img[i].src,"_blank")
    });
}