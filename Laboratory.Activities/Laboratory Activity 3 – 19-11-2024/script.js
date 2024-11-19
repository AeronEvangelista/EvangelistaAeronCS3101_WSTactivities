// Select necessary DOM elements
const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordcount');
const sentenceCount = document.getElementById('sentenceCount');

// Event listener for input changes
textInput.addEventListener('input', () => {
  const text = textInput.value.trim(); // Get the input and trim spaces

  // Calculate words
  const words = text.split(/\s+/).filter(word => word.length > 0);
  const wordCountValue = words.length;

  // Calculate sentences
  const sentences = text.split(/[.!?]\s*/).filter(sentence => sentence.trim().length > 0);
  const sentenceCountValue = sentences.length;

  // Update the display
  wordCount.textContent = `Words: ${wordCountValue}`;
  sentenceCount.textContent = `Sentences: ${sentenceCountValue}`;
});
