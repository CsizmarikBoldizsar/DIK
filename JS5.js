
window.onload = function(){
  var resultsChildren = document.getElementById("results").children    
  for(let i = 1; i < resultsChildren.length; i++){
    var c = resultsChildren.item(i)    
    c.href = c.id+".html"
  
    console.log("resultsChildren--- ",resultsChildren)
    console.log("c--- ",c)

    var path = "Details/"+c.id.toLowerCase() + ".txt"
    var imgPath = "Images/"+c.id+"/"+c.id+" ("        
    fetch(path)
    .then(response => response.text())
    .then((data) => {      
      var splitData = data.split("\n")
      c.children[0].src = imgPath+splitData[splitData.indexOf("-img")+1]+").png"      
      c.children[1].children[0].innerHTML = splitData[1]+" M Ft"
      c.children[1].children[2].children[0].innerHTML = splitData[-1]
      c.children[1].children[2].children[1].innerHTML = splitData[0]
      var t = c.children[1].children[3].children[0].children[1]
      console.log("t--- ",t)              
      t.children[0].children[0].innerHTML = splitData[2]+"m<sup>2</sup>"
      t.children[1].children[0].innerHTML = splitData[3]
    })
  }
  
}

