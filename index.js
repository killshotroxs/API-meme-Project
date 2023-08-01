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

                // Set the confetti container position to overlay the meme image
                const confettiContainer = document.getElementById('confetti-container');
                confettiContainer.style.position = 'absolute';
                confettiContainer.style.top = memeImage.offsetTop + 'px';
                confettiContainer.style.left = memeImage.offsetLeft + 'px';
            };
            memeImage.src = randomMemeUrl;
            memeImage.alt = randomMemeTitle;
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
