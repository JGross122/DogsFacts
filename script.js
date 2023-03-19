var http = new XMLHttpRequest();
var url1 = "https://dogapi.dog/api/v2/facts";
http.open("GET", url1);
http.send();
http.onreadystatechange = e =>{
    var response = JSON.parse(http.responseText)
    var fact = response.data[0].attributes.body;
    document.getElementById('fact').innerHTML = fact;
}
var url2 = "https://random.dog/woof.json";
var http2 = new XMLHttpRequest();
http2.open("GET", url2);
http2.send();
http2.onreadystatechange = e =>{
    var response2 = JSON.parse(http2.responseText)
    var imageURL = response2.url;
    document.getElementById('image').innerHTML = "<img src='"+imageURL+"'>";
}