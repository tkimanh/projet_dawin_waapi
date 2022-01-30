var rose = document.querySelector('.rose');

rose.animate([
    {transform: 'translateY(-8rem)'},
    {transform: 'translateY(8rem)'}
],
{
    duration: 800,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease-in-out',
});

var bleu = document.querySelector('.bleu');

// Changement d'opacité
bleu.animate([
    {transform: 'translateY(-8rem)', opacity: 0},
    {transform: 'translateY(8rem)', opacity: 1}
],
{
    duration: 1000,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease',
    delai: 500
});

var orange = document.querySelector('.orange');

// On fait passer un rectangle en un cercle avec rotation
orange.animate([
    {transform: 'translateX(-12rem) rotate(1turn)', borderRadius: 0},
    {transform: 'translateX(5rem)',borderRadius: '50%'}
],
{
    duration: 1000,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease-in-out',
});

// Changement d'opacité et de taille
var vert = document.querySelector('.vert');

vert.animate([
    {transform: 'translateX(-14rem) scale(0)', opacity:0},
    {transform: 'translateY(10rem) scale(1)', opacity:1}
],
{
    duration: 1000,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease-in-out',
});

const monElement = document.querySelector('.exemple-texte-anime').animate({
    transform: ['translate3d(0,-100%,0)'],
  }, {
    direction: 'alternate',
    duration: 500,
    iterations: Infinity,
  });