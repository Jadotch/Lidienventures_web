function calculate() {
  const type = document.getElementById('calc-type').value;
  const size = document.getElementById('calc-size').value;
  if(!size) { alert('Enter your size'); return; }
  const savings = (Math.random()*50 + 20).toFixed(0);
  const co2 = (Math.random()*200 + 50).toFixed(0);
  document.getElementById('calc-output').innerText = 
    `Switching to ${type} saves you $${savings}/month and cuts ${co2} kg CO₂/year.`;
}

document.getElementById('requestQuote').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('qName').value.trim();
  const email = document.getElementById('qEmail').value.trim();
  const phone = document.getElementById('qPhone').value.trim();
  const solution = document.getElementById('qSolution').value;
  const notes = document.getElementById('qNotes').value.trim();

  if(name && email && phone && solution){
    document.getElementById('formMessage').innerText = 
      `Thank you ${name}, your request for ${solution} has been received!`;
    document.getElementById('requestQuote').reset();
  } else {
    document.getElementById('formMessage').innerText = 
      "Please fill in all required fields.";
  }
});


