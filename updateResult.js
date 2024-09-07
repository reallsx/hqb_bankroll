// updateResult.js
// Function to calculate the sum of input values
let balance = 1000; // Initial balance
function calculateSum() {
    const inputs = document.querySelectorAll('.input-class'); // Use a common class for all inputs
    let sum = 0;
    
    inputs.forEach(input => {
      const value = parseFloat(input.value);
      if (!isNaN(value)) {
        sum += value;
      }
    });
    
    return sum;
  }
  
  // Function to update the result based on the sum of inputs
  function updateResult() {
    const sum = calculateSum();
    const result = balance - sum;
    document.getElementById('result-value').textContent = result.toFixed(2);
  }
  
  // Add event listeners to all inputs
  document.querySelectorAll('.input-class').forEach(input => {
    input.addEventListener('input', updateResult);
  });
  
  // Initialize the result on page load
  updateResult();
  
  