var client = new XMLHttpRequest();
client.open('GET', '/file.txt');
client.onreadystatechange = function() {
    console.log(client.responseText); 
}
client.send();
