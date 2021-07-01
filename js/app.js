function myColor() {
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    document.getElementById("rgbCode").innerHTML = "rgb(" +red+ " ,"
    +green+ " ," +blue+ " )";
    document.body.style.backgroundColor = document.getElementById("rgbCode").innerHTML = "rgb(" +red+ " ,"
    +green+ " ," +blue+ " )";
}