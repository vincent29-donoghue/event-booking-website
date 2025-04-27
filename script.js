// Get elements
const form = document.getElementById('form');
const successMessage = document.getElementById('success-message');
const bookButtons = document.querySelectorAll('.book-btn');

// Event listeners for the "Book Now" buttons
bookButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const eventName = e.target.dataset.event;
    document.getElementById('event').value = eventName;
  });
});

// Form submission handler
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const event = document.getElementById('event').value;

  // Show success message
  successMessage.classList.remove('hidden');
  setTimeout(() => {
    successMessage.classList.add('hidden');
  }, 5000);

  // Clear the form
  form.reset();
});
