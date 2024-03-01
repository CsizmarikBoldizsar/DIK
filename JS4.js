var client = new XMLHttpRequest();
client.open('GET', '/file.txt');
client.onreadystatechange = function() {
  alert(client.responseText);
}
client.send();