
// Manually add pairs of participants
const participants = {
  "Mohan": "Kalpana",
  "Kalpana": "Deeban",
  "Deeban": "Irine",
  "Irine": "Mohan"
};

const entryCount = {};

function showFireworks(callback) {
  const container = document.getElementById('fireworks-container');
  container.innerHTML = ""; // Clear previous fireworks instances
  container.style.display = 'block';

  // Initialize Fireworks
  const fireworks = new Fireworks(container, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.1,
    explosion: 7,
    brightness: { min: 50, max: 90 },
  });
  fireworks.start();

  // Stop after 5 seconds
  setTimeout(() => {
    fireworks.stop();
    container.style.display = 'none';
    callback(); // Trigger popup
  }, 5000);
}

function showPopup(name, chrisma) {
  const popup = document.getElementById('popup');
  popup.querySelector('h2').textContent = `Hi ${name}!`;
  popup.querySelector('p').textContent = `Your Chrisma Name is ${chrisma}!`;
  popup.style.display = 'block';

  // Hide popup after 4 seconds
  setTimeout(() => {
    popup.style.display = 'none';
  }, 4000);
}

function findChrisma() {
  const nameInput = document.getElementById('name-input').value.trim();

  if (!nameInput) {
    alert("Please enter your name!");
    return;
  }

  // Validate attempts
  entryCount[nameInput] = (entryCount[nameInput] || 0) + 1;
  if (entryCount[nameInput] > 1) {
    alert("Your time is out!");
    return;
  }

  // Check if the name exists in participants list
  const chrisma = participants[nameInput];
  if (!chrisma) {
    alert("Your name is not in the participant list!");
    return;
  }

  // Play Jingle Bells
  const jingleAudio = document.getElementById('jingle-audio');
  jingleAudio.currentTime = 0; // Reset to start
  jingleAudio.play();

  // Show fireworks and popup
  showFireworks(() => showPopup(nameInput, chrisma));
}
