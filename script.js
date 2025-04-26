// Script principal integrado com sidebar mobile simplificado e outras funcionalidades

document.addEventListener('DOMContentLoaded', function() {
  // Elementos básicos
  const menuToggle       = document.querySelector('.menu-toggle');
  const navLinks         = document.querySelector('.nav-links');
  const sidebarOverlay   = document.querySelector('.sidebar-overlay');
  const body             = document.body;

  // 1) Botões "Assinar Agora" (WhatsApp)
  const botoesAssinar = document.querySelectorAll('.botao-contratar');
  botoesAssinar.forEach(botao => {
    botao.addEventListener('click', () => {
      window.open('https://wa.me/5583989060130', '_blank');
    });
  });

  // 2) Botão "Fale Conosco" (plano personalizado)
  const botaoContato = document.querySelector('.botao-contato');
  if (botaoContato) {
    botaoContato.addEventListener('click', () => {
      window.location.href = '/demo/agendardemo.html';
    });
  }

  // 3) Scroll suave para a seção "Planos"
  window.scrollToPlanos = () => {
    const el = document.getElementById('planos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Função única para abrir/fechar o menu mobile
  function toggleMenu() {
    navLinks.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');

    // Prevenir/restaurar scroll no body
    if (navLinks.classList.contains('active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }

    // Alternar ícone do menu (FontAwesome)
    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.className = navLinks.classList.contains('active')
        ? 'fas fa-times'
        : 'fas fa-bars';
    }
  }

  // 4) Evento para o botão de menu (click e acessibilidade)
  menuToggle.addEventListener('click', toggleMenu);
  menuToggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  // 5) Fechar menu ao clicar no overlay
  sidebarOverlay.addEventListener('click', toggleMenu);

  // 6) Fechar menu ao clicar em um link + scroll suave
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      toggleMenu();
      setTimeout(() => {
        const destino = document.getElementById(targetId) || document.querySelector(`.${targetId}`);
        if (destino) destino.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    });
  });

  // 7) Fechar menu ao redimensionar para desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
      toggleMenu();
    }
  });

  // 8) Detectar toques fora do menu para fechá-lo
  document.addEventListener('touchstart', function(e) {
    if (
      navLinks.classList.contains('active') &&
      !navLinks.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  // 9) Animações dos cards de sócios
  document.querySelectorAll('.socio-card').forEach(card => {
    const icons = card.querySelector('.icones-animados');
    card.addEventListener('mouseenter', () => {
      if (icons) icons.style.animationPlayState = 'running';
    });
    card.addEventListener('mouseleave', () => {
      if (icons) icons.style.animationPlayState = 'paused';
    });
  });

  // 10) Configuração do particles.js para o fundo animado
  const particlesContainer = document.getElementById('particles-js');
  if (particlesContainer) {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number:        { value: 80, density: { enable: true, value_area: 800 } },
          color:         { value: '#ffffff' },
          opacity:       { value: 0.5 },
          size:          { value: 3, random: true },
          line_linked:   { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
          move:          { enable: true, speed: 2, direction: 'none', out_mode: 'out' }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' }
          }
        }
      });
    } else {
      console.warn('particles.js não está carregado');
    }
  }
});
