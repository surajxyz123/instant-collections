const io = new IntersectionObserver(es => {
es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.card, .soon, .step').forEach(el => io.observe(el));
document.querySelectorAll('.card').forEach(card => {
card.addEventListener('pointermove', ev => {
const r = card.getBoundingClientRect();
const x = (ev.clientX - r.left) / r.width - .5;
const y = (ev.clientY - r.top) / r.height - .5;
card.style.transform = `perspective(900px) rotateX(${(-y*3).toFixed(2)}deg) rotateY(${(x*3).toFixed(2)}deg)`;
});
card.addEventListener('pointerleave', () => { card.style.transform = ''; });
});
document.querySelectorAll('.btn').forEach(btn => {
btn.addEventListener('pointerdown', ev => {
const r = btn.getBoundingClientRect();
const s = document.createElement('span');
const d = Math.max(r.width, r.height) * 2;
s.style.cssText = `position:absolute;left:${ev.clientX-r.left-d/2}px;top:${ev.clientY-r.top-d/2}px;width:${d}px;height:${d}px;border-radius:50%;background:rgba(255,255,255,.28);transform:scale(0);pointer-events:none;transition:transform .55s ease-out,opacity .7s;`;
btn.appendChild(s);
requestAnimationFrame(() => { s.style.transform = 'scale(1)'; s.style.opacity = '0'; });
setTimeout(() => s.remove(), 800);
});
});
