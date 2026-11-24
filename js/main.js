// ============================================================
// AEROPACK – MAIN JAVASCRIPT APPLICATION
// Modular Vanilla JS ES6 | State Management | UI Interactions
// ============================================================

(function () {
  'use strict';

  // All pages except index.html live in /pages
  const PAGES_BASE = window.location.pathname.replace(/\\/g, '/').includes('/pages/') ? '' : 'pages/';

  // ── 1. GLOBAL STATE & LOCAL STORAGE ────────────────────────
  const STATE = {
    cart: JSON.parse(localStorage.getItem('aeropack_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('aeropack_wishlist')) || [],
    theme: localStorage.getItem('aeropack_theme') || 'light',
    dir: localStorage.getItem('aeropack_dir') || 'ltr'
  };

  function saveCart() {
    localStorage.setItem('aeropack_cart', JSON.stringify(STATE.cart));
    updateCartUI();
  }

  function saveWishlist() {
    localStorage.setItem('aeropack_wishlist', JSON.stringify(STATE.wishlist));
    updateWishlistUI();
  }

  // ── 2. THEME & RTL CONTROLLERS ─────────────────────────────
  function initThemeAndDir() {
    document.documentElement.setAttribute('data-theme', STATE.theme);
    document.documentElement.setAttribute('dir', STATE.dir);

    // Update toggle buttons text/icon if present
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.innerHTML = STATE.theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
    document.querySelectorAll('.rtl-toggle').forEach(btn => {
      btn.innerHTML = STATE.dir === 'rtl' ? 'LTR' : 'RTL';
    });
  }

  window.toggleTheme = function () {
    STATE.theme = STATE.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('aeropack_theme', STATE.theme);
    document.documentElement.setAttribute('data-theme', STATE.theme);
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.innerHTML = STATE.theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
    showToast('Theme Changed', `Switched to ${STATE.theme} mode`, 'info');
  };

  window.toggleDir = function () {
    STATE.dir = STATE.dir === 'ltr' ? 'rtl' : 'ltr';
    localStorage.setItem('aeropack_dir', STATE.dir);
    document.documentElement.setAttribute('dir', STATE.dir);
    document.querySelectorAll('.rtl-toggle').forEach(btn => {
      btn.innerHTML = STATE.dir === 'rtl' ? 'LTR' : 'RTL';
    });
    showToast('Layout Direction', `Switched to ${STATE.dir.toUpperCase()}`, 'info');
  };

  // ── 3. TOAST NOTIFICATION SYSTEM ───────────────────────────
  let toastContainer = null;

  function ensureToastContainer() {
    if (!toastContainer) {
      toastContainer = document.querySelector('.toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
      }
    }
    return toastContainer;
  }

  window.showToast = function (title, message, type = 'success') {
    const container = ensureToastContainer();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = '<i class="fa-solid fa-check"></i>';
    if (type === 'error') icon = '<i class="fa-solid fa-xmark"></i>';
    if (type === 'warning') icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
    if (type === 'info') icon = '<i class="fa-solid fa-circle-info"></i>';

    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <div class="toast-body">
        <div class="toast-title">${title}</div>
        <div class="toast-msg">${message}</div>
      </div>
      <button class="toast-close" aria-label="Close Notification">&times;</button>
    `;

    toast.querySelector('.toast-close').addEventListener('click', () => {
      toast.classList.add('toast-out');
      setTimeout(() => toast.remove(), 300);
    });

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
      }
    }, 4000);
  };

  // ── 4. CART DRAWER & SHOPPING INTERACTIONS ─────────────────
  window.openCart = function () {
    const overlay = document.querySelector('.cart-overlay');
    const drawer = document.querySelector('.cart-drawer');
    if (overlay && drawer) {
      overlay.classList.add('open');
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeCart = function () {
    const overlay = document.querySelector('.cart-overlay');
    const drawer = document.querySelector('.cart-drawer');
    if (overlay && drawer) {
      overlay.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  window.addToCart = function (productId, selectedColor = null, quantity = 1) {
    if (typeof AEROPACK_PRODUCTS === 'undefined') return;
    const product = AEROPACK_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const color = selectedColor || (product.colors && product.colors[0] ? product.colors[0].name : 'Standard');
    const existingIndex = STATE.cart.findIndex(item => item.id === productId && item.color === color);

    if (existingIndex > -1) {
      STATE.cart[existingIndex].quantity += quantity;
    } else {
      STATE.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        color: color,
        quantity: quantity
      });
    }

    saveCart();
    openCart();
    showToast('Added to Cart', `${product.name} (${color}) added!`, 'success');
  };

  window.updateCartQty = function (index, delta) {
    if (!STATE.cart[index]) return;
    STATE.cart[index].quantity += delta;
    if (STATE.cart[index].quantity <= 0) {
      STATE.cart.splice(index, 1);
      showToast('Item Removed', 'Product removed from your cart.', 'info');
    }
    saveCart();
  };

  window.removeCartItem = function (index) {
    if (!STATE.cart[index]) return;
    const item = STATE.cart[index];
    STATE.cart.splice(index, 1);
    saveCart();
    showToast('Item Removed', `${item.name} removed from cart.`, 'info');
  };

  function updateCartUI() {
    const countBadges = document.querySelectorAll('.cart-count-badge');
    const totalCount = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
    countBadges.forEach(badge => {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    const cartList = document.querySelector('.cart-items-list');
    const subtotalEl = document.querySelector('.cart-subtotal-price');

    if (cartList) {
      if (STATE.cart.length === 0) {
        cartList.innerHTML = `
          <div class="cart-empty">
            <div class="cart-empty-icon"><i class="fa-solid fa-suitcase-rolling"></i></div>
            <h4>Your travel bag is empty</h4>
            <p class="text-sm text-secondary mt-1">Discover durable luggage designed for seamless global journeys.</p>
            <a href="${PAGES_BASE}services.html" class="btn btn-teal btn-sm mt-3" onclick="closeCart()">Explore Collections</a>
          </div>
        `;
      } else {
        cartList.innerHTML = STATE.cart.map((item, index) => `
          <div class="cart-item">
            <div class="cart-item-img">
              <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-meta">Color: ${item.color}</div>
              <div class="cart-item-price">$${item.price}</div>
              <div class="qty-control">
                <button class="qty-btn" onclick="updateCartQty(${index}, -1)" aria-label="Decrease">&minus;</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" onclick="updateCartQty(${index}, 1)" aria-label="Increase">&plus;</button>
              </div>
            </div>
            <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Remove item">&times;</button>
          </div>
        `).join('');
      }
    }

    if (subtotalEl) {
      const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
    }
  }

  // ── 5. WISHLIST CONTROLLER ─────────────────────────────────
  window.toggleWishlist = function (productId) {
    const index = STATE.wishlist.indexOf(productId);
    if (index > -1) {
      STATE.wishlist.splice(index, 1);
      showToast('Wishlist Updated', 'Item removed from your wishlist.', 'info');
    } else {
      STATE.wishlist.push(productId);
      showToast('Saved to Wishlist', 'Item saved to your favorites!', 'success');
    }
    saveWishlist();
  };

  function updateWishlistUI() {
    const badges = document.querySelectorAll('.wishlist-count-badge');
    badges.forEach(badge => {
      badge.textContent = STATE.wishlist.length;
      badge.style.display = STATE.wishlist.length > 0 ? 'flex' : 'none';
    });

    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id = btn.getAttribute('data-wishlist-id');
      if (STATE.wishlist.includes(id)) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
      }
    });
  }

  // ── 6. SIMULATED CHECKOUT MODAL ────────────────────────────
  window.triggerSimulatedCheckout = function () {
    if (STATE.cart.length === 0) {
      showToast('Cart is Empty', 'Please add items to cart before proceeding.', 'warning');
      return;
    }
    closeCart();
    
    // Create demo modal
    const modal = document.createElement('div');
    modal.className = 'cart-overlay open';
    modal.id = 'demo-checkout-modal';
    const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.08);
    const total = subtotal + tax;

    modal.innerHTML = `
      <div class="cart-drawer open" style="width: min(520px, 94vw); padding: 2rem; overflow-y: auto;">
        <div class="flex-between mb-3">
          <h3>Simulated Travel Checkout</h3>
          <button class="cart-close" onclick="document.getElementById('demo-checkout-modal').remove()">&times;</button>
        </div>
        <div class="p-3 mb-3" style="background: rgba(40,91,98,0.1); border-radius: var(--radius-md); border-inline-start: 4px solid var(--deep-teal);">
          <strong style="color: var(--deep-teal);">Demonstration Notice:</strong>
          <p class="text-xs text-secondary mt-1">This is a frontend demonstration. No actual payment details are required, collected, or processed.</p>
        </div>
        <div class="mb-3">
          <h4 class="text-sm mb-2">Order Summary (${STATE.cart.length} items)</h4>
          <div style="max-height: 140px; overflow-y: auto; font-size: 0.85rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.5rem;">
            ${STATE.cart.map(i => `<div class="flex-between py-1"><span>${i.name} (x${i.quantity})</span><span class="font-bold">$${i.price * i.quantity}</span></div>`).join('')}
          </div>
          <div class="flex-between text-sm mt-2"><span>Subtotal:</span><span>$${subtotal}</span></div>
          <div class="flex-between text-sm"><span>Estimated Duty/Tax:</span><span>$${tax}</span></div>
          <div class="flex-between text-sm"><span>Express Global Freight:</span><span style="color: #059669;">Free Worldwide</span></div>
          <hr class="separator" style="margin: 0.75rem 0;">
          <div class="flex-between font-bold text-lg"><span>Total:</span><span class="text-gold">$${total}</span></div>
        </div>
        <form onsubmit="event.preventDefault(); window.completeSimulatedOrder();">
          <div class="form-group mb-2">
            <label class="form-label text-xs">Full Shipping Name</label>
            <input type="text" class="form-control" required placeholder="Elena Rostova" value="Elena Rostova">
          </div>
          <div class="form-group mb-2">
            <label class="form-label text-xs">Destination Airport / City</label>
            <input type="text" class="form-control" required placeholder="Geneva, Switzerland" value="Geneva, Switzerland">
          </div>
          <div class="form-group mb-3">
            <label class="form-label text-xs">Demo Payment Method</label>
            <select class="form-control">
              <option>Simulated Credit / Debit Card (Demo)</option>
              <option>Simulated Apple Pay / Google Pay</option>
              <option>Simulated Wire Transfer</option>
            </select>
          </div>
          <button type="submit" class="btn btn-teal w-100 py-3">Confirm Simulated Order ($${total})</button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
  };

  window.completeSimulatedOrder = function () {
    const modal = document.getElementById('demo-checkout-modal');
    if (modal) modal.remove();
    STATE.cart = [];
    saveCart();
    showToast('Order Confirmed!', 'Thank you! Your simulated luggage order has been logged.', 'success');
  };

  // ── 7. ACCORDION (FAQ) ─────────────────────────────────────
  function initAccordions() {
    document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.parentElement;
        const isOpen = item.classList.contains('open');
        
        // Optional single collapse
        item.parentElement.querySelectorAll('.faq-item').forEach(sibling => {
          sibling.classList.remove('open');
        });

        if (!isOpen) {
          item.classList.add('open');
        }
      });
    });
  }

  // ── 8. SCROLL REVEAL & BACK TO TOP ─────────────────────────
  function initScrollEffects() {
    const btt = document.querySelector('.back-to-top');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (navbar) {
        if (scrolled > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
      if (btt) {
        if (scrolled > 400) {
          btt.classList.add('visible');
        } else {
          btt.classList.remove('visible');
        }
      }
    });

    if (btt) {
      btt.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // IntersectionObserver for reveal elements
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
      });
    } else {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        el.classList.add('visible');
      });
    }
  }

    // ── 9. MOBILE NAVIGATION TOGGLE ────────────────────────────
  function syncNavbarHeight() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const h = Math.round(navbar.getBoundingClientRect().height);
      if (h > 0) {
        document.documentElement.style.setProperty('--navbar-height', `${h}px`);
      }
    }
  }

  function initMobileNav() {
    const toggle = document.querySelector('.navbar-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (!toggle || !mobileNav) return;

    // Synchronize navbar height dynamically on start
    syncNavbarHeight();

    const setMenu = (open) => {
      if (open) {
        syncNavbarHeight();
      }
      mobileNav.classList.toggle('open', open);
      document.body.classList.toggle('nav-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      document.documentElement.style.overflow = open ? 'hidden' : '';
      toggle.innerHTML = open
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
      toggle.setAttribute('aria-expanded', String(open));
    };

    toggle.addEventListener('click', () => {
      setMenu(!mobileNav.classList.contains('open'));
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        setMenu(false);
      }
    });

    window.addEventListener('resize', () => {
      syncNavbarHeight();
      if (window.innerWidth > 991 && mobileNav.classList.contains('open')) {
        setMenu(false);
      }
    });

    // Observe navbar height changes dynamically
    if (window.ResizeObserver) {
      const nb = document.querySelector('.navbar');
      if (nb) {
        const ro = new ResizeObserver(() => syncNavbarHeight());
        ro.observe(nb);
      }
    }

    // Keep the drawer scrollable while stopping touch scrolling behind it.
    document.addEventListener('touchmove', (e) => {
      if (mobileNav.classList.contains('open') && !e.target.closest('.mobile-nav')) {
        e.preventDefault();
      }
    }, { passive: false });
  }

  // ── 9b. SERVICES NAVIGATION DROPDOWN ────────────────────────
  function initNavDropdowns() {
    const groups = document.querySelectorAll('.nav-dropdown, .mobile-nav-group');

    const closeAll = () => {
      groups.forEach(group => {
        group.classList.remove('open');
        const toggle = group.querySelector('button');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    };

    groups.forEach(group => {
      const toggle = group.querySelector('button');
      if (!toggle) return;

      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = group.classList.contains('open');
        closeAll();
        if (!isOpen) {
          group.classList.add('open');
          toggle.setAttribute('aria-expanded', 'true');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown, .mobile-nav-group')) closeAll();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAll();
    });
  }

  // ── 10. LIGHTBOX FUNCTIONALITY ─────────────────────────────
  window.openLightbox = function (imgSrc) {
    let overlay = document.querySelector('.lightbox-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';
      overlay.innerHTML = `
        <div class="lightbox-content">
          <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
          <img src="" alt="Zoomed view">
        </div>
      `;
      document.body.appendChild(overlay);
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLightbox();
      });
    }
    overlay.querySelector('img').src = imgSrc;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function () {
    const overlay = document.querySelector('.lightbox-overlay');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  // ── 11. NEWSLETTER & GENERIC FORM VALIDATION ───────────────
  window.handleNewsletterSubmit = function (event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector('input[type="email"]');
    if (!input || !input.value.includes('@')) {
      showToast('Invalid Email', 'Please enter a valid email address.', 'error');
      return false;
    }
    showToast('Subscribed!', 'Thank you! You are now subscribed to AeroPack Travel Journal.', 'success');
    form.reset();
    return false;
  };

  // ── 11b. ARTICLE SOCIAL SHARING ─────────────────────────────
  window.copyCurrentArticleLink = function () {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Link Copied', 'Travel guide link copied to your clipboard!', 'info');
      }).catch(() => {
        showToast('Link Copied', window.location.href, 'info');
      });
    } else {
      showToast('Article Link', window.location.href, 'info');
    }
  };

  // ── 12. SERVICES PAGE FILTER & SORT ENGINE ─────────────────
  window.renderServicesCatalog = function () {
    const container = document.getElementById('services-product-grid');
    if (!container || typeof AEROPACK_PRODUCTS === 'undefined') return;

    const searchInput = document.getElementById('filter-search');
    const sortSelect = document.getElementById('filter-sort');
    const categoryInputs = document.querySelectorAll('input[name="category"]:checked');
    const materialInputs = document.querySelectorAll('input[name="material"]:checked');
    const sizeInputs = document.querySelectorAll('input[name="size"]:checked');
    const minPriceInput = document.getElementById('filter-min-price');
    const maxPriceInput = document.getElementById('filter-max-price');
    const countDisplay = document.getElementById('catalog-count');

    const activeCategories = Array.from(categoryInputs).map(cb => cb.value);
    const activeMaterials = Array.from(materialInputs).map(cb => cb.value);
    const activeSizes = Array.from(sizeInputs).map(cb => cb.value);
    const query = (searchInput ? searchInput.value.trim().toLowerCase() : '');
    const sort = (sortSelect ? sortSelect.value : 'newest');
    const minPrice = minPriceInput ? parseFloat(minPriceInput.value) || 0 : 0;
    const maxPrice = maxPriceInput ? parseFloat(maxPriceInput.value) || 9999 : 9999;

    let filtered = AEROPACK_PRODUCTS.filter(product => {
      // Category filter
      if (activeCategories.length > 0 && !activeCategories.includes('all')) {
        if (!activeCategories.includes(product.category)) return false;
      }
      // Material filter
      if (activeMaterials.length > 0) {
        const matchesMaterial = activeMaterials.some(m => product.material.toLowerCase().includes(m.toLowerCase()));
        if (!matchesMaterial) return false;
      }
      // Size filter
      if (activeSizes.length > 0) {
        const matchesSize = activeSizes.some(s => product.size.toLowerCase().includes(s.toLowerCase()));
        if (!matchesSize) return false;
      }
      // Price filter
      if (product.price < minPrice || product.price > maxPrice) return false;
      // Search query
      if (query) {
        const nameMatch = product.name.toLowerCase().includes(query);
        const descMatch = product.description.toLowerCase().includes(query);
        const catMatch = product.categoryName.toLowerCase().includes(query);
        if (!nameMatch && !descMatch && !catMatch) return false;
      }
      return true;
    });

    // Sorting
    if (sort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} travel products`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1;">
          <div class="no-results-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
          <h3>No matching travel products found</h3>
          <p class="text-sm text-secondary mt-1">Try adjusting your filters, price range, or search keywords.</p>
          <button class="btn btn-outline btn-sm mt-3" onclick="resetFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(product => `
      <div class="product-card reveal visible">
        <div class="product-card-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <div class="product-badges">
            <span class="badge badge-${product.badgeType}">${product.badge}</span>
          </div>
          <div class="product-actions">
            <button class="action-btn wishlist-btn" data-wishlist-id="${product.id}" onclick="toggleWishlist('${product.id}')" title="Save to wishlist" aria-label="Save to Wishlist"><i class="fa-regular fa-heart"></i></button>
            <button class="action-btn" onclick="openLightbox('${product.image}')" title="Zoom image" aria-label="View photo"><i class="fa-solid fa-magnifying-glass-plus"></i></button>
          </div>
        </div>
        <div class="product-card-body">
          <div class="product-type">${product.categoryName}</div>
          <h3 class="product-name">
            <a href="${PAGES_BASE}service-details.html?id=${product.id}">${product.name}</a>
          </h3>
          <div class="product-rating">
            <span class="stars">★★★★★</span>
            <span class="rating-count">(${product.reviewsCount})</span>
          </div>
          <div class="product-colors">
            ${product.colors.map((c, i) => `<span class="color-dot ${i===0?'active':''}" style="background-color: ${c.hex};" title="${c.name}"></span>`).join('')}
          </div>
          <div class="product-price">
            $${product.price}
            ${product.originalPrice ? `<span class="original">$${product.originalPrice}</span>` : ''}
          </div>
        </div>
        <div class="product-card-footer">
          <a href="${PAGES_BASE}service-details.html?id=${product.id}" class="btn btn-outline btn-sm flex-1">View Details</a>
          <button class="btn btn-teal btn-sm" onclick="addToCart('${product.id}')">Add to Cart</button>
        </div>
      </div>
    `).join('');

    updateWishlistUI();
  };

  window.resetFilters = function () {
    const form = document.getElementById('shop-filter-form');
    if (form) form.reset();
    const searchInput = document.getElementById('filter-search');
    if (searchInput) searchInput.value = '';
    renderServicesCatalog();
  };

  // ── 13. DOM READY INITIALIZATION ───────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    initThemeAndDir();
    updateCartUI();
    updateWishlistUI();
    initAccordions();
    initScrollEffects();
    initMobileNav();
    initNavDropdowns();

    // If services page
    if (document.getElementById('services-product-grid')) {
      renderServicesCatalog();

      // Listen for filter changes
      const filterForm = document.getElementById('shop-filter-form');
      if (filterForm) {
        filterForm.addEventListener('change', renderServicesCatalog);
      }
      const searchInput = document.getElementById('filter-search');
      if (searchInput) {
        searchInput.addEventListener('input', renderServicesCatalog);
      }
      const sortSelect = document.getElementById('filter-sort');
      if (sortSelect) {
        sortSelect.addEventListener('change', renderServicesCatalog);
      }
    }
  });

})();
