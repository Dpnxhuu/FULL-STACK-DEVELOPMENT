const Quotes = [
  "Believe in yourself and keep going.",
  "Hard work beats talent when talent doesn't work hard.",
  "Consistency is more important than perfection.",
  "Small steps every day lead to big results.",
  "Don't stop when you're tired, stop when you're done.",
  "Dream big, start small, act now.",
  "Your future depends on what you do today.",
  "Success is the sum of small efforts repeated daily.",
  "Stay focused and never give up.",
  "Discipline creates freedom.",
  "Push yourself, because no one else will.",
  "Great things take time.",
  "Work hard in silence, let success make the noise.",
  "Failure is not the opposite of success, it's part of success.",
  "You are stronger than your excuses.",
  "Every day is a second chance.",
  "Don't wait for opportunity, create it.",
  "Progress, not perfection.",
  "Make today count.",
  "Success starts with self-belief."
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click', () => {
    const index = Math.floor(Math.random()*20);
    quote.textContent = Quotes[index];
})