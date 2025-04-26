// main.js
// Script principal para interatividade da página

document.addEventListener('DOMContentLoaded', function() {
  // Ajuste para os botões "Assinar Agora" nos planos (WhatsApp)
  const botoesAssinar = document.querySelectorAll('.botao-contratar');
  botoesAssinar.forEach(botao => {
    botao.addEventListener('click', function() {
      window.open('https://wa.me/5583989060130', '_blank');
    });
  });
  
  // Ajuste para o botão "Fale Conosco" no plano personalizado (formulário interno)
  const botaoContato = document.querySelector('.botao-contato');
  if (botaoContato) {
    botaoContato.addEventListener('click', function() {
      window.location.href = '/demo/agendardemo.html';
    });
  }
  
  // Função global para rolar suavemente até os planos
  window.scrollToPlanos = function() {
    document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
  };

  // Configurar links de navegação para scroll suave e fechamento do sidebar
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const destino = document.getElementById(targetId) || document.querySelector(`.${targetId}`);
      if (destino) destino.scrollIntoView({ behavior: 'smooth' });
      // Fecha sidebar e overlay
      navLinksContainer.classList.remove('active');
      sidebarOverlay.classList.remove('active');
    });
  });

  // Animações dos cards de sócios
  document.querySelectorAll('.socio-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('.icones-animados').style.animationPlayState = 'running';
    });
    card.addEventListener('mouseleave', function() {
      this.querySelector('.icones-animados').style.animationPlayState = 'paused';
    });
  });

  // Configuração do particles.js para o fundo animado
  if (document.getElementById('particles-js')) {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } }
        }
      });
    } else {
      console.warn('particles.js não está carregado');
    }
  }

  // Menu mobile toggle com overlay para sidebar
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');

  menuToggle.addEventListener('click', function() {
    navLinksContainer.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
  });

  // Fecha sidebar ao clicar no overlay
  sidebarOverlay.addEventListener('click', function() {
    navLinksContainer.classList.remove('active');
    this.classList.remove('active');
  });
});
