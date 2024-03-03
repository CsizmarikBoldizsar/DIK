
window.onload = function(){
  var resultsChildren = document.getElementById("results").children
  //console.log("resultsChildren--- ",resultsChildren)
  






  //var dataTable = []
  var paths = []
  var imgPaths = []

  for(let i = 0; i < resultsChildren.length; i++){
    var c = resultsChildren.item(i)
    var path = "Details/"+c.id.toLowerCase() + ".txt"
    var imgPath = "Images/"+c.id+"/"+c.id+" ("
    //console.log("pushing paths",i)

    paths.push(path)
    imgPaths.push(imgPath)

    //console.log(paths)
    //console.log(imgPaths)
  }



  for(let i = 0; i < resultsChildren.length; i++){
    fetch(paths[i])
    .then(response => response.text())
    .then((data) => {
      //console.log("pushing data",i)

      //dataTable.push(data)

      //console.log(dataTable)

      //for(let i = 0; i < resultsChildren.length; i++){
        console.log("-------------------------------")
        var c = resultsChildren.item(i)
        c.href = c.id+".html"
        //console.log("c--- ",c)
    
        //var splitData = dataTable[i].split("\n")
        var splitData = data.split("\n")

        //console.log("src--- ",imgPaths[i]+splitData[splitData.indexOf("-img")+1]+").png")
    
        c.children[0].src = imgPaths[i]+splitData[splitData.indexOf("-img")+1]+").png"
        c.children[1].children[0].innerHTML = splitData[1]+" M Ft"
        c.children[1].children[2].children[0].innerHTML = splitData[splitData.indexOf("-search")+1]
        c.children[1].children[2].children[1].innerHTML = splitData[0]
        var t = c.children[1].children[3].children[0].children[1]
    
        //console.log("t--- ",t)
    
        t.children[0].children[0].innerHTML = splitData[2]+"m<sup>2</sup>"
        t.children[1].children[0].innerHTML = splitData[3]
        //console.log("-------------------------------")
      //}
    })
  }  
}


