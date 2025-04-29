document.addEventListener('DOMContentLoaded', function() {
  // 1) Botões "Assinar Agora" (WhatsApp)
  document.querySelectorAll('.botao-contratar').forEach(btn => {
    btn.addEventListener('click', () => {
      window.open('https://wa.me/5583989060130', '_blank');
    });
  });

  // 2) Botão "Fale Conosco"
  const botaoContato = document.querySelector('.botao-contato');
  if (botaoContato) {
    botaoContato.addEventListener('click', () => {
      window.location.href = '/demo/agendardemo.html';
    });
  }

  // 3) Scroll suave para #planos
  window.scrollToPlanos = () => {
    const el = document.getElementById('planos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // === Header / Sidebar Mobile Logic ===
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeBtn     = document.getElementById('close-btn');
  const sidebar      = document.getElementById('sidebar');
  const overlay      = document.getElementById('sidebar-overlay');

  // Alterna o estado do sidebar ao clicar no botão hamburguer
  hamburgerBtn.addEventListener('click', function() {
    if (sidebar.classList.contains('active')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  // Fechar sidebar (botão de fechar)
  closeBtn.addEventListener('click', function() {
    closeSidebar();
  });

  // Fechar sidebar (clicando no overlay)
  overlay.addEventListener('click', function() {
    closeSidebar();
  });

  // Fechar sidebar (clicando em links)
  document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', function() {
      closeSidebar();
    });
  });

  function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // 4) particles.js
  const particlesContainer = document.getElementById('particles-js');
  if (particlesContainer && typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number:      { value: 80, density: { enable: true, value_area: 800 } },
        color:       { value: '#ffffff' },
        opacity:     { value: 0.5 },
        size:        { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move:        { enable: true, speed: 2, direction: 'none', out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' }
        }
      }
    });
  }
});


// Botão de voltar ao topo
const backToTopButton = document.getElementById('back-to-top');
  
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});