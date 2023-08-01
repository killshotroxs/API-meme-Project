function getRandomMeme() {
    // Fetch a random meme
    fetch('https://meme-api.com/gimme')
        .then(response => response.json())
        .then(data => {
            const randomMemeUrl = data.url;
            const randomMemeTitle = data.title;

            const memeImage = document.getElementById('meme-image');
            memeImage.onload = () => {
                memeImage.style.display = 'block'; // Show the image once it's loaded
            };
            memeImage.src = randomMemeUrl;
            memeImage.alt = randomMemeTitle;

            // Trigger confetti animation
            startConfetti(); // Call to start the confetti animation
        })
        .catch(error => console.error('Error fetching meme:', error));
}


function playHappyBirthday() {
    const audio = new Audio('happy-birthday.mp3');
    audio.play();
}

let audio = null;
let isPlaying = false;

function playHappyBirthday() {
    if (!audio) {
        audio = new Audio('happy-birthday.mp3');
        audio.addEventListener('ended', () => {
            isPlaying = false;
            updateButtonLabel();
        });
    }

    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }

    isPlaying = !isPlaying;
    updateButtonLabel();

    // Trigger confetti animation
    confetti.togglePause();
}

function updateButtonLabel() {
    const playButton = document.getElementById('play-audio-button');
    playButton.textContent = isPlaying ? 'Pause Happy Birthday' : 'Play Happy Birthday';
}

// Initialize the confetti instance after the page loads
window.onload = () => {
    const confettiSettings = {
        target: 'confetti-container',
        max: 100,
        size: 1,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[255, 0, 0], [0, 0, 0], [0, 0, 255]], // You can customize the colors here
    };
    confetti = new ConfettiGenerator(confettiSettings);
};

function startConfettiForImage() {
    const confettiSettings = {
        target: 'confetti-container',
        max: 100,
        size: 1,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[255, 0, 0], [0, 0, 0], [0, 0, 255]], // You can customize the colors here
    };
    confetti(confettiSettings);
}
