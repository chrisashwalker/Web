function buttonPress(){
    var question = document.getElementById("question");
    var answer = document.getElementById("answer");
    var placeholder = answer.getAttributeNode("placeholder");
    var results = document.getElementById("results");
    if (answer.value != ""){
        if (placeholder.value === "Name"){
            document.getElementById("description").remove();
            document.getElementById("heading").innerHTML = "Welcome " + answer.value;
            question.innerHTML = "Where do you live?";
            placeholder.value = "Town";
        }
        else if (placeholder.value === "Town"){
            question.innerHTML = "How old are you?";
            placeholder.value = "Age";
            var town = document.createElement("P");
            town.innerHTML = "Town: " + answer.value;
            results.appendChild(town);
        }
        answer.value = "";
    }
}