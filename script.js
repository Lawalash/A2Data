// Função para scroll suave até os planos
function scrollToPlanos() {
  document.getElementById('planos').scrollIntoView({
    behavior: 'smooth'
  });
}

// Função para scroll suave até as diferentes seções
document.addEventListener('DOMContentLoaded', function() {
  // Configurar links de navegação
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      
      // Determinar o destino com base no ID
      if (targetId === 'servicos') {
        // Rolar até a seção de serviços (Etapa 3)
        document.querySelector('.servicos').scrollIntoView({
          behavior: 'smooth'
        });
      } else if (targetId === 'planos') {
        // Rolar até a seção de planos (já implementado)
        document.getElementById('planos').scrollIntoView({
          behavior: 'smooth'
        });
      } else if (targetId === 'sobre') {
        // Rolar até a seção de sócios (Etapa 2)
        document.querySelector('.socios').scrollIntoView({
          behavior: 'smooth'
        });
      } else if (targetId === 'contato') {
        // Rolar até o footer
        document.querySelector('.footer').scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Script para ativar as animações dos cards de sócios
  document.querySelectorAll(".socio-card").forEach((card) => {
    card.addEventListener("mouseenter", function() {
      this.querySelector(".icones-animados").style.animationPlayState = "running";
    });
    card.addEventListener("mouseleave", function() {
      this.querySelector(".icones-animados").style.animationPlayState = "paused";
    });
  });

  // Configuração do particles.js para o fundo animado
  if (document.getElementById("particles-js")) {
    if (typeof particlesJS !== 'undefined') {
      particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } }
        }
      });
    } else {
      console.warn("particles.js não está carregado");
    }
  }

  // Menu mobile toggle
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('active');
    });
  }
});