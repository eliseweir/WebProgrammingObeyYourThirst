// site counter
let visitors = localStorage.getItem('on_load_counter');

if (visitors === null) {
    visitors = 0;
}
visitors++;

localStorage.setItem('on_load_counter', visitors);
document.getElementById('counter').innerHTML = visitors;

// Buy Now button
let buyNowButton = document.querySelector('#buy-button');

function onBuyClick() {
    buyNowButton.innerHTML = "Buy Again";
    window.open('https://www.sprite.com/products/', '_blank');
};

buyNowButton.addEventListener('click', onBuyClick);

// Playlist Button
let playlistButton = document.querySelector('#playlist-button');

function onPlaylistClick() {
    window.open('https://open.spotify.com/playlist/0F9GnzKQchH4mZ56dysDJa', '_blank');
}

playlistButton.addEventListener('click', onPlaylistClick);

// Podcast Button
let podcastButton = document.querySelector('#podcast-button');

function onPodcastClick() {
    window.open('https://open.spotify.com/show/0JPIX8qXStBBqSFg6vVTUS', '_blank');
}

podcastButton.addEventListener('click', onPodcastClick);

// Form Validation
// adapted example from
// https://www.w3schools.com/js/js_validation.asp
// regex from https://www.w3resource.com/javascript/form/email-validation.php
function validateForm() {
    // select the email and message fields
    let emailCheck = document.forms["contact-us"]["email"].value;
    let messageCheck = document.forms["contact-us"]["message"].value;
    
    // define a regex for a valid email address
    let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // if the email field is empty, display an error
    if (emailCheck == "") {
        let errorP = document.querySelector("#verify>p");
        errorP.innerHTML = "Please include an email address.";
        errorP.style.border = "2px red solid";
        return false;
    }
    // if the email address is invalid, display error
    else if (!emailCheck.match(emailFormat)) {
        let errorP = document.querySelector("#verify>p");
        errorP.innerHTML = `$Your email address is not valid.`;
        errorP.style.border = "2px red solid";
        return false;
    }
    // if the message field is empty, display error
    else if (messageCheck == "") {
        let errorP = document.querySelector("#verify>p");
        errorP.innerHTML = "You must include a message.";
        errorP.style.border = "2px red solid";
        return false;
    }
    // if all input is valid, clear any previous error messages
    else {
        let errorP = document.querySelector("#verify>p");
        errorP.innerHTML = "";
        errorP.style.border = "none";
    }
    return true;
}