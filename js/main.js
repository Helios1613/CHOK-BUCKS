/* ==========================================================================
   CHOK'BUCKS — main.js
   1. Menú móvil
   2. Header con efecto de scroll
   3. Año automático en footer
   4. Filtrado de productos por categoría
   5. Botones de producto (interacción visual)
   6. Formulario de contacto (demo)
   7. Toast de confirmación
   8. Animaciones al hacer scroll (reveal)
   9. Contador animado de estadísticas
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Menú móvil ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    });

    // Cerrar automáticamente el menú al seleccionar una opción
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('is-open')) {
          mainNav.classList.remove('is-open');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
        }
      });
    });
  }

  /* ---------- 2. Header con efecto de scroll ---------- */
  const siteHeader = document.getElementById('siteHeader');
  const applyHeaderState = () => {
    if (!siteHeader) return;
    if (window.scrollY > 40) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  };
  applyHeaderState();
  window.addEventListener('scroll', applyHeaderState, { passive: true });

  /* ---------- 3. Año automático en footer ---------- */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 7. Toast de confirmación (definido antes de usarse) ---------- */
  const toast = document.getElementById('toast');
  let toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2600);
  }

  /* ---------- 4. Filtrado de productos por categoría ---------- */
  const categoryChips = document.querySelectorAll('.category-chip');
  const productCards = document.querySelectorAll('.product-card');
  const emptyState = document.getElementById('emptyState');

  categoryChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      categoryChips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');

      const filter = chip.dataset.filter;
      let visibleCount = 0;

      productCards.forEach((card) => {
        const matches = filter === 'todos' || card.dataset.category === filter;
        card.style.display = matches ? '' : 'none';
        if (matches) visibleCount += 1;
      });

      if (emptyState) emptyState.hidden = visibleCount !== 0;
    });
  });

  /* ---------- 5. Botones de producto (interacción visual) ---------- */
  document.querySelectorAll('[data-product]').forEach((button) => {
    button.addEventListener('click', () => {
      const productName = button.dataset.product;
      button.classList.add('is-pressed');
      setTimeout(() => button.classList.remove('is-pressed'), 250);
      showToast(`${productName} añadido a tu antojo. ¡Escríbenos para pedirlo!`);
    });
  });

  /* ---------- 6. Formulario de contacto (demo) ---------- */
  const contactForm = document.getElementById('contactForm');
  const formConfirmation = document.getElementById('formConfirmation');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameField = document.getElementById('name');
      const emailField = document.getElementById('email');
      const messageField = document.getElementById('message');

      const name = nameField ? nameField.value.trim() : '';
      const email = emailField ? emailField.value.trim() : '';
      const message = messageField ? messageField.value.trim() : '';

      if (!name || !email || !message) {
        if (formConfirmation) {
          formConfirmation.hidden = false;
          formConfirmation.textContent = 'Por favor completa nombre, correo y mensaje antes de enviar.';
        }
        showToast('Faltan datos por completar.');
        return;
      }

      // Comportamiento de demostración: no hay backend, solo confirmación visual
      if (formConfirmation) {
        formConfirmation.hidden = false;
        formConfirmation.textContent = `¡Gracias, ${name}! Recibimos tu mensaje y te contactaremos pronto a ${email}.`;
      }
      showToast('Mensaje enviado con éxito 🍫');
      contactForm.reset();
    });
  }

  /* ---------- 8. Animaciones al hacer scroll (reveal) ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback: si no hay soporte, mostrar todo directamente
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- 9. Contador animado de estadísticas ---------- */
  const statNumbers = document.querySelectorAll('.stat-number');

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString('es-CO');
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString('es-CO');
      }
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window && statNumbers.length) {
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    statNumbers.forEach((el) => statObserver.observe(el));
  } else {
    statNumbers.forEach((el) => animateCount(el));
  }

});
