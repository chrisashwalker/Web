function getBackground(){
    counter = Math.floor(Math.random() * 6) + 1
    document.getElementById("bg").style.backgroundImage = "url('images/bg" + counter + "b.jpeg')";
}