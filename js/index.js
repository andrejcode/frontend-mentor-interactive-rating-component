const rating = document.getElementById('selected-number');

// Get all buttons
const buttons = document.querySelectorAll('.number-btn');
for (let button of buttons) {
  // Add event listener to every button
  button.addEventListener('click', (e) => {
    // Remove active class from every button on click
    buttons.forEach(button => {
      button.classList.remove('active-button');
    });
    // Add active class to the clicked button
    e.target.classList.add('active-button');
    // Set the selected number as the element's text
    rating.textContent = e.target.value;
  });
}

document.getElementById('submit-btn').addEventListener('click', () => {
  let contains = false;
  for (let button of buttons) {
    if (button.classList.contains('active-button')) {
      contains = true;
    }
  }
  if (contains) {
    document.getElementById('rating').classList.add('hidden');
    document.getElementById('thank-you').classList.remove('hidden');
  } else {
    alert('Please select rating');
  }
});