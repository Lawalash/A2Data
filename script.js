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

  // Elementos do Header e Sidebar Mobile
  const header      = document.querySelector('.header');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeBtn     = document.getElementById('close-btn');
  const sidebar      = document.getElementById('sidebar');
  const overlay      = document.getElementById('sidebar-overlay');
  const navLinks     = document.querySelectorAll('.nav-links a, .sidebar-links a');
  const backToTop    = document.getElementById('back-to-top');
  const logo         = document.querySelector('.logo');

  // Funções de abertura/fechamento do sidebar
  function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    hamburgerBtn.classList.add('active');
  }
  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    hamburgerBtn.classList.remove('active');
  }

  // Eventos do sidebar
  hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.contains('active') ? closeSidebar() : openSidebar();
  });
  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);
  document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', closeSidebar);
  });

  // 4) Scroll suave ao clicar nos links de navegação
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        // Fechar a sidebar caso esteja aberta
        closeSidebar();
      }
    });
  });

  // Atualiza link ativo baseado na seção
  function setActiveLink() {
    const scrollY = window.pageYOffset;
    document.querySelectorAll('section').forEach(section => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(l => l.classList.remove('active'));
        const selector = `.nav-links a[href="#${id}"], .sidebar-links a[href="#${id}"]`;
        const activeLink = document.querySelector(selector);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }

  // Variável para controlar a última posição de scroll
  let lastScrollTop = 0;

  // Evento de scroll geral
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Header compacto ao scroll
    if (scrollTop > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button
    backToTop.classList.toggle('show', scrollTop > 300);

    // Atualiza active links
    setActiveLink();
    
    // Armazena a posição atual para a próxima verificação
    lastScrollTop = scrollTop;
  });

  // Botão Voltar ao Topo
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Efeito 3D suave no logo
  logo.addEventListener('mousemove', (e) => {
    const logoRect = logo.getBoundingClientRect();
    const x = e.clientX - logoRect.left;
    const y = e.clientY - logoRect.top;
    
    const xc = logoRect.width / 2;
    const yc = logoRect.height / 2;
    
    const dx = x - xc;
    const dy = y - yc;
    
    logo.style.transform = `perspective(300px) rotateY(${dx / 20}deg) rotateX(${-dy / 20}deg) scale3d(1.03, 1.03, 1.03)`;
  });
  
  logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'perspective(300px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
  });

  // Parallax sutil no header (desktop)
  window.addEventListener('mousemove', e => {
    if (window.innerWidth > 768) {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      header.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
    }
  });

  // Particles.js
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
