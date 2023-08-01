function getRandomMeme() {
    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
            const memes = data.data.memes;
            const randomIndex = Math.floor(Math.random() * memes.length);
            const randomMemeUrl = memes[randomIndex].url;
            const randomMemeName = memes[randomIndex].name;

            const memeImage = document.getElementById('meme-image');
            memeImage.src = randomMemeUrl;
            memeImage.alt = randomMemeName;
        })
        .catch(error => console.error('Error fetching meme:', error));
}
