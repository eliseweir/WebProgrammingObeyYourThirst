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

function onButtonClick() {
    buyNowButton.innerHTML = "Buy Again";
    window.open('https://www.sprite.com/products/', '_blank');
};

buyNowButton.addEventListener('click', onButtonClick);