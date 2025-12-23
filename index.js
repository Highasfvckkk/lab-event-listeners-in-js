// Handle Button Clicks

/**
 * Step 1: Function to change the background color.
 * Uses padStart to ensure a valid 6-digit hex code so the test
 * recognizes it as a valid color.
 */
function changeBackgroundColor() {
  const randomHex = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  document.body.style.backgroundColor = `#${randomHex}`;
}

/**
 * Step 1: Function to reset the background color.
 * The test specifically looks for an empty string "" to clear the style.
 */
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

/**
 * Step 2: Function to display the key pressed by the user.
 * Updates the 'keyPressDisplay' paragraph.
 */
function displayKeyPress(event) {
  const display = document.getElementById("keyPressDisplay");
  if (display) {
    display.textContent = `Key pressed: ${event.key}`;
  }
}

// Process Text Input

/**
 * Step 3: Function to display user input in real-time.
 * The test requires the exact prefix "You typed: ".
 */
function displayUserInput() {
  const inputField = document.getElementById("textInput");
  const display = document.getElementById("textInputDisplay");
  if (inputField && display) {
    display.textContent = `You typed: ${inputField.value}`;
  }
}

// Attach Event Listeners
function setupEventListeners() {
  // Step 1: Change color on click
  const changeBtn = document.getElementById("changeColorButton");
  if (changeBtn) {
    changeBtn.addEventListener("click", changeBackgroundColor);
  }

  // Step 1: Reset color on double-click
  const resetBtn = document.getElementById("resetColorButton");
  if (resetBtn) {
    resetBtn.addEventListener("dblclick", resetBackgroundColor);
  }

  // Step 2: Listen for keydown on the entire document
  document.addEventListener("keydown", displayKeyPress);

  // Step 3: Listen for input on the text field
  const textInput = document.getElementById("textInput");
  if (textInput) {
    textInput.addEventListener("input", displayUserInput);
  }
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

// Export for Jest testing
if (typeof module !== "undefined") {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
  };
}
