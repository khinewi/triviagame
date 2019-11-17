$(document).ready(function() {

var number = 60;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

function decrement(){

    number--;
    $("#time-left").html("<h2 Timer>" + number + "</h2>");
    if (number === 0 ) {

        stop();
        alert ("Games Over")
    }
}

function stop() {

    clearInterval(intervalId);

}
run();

var questions = [
    {
    q1: "Where does the show take place?",
    choices1: ["Springfield", "New York", "Pawnee", "Quahog"],
    answer1: 2},
    {
    q2: "What was the name of Leslie's boss?",
    choices2: ["Tom Haverford","Mark Breandanawicz", "Jerry Gergich", "Ron Swanson"],
    answer2: 3
    },
    {
    q3: "How Many daughters did Jerry Have?",
    choices3:["Two","Four","Three","Five"],
    answer3: 2    
    },
    {
    q4: "What does Chris believe about his future?",
    choices4: ["He will die young","He will live until 150","He won't be able to mainintain his health regine", "He will live forever"],
    answer4: 1,
    },
    {
    q5: "Why was Ben famous at the age of eighteen?",
    choices5: ["He became mayor and bankrupted the town", "he wans an actor", "he had a court case and was almost imprisoned", "He had famous parents and was famous by association"],
    answer5: 0,
    }]

$("#play").on("click", function(){

});

$("#Done").on("click", function(){

});


});







































