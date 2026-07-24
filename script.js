// Minimal interactions: handle CTA focus and basic button ripple.
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    // simple visual feedback
    btn.style.transform = 'translateY(-2px)';
    setTimeout(() => btn.style.transform = '', 180);
  });
});

// Accessibility: ensure .cta in nav is focusable with keyboard
const cta = document.querySelector('.nav-links a.cta');
if(cta) cta.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter') cta.click();
});
