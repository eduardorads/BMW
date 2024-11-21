document.getElementById("submit").addEventListener("click", function () {
    const correctAnswers = {
      answer1: "1916",
      answer2: "Bayerische Motoren Werke",
      answer3: "i8"
    };
  
    const userAnswers = {
      answer1: document.getElementById("answer1").value.trim(),
      answer2: document.getElementById("answer2").value.trim(),
      answer3: document.getElementById("answer3").value.trim()
    };
  
    let score = 0;
    for (const key in correctAnswers) {
      if (userAnswers[key].toLowerCase() === correctAnswers[key].toLowerCase()) {
        score++;
      }
    }
  
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Você acertou ${score} de 3 perguntas!`;
  
    if (score === 3) {
      resultDiv.style.color = "green";
    } else if (score === 2) {
      resultDiv.style.color = "orange";
    } else {
      resultDiv.style.color = "red";
    }
  });
  