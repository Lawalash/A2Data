function scrollToPlanos() {
    document.getElementById('planos').scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Script para ativar as animações dos cards de sócios (opcional)
  document.querySelectorAll(".socio-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.querySelector(".icones-animados").style.animationPlayState = "running";
    });
    card.addEventListener("mouseleave", function () {
      this.querySelector(".icones-animados").style.animationPlayState = "paused";
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
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
  });
  