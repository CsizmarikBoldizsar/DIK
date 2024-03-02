var path = "Data/"+document.title.replace(" ","").toLowerCase() + ".txt"
var imgPath = "Images/"+document.title.replace(" ","")+"/"+document.title.replace(" ","")+" ("

var images = document.getElementsByClassName("img")

var title = document.getElementsByClassName("title").item(0)
var price = document.getElementById("price")
var size = document.getElementById("size")
var rooms = document.getElementById("rooms")
var otherNames = document.getElementById("otherNames")
var otherValues = document.getElementById("otherValues")

document.getElementsByClassName("mapLink").item(0).href = "map.html#"+document.title.replace(" ","")

fetch(path)
  .then(response => response.text())
  .then((data) => {
    console.log(data)
    var splitData = data.split("\n")

    title.innerHTML = splitData[0]
    price.innerHTML = splitData[1]+" M Ft"
    size.innerHTML = splitData[2]+"m<sup>2</sup>"
    rooms.innerHTML = splitData[3]
    splitData.splice(0,4)

    for (let i = 0; i < splitData.length; i+=2){
      if (splitData[i] == "-img"){
        splitData.splice(0,i+1)
        break;
      }
      otherNames.innerHTML += "<td>"+splitData[i]+"</td>"
      otherValues.innerHTML += "<td><strong>"+splitData[i+1]+"</strong></td>"
    }
    console.log("--2--")
    console.log(images)
    for (let i = 0; i < images.length; i++){
      if (splitData[i] == "-search"){
        break;
      }
      console.log("--2.x--")
      console.log(imgPath+splitData[i]+").png")
      images[i].src = imgPath+splitData[i]+").png"
    }
  })

