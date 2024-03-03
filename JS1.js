var sbtn = document.getElementById("sBtn")
var ddbtn = document.getElementsByClassName("dropdownBtn")
var exitbtn = document.getElementById("exit")
var sField = document.getElementById("searchField")
var dDown = document.getElementById("dropDown")
var results = document.getElementById("results")
var shownResuts = []
var resultNumber = document.getElementById("resultNumber")


var focused = false 

function showResults(){
    for (let i = 0; i < results.children.length; i++) {
        results.children[i].style.display = "none"
    }
    for (let i = 0; i < shownResuts.length; i++) {
        shownResuts[i].style.display = null
    }
}

function showAll(){
    for (let i = 0; i < results.children.length; i++) {
        results.children[i].style.display = null
    }
    resultNumber.innerHTML = "<br>"
}

sField.onfocus= function(){
    dDown.style.display = "flex"
    exitbtn.style.display = "flex"
    focused = true 
}

exitbtn.onclick = function(){
    dDown.style.display = "none"
    exitbtn.style.display = "none"
    focused = false 
}

document.onkeydown = function(event){
    if (focused == true){
        if (event.key == "Enter"){
            event.preventDefault();
            sbtn.click()
        }
    }
}




sbtn.onclick = function(){
    if (sField.value == ""){
        showAll()
        return
    }
    

    keyWords = sField.value.toLowerCase().replace(" ","").split(",")
    console.log(keyWords)
    if (keyWords[keyWords.length-1] == ""){
        keyWords.splice(keyWords.length-1,1)
    }

    shownResuts = []
    for (let n = 0; n < keyWords.length; n++) {
        for (let i = 0; i < results.children.length; i++) {
            resultext = results.children[i].children[1].children[2].children[0].innerHTML.toLowerCase().replace(" ","")
            if (resultext.trimStart().trimEnd().search(keyWords[n].trimStart().trimEnd()) >= 0){
                shownResuts.push(results.children[i])
                console.log(results.children[i])
            }
        }
    }

   resultNumber.innerHTML = shownResuts.length+" találat"
   showResults()
   dDown.style.display = "none"
   exitbtn.style.display = "none"
}


for (let i = 0; i < ddbtn.length; i++) {
    ddbtn.item(i).addEventListener("click", function(){
        if (!(sField.value == "")){
            sField.value += ", "
        }
        sField.value += ddbtn.item(i).children.item(0).innerHTML.trimStart().trimEnd()
    });
}