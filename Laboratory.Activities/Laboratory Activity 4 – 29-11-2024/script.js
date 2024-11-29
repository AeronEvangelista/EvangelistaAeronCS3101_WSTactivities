function toggleFlip(card) {
    card.querySelector('.card-inner').classList.toggle('flipped');
}

window.onload = function() {
    let audio = document.getElementById('background-music');

    // Check if music was previously playing
    if (localStorage.getItem('musicPlaying') === 'true') {
        audio.play();  // Start playing the audio if previously set to play
    }
};

// Start the music when the user clicks anywhere on the page
document.body.addEventListener('click', function() {
    let audio = document.getElementById('background-music');
    
    // Check if music is not already playing before starting it
    if (audio.paused) {
        audio.play();
        localStorage.setItem('musicPlaying', 'true');  // Save state as playing
    }
});

// Before the page unloads, save the audio state
window.onbeforeunload = function() {
    let audio = document.getElementById('background-music');
    
    // Save whether the music is playing or not in localStorage
    if (!audio.paused) {
        localStorage.setItem('musicPlaying', 'true');
    } else {
        localStorage.setItem('musicPlaying', 'false');
    }
};