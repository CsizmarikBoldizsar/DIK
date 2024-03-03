var img = document.getElementsByClassName("img")

var exit = document.getElementById("exit")

for (let i = 0; i < img.length; i++) {
    img.item(i).addEventListener("click", function(){
        exit.style.display = "block"
        //window.open(img[i].src,"_blank")
        console.log(img[i].parentElement.innerHTML)
        console.log(img[i].outerHTML)
        var clone = img[i].cloneNode(true)
        clone.width = img[i].width
        clone.height = img[i].height

        img[i].style.opacity = "0%"
        img[i].id = "ZOOMED"

        clone.style.transform = "translate(0px,-"+clone.height+"px)"

        clone.className = null
        console.log(img[i].parentElement.className)



        clone.id = "ZOOM"
        img[i].parentElement.innerHTML += clone.outerHTML


        var rect = document.getElementById("ZOOM").getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);

        setTimeout(() => {
            
        }, 1);
        document.getElementById("ZOOM").style.left = rect.left+"px"
        console.log(img[i].parentElement.className.search("image2"));

        if (img[i].parentElement.className.search("image2") >= 0){
            document.getElementById("ZOOM").style.top = rect.top + document.getElementById("ZOOM").height * 2
        }
        else{
            document.getElementById("ZOOM").style.top = rect.top + document.getElementById("ZOOM").height
        }
        setTimeout(() => {
            document.getElementById("ZOOM").style.height = "auto"
            document.getElementById("ZOOM").style.width = "80%"
            //document.getElementById("ZOOM").style.top = "calc(50% - "+document.getElementById("ZOOM").height+"px)"
            document.getElementById("ZOOM").style.transform = null
            document.getElementById("ZOOM").style.top = "20%"
            document.getElementById("ZOOM").style.left = "10%"
            console.log(document.getElementById("ZOOM").style.top)
        }, 1);
    });
}