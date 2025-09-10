document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('amiForm');
  const amiMessage = document.getElementById('ami-message');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    try {
      await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
    } catch (err) {
      // Ignore errors; we still show the message
      console.error('Form submission error:', err);
    } finally {
      // Hide the form and show the Ami message regardless of outcome
      form.classList.add('hidden');
      amiMessage.classList.remove('hidden');
    }
  });
});
