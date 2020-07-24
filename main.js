let buttons = document.querySelectorAll('.drum');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        makeSound(this.innerHTML)
        animation(this.innerHTML)
    })

}

document.addEventListener('keydown', function (event) {
    makeSound(event.key)
})

function makeSound(current) {
    sounds[current].currentTime = 0;
    sounds[current].play();
}

let sounds = {
    w: new Audio('sounds/click.mp3'),
    a: new Audio('sounds/snare.mp3'),
    s: new Audio('sounds/kick-bass.mp3'),
    d: new Audio('sounds/crash.mp3'),
    j: new Audio('sounds/tom-1.mp3'),
    h: new Audio('sounds/tom-2.mp3'),
    k: new Audio('sounds/tom-3.mp3'),
    l: new Audio('sounds/tom-4.mp3'),
    '🥁': new Audio('sounds/emojidrum.mp3'),
}



function animation(current) {
    document.querySelector('.' + current).classList.add('pressed');
    setTimeout(() => {
        document.querySelector('.' + current).classList.remove('pressed');
    }, 150);
}