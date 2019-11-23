$(document).ready(function () {
    var number = 60;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    // function reset() {
    //     number = 60;
    //     run();
    // }

    function decrement() {

        number--;
        $("#time-left").html("<h2 Timer>" + number + "</h2>");
        if (number === 0) {

            stop();
            alert("Games Over")
        }
    }

    function stop() {

        clearInterval(intervalId);

    }

    var questions = [
        {
            q: "Where does the show take place?",
            choices: ["Springfield", "New York", "Pawnee", "Quahog"],
            answer: 2,
        },
        {
            q: "What was the name of Leslie's boss?",
            choices: ["Tom Haverford", "Mark Breandanawicz", "Jerry Gergich", "Ron Swanson"],
            answer: 3,
        },
        {
            q: "How Many daughters did Jerry Have?",
            choices: ["Two", "Four", "Three", "Five"],
            answer: 2,
        },
        {
            q: "What does Chris believe about his future?",
            choices: ["He will die young", "He will live until 150", "He won't be able to mainintain his health regine", "He will live forever"],
            answer: 1,
        },
        {
            q: "Why was Ben famous at the age of eighteen?",
            choices: ["He became mayor and bankrupted the town", "he wans an actor", "he had a court case and was almost imprisoned", "He had famous parents and was famous by association"],
            answer: 0,
        }];

    var correctAnswer = 0
    var wrongAnswer = 0

    // questions loop
    for (var i = 0; i < questions.length; i++) {
        var question = '<p>' + questions[i].q + '</p>';
        $('#questions').append(question);

        // answers loop
        for (var j = 0; j < questions[i].choices.length; j++) {
            var choice = '<input type="radio" name="' + i + '" value=' + questions[i].choices[j] + '/>' + questions[i].choices[j];
            $('#questions').append(choice);
        }
    }

    $("#submit").click(function () {
        // Check all inputs
        var checkedInputs = $('input:checked');

        for (var i = 0; questions.length; i++) {
            console.log(checkedInputs[i]);
        }
    });

    function correctAnswer() {

            correctAnswer++;
            $("#submit").text("")

        }





    // $("#play").on("click", function () {
    // });

    // $("#reset").on("click", function(){
    // });


});







































