$(document).ready(function () {
    var number = 60;
    var intervalId;

    var playButton = $('#play');
    var correctCountDiv = $('#Correct');
    var wrongCountDiv = $('#Wrong');
    var resetButton = $('<button>');
    var correctAnswerCount = 0;
    var wrongAnswerCount = 0;
    resetButton.attr('id', 'reset');
    resetButton.html('Reset');
    resetButton.on('click', reset);

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function reset() {
        number = 60;
        correctAnswerCount = 0;
        wrongAnswerCount = 0;
        resetButton.remove();
        run();
    }

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

    function play() {
        run();
    }

    playButton.on('click', play);

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

    // questions loop
    for (var i = 0; i < questions.length; i++) {
        var question = '<p>' + questions[i].q + '</p>';
        $('#questions').append(question);

        // answers loop
        for (var j = 0; j < questions[i].choices.length; j++) {
            var choice = '<div><input type="radio" name="' + i + '" value="' + questions[i].choices[j] + '"/>' + questions[i].choices[j] + '</div>';
            $('#questions').append(choice);
        }
    }

    $("#submit").click(function () {
        // grab checked inputs
        var inputs = $('input:checked');

        for (var i = 0; i < questions.length; i++) {
            if (inputs[i].value === questions[i].choices[questions[i].answer]) {
                correctAnswerCount++;
                console.log('Correct Answer Count:', correctAnswerCount);
            } else {
                wrongAnswerCount++;
                console.log('Wrong Answer Count:', wrongAnswerCount);
            }
        }

        // Stop the game
        stop();
        correctCountDiv.html(correctAnswerCount);
        wrongCountDiv.html(wrongAnswerCount);

        // Add reset button to end of game.
        $('.container2').append(resetButton);
    });
});