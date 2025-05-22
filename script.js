function submitAnswerIn2() {
    let answer = document.getElementById("clientAnswer2").value;
    let myAnswer = +answer;
    alert(document.getElementById("result2").textContent = "Result: " + myAnswer.toString(2));
}

function submitAnswerIn10() {
    let answer = document.getElementById("clientAnswer10").value;
    let myAnswer = +answer;
    alert(document.getElementById("result10").textContent = "Result: " + myAnswer.toString(10));
}

function submitAnswerIn16() {
    let answer = document.getElementById("clientAnswer16").value;
    let myAnswer = +answer;
    alert(document.getElementById("result16").textContent = "Result: " + myAnswer.toString(16));
}

function wrapAnswer() {
    let answer = document.getElementById("clientAnswerRev").value;
    let myAnswer = parseInt(answer); //str-int -369
    if (myAnswer < 0) {
        answer = myAnswer.toString().split("").reverse().join("");
        myAnswer = parseInt(answer) * (-1);
    } else {
        myAnswer = myAnswer.toString().split("").reverse().join("");
    }
    alert(document.getElementById("resultRev").textContent = "Result: " + myAnswer);
}

function summOfDigits() {
    let answer = document.getElementById("clientAnswerSumm").value;
    let myAnswer = parseInt(answer); // -956.65 --> -956
    if (myAnswer < 0) {
        myAnswer = myAnswer * (-1);
    }
    answer = myAnswer.toString().split(""); // [9, 5, 6]
    let summ = 0;
    for (let i = 0; i < answer.length; i++) {
        summ += +answer[i];
    }
    alert(document.getElementById("resultSumm").textContent = "Result: " + summ);
}

function isValidExpression(answer) {
    return /^[0-9+\-*/().\s]+$/.test(answer);
}

function formula() {
    let answer = document.getElementById("clientAnswerMath").value;
    if (isValidExpression(answer)) {
        let result = eval(answer);
        alert(document.getElementById("resultMath").textContent = "Result: " + result);
    } else {
        alert("Wrong symbols!!");
    }
}
