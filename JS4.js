var path = document.title.replace(" ","").toLowerCase() + ".txt"
var imgPath = "Images/"+document.title.replace(" ","")+document.title.replace(" ","")+" ("

var images = document.getElementsByClassName("img")

var title = document.getElementsByClassName("title").item(0)
var price = document.getElementById("price")
var size = document.getElementById("size")
var otherNames = document.getElementById("otherNames")
var otherValues = document.getElementById("otherValues")

document.getElementsByClassName("mapLink").item(0).href = "map.html#"+document.title.replace(" ","")

fetch(path)
  .then(response => response.text())
  .then((data) => {
    console.log(data)
    splitData = data.split("\n")

    title.innerHTML = splitData[0]
    price.innerHTML = splitData[1]
    size.innerHTML = splitData[2]
    splitData.splice(0,3)
    for (let i = 0; i < splitData.lenght; i+=2){
      if (splitData[i] == "-img"){
        splitData.splice(0,i)
        return
      }
      otherNames.innerHTML += "<td>"+splitData[i]+"</td>"
      otherNames.innerHTML += "<td><strong>"+splitData[i+1]+"</strong></td>"
    }
    for (let i = 0; i < images.lenght; i++){
      images[i].src = imgPath+splitData[i]+").png"
    }
  })