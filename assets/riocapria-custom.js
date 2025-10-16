/**
 * Riocapria Custom JavaScript
 * Funcionalidades customizadas para o tema Riocapria
 */

(function() {
  'use strict';

  // ============================================
  // 1. MINI-CART AJAX
  // ============================================

  const RiocapriaCart = {
    init() {
      this.updateCartCount();
      this.bindEvents();
    },

    bindEvents() {
      // Add to cart buttons
      document.querySelectorAll('[data-action="add-to-cart"]').forEach(button => {
        button.addEventListener('click', this.addToCart.bind(this));
      });

      // Remove from cart buttons
      document.querySelectorAll('[data-action="remove"]').forEach(button => {
        button.addEventListener('click', this.removeFromCart.bind(this));
      });
    },

    addToCart(e) {
      e.preventDefault();
      const button = e.currentTarget;
      const variantId = button.dataset.variantId;
      const quantity = button.dataset.quantity || 1;

      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: variantId,
          quantity: parseInt(quantity)
        })
      })
      .then(response => response.json())
      .then(data => {
        this.updateMiniCart();
        this.openMiniCart();
      })
      .catch(error => console.error('Error:', error));
    },

    removeFromCart(e) {
      e.preventDefault();
      const button = e.currentTarget;
      const lineKey = button.dataset.lineKey;

      fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: lineKey,
          quantity: 0
        })
      })
      .then(() => this.updateMiniCart())
      .catch(error => console.error('Error:', error));
    },

    updateMiniCart() {
      fetch('/cart.js')
        .then(response => response.json())
        .then(cart => {
          // Update cart count
          this.updateCartCount(cart.item_count);

          // Update cart items
          this.renderCartItems(cart.items);

          // Update totals
          this.updateCartTotals(cart);
        });
    },

    updateCartCount(count) {
      const cartCount = document.querySelector('[cart="count"]');
      if (cartCount) {
        if (count === undefined) {
          fetch('/cart.js')
            .then(response => response.json())
            .then(cart => cartCount.textContent = cart.item_count);
        } else {
          cartCount.textContent = count;
        }
      }
    },

    renderCartItems(items) {
      const container = document.querySelector('.mini-cart_items');
      if (!container) return;

      if (items.length === 0) {
        container.innerHTML = '<p>Seu carrinho está vazio</p>';
        return;
      }

      container.innerHTML = items.map(item => `
        <div class="mini-cart_item-wrapper">
          <div class="mini-cart_image-wrapper">
            <button data-action="remove" data-line-key="${item.key}" class="button-2 is-remove">×</button>
            <img src="${item.image}" alt="${item.title}" class="cart_item-image">
          </div>
          <div class="mini-cart_item-data">
            <div>${item.product_title}</div>
            ${item.variant_title ? `<div class="text-size-small">${item.variant_title}</div>` : ''}
            <div class="produto-precos">
              <strong>${this.formatMoney(item.final_line_price)}</strong>
            </div>
          </div>
        </div>
      `).join('');

      // Rebind remove buttons
      this.bindEvents();
    },

    updateCartTotals(cart) {
      const subtotal = document.querySelector('.cart-subtotal');
      if (subtotal) {
        subtotal.textContent = this.formatMoney(cart.total_price);
      }
    },

    formatMoney(cents) {
      return 'R$ ' + (cents / 100).toFixed(2).replace('.', ',');
    },

    openMiniCart() {
      const miniCart = document.querySelector('.mini-cart_dropdown');
      if (miniCart) {
        miniCart.classList.add('w--open');
      }
    }
  };

  // ============================================
  // 2. DROPDOWN NAVIGATION
  // ============================================

  const RiocapriaDropdown = {
    init() {
      this.setupDropdowns();
    },

    setupDropdowns() {
      document.querySelectorAll('.w-dropdown').forEach(dropdown => {
        const toggle = dropdown.querySelector('.w-dropdown-toggle');
        const list = dropdown.querySelector('.w-dropdown-list');

        if (!toggle || !list) return;

        // Click toggle
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleDropdown(dropdown);
        });

        // Hover (desktop)
        if (window.innerWidth > 991) {
          dropdown.addEventListener('mouseenter', () => {
            this.openDropdown(dropdown);
          });

          dropdown.addEventListener('mouseleave', () => {
            this.closeDropdown(dropdown);
          });
        }
      });

      // Close dropdowns when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.w-dropdown')) {
          document.querySelectorAll('.w-dropdown.w--open').forEach(dropdown => {
            this.closeDropdown(dropdown);
          });
        }
      });
    },

    toggleDropdown(dropdown) {
      if (dropdown.classList.contains('w--open')) {
        this.closeDropdown(dropdown);
      } else {
        // Close other dropdowns first
        document.querySelectorAll('.w-dropdown.w--open').forEach(other => {
          if (other !== dropdown) this.closeDropdown(other);
        });
        this.openDropdown(dropdown);
      }
    },

    openDropdown(dropdown) {
      dropdown.classList.add('w--open');
      const list = dropdown.querySelector('.w-dropdown-list');
      if (list) {
        list.style.display = 'block';
      }
    },

    closeDropdown(dropdown) {
      dropdown.classList.remove('w--open');
      const list = dropdown.querySelector('.w-dropdown-list');
      if (list) {
        list.style.display = 'none';
      }
    }
  };

  // ============================================
  // 3. MOBILE MENU
  // ============================================

  const RiocapriaMobileMenu = {
    init() {
      const menuButton = document.querySelector('.navbar10_menu-button');
      const menu = document.querySelector('.navbar10_menu');

      if (!menuButton || !menu) return;

      menuButton.addEventListener('click', () => {
        menu.classList.toggle('w--open');
        menuButton.classList.toggle('w--open');
      });
    }
  };

  // ============================================
  // 4. PRODUCT IMAGE HOVER (3 images)
  // ============================================

  const RiocapriaProductCard = {
    init() {
      document.querySelectorAll('.product-card').forEach(card => {
        const images = card.querySelectorAll('.image-card');

        if (images.length < 2) return;

        card.addEventListener('mouseenter', () => {
          images.forEach((img, index) => {
            if (index > 0) {
              setTimeout(() => {
                img.style.opacity = '1';
              }, index * 150);
            }
          });
        });

        card.addEventListener('mouseleave', () => {
          images.forEach((img, index) => {
            if (index > 0) {
              img.style.opacity = '0';
            }
          });
        });
      });
    }
  };

  // ============================================
  // 5. QUANTITY BUTTONS (+/-)
  // ============================================

  const RiocapriaQuantity = {
    init() {
      document.querySelectorAll('[data-action="increment"]').forEach(button => {
        button.addEventListener('click', this.increment.bind(this));
      });

      document.querySelectorAll('[data-action="decrement"]').forEach(button => {
        button.addEventListener('click', this.decrement.bind(this));
      });
    },

    increment(e) {
      const input = e.currentTarget.parentElement.querySelector('input[type="number"]');
      if (input) {
        input.value = parseInt(input.value) + 1;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    },

    decrement(e) {
      const input = e.currentTarget.parentElement.querySelector('input[type="number"]');
      if (input && parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  };

  // ============================================
  // 6. SMOOTH SCROLL
  // ============================================

  const RiocapriaSmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const href = this.getAttribute('href');
          if (href === '#' || href === '#!') return;

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
    }
  };

  // ============================================
  // INITIALIZE ALL
  // ============================================

  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initModules);
    } else {
      initModules();
    }
  }

  function initModules() {
    RiocapriaCart.init();
    RiocapriaDropdown.init();
    RiocapriaMobileMenu.init();
    RiocapriaProductCard.init();
    RiocapriaQuantity.init();
    RiocapriaSmoothScroll.init();

    console.log('🎨 Riocapria theme loaded');
  }

  // Start
  init();

  // Expose to window for external access if needed
  window.Riocapria = {
    cart: RiocapriaCart,
    dropdown: RiocapriaDropdown,
    mobileMenu: RiocapriaMobileMenu,
    productCard: RiocapriaProductCard,
    quantity: RiocapriaQuantity
  };

})();
