function generateRandom(){
    return Math.floor(Math.random() * 10);
}

function evaluateResponse(userResponse, correctAnswer){
    while (userResponse != correctAnswer) {
        console.log("Wrong answer! Try again.");
        userResponse = Number(prompt(problemInWords));
        console.log("User entered %d", userResponse); // Esto es para fines // de depuración
    } 
}

function showSuccessMessage(){
    const messages = ["Well done!", "Very good!", "Correct!", "Keep it up!", "Nice work!"];
    const r = Math.floor(Math.random() * messages.length);
    console.log(messages[r]);
    alert(messages[r]);
}

function showProblem(){
    let n1 = Math.floor(Math.random() * 10); // 0 <= n1 < 10
    let n2 = Math.floor(Math.random() * 10); // 0 <= n2 < 10

    let problemInWords = "What is "+ String(n1) + " + " + String(n2);
    console.log(problemInWords);
    let userResponse = Number(prompt(problemInWords));
    console.log("User entered %d", userResponse); // Esto es para fines de depuración

    let correctAnswer = n1 + n2;
    evaluateResponse(userResponse, correctAnswer);

    showSuccessMessage();
}

showProblem();