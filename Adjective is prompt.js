var question = prompt("What is your name?");
var insult = ["stupid", "dumb", "mediorce", "borger"];
var number = (Math.floor(Math.random ()*insult.length));
window.alert(question + " is " + insult[number]);