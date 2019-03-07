$("#begin").on("click", start);

var num = 11;
var interval;
var correct = 0;
var percentage = 0;
var incorrect = 0;
var score = 0;


function start() {
    document.getElementById("Scorecard").style.display = "none";
    interval = setInterval(decrease, 1000);
}

function decrease() {
    //I think the problem is num...the interval is being cleared whe the stop function is called
    //but num is still decreasing if the game has been played and I click the start button again
    //Should I be testing against the interval variable?????
    num--;

    $("#timeRemaining").text("Time Remaining: 00:" + num);

    if (num < 10) {
        $("#timeRemaining").text("Time Remaining: 00:0" + num);
    }

    if (num === 0) {

        alert("Time is up");
        stop();
        
        document.getElementById("Scorecard").style.display = "inline";
    }

}
function stop() {
    clearInterval(interval);
    results();
    $("#timeRemaining").text("Time Remaining: 00:00");
}
function results() {
    var radioValue1 = $("input[name='gender']:checked").val();
    var radioValue2 = $("input[name='age']:checked").val();
    var radioValue3 = $("input[name='hobby']:checked").val();
    var radioValue4 = $("input[name='food']:checked").val();
    if (radioValue1 == "male") {
        correct++;

    }
    else {
        incorrect++;
    }
    if (radioValue2 == "Over30") {
        correct++;

    }
    else {
        incorrect++;
    }
    if (radioValue3 == "CigarsAndScotch") {
        correct++;

    }
    else {
        incorrect++;
    }
    if (radioValue4 == "SteakAndLobster") {
        correct++;

    }
    else {
        incorrect++;
    }
    percentage = (correct / 4 ) *100;
    
    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " + incorrect);
    $("#percentage").text("Percentage: " + percentage + "%");
    




}