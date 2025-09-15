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
  document.getElementById('formMessage').innerText = 
    "✅ Thank you! We'll get back to you shortly.";
});
