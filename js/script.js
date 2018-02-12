function myFunction() {
    var x, text;

    x = document.getElementById("number").value;

    if (isNaN(x)) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}
