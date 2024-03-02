
window.onload = function(){
  var resultsChildren = document.getElementById("results").children
  console.log(resultsChildren)
  console.log("lloaded")
  for(let i = 1; i < resultsChildren.length; i++){
    console.log(resultsChildren[i].id)
    var c = resultsChildren.item(i)
    console.log(c)
    c.href = c.id+".html"
  
    var path = "Details/"+c.id.toLowerCase() + ".txt"
    var imgPath = "Images/"+c.id+"/"+c.id+" ("
    console.log(c.id)
    console.log(imgPath)
    fetch(path)
    .then(response => response.text())
    .then((data) => {
      console.log(data)
      var splitData = data.split("\n")
      c.children[0].src = imgPath+splitData[splitData.indexOf("-img")+1]+").png"
      console.log(imgPath+splitData[splitData.indexOf("-img")+1]+").png")
      c.children[1].children[0].innerHTML = splitData[1]+" M Ft"
      c.children[1].children[2].children[0].innerHTML = splitData[-1]
      c.children[1].children[2].children[1].innerHTML = splitData[0]
      var t = c.children[1].children[3].children[1]
      console.log(c)
      console.log(t)
      console.log(t.children)
      t.children[0].children[0].innerHTML = splitData[2]+"m<sup>2</sup>"
      t.children[1].children[0].innerHTML = splitData[3]
    })
  }
  
}

