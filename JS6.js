var pins = document.getElementsByClassName("pin")
console.log(pins)

window.onload = function(){
    var paths = []
    var imgPaths = []

    for(let i = 0; i < pins.length; i++){
        var c = pins.item(i)
        var path = "Details/"+c.id.toLowerCase() + ".txt"
        var imgPath = "Images/"+c.id+"/"+c.id+" ("
        paths.push(path)
        imgPaths.push(imgPath)
    }


    for(let i = 0; i < pins.length; i++){
        fetch(paths[i])
        .then(response => response.text())
        .then((data) => {
        var c = pins.item(i)
        c.href = c.id+".html"
        var splitData = data.split("\n")
        
        var r = c.children[1]

        r.children[0].scr = imgPaths[i]+splitData[splitData.indexOf("-img")+1]+").png"

        var t = r.children[2].children[0]
        console.log("t----",t)
        console.log("r----",r)
        console.log(r.children)
        console.log(r.children[2])
        console.log(r.children[2].children)
        console.log(r.children[2].children[0])

        t.children[1].children[0].children[0].innerHTML = splitData[0]
        t.children[0].children[0].children[0].innerHTML = splitData[1] + " M Ft"
        t.children[3].children[0].children[0].innerHTML = splitData[2] + "m<sup>2</sup>"
        t.children[3].children[1].children[0].innerHTML = splitData[3] + "m<sup>2</sup>"
        })
    }
}