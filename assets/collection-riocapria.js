/**
 * RIOCAPRIA - COLLECTION PAGE INTERACTIONS
 * JavaScript for filters, accordion, sorting, and mobile menu
 */

(function() {
  'use strict';

  // ==========================================
  // FILTER ACCORDION TOGGLE
  // ==========================================
  const filterAccordions = document.querySelectorAll('.filter-accordion-toggle');

  filterAccordions.forEach(function(accordion) {
    accordion.addEventListener('click', function() {
      const filterName = this.getAttribute('data-filter');
      const content = document.querySelector(`[data-filter-content="${filterName}"]`);
      const icon = this.querySelector('.filters1_accordion-icon');

      if (!content) return;

      // Toggle open state
      const isOpen = content.style.height && content.style.height !== '0px';

      if (isOpen) {
        // Close
        content.style.height = '0px';
        icon.classList.remove('is-open');
      } else {
        // Open
        const scrollHeight = content.scrollHeight;
        content.style.height = scrollHeight + 'px';
        icon.classList.add('is-open');
      }
    });
  });

  // ==========================================
  // MOBILE FILTER SIDEBAR TOGGLE
  // ==========================================
  const openFiltersBtn = document.getElementById('open-filters');
  const closeFiltersBtn = document.getElementById('close-filters');
  const filtersSidebar = document.getElementById('filters-sidebar');

  if (openFiltersBtn && closeFiltersBtn && filtersSidebar) {
    openFiltersBtn.addEventListener('click', function(e) {
      e.preventDefault();
      filtersSidebar.classList.add('is-open');
      document.body.style.overflow = 'hidden'; // Prevent scroll
    });

    closeFiltersBtn.addEventListener('click', function(e) {
      e.preventDefault();
      filtersSidebar.classList.remove('is-open');
      document.body.style.overflow = ''; // Restore scroll
    });

    // Close on outside click
    filtersSidebar.addEventListener('click', function(e) {
      if (e.target === filtersSidebar) {
        filtersSidebar.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  // ==========================================
  // SORT DROPDOWN TOGGLE
  // ==========================================
  const sortDropdown = document.getElementById('sort-dropdown');

  if (sortDropdown) {
    const sortToggle = sortDropdown.querySelector('.dropdown1_toggle');
    const sortList = sortDropdown.querySelector('.dropdown1_dropdown-list');

    if (sortToggle && sortList) {
      sortToggle.addEventListener('click', function(e) {
        e.preventDefault();
        sortDropdown.classList.toggle('is-open');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', function(e) {
        if (!sortDropdown.contains(e.target)) {
          sortDropdown.classList.remove('is-open');
        }
      });

      // Update toggle text when selecting option
      const sortLinks = sortList.querySelectorAll('.dropdown1_dropdown-link');
      sortLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          const selectedText = this.textContent.trim();
          sortToggle.querySelector('div').textContent = selectedText;
        });
      });
    }
  }

  // ==========================================
  // SIZE SELECTOR (Grid Style)
  // ==========================================
  const sizeItems = document.querySelectorAll('.select_iten');

  sizeItems.forEach(function(item) {
    item.addEventListener('click', function() {
      if (this.classList.contains('desativado')) {
        return; // Don't allow selection of disabled sizes
      }

      // Remove active class from all
      sizeItems.forEach(function(s) {
        s.classList.remove('active');
      });

      // Add active class to clicked
      this.classList.add('active');

      // Here you could implement actual filtering logic
      const selectedSize = this.getAttribute('data-size');
      console.log('Selected size:', selectedSize);

      // TODO: Implement filtering by size
      // This would typically involve:
      // 1. Update URL params
      // 2. Filter products via AJAX or page reload
    });
  });

  // ==========================================
  // PRICE FILTER
  // ==========================================
  const priceRadios = document.querySelectorAll('input[name="price-filter"]');

  priceRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      if (this.checked) {
        const priceRange = this.value;
        console.log('Selected price range:', priceRange);

        // TODO: Implement price filtering
        // This would typically involve:
        // 1. Update URL params
        // 2. Filter products via AJAX or page reload
      }
    });
  });

  // ==========================================
  // MATERIAL/COLOR FILTER
  // ==========================================
  const materialRadios = document.querySelectorAll('input[name="material-filter"]');

  materialRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      if (this.checked) {
        const material = this.value;
        console.log('Selected material:', material);

        // TODO: Implement material filtering
      }
    });
  });

  // ==========================================
  // TYPE FILTER
  // ==========================================
  const typeRadios = document.querySelectorAll('input[name="type-filter"]');

  typeRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      if (this.checked) {
        const type = this.value;
        console.log('Selected type:', type);

        // TODO: Implement type filtering
      }
    });
  });

  // ==========================================
  // PRODUCT CARD IMAGE HOVER (Enhanced)
  // ==========================================
  // This is handled by CSS, but we can add JS enhancements if needed
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      // Optional: Add any JS-based enhancements on hover
      // The image transitions are CSS-based
    });

    card.addEventListener('mouseleave', function() {
      // Optional: Reset any JS-based enhancements
    });
  });

  // ==========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ==========================================
  // LAZY LOADING ENHANCEMENT
  // ==========================================
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  // ==========================================
  // FILTER RESET
  // ==========================================
  const clearFiltersBtn = document.querySelector('.color-brand');

  if (clearFiltersBtn && clearFiltersBtn.textContent.trim() === 'Limpar') {
    clearFiltersBtn.addEventListener('click', function(e) {
      // Clear all radio buttons
      const allRadios = document.querySelectorAll('.filters1_filters-wrapper input[type="radio"]');
      allRadios.forEach(function(radio) {
        radio.checked = false;
      });

      // Clear size selections
      sizeItems.forEach(function(item) {
        item.classList.remove('active');
      });

      // If not using href to reset, prevent default and reload without params
      // e.preventDefault();
      // window.location.href = window.location.pathname;
    });
  }

  // ==========================================
  // ACTIVE FILTER TAGS REMOVAL
  // ==========================================
  const activeFilterTags = document.querySelectorAll('.filters5_tag .filters5_close-icon');

  activeFilterTags.forEach(function(closeIcon) {
    closeIcon.addEventListener('click', function(e) {
      e.preventDefault();
      // If the close icon is wrapped in an anchor, the href will handle it
      // Otherwise, implement custom removal logic here
    });
  });

  // ==========================================
  // PREVENT FORM SUBMISSION ON FILTER FORMS
  // ==========================================
  const filterForms = document.querySelectorAll('.filters1_filters-wrapper form');

  filterForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Implement AJAX filtering here if desired
      console.log('Filter form submitted');
    });
  });

  // ==========================================
  // RESIZE HANDLER (Close mobile filters on resize)
  // ==========================================
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth > 991 && filtersSidebar) {
        filtersSidebar.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    }, 250);
  });

  // ==========================================
  // INITIALIZATION COMPLETE
  // ==========================================
  console.log('Riocapria Collection Page - JavaScript Loaded');

})();
