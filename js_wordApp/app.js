const wordText = document.querySelector(".word-given");
const answerText = document.querySelector(".answer-given");
const questionNumber = document.querySelector(".question-number");
const next = document.querySelector(".btn-next");
const finish = document.querySelector(".btn-finish");
const startInterface = document.querySelector(".start");
const ready = document.querySelector(".btn-ready");
const app = document.querySelector(".app");
const check = document.querySelector(".btn-check");
const answerGiven = document.querySelector(".answer-given");
const trueButton = document.querySelector(".btn-true");
const falseButton = document.querySelector(".btn-false");
const known = document.querySelector(".known");
const unknown = document.querySelector(".unknown");
const finishApp = document.querySelector(".finishApp");
const again = document.querySelector(".btn-again");


const info = new WordInfo(wordList);
let control = info.control();

window.addEventListener("load", () => {
    let words = info.getInfo();
    displayWords(words);
});

next.disabled = true;

displayWords = (words) => {
    wordText.innerHTML  = `<b>${words.word}</b>`;
    answerText.innerHTML  = `<b>${words.answer}</b>`;
    questionNumber.innerHTML  = `<strong>Question ${words.number}</strong>`;
    known.innerHTML = `<b>Known Words: ${count_known_words}</b>`;
    unknown.innerHTML = `<b>Unknown Words: ${count_unknown_words}</b>`;
}

next.addEventListener("click", () => {
    nextQuestion();
    if (count_known_words + count_unknown_words == wordList.length - 1) {
        next.classList.remove("btn-next");
        next.classList.add("btn-finish");
        next.innerText = 'Finish';
        next.style.backgroundColor = '#0096FF';
        next.addEventListener("click", () => {
            finishQuiz();
            
            next.classList.add("btn-next");
            next.classList.remove("btn-finish");
            next.innerText = 'Next';
            next.style.backgroundColor = '#00D7FF';
        })
    }
})

nextQuestion = () => {
    trueButton.disabled = false;
    falseButton.disabled = false;
    next.disabled = true;
    info.next();
    let words = info.getInfo();
    answerGiven.classList.add("visHidden");
    trueToNormal();
    falseToNormal();
    displayWords(words);
}

ready.addEventListener("click", () => {
    startApp(); 
})

startApp = () => {
    startInterface.classList.add("visHidden");
    app.classList.remove("visHidden");
}

check.addEventListener("click", () => {
    checkAnswer();
})

checkAnswer = () => {
    answerGiven.classList.remove("visHidden");
}

let count_known_words = 0;
let count_unknown_words = 0;

trueButton.addEventListener("click", () => {
    trueButton.disabled = true;
    falseButton.disabled = true;
    next.disabled = false;
    count_known_words++;
    answerToTrue();
    let words = info.getInfo();
    displayWords(words);
})

falseButton.addEventListener("click", () => {
    trueButton.disabled = true;
    falseButton.disabled = true;
    next.disabled = false;
    count_unknown_words++;
    answerToFalse();
    let words = info.getInfo();
    displayWords(words); 
})

finishQuiz = () => {
    app.classList.add("visHidden");
    finishApp.classList.remove("visHidden");
}

again.addEventListener("click", () => {
    returnToStart();
    info.index = 0;
    count_known_words = 0;
    count_unknown_words = 0;
})

returnToStart = () => {
    finishApp.classList.add("visHidden");
    startInterface.classList.remove("visHidden");
}

answerToTrue = () => {
    trueButton.style.backgroundColor = '#5BB318';
}

trueToNormal = () => {
    trueButton.style.backgroundColor = '#00D7FF';
}

answerToFalse = () => {
    falseButton.style.backgroundColor = '#EB1D36';
}

falseToNormal = () => {
    falseButton.style.backgroundColor = '#00D7FF';
}

 
