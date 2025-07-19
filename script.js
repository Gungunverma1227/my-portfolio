const typedText = document.getElementById('typed-text');
const phrases = ["Gungun Verma", "AI Enthusiast", "Creative Poetess", "Tech Explorer"];
let phraseIndex = 0;
let charIndex = 0;

/**
 * Types out the current phrase character by character.
 */
function type() {
  if (charIndex < phrases[phraseIndex].length) {
    typedText.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);   } else {
    setTimeout(erase, 2000);   }
}

/**
 * Erases the current phrase character by character.
 */
function erase() {
  if (charIndex > 0) {
    typedText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);   } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;     setTimeout(type, 500);   }
}

document.addEventListener('DOMContentLoaded', type);

const fadeEls = document.querySelectorAll('.fade-in');

/**
 * Reveals elements with 'fade-in' class when they enter the viewport.
 */
function reveal() {
  fadeEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
      el.classList.add('visible');
    } else {
                }
  });
}

window.addEventListener('scroll', reveal);
document.addEventListener('DOMContentLoaded', reveal);

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const bubbleContainer = document.getElementById('bubbles');
const bubbleCount = 50; 

function generateBubbles() {
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 40 + 10;     bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;     bubble.style.animationDuration = `${10 + Math.random() * 20}s`;     bubble.style.animationDelay = `${Math.random() * 20}s`;     bubbleContainer.appendChild(bubble);
  }
}

document.addEventListener('DOMContentLoaded', generateBubbles);