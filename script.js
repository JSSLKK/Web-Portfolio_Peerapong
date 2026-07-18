// ===== เปิด/ปิดเมนูบนมือถือ =====
const navToggle = document.getElementById('navToggle');
const sidenav = document.getElementById('sidenav');

navToggle.addEventListener('click', () => {
  const isOpen = sidenav.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

// ปิดเมนูอัตโนมัติเมื่อกดลิงก์ (บนมือถือ)
document.querySelectorAll('.sidenav__list a').forEach(link => {
  link.addEventListener('click', () => {
    sidenav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// ===== ไฮไลต์เมนูตามส่วนที่กำลังดูอยู่ =====
const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.sidenav__list a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));

// ===== ปีปัจจุบันใน footer =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
