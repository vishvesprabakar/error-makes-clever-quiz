function submitQuiz() {
    const form = document.getElementById('quizForm');
  
    // Get user's answers
    const answers = {
      q1: form.querySelector('input[name="q1"]:checked'),
      q2: form.querySelector('input[name="q2"]:checked'),
      q3: form.querySelector('input[name="q3"]:checked'),
    };
  
    // Check if all questions are answered
    if (answers.q1 && answers.q2 && answers.q3) {
      // Calculate the score
      let score = 0;
  
      if (answers.q1.value === 'paris') score++;
      if (answers.q2.value === 'mars') score++;
      if (answers.q3.value === 'bluewhale') score++;
  
      // Store the result in sessionStorage
      sessionStorage.setItem('quizScore', score);
  
      // Redirect to the result page
      window.location.href = 'result.html';
    } else {
      // If not all questions are answered, prompt the user
      alert('Please answer all questions before submitting.');
    }
  }
  
  // Function to display the result on the result.html page
  function displayResult() {
    const resultElement = document.getElementById('result');
    const quizScore = sessionStorage.getItem('quizScore');
  
    if (quizScore !== null) {
      resultElement.textContent = `Score: ${quizScore}`;
    } else {
      resultElement.textContent = 'Quiz result not available.';
    }
  }
  
  // Call the displayResult function when the result.html page loads
  window.onload = displayResult;
  