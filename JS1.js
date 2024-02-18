var sbtn = document.getElementById("sBtn")
var ddbtn = document.getElementsByClassName("dropdownBtn")
var exitbtn = document.getElementById("exit")
var sField = document.getElementById("searchField")
var dDown = document.getElementById("dropDown")
var results = document.getElementById("results")
var shownResuts = []
var resultNumber = document.getElementById("resultNumber")



function showResults(){
    for (let i = 0; i < results.children.length; i++) {
        results.children[i].style.display = "none"
    }
    for (let i = 0; i < shownResuts.length; i++) {
        shownResuts[i].style.display = "flex"
    }
}

function showAll(){
    for (let i = 0; i < results.children.length; i++) {
        results.children[i].style.display = "flex"
    }
    resultNumber.innerHTML = "<br>"
}

sField.onfocus= function(){
    dDown.style.display = "flex"
    exitbtn.style.display = "flex"
}

exitbtn.onclick = function(){
    dDown.style.display = "none"
    exitbtn.style.display = "none"
}

sbtn.onclick = function(){
    if (sField.value == ""){
        showAll()
        return
    }
    
    keyWords = sField.value.toLowerCase().split(",")
    if (keyWords[keyWords.length-1] == ""){
        keyWords.splice(keyWords.length-1,1)
    }

    resultKeyWords = []


    shownResuts = []
    for (let n = 0; n < keyWords.length; n++) {
        for (let i = 0; i < results.children.length; i++) {
            resultKeyWords = results.children[i].children[1].children[2].children[0].innerHTML.toLowerCase().split(",")
            for (let x = 0; x < resultKeyWords.length; x++) {
                if (resultKeyWords[x].trimStart().trimEnd().replace(" ","") == keyWords[n].trimStart().trimEnd().replace(" ","")){
                    shownResuts.push(results.children[i])
                }
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
        sField.value += ddbtn.item(i).children.item(0).innerHTML.trimStart().trimEnd() + ", "
    });
}