let currentLevel = 1;
let currentQuestionIndex = 0;
let score = 0;
let errors = 0;
let currentQuestions = [];

function startQuiz() {
    // Veendu, et muutuja nimi 'quizQuestions' (või beginnerQuestions) 
    // on täpselt sama, mis su andmefailis!
    currentQuestions = beginnerQuestions; 
    currentQuestionIndex = 0;
    score = 0;
    errors = 0;
    
    // Kui sul on HTML-is elemente, mida alguses peita/näidata
    const feedback = document.getElementById('feedback');
    if(feedback) feedback.classList.add('hide');
    
    showQuestion();
}
// 3. KÜSIMUSE KUVAMINE
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Uuendame taseme teksti
    document.getElementById('level-display').innerText = question.level;
    
    // Uuendame küsimuse teksti ja numbri
    const questionNumber = currentQuestionIndex + 1;
    document.getElementById('question-text').innerText = questionNumber + ". " + question.question;
    
    const btnGrid = document.getElementById('answer-buttons');
    btnGrid.innerHTML = ''; 

    // --- SIIN ON MUUDATUS: SEGAME VASTUSED LÄBI ---
    // Teeme vastustest koopia ja sordi me need juhuslikult
    const shuffledAnswers = [...question.answers].sort(() => Math.random() - 0.5);

    // Kasutame nüüd segatud nimekirja (shuffledAnswers) nuppude loomiseks
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.onclick = () => selectAnswer(answer, button);
        btnGrid.appendChild(button);
    });

    document.getElementById('feedback').classList.add('hide');
}

// 4. VASTUSE VALIMINE
function selectAnswer(answer, button) {
    const feedback = document.getElementById('feedback');
    const explanation = document.getElementById('explanation-text');
    
    explanation.innerText = answer.info;
    feedback.classList.remove('hide');

    // Takistame teiste nuppude vajutamist pärast valikut
    const allButtons = document.querySelectorAll('#answer-buttons button');
    allButtons.forEach(btn => btn.disabled = true);

    if (answer.correct) {
        button.style.backgroundColor = "#2ecc71"; // Roheline
        score++;
    } else {
        button.style.backgroundColor = "#e74c3c"; // Punane
        errors++;
        if (errors >= 3) {
            alert("3 viga täis! Pead uuesti alustama.");
            startQuiz();
            return;
        }
    }
}

// 5. JÄRGMINE KÜSIMUS (See funktsioon paneb nupu tööle!)
function nextQuestion() {
    currentQuestionIndex++;

    // Kontrollime, kas selle taseme küsimused said otsa
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        checkLevelUp();
    }
}

// 6. TASEME VAHETAMINE
// 6. TASEME VAHETAMINE
function checkLevelUp() {
    const levelElement = document.getElementById('level-display');
    
    if (currentLevel === 1) {
        currentLevel = 2;
        currentQuestions = mediumQuestions;
        currentQuestionIndex = 0;
        if(levelElement) levelElement.style.color = "orange"; 
        alert("Tubli! Liigume edasijõudnu tasemele!");
        showQuestion();
    } else if (currentLevel === 2) {
        currentLevel = 3;
        currentQuestions = expertQuestions;
        currentQuestionIndex = 0;
        if(levelElement) levelElement.style.color = "red"; 
        alert("Vau! Oled nüüd ekspert-tasemel!");
        showQuestion();
    } else {
        alert("VIKTORIIN LÄBITUD! Sinu tulemus: " + score + " punkti. Oled Rakuekspert! 🏆");
        startQuiz();
    }
} // See sulg lõpetab nüüd korrektselt funktsiooni!

// Täienda ka showQuestion funktsiooni algust, et tekst muutuks:
// Pane see rida oma olemasoleva showQuestion funktsiooni ESIMESEKS REAKS:
// document.getElementById('level-display').innerText = currentQuestions[currentQuestionIndex].level;

// Vajalik seos HTML-iga
document.getElementById('next-btn').onclick = nextQuestion;

// Käivitame mängu
startQuiz();