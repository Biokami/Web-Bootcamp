var annoy = prompt("Are we there yet???");

while (annoy.indexOf("yes") == -1 && annoy.indexOf("yeah") == -1 ) {
    var annoy = prompt("Are we there yet???");
}
alert("Yay, we made it!");
