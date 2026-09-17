 <script>
    document.addEventListener('DOMContentLoaded', () => {
      
      // Script para difuminado por scroll (Intersection Observer)
      const sections = document.querySelectorAll(".hero-card, .section-card");

      const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -50% 0px", 
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            sections.forEach(sec => sec.classList.remove("section-focused", "section-blurred"));
            entry.target.classList.add("section-focused");
            
            sections.forEach(sec => {
              if (sec !== entry.target) {
                sec.classList.add("section-blurred");
              }
            });
          }
        });
      }, observerOptions);

      sections.forEach(section => {
        section.classList.add("section-blurred");
        observer.observe(section);
      });

      // Sincronizar enlaces del menú con el scroll de la página
      const navLinks = document.querySelectorAll('.main-nav .nav-link');
      const trackedSections = document.querySelectorAll('section[id]');

      const scrollObserverOptions = {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0
      };

      const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
              }
            });
          }
        });
      }, scrollObserverOptions);

      trackedSections.forEach(section => {
        scrollObserver.observe(section);
      });

      // Lógica de correo inteligente
      const emailLink = document.getElementById('email-smart-link');
      if (emailLink) {
        emailLink.addEventListener('click', (e) => {
          e.preventDefault();
          const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
          const email = "a.valdez.6adb@gmail.com";
          if (isMobile) {
            window.location.href = `mailto:${email}`;
          } else {
            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
          }
        });
      }

      // Sistema de traducciones
      const translations = {
        es: {
          nav_start: "inicio",
          nav_projects: "proyectos",
          nav_skills: "habilidades",
          nav_certificates: "certificados",
          nav_about: "sobre mí",
          nav_contact: "contacto",
          theme_panel_title: "SELECCIONAR TEMA",
          theme_blue: "Azul Profesional",
          theme_orange: "Naranja Cálido",
          theme_red: "Rojo Elegante",
          theme_dark: "Modo Oscuro",
          theme_claro: "Modo Claro",
          hero_greeting: "Hola, soy Alejandro Esaú Valdez",
          hero_subtitle: "Desarrollador Junior | Bachiller en Computación",
          hero_desc: "Bachiller en Ciencias y Letras con Orientación en Computación y sólida formación integral. Perfil enfocado en el desarrollo de software, lógica de programación y soporte técnico, complementado con un fuerte interés y vocación hacia la fisioterapia y la rehabilitación física. Destaco por mi disciplina, capacidad analítica y compromiso humano.",
          projects_title: "Proyectos Destacados",
          projects_intro: "Selección de aplicaciones, sistemas y prácticas de programación desarrolladas:",
          project_1_title: "Sistema de Gestión Académica",
          project_1_desc: "Aplicación desarrollada para la administración y control de datos, optimizando la consulta de información y la lógica de procesos.",
          tag_sql: "SQL / BD",
          tag_oop: "Lógica POO",
          btn_view_app: "Ver Aplicación ↗",
          skills_title: "Habilidades & Competencias",
          skills_sub1: "💻 Tecnologías & Programación",
          skills_sub2: "🤝 Fortalezas Personales",
          skill_logic: "Lógica de Sistemas",
          skill_db: "Bases de Datos",
          skill_leadership: "Liderazgo",
          skill_teamwork: "Trabajo en Equipo",
          skill_salesian: "Disciplina Salesiana",
          skill_critical: "Pensamiento Crítico",
          skill_adaptability: "Adaptabilidad",
          skill_comm: "Comunicación Asertiva",
          cert_title: "Certificados & Logros",
          cert_desc: "Acreditaciones e insignias oficiales emitidas por instituciones reconocidas y Cisco Networking Academy:",
          cert_js_desc: "Acredita el dominio de sintaxis básica, tipos de datos, estructuras de control, funciones y fundamentos de la programación en JavaScript.",
          cert_net_desc: "Valida conocimientos fundamentales en arquitectura de redes, protocolos de comunicación, direcciones IP y conectividad de sistemas.",
          cert_sec_desc: "Cubre conceptos clave sobre protección de datos, amenazas informáticas, privacidad en la red y buenas prácticas de seguridad digital.",
          cert_packet_title: "Introducción a Cisco Packet Tracer",
          cert_packet_desc: "Acredita el dominio básico en el uso de la herramienta de simulación de redes Cisco Packet Tracer para diseño y análisis de conectividad.",
          cert_it_desc: "Valida conocimientos esenciales en hardware de computadoras, software, ensamblaje de equipos, periféricos y resolución de problemas técnicos.",
          cert_linux_desc: "Cubre conceptos fundamentales sobre sistemas operativos Linux, uso de terminal, gestión de archivos, permisos y comandos esenciales.",
          about_title: "Sobre Mí & Trayectoria",
          about_p1: "Soy una persona responsable, altamente disciplinada y comprometida con el desarrollo continuo de software. Mi formación integral de 2014 a 2026 en el <strong>Colegio Salesiano Don Bosco</strong> fortaleció mi ética de trabajo, mi capacidad de adaptación y mi enfoque colaborativo.",
          about_p2: "Me apasiona la fisioterapia, orientando mi interés hacia la rehabilitación física, el estudio del movimiento humano y el apoyo a las personas para recuperar su bienestar y calidad de vida.",
          timeline_heading: "Línea de Tiempo Académica",
          t_step1_title: "Formación Integral Salesiana",
          t_step1_desc: "Trayectoria continua de desarrollo en valores, disciplina y bases académicas en el Colegio Salesiano Don Bosco.",
          t_step2_title: "Certificaciones Profesionales",
          t_step2_desc: "Acreditación en JavaScript, Redes, Ciberseguridad, Packet Tracer, IT Essentials y Linux.",
          edu_year: "Graduación 2026",
          edu_degree: "Bachiller en Ciencias y Letras con Orientación en Computación",
          edu_desc: "Especializado en fundamentación técnica, lógica computacional y proyectos tecnológicos.",
          contact_title: "Contacto",
          contact_desc: "¿Tienes un proyecto, propuesta laboral o deseas colaborar? Estaré encantado de ponerme en contacto contigo.",
          contact_email_label: "Correo Electrónico",
          footer_text: "© 2026 Alejandro Esaú Valdez — Diseñado con enfoque en Portafolio Web"
        },
        en: {
          nav_start: "home",
          nav_projects: "projects",
          nav_skills: "skills",
          nav_certificates: "certifications",
          nav_about: "about me",
          nav_contact: "contact",
          theme_panel_title: "SELECT THEME",
          theme_blue: "Professional Blue",
          theme_orange: "Warm Orange",
          theme_red: "Elegant Red",
          theme_dark: "Dark Mode",
          theme_light: "Light Mode",
          hero_greeting: "Hi, I'm Alejandro Esaú Valdez",
          hero_subtitle: "Junior Developer | Computer Science High School Graduate",
          hero_desc: "High School Diploma in Computer Science with a solid comprehensive background. Profile focused on software development, programming logic, and technical support, complemented by a strong interest and vocation towards physical therapy and physical rehabilitation. Recognized for discipline, analytical skills, and human commitment.",
          projects_title: "Featured Projects",
          projects_intro: "Selection of applications, systems, and programming projects developed:",
          project_1_title: "Academic Management System",
          project_1_desc: "Application developed for data administration and control, optimizing information querying and business logic.",
          tag_sql: "SQL / BD",
          tag_oop: "OOP Logic",
          btn_view_app: "View Application ↗",
          skills_title: "Skills & Competencies",
          skills_sub1: "💻 Technologies & Programming",
          skills_sub2: "🤝 Personal Strengths",
          skill_logic: "System Logic",
          skill_db: "Databases",
          skill_leadership: "Leadership",
          skill_teamwork: "Teamwork",
          skill_salesian: "Salesian Discipline",
          skill_critical: "Critical Thinking",
          skill_adaptability: "Adaptability",
          skill_comm: "Assertive Communication",
          cert_title: "Certifications & Achievements",
          cert_desc: "Official accreditations and badges issued by recognized institutions and Cisco Networking Academy:",
          cert_js_desc: "Validates proficiency in basic syntax, data types, control structures, functions, and JavaScript programming fundamentals.",
          cert_net_desc: "Validates fundamental knowledge in network architecture, communication protocols, IP addresses, and system connectivity.",
          cert_sec_desc: "Covers key concepts on data protection, cyber threats, network privacy, and digital security best practices.",
          cert_packet_title: "Introduction to Cisco Packet Tracer",
          cert_packet_desc: "Validates basic proficiency in using the Cisco Packet Tracer network simulation tool for connectivity design and analysis.",
          cert_it_desc: "Validates essential knowledge in computer hardware, software, equipment assembly, peripherals, and technical troubleshooting.",
          cert_linux_desc: "Covers fundamental concepts about Linux operating systems, terminal usage, file management, permissions, and essential commands.",
          about_title: "About Me & Journey",
          about_p1: "I am a responsible, highly disciplined individual committed to continuous software development. My continuous education from 2014 to 2026 at <strong>Colegio Salesiano Don Bosco</strong> strengthened my work ethic, adaptability, and collaborative mindset.",
          about_p2: "I am passionate about physical therapy, focusing my interest on physical rehabilitation, the study of human movement, and helping people recover their well-being and quality of life.",
          timeline_heading: "Academic Timeline",
          t_step1_title: "Salesian Comprehensive Education",
          t_step1_desc: "Continuous trajectory of development in values, disciplina, and academic foundations at Colegio Salesiano Don Bosco.",
          t_step2_title: "Professional Certifications",
          t_step2_desc: "Accreditation in JavaScript, Networking, Cybersecurity, Packet Tracer, IT Essentials, and Linux.",
          edu_year: "Graduation 2026",
          edu_degree: "High School Diploma in Computer Science",
          edu_desc: "Specialized in technical fundamentals, computational logic, and technology projects.",
          contact_title: "Contact",
          contact_desc: "Have a project, job offer, or want to collaborate? I would love to connect with you.",
          contact_email_label: "Email",
          footer_text: "© 2026 Alejandro Esaú Valdez — Designed with focus on Web Portfolio"
        }
      };

      let currentLang = 'es';
      const langToggleBtn = document.getElementById('lang-toggle');
      const langLabel = document.getElementById('lang-label');

      function updateLanguage(lang) {
        currentLang = lang;
        langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(element => {
          const key = element.getAttribute('data-i18n');
          if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
          }
        });
      }

      langToggleBtn.addEventListener('click', () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        updateLanguage(newLang);
      });

      // Panel de temas
      const themeToggleBtn = document.getElementById('theme-toggle');
      const themePanel = document.getElementById('theme-panel');
      const themePanelClose = document.getElementById('theme-panel-close');
      const themeCards = document.querySelectorAll('.theme-card');

      themeToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        themePanel.classList.toggle('open');
      });

      themePanelClose.addEventListener('click', () => {
        themePanel.classList.remove('open');
      });

      themeCards.forEach(card => {
        card.addEventListener('click', () => {
          const selectedTheme = card.getAttribute('data-theme');
          document.body.className = '';
          document.body.classList.add(selectedTheme);
          themeCards.forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          initParticles();
          themePanel.classList.remove('open');
        });
      });

      document.addEventListener('click', (e) => {
        if (!themePanel.contains(e.target) && !themeToggleBtn.contains(e.target)) {
          themePanel.classList.remove('open');
        }
      });

      // Animación de partículas del fondo (Canvas)
      const canvas = document.getElementById('bg-canvas');
      const ctx = canvas.getContext('2d');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      let particles = [];

      window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
      });

      class Particle {
        constructor(theme) {
          this.reset(theme);
        }

        reset(theme) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;

          if (theme === 'theme-rojo') {
            this.radius = Math.random() * 2.5 + 1;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = -Math.random() * 2 - 0.6;
            this.alpha = Math.random() * 0.8 + 0.2;
          } else if (theme === 'theme-naranja') {
            this.radius = Math.random() * 5 + 2;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.alpha = Math.random() * 0.4 + 0.1;
          } else if (theme === 'theme-oscuro') {
            this.radius = Math.random() * 1.5 + 1;
            this.length = Math.random() * 12 + 4;
            this.vx = 0;
            this.vy = Math.random() * 3 + 1.5;
            this.alpha = Math.random() * 0.5 + 0.2;
          } else if (theme === 'theme-claro') {
            this.radius = Math.random() * 2 + 1;
            this.maxRadius = Math.random() * 40 + 20;
            this.growth = Math.random() * 0.4 + 0.2;
            this.vx = 0;
            this.vy = 0;
            this.alpha = 0.6;
          } else {
            this.radius = Math.random() * 2 + 1;
            this.vx = (Math.random() - 0.5) * 0.7;
            this.vy = (Math.random() - 0.5) * 0.7;
            this.alpha = 1;
          }
        }

        update(theme) {
          if (theme === 'theme-rojo') {
            this.x += this.vx;
            this.y += this.vy;
            if (this.y < 0) {
              this.y = height;
              this.x = Math.random() * width;
            }
          } else if (theme === 'theme-oscuro') {
            this.y += this.vy;
            if (this.y > height) {
              this.y = -10;
              this.x = Math.random() * width;
            }
          } else if (theme === 'theme-claro') {
            this.radius += this.growth;
            this.alpha -= 0.008;
            if (this.alpha <= 0 || this.radius >= this.maxRadius) {
              this.reset(theme);
            }
          } else {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
          }
        }

        draw(color, theme) {
          ctx.beginPath();
          if (theme === 'theme-oscuro') {
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y + this.length);
            ctx.strokeStyle = color;
            ctx.lineWidth = this.radius;
            ctx.globalAlpha = this.alpha;
            ctx.stroke();
          } else if (theme === 'theme-claro') {
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.globalAlpha = Math.max(this.alpha, 0);
            ctx.stroke();
          } else {
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.globalAlpha = this.alpha;
            ctx.fill();
          }
          ctx.globalAlpha = 1;
        }
      }

      function initParticles() {
        particles = [];
        const currentTheme = document.body.className || 'theme-azul';
        let count = 45;
        if (currentTheme === 'theme-rojo') count = 65;
        if (currentTheme === 'theme-oscuro') count = 50;
        if (currentTheme === 'theme-claro') count = 25;

        for (let i = 0; i < count; i++) {
          particles.push(new Particle(currentTheme));
        }
      }

      function animate() {
        ctx.clearRect(0, 0, width, height);
        const currentTheme = document.body.className || 'theme-azul';
        const accentColor = getComputedStyle(document.body).getPropertyValue('--accent-color').trim() || '#2563eb';

        particles.forEach(p => {
          p.update(currentTheme);
          p.draw(accentColor, currentTheme);
        });

        if (currentTheme === 'theme-azul') {
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < 110) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = accentColor;
                ctx.globalAlpha = 1 - (dist / 110);
                ctx.lineWidth = 0.5;
                ctx.stroke();
                ctx.globalAlpha = 1;
              }
            }
          }
        }

        requestAnimationFrame(animate);
      }

      initParticles();
      animate();
    });
  </script>
