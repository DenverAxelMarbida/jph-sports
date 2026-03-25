// JPH Sports Complex - Auth System (Dummy)
const DUMMY_USER = {
  email: 'demo@jph.com',
  password: 'Demo1234!',
  firstName: 'Christian Joshua',
  lastName: 'Lacerna',
  fullName: 'Christian Joshua Lacerna'
};

function isLoggedIn() {
  return localStorage.getItem('jph_logged_in') === 'true';
}

function updateNavAuth() {
  const loginBtn  = document.getElementById('navLoginBtn');
  const accountMenu = document.getElementById('navAccountMenu');
  if (!loginBtn || !accountMenu) return;
  if (isLoggedIn()) {
    loginBtn.classList.add('d-none');
    accountMenu.classList.remove('d-none');
  } else {
    loginBtn.classList.remove('d-none');
    accountMenu.classList.add('d-none');
  }
}

// Logout
document.addEventListener('DOMContentLoaded', () => {
  updateNavAuth();
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('jph_logged_in');
      localStorage.removeItem('jph_user');
      window.location.href = 'index.html';
    });
  }

  // Navbar scroll effect
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    });
  }
});