// main.js
// Script principal para interatividade da página (versão mobile sidebar corrigida)

document.addEventListener('DOMContentLoaded', function() {
  // Referências usadas em múltiplos pontos
  const menuToggle        = document.querySelector('.menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  const sidebarOverlay    = document.querySelector('.sidebar-overlay');

  // 1) Botões “Assinar Agora” (WhatsApp)
  const botoesAssinar = document.querySelectorAll('.botao-contratar');
  botoesAssinar.forEach(botao => {
    botao.addEventListener('click', () => {
      window.open('https://wa.me/5583989060130', '_blank');
    });
  });

  // 2) Botão “Fale Conosco” (plano personalizado)
  const botaoContato = document.querySelector('.botao-contato');
  if (botaoContato) {
    botaoContato.addEventListener('click', () => {
      window.location.href = '/demo/agendardemo.html';
    });
  }

  // 3) Scroll suave para a seção “Planos”
  window.scrollToPlanos = () => {
    document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
  };

  // 4) Toggle do menu mobile e overlay
  menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
  });
  sidebarOverlay.addEventListener('click', () => {
    navLinksContainer.classList.remove('active');
    sidebarOverlay.classList.remove('active');
  });

  // 5) Links de navegação internos: scroll suave + fechar sidebar
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const destino  = document.getElementById(targetId) || document.querySelector(`.${targetId}`);
      if (destino) destino.scrollIntoView({ behavior: 'smooth' });

      navLinksContainer.classList.remove('active');
      sidebarOverlay.classList.remove('active');
    });
  });

  // 6) Animações dos cards de sócios
  document.querySelectorAll('.socio-card').forEach(card => {
    const icons = card.querySelector('.icones-animados');
    card.addEventListener('mouseenter', () => {
      if (icons) icons.style.animationPlayState = 'running';
    });
    card.addEventListener('mouseleave', () => {
      if (icons) icons.style.animationPlayState = 'paused';
    });
  });

  // 7) Configuração do particles.js para o fundo animado
  if (document.getElementById('particles-js')) {
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
