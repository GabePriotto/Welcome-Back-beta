// // Espera o DOM carregar completamente antes de executar o código
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona os elementos da página HTML
    const startBtn = document.getElementById('start-btn');
    const gameContent = document.getElementById('game-content');
    const questionEl = document.getElementById('question');
    const questionImg = document.getElementById('question-img');
    const answerInput = document.getElementById('answer-input');
    const submitBtn = document.getElementById('submit-btn');
    const feedback = document.getElementById('feedback');
    const scoreEl = document.getElementById('score');
    const backGround = document.querySelector('.big-div');
    const border = document.getElementById('question-img');

    
    let currentQuestion = 0;
    let score = 0;

    
    const questions = [
        {
            question: "Qual é esse Distant Place?",
            image: "Distant Place 014.jpg", 
            answer: "Distant Place 014"
        },
        {
            question: "Qual é esse Distant Place?",
            image: "Distant Place 012.jpg",
            answer: "Distant Place 012"
        },
        {
            question: "Qual é esse Distant Place?",
            image: "Distant Place 001.jpg",
            answer: "Distant Place 001"
        },
        {
            question: "O que é isso?",
            image: "Bizarre Dog.png",
            answer: "Black Dog"
        },
        {
        question: "Qual é esse Distant PlAcE?",
        image: "Distant Place 006 (train).jpg",
        answer: "Distant Place 006"
        }
    ];

    
    startBtn.addEventListener('click', function() {
        startBtn.classList.add('hidden'); // Esconde o botão "Começar"
        gameContent.classList.remove('hidden'); // Mostra o conteúdo do jogo
        backGround.style.height = '1150px';
        backGround.style.backgroundImage = "url('01010100\ 01101000\ 01101001\ 01110011\ 00100000\ 01101000\ 01100001\ 01110011\ 00100000\ 01100010\ 01100101\ 01100101\ 01101110\ 00100000\ 01100011\ 01101111\ 01110010\ 01110010\ 01110101\ 01110000\ 01110100\ 01100101\ 01100100.jpeg')";
        backGround.style.border = 'solid 3px white';
        border.style.border = 'solid 2px white'
        loadQuestion(); // Carrega a primeira pergunta
    });

    // Evento de clique no botão "Continuar"
    submitBtn.addEventListener('click', function() {
        checkAnswer(); // Verifica a resposta ao clicar no botão "Continuar"
    });

    // Função para carregar uma pergunta
    function loadQuestion() {
        if (currentQuestion < questions.length) {
            // Atualiza o conteúdo da pergunta e da imagem
            questionEl.textContent = questions[currentQuestion].question;
            questionImg.src = questions[currentQuestion].image;
            // Limpa o campo de resposta e esconde o feedback
            answerInput.value = ''; 
            feedback.classList.add('hidden'); // Esconde o feedback anterior
        } else {
            // Quando todas as perguntas acabarem, o conteúdo do jogo é escondido e a pontuação final aparece
            gameContent.classList.add('hidden');
            scoreEl.classList.remove('hidden');
            scoreEl.textContent = `Pontuação final: ${score}`;
        }
    }

    // Função para verificar a resposta do usuário
    function checkAnswer() {
        const userAnswer = answerInput.value.trim(); // Captura e remove espaços extras da resposta
        if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
            // Se a resposta estiver correta, exibe o feedback positivo e adiciona pontos
            feedback.textContent = "Muito bem!";
            feedback.classList.remove('hidden', 'incorrect'); // Remove a classe incorreta, se houver
            feedback.classList.add('correct'); // Adiciona a classe correta
            score += 10; // Adiciona 10 pontos à pontuação
        } else {
            // Se a resposta estiver errada, exibe o feedback negativo
            feedback.textContent = "Incorreto!";
            feedback.classList.remove('hidden', 'correct'); // Remove a classe correta, se houver
            feedback.classList.add('incorrect'); // Adiciona a classe incorreta
        }
        currentQuestion++; // Avança para a próxima pergunta
        setTimeout(loadQuestion, 2000); // Aguarda 2 segundos antes de carregar a próxima pergunta
    }
});

