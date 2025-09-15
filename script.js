/* Basic interactive behaviors:
   - Calculator (hero and main)
   - Quote form handling (front-end)
   - Carousel controls & small counters
*/

document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mini hero calculator
  document.getElementById('mini-calc').addEventListener('click', () => {
    const type = document.getElementById('mini-type').value;
    const size = Number(document.getElementById('mini-size').value);
    const out = document.getElementById('mini-output');
    if(!size || size <= 0){ out.textContent = 'Enter a valid size.'; return; }
    const savings = Math.round((Math.random()*40 + 20) * (size > 10 ? 1.5 : 1));
    const co2 = Math.round((Math.random()*150 + 50) * (size > 10 ? 1.8 : 1));
    out.textContent = `Switching to ${type} saves approx $${savings}/month and cuts ${co2} kg CO₂/year.`;
  });

  // Main calculator (if present)
  window.calculate = function(){
    const type = document.getElementById('calc-type')?.value || 'Solar';
    const size = Number(document.getElementById('calc-size')?.value);
    const out = document.getElementById('calc-output');
    if(!size || size <= 0){ alert('Enter your size'); return; }
    const savings = Math.round((Math.random()*50 + 20) );
    const co2 = Math.round((Math.random()*200 + 50) );
    if(out) out.textContent = `Switching to ${type} saves you $${savings}/month and cuts ${co2} kg CO₂/year.`;
  };

  // Quote form handling (client-side only)
  const form = document.getElementById('requestQuote');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('qName').value.trim();
    const email = document.getElementById('qEmail').value.trim();
    const phone = document.getElementById('qPhone').value.trim();
    const solution = document.getElementById('qSolution').value;
    const msg = document.getElementById('formMessage');

    if(!name || !email || !phone || !solution){
      msg.textContent = 'Please fill all required fields.';
      return;
    }

    // For now: demo feedback (replace with backend integration)
    msg.textContent = `Thanks ${name}! Quote request for ${solution} received. We will contact you shortly.`;
    form.reset();
  });

  // Small counters (mocking live data)
  document.getElementById('co2-count').textContent = (Math.floor(Math.random()*90000)+10000).toLocaleString();
  document.getElementById('households-count').textContent = (Math.floor(Math.random()*3000)+500).toLocaleString();
  document.getElementById('water-count').textContent = (Math.floor(Math.random()*200000)+10000).toLocaleString();

  // Carousel controls
  const carousel = document.getElementById('carousel');
  document.getElementById('prev')?.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });
  document.getElementById('next')?.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });

  // Newsletter (simple demo)
  document.getElementById('newsletterBtn')?.addEventListener('click', () => {
    const email = document.getElementById('newsletterEmail').value;
    if(!email) return alert('Enter email');
    alert('Thanks! You are subscribed (demo).');
    document.getElementById('newsletterEmail').value = '';
  });
});

