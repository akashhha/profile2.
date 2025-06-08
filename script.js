// Optional: Add basic interaction
document.querySelectorAll('.social-buttons a').forEach(button => {
  button.addEventListener('click', (e) => {
    console.log(`Opening: ${button.href}`);
  });
});
