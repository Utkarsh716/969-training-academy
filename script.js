function submitQuiz() {
  const modal = document.getElementById('quiz-modal');
  const modalContent = modal.querySelector('div');
  modal.classList.remove('hidden');
  modalContent.classList.remove('translate-y-10', 'opacity-0');
  modalContent.classList.add('translate-y-0', 'opacity-100');
}

function closeModal() {
  const modal = document.getElementById('quiz-modal');
  const modalContent = modal.querySelector('div');
  modalContent.classList.remove('translate-y-0', 'opacity-100');
  modalContent.classList.add('translate-y-10', 'opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 500);
}