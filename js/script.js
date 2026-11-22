/* ==========================================================================
   VELOCITY EXOTICS — Interactive Marketplace Script
   ========================================================================== */

(function () {
  'use strict';

  const FAVORITES_STORAGE_KEY = 'velocity_exotics_favorites';

  const VEHICLES = [
    {
      id: 'ferrari-296-gtb',
      name: 'Ferrari 296 GTB',
      brand: 'Ferrari',
      listingYear: 2024,
      category: 'Supercars',
      featured: false,
      price: 342205,
      horsepower: 819,
      horsepowerDisplay: '819 hp (830 cv)',
      engine: '3.0L Twin-Turbo V6 Plug-In Hybrid',
      torque: '740 Nm (546 lb-ft)',
      transmission: '8-Speed F1 Dual-Clutch',
      drivetrain: 'Rear-Wheel Drive (RWD)',
      topSpeed: '330 km/h (205 mph)',
      acceleration: '2.9 s',
      description:
        'A mid-rear-engined Berlinetta pairing a 120-degree twin-turbocharged V6 with an axial-flux electric motor, delivering instantaneous throttle response and classic Maranello agility.',
      images: [
        'img/ferrari/296-gtb-1.jpg',
        'img/ferrari/296-gtb-2.jpg'
      ]
    },
    {
      id: 'ferrari-sf90-stradale',
      name: 'Ferrari SF90 Stradale',
      brand: 'Ferrari',
      listingYear: 2024,
      category: 'Hypercars',
      featured: true,
      price: 528764,
      horsepower: 986,
      horsepowerDisplay: '986 hp (1,000 cv)',
      engine: '4.0L Twin-Turbo V8 + Tri-Motor PHEV',
      torque: '800 Nm (590 lb-ft)',
      transmission: '8-Speed F1 Dual-Clutch',
      drivetrain: 'All-Wheel Drive (e-4WD)',
      topSpeed: '340 km/h (211 mph)',
      acceleration: '2.5 s',
      description:
        'Ferrari’s range-topping plug-in hybrid flagship combining a twin-turbo V8 with three electric motors for torque-vectoring precision and blistering launch traction.',
      images: [
        'img/ferrari/sf90-stradale-1.jpg',
        'img/ferrari/sf90-stradale-2.jpg'
      ]
    },
    {
      id: 'lamborghini-revuelto',
      name: 'Lamborghini Revuelto',
      brand: 'Lamborghini',
      listingYear: 2024,
      category: 'Hypercars',
      featured: true,
      price: 608358,
      horsepower: 1001,
      horsepowerDisplay: '1,001 hp (1,015 cv)',
      engine: '6.5L Naturally Aspirated V12 + Tri-Motor HPEV',
      torque: '725 Nm (V12) + Electric Assist',
      transmission: '8-Speed Transverse Dual-Clutch',
      drivetrain: 'All-Wheel Drive (AWD)',
      topSpeed: '350 km/h (217 mph)',
      acceleration: '2.5 s',
      description:
        'Lamborghini’s first High Performance Electrified Vehicle unites an iconic naturally aspirated 6.5-liter V12 with a carbon monofuselage chassis and three electric motors.',
      images: [
        'img/lamborghini/revuelto-1.jpg',
        'img/lamborghini/revuelto-2.jpg'
      ]
    },
    {
      id: 'lamborghini-huracan-tecnica',
      name: 'Lamborghini Huracán Tecnica',
      brand: 'Lamborghini',
      listingYear: 2024,
      category: 'Track-Focused Cars',
      featured: false,
      price: 244795,
      horsepower: 631,
      horsepowerDisplay: '631 hp (640 cv)',
      engine: '5.2L Naturally Aspirated V10',
      torque: '565 Nm (417 lb-ft)',
      transmission: '7-Speed LDF Dual-Clutch',
      drivetrain: 'Rear-Wheel Drive (RWD)',
      topSpeed: '325 km/h (202 mph)',
      acceleration: '3.2 s',
      description:
        'Bridging road poise and circuit capability, the rear-wheel-drive Huracán Tecnica features rear-wheel steering, revised aerodynamics, and the visceral 5.2-liter V10.',
      images: [
        'img/lamborghini/huracan-tecnica-1.jpg',
        'img/lamborghini/huracan-tecnica-2.jpg'
      ]
    },
    {
      id: 'mclaren-750s',
      name: 'McLaren 750S',
      brand: 'McLaren',
      listingYear: 2024,
      category: 'Supercars',
      featured: true,
      price: 324000,
      horsepower: 740,
      horsepowerDisplay: '740 hp (750 ps)',
      engine: '4.0L Twin-Turbocharged V8',
      torque: '800 Nm (590 lb-ft)',
      transmission: '7-Speed SSG Seamless Shift',
      drivetrain: 'Rear-Wheel Drive (RWD)',
      topSpeed: '332 km/h (206 mph)',
      acceleration: '2.8 s',
      description:
        'Built around McLaren’s carbon-fiber Monocage II tub, the 750S pairs featherweight construction with electro-hydraulic steering feel and an active rear carbon wing.',
      images: [
        'img/mclaren/750s-1.jpg',
        'img/mclaren/750s-2.jpg'
      ]
    },
    {
      id: 'mclaren-artura',
      name: 'McLaren Artura',
      brand: 'McLaren',
      listingYear: 2024,
      category: 'Supercars',
      featured: false,
      price: 237500,
      horsepower: 671,
      horsepowerDisplay: '671 hp (680 ps)',
      engine: '3.0L Twin-Turbo V6 E-Motor Hybrid',
      torque: '720 Nm (531 lb-ft)',
      transmission: '8-Speed SSG Dual-Clutch',
      drivetrain: 'Rear-Wheel Drive (RWD)',
      topSpeed: '330 km/h (205 mph)',
      acceleration: '3.0 s',
      description:
        'Next-generation McLaren Carbon Lightweight Architecture meets a compact twin-turbo V6 hybrid powertrain engineered for sharp cornering balance and clean aerodynamics.',
      images: [
        'img/mclaren/artura-1.jpg',
        'img/mclaren/artura-2.jpg'
      ]
    },
    {
      id: 'bugatti-chiron',
      name: 'Bugatti Chiron',
      brand: 'Bugatti',
      listingYear: 2022,
      category: 'Hypercars',
      featured: false,
      price: 3300000,
      horsepower: 1479,
      horsepowerDisplay: '1,479 hp (1,500 ps)',
      engine: '8.0L Quad-Turbocharged W16',
      torque: '1,600 Nm (1,180 lb-ft)',
      transmission: '7-Speed Dual-Clutch',
      drivetrain: 'All-Wheel Drive (AWD)',
      topSpeed: '420 km/h (261 mph)',
      acceleration: '2.4 s',
      description:
        'Handcrafted in Molsheim around an 8.0-liter quad-turbo W16 engine and full carbon-fiber monocoque, the Chiron sets a benchmark in grand-touring hypercar velocity.',
      images: [
        'img/bugatti/chiron-1.jpg',
        'img/bugatti/chiron-2.jpg'
      ]
    },
    {
      id: 'bugatti-mistral',
      name: 'Bugatti Mistral',
      brand: 'Bugatti',
      listingYear: 2024,
      category: 'Hypercars',
      featured: true,
      price: 5400000,
      horsepower: 1578,
      horsepowerDisplay: '1,578 hp (1,600 ps)',
      engine: '8.0L Quad-Turbocharged W16',
      torque: '1,600 Nm (1,180 lb-ft)',
      transmission: '7-Speed Dual-Clutch',
      drivetrain: 'All-Wheel Drive (AWD)',
      topSpeed: '420 km/h (261 mph)',
      acceleration: '2.4 s',
      description:
        'The final road-going expression of Bugatti’s legendary 1,600-PS W16 architecture, sculpted as an open-top roadster with signature X-shaped rear illumination.',
      images: [
        'img/bugatti/mistral-1.jpg',
        'img/bugatti/mistral-2.jpg'
      ]
    },
    {
      id: 'porsche-911-gt3-rs',
      name: 'Porsche 911 GT3 RS',
      brand: 'Porsche',
      listingYear: 2024,
      category: 'Track-Focused Cars',
      featured: true,
      price: 241300,
      horsepower: 518,
      horsepowerDisplay: '518 hp (525 ps)',
      engine: '4.0L Naturally Aspirated Flat-6',
      torque: '465 Nm (343 lb-ft)',
      transmission: '7-Speed PDK Dual-Clutch',
      drivetrain: 'Rear-Wheel Drive (RWD)',
      topSpeed: '296 km/h (184 mph)',
      acceleration: '3.2 s',
      description:
        'Motorsport-derived active aerodynamics, a swan-neck rear wing with DRS, and a 9,000-rpm naturally aspirated flat-six built for uncompromising lap consistency.',
      images: [
        'img/porsche/911-gt3-rs-1.jpg',
        'img/porsche/911-gt3-rs-2.jpg'
      ]
    },
    {
      id: 'porsche-911-turbo-s',
      name: 'Porsche 911 Turbo S',
      brand: 'Porsche',
      listingYear: 2024,
      category: 'Luxury Sports Cars',
      featured: false,
      price: 230400,
      horsepower: 640,
      horsepowerDisplay: '640 hp (650 ps)',
      engine: '3.7L Twin-Turbocharged Flat-6',
      torque: '800 Nm (590 lb-ft)',
      transmission: '8-Speed PDK Dual-Clutch',
      drivetrain: 'All-Wheel Drive (AWD)',
      topSpeed: '330 km/h (205 mph)',
      acceleration: '2.7 s',
      description:
        'Effortless all-weather performance combining twin VTG turbochargers, active all-wheel traction, and refined grand-touring composure.',
      images: [
        'img/porsche/911-turbo-s-1.jpg',
        'img/porsche/911-turbo-s-2.jpg'
      ]
    },
    {
      id: 'aston-martin-db12',
      name: 'Aston Martin DB12',
      brand: 'Aston Martin',
      listingYear: 2024,
      category: 'Grand Tourers',
      featured: true,
      price: 245000,
      horsepower: 671,
      horsepowerDisplay: '671 hp (680 ps)',
      engine: '4.0L Twin-Turbocharged V8',
      torque: '800 Nm (590 lb-ft)',
      transmission: '8-Speed ZF Automatic',
      drivetrain: 'Rear-Wheel Drive (RWD)',
      topSpeed: '325 km/h (202 mph)',
      acceleration: '3.6 s',
      description:
        'Heralded as the world’s first Super Tourer, the DB12 blends hand-built British coachwork and bridge-of-weir leather with twin-turbo V8 authority.',
      images: [
        'img/aston-martin/db12-1.jpg',
        'img/aston-martin/db12-2.jpg'
      ]
    },
    {
      id: 'aston-martin-vantage',
      name: 'Aston Martin Vantage',
      brand: 'Aston Martin',
      listingYear: 2025,
      category: 'Luxury Sports Cars',
      featured: false,
      price: 191000,
      horsepower: 656,
      horsepowerDisplay: '656 hp (665 ps)',
      engine: '4.0L Twin-Turbocharged V8',
      torque: '800 Nm (590 lb-ft)',
      transmission: '8-Speed ZF Automatic',
      drivetrain: 'Rear-Wheel Drive (RWD)',
      topSpeed: '325 km/h (202 mph)',
      acceleration: '3.5 s',
      description:
        'A wider, sharply honed front-mid-engined coupe with 50:50 weight distribution, upgraded Bilstein DTX dampers, and commanding twin-turbo V8 punch.',
      images: [
        'img/aston-martin/vantage-1.jpg',
        'img/aston-martin/vantage-2.jpg'
      ]
    }
  ];

  const BRANDS = [
    {
      name: 'Ferrari',
      origin: 'Maranello, Italy',
      image: 'img/ferrari/sf90-stradale-1.jpg'
    },
    {
      name: 'Lamborghini',
      origin: "Sant'Agata Bolognese, Italy",
      image: 'img/lamborghini/revuelto-1.jpg'
    },
    {
      name: 'McLaren',
      origin: 'Woking, United Kingdom',
      image: 'img/mclaren/750s-1.jpg'
    },
    {
      name: 'Bugatti',
      origin: 'Molsheim, France',
      image: 'img/bugatti/chiron-1.jpg'
    },
    {
      name: 'Porsche',
      origin: 'Stuttgart, Germany',
      image: 'img/porsche/911-gt3-rs-1.jpg'
    },
    {
      name: 'Aston Martin',
      origin: 'Gaydon, United Kingdom',
      image: 'img/aston-martin/db12-1.jpg'
    }
  ];

  // State
  let favorites = loadFavorites();
  let activeModalVehicle = null;
  let activeGalleryIndex = 0;

  // DOM Elements
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const featuredGrid = document.getElementById('featured-grid');
  const inventoryGrid = document.getElementById('inventory-grid');
  const inventoryEmptyState = document.getElementById('inventory-empty-state');
  const brandsGrid = document.getElementById('brands-grid');
  const resultsCount = document.getElementById('results-count');

  const searchInput = document.getElementById('search-input');
  const brandFilter = document.getElementById('brand-filter');
  const categoryFilter = document.getElementById('category-filter');
  const priceFilter = document.getElementById('price-filter');
  const sortFilter = document.getElementById('sort-filter');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  const emptyResetBtn = document.getElementById('empty-reset-btn');

  // Compare Elements
  const compareSelectA = document.getElementById('compare-select-a');
  const compareSelectB = document.getElementById('compare-select-b');
  const swapCompareBtn = document.getElementById('swap-compare-btn');
  const compareTableWrap = document.getElementById('compare-table-wrap');

  // Modal Elements
  const modal = document.getElementById('vehicle-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalMainImg = document.getElementById('modal-main-img');
  const modalGalleryCounter = document.getElementById('modal-gallery-counter');
  const modalThumbs = document.getElementById('modal-thumbs');
  const modalPrevBtn = document.getElementById('modal-prev-btn');
  const modalNextBtn = document.getElementById('modal-next-btn');
  const modalMetaLine = document.getElementById('modal-meta-line');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDescription = document.getElementById('modal-description');
  const modalSpecsGrid = document.getElementById('modal-specs-grid');
  const modalInquireBtn = document.getElementById('modal-inquire-btn');
  const modalFavoriteBtn = document.getElementById('modal-favorite-btn');

  // Favorites Drawer Elements
  const favoritesDrawer = document.getElementById('favorites-drawer');
  const openFavoritesBtn = document.getElementById('open-favorites-btn');
  const openFavoritesBtnTop = document.getElementById('open-favorites-btn-top');
  const closeFavoritesBtn = document.getElementById('close-favorites-btn');
  const favoritesList = document.getElementById('favorites-list');

  // Contact Elements
  const contactForm = document.getElementById('contact-form');
  const contactVehicleSelect = document.getElementById('contact-vehicle');
  const formConfirmation = document.getElementById('form-confirmation');
  const confirmationBody = document.getElementById('confirmation-body');

  // Back to Top
  const backToTopBtn = document.getElementById('back-to-top');

  // Helpers
  function formatUSD(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  }

  function loadFavorites() {
    try {
      const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (e) {
      // Ignore storage quota issues in restricted browsers
    }
  }

  function isFavorite(vehicleId) {
    return favorites.includes(vehicleId);
  }

  function toggleFavorite(vehicleId) {
    if (isFavorite(vehicleId)) {
      favorites = favorites.filter((id) => id !== vehicleId);
    } else {
      favorites = [...favorites, vehicleId];
    }
    saveFavorites();
    updateFavoriteIndicators();
    renderFavoritesList();
    if (activeModalVehicle && activeModalVehicle.id === vehicleId) {
      syncModalFavoriteButton();
    }
  }

  function updateFavoriteIndicators() {
    const countEls = document.querySelectorAll('.favorites-count-value');
    countEls.forEach((el) => {
      el.textContent = String(favorites.length);
    });

    const cardButtons = document.querySelectorAll('.btn-favorite[data-vehicle-id]');
    cardButtons.forEach((btn) => {
      const id = btn.getAttribute('data-vehicle-id');
      const saved = isFavorite(id);
      btn.classList.toggle('is-favorited', saved);
      btn.setAttribute('aria-pressed', saved ? 'true' : 'false');
      const labelEl = btn.querySelector('.fav-label');
      if (labelEl) {
        labelEl.textContent = saved ? 'SAVED' : 'ADD TO FAVORITES';
      }
    });
  }

  function createVehicleCardHTML(vehicle) {
    const saved = isFavorite(vehicle.id);
    return `
      <article class="vehicle-card">
        <div class="vehicle-media">
          <img
            src="${vehicle.images[0]}"
            alt="${vehicle.name} — ${vehicle.brand} studio exterior view"
            class="vehicle-img"
            loading="lazy"
            referrerpolicy="no-referrer"
          />
        </div>
        <div class="vehicle-card-body">
          <p class="vehicle-meta-line">${vehicle.brand} &middot; Listing Year ${vehicle.listingYear} &middot; ${vehicle.category}</p>
          <h3 class="vehicle-name">${vehicle.name}</h3>

          <div class="vehicle-specs-list">
            <div class="spec-row">
              <span class="spec-label">Horsepower</span>
              <span class="spec-value">${vehicle.horsepowerDisplay}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Engine</span>
              <span class="spec-value">${vehicle.engine}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Transmission</span>
              <span class="spec-value">${vehicle.transmission}</span>
            </div>
          </div>

          <div class="vehicle-price-row">
            <span class="price-caption">Indicative Listing Price (USD)</span>
            <span class="price-amount">${formatUSD(vehicle.price)}</span>
          </div>

          <div class="vehicle-card-actions">
            <button
              type="button"
              class="btn btn-primary btn-view-details"
              data-vehicle-id="${vehicle.id}"
            >
              VIEW DETAILS
            </button>
            <button
              type="button"
              class="btn btn-favorite ${saved ? 'is-favorited' : ''}"
              data-vehicle-id="${vehicle.id}"
              aria-pressed="${saved ? 'true' : 'false'}"
              aria-label="Toggle favorite for ${vehicle.name}"
            >
              <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span class="fav-label">${saved ? 'SAVED' : 'ADD TO FAVORITES'}</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // Render Featured (6 Signature Flagships)
  function renderFeatured() {
    const featuredVehicles = VEHICLES.filter((v) => v.featured);
    featuredGrid.innerHTML = featuredVehicles.map(createVehicleCardHTML).join('');
  }

  // Filter & Render Inventory (All 12 Vehicles)
  function getFilteredVehicles() {
    const query = searchInput.value.trim().toLowerCase();
    const brand = brandFilter.value;
    const category = categoryFilter.value;
    const priceRange = priceFilter.value;
    const sortOrder = sortFilter.value;

    const filtered = VEHICLES.filter((vehicle) => {
      if (query) {
        const haystack = `${vehicle.name} ${vehicle.brand} ${vehicle.category} ${vehicle.engine}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }

      if (brand !== 'all' && vehicle.brand !== brand) return false;
      if (category !== 'all' && vehicle.category !== category) return false;

      if (priceRange === 'under-300k' && vehicle.price >= 300000) return false;
      if (priceRange === '300k-650k' && (vehicle.price < 300000 || vehicle.price > 650000)) return false;
      if (priceRange === 'over-1m' && vehicle.price < 1000000) return false;

      return true;
    });

    if (sortOrder === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }

  function renderInventory() {
    const matches = getFilteredVehicles();
    const count = matches.length;
    resultsCount.textContent = `Showing ${count} of ${VEHICLES.length} ${count === 1 ? 'vehicle' : 'vehicles'}`;

    if (count === 0) {
      inventoryGrid.innerHTML = '';
      inventoryEmptyState.classList.remove('hidden');
    } else {
      inventoryEmptyState.classList.add('hidden');
      inventoryGrid.innerHTML = matches.map(createVehicleCardHTML).join('');
    }
  }

  function resetAllFilters() {
    searchInput.value = '';
    brandFilter.value = 'all';
    categoryFilter.value = 'all';
    priceFilter.value = 'all';
    sortFilter.value = 'featured';
    renderInventory();
  }

  function filterByBrandAndScroll(brandName) {
    searchInput.value = '';
    categoryFilter.value = 'all';
    priceFilter.value = 'all';
    brandFilter.value = brandName;
    renderInventory();
    const invSection = document.getElementById('inventory');
    if (invSection) {
      invSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Render Brands Showcase
  function renderBrands() {
    brandsGrid.innerHTML = BRANDS.map((brand) => {
      const count = VEHICLES.filter((v) => v.brand === brand.name).length;
      return `
        <button type="button" class="brand-card reveal" data-brand="${brand.name}">
          <img
            src="${brand.image}"
            alt="${brand.name} flagship studio photography"
            class="brand-card-bg"
            loading="lazy"
            referrerpolicy="no-referrer"
          />
          <div class="brand-card-scrim" aria-hidden="true"></div>
          <div class="brand-card-content">
            <span class="brand-origin">${brand.origin} &middot; ${count} Models</span>
            <h3 class="brand-card-title">${brand.name}</h3>
            <span class="brand-card-action">View ${brand.name} Vehicles &rarr;</span>
          </div>
        </button>
      `;
    }).join('');
  }

  // Comparison Tool
  function populateCompareSelectors() {
    const optionsHTML = VEHICLES.map(
      (v) => `<option value="${v.id}">${v.name} (${formatUSD(v.price)})</option>`
    ).join('');
    compareSelectA.innerHTML = optionsHTML;
    compareSelectB.innerHTML = optionsHTML;

    compareSelectA.value = 'ferrari-sf90-stradale';
    compareSelectB.value = 'lamborghini-revuelto';
    renderComparisonTable();
  }

  function renderComparisonTable() {
    const carA = VEHICLES.find((v) => v.id === compareSelectA.value) || VEHICLES[0];
    const carB = VEHICLES.find((v) => v.id === compareSelectB.value) || VEHICLES[1];

    compareTableWrap.innerHTML = `
      <table class="compare-table">
        <thead>
          <tr>
            <th>Specification</th>
            <th class="compare-vehicle-head">
              <img src="${carA.images[0]}" alt="${carA.name}" class="compare-thumb" referrerpolicy="no-referrer" />
              <span class="compare-car-brand">${carA.brand} &middot; ${carA.listingYear} Listing</span>
              <div class="compare-car-name">${carA.name}</div>
              <button type="button" class="btn btn-outline btn-xs btn-view-details" data-vehicle-id="${carA.id}">
                View Details
              </button>
            </th>
            <th class="compare-vehicle-head">
              <img src="${carB.images[0]}" alt="${carB.name}" class="compare-thumb" referrerpolicy="no-referrer" />
              <span class="compare-car-brand">${carB.brand} &middot; ${carB.listingYear} Listing</span>
              <div class="compare-car-name">${carB.name}</div>
              <button type="button" class="btn btn-outline btn-xs btn-view-details" data-vehicle-id="${carB.id}">
                View Details
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Indicative Price</th>
            <td class="compare-val compare-val-gold">${formatUSD(carA.price)}</td>
            <td class="compare-val compare-val-gold">${formatUSD(carB.price)}</td>
          </tr>
          <tr>
            <th>Horsepower</th>
            <td class="compare-val">${carA.horsepowerDisplay}</td>
            <td class="compare-val">${carB.horsepowerDisplay}</td>
          </tr>
          <tr>
            <th>Engine</th>
            <td class="compare-val">${carA.engine}</td>
            <td class="compare-val">${carB.engine}</td>
          </tr>
          <tr>
            <th>Torque</th>
            <td class="compare-val">${carA.torque}</td>
            <td class="compare-val">${carB.torque}</td>
          </tr>
          <tr>
            <th>Transmission</th>
            <td class="compare-val">${carA.transmission}</td>
            <td class="compare-val">${carB.transmission}</td>
          </tr>
          <tr>
            <th>Top Speed</th>
            <td class="compare-val">${carA.topSpeed}</td>
            <td class="compare-val">${carB.topSpeed}</td>
          </tr>
          <tr>
            <th>0–100 km/h</th>
            <td class="compare-val">${carA.acceleration}</td>
            <td class="compare-val">${carB.acceleration}</td>
          </tr>
        </tbody>
      </table>
    `;
  }

  // Vehicle Details Modal
  function openVehicleModal(vehicleId) {
    const vehicle = VEHICLES.find((v) => v.id === vehicleId);
    if (!vehicle) return;

    activeModalVehicle = vehicle;
    activeGalleryIndex = 0;

    modalMetaLine.textContent = `${vehicle.brand} · Listing Year ${vehicle.listingYear} · ${vehicle.category}`;
    modalTitle.textContent = vehicle.name;
    modalPrice.textContent = formatUSD(vehicle.price);
    modalDescription.textContent = vehicle.description;

    modalSpecsGrid.innerHTML = `
      <div class="modal-spec-item">
        <span class="modal-spec-label">Horsepower</span>
        <span class="modal-spec-value">${vehicle.horsepowerDisplay}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">Engine Configuration</span>
        <span class="modal-spec-value">${vehicle.engine}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">Torque</span>
        <span class="modal-spec-value">${vehicle.torque}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">Transmission</span>
        <span class="modal-spec-value">${vehicle.transmission}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">Drivetrain</span>
        <span class="modal-spec-value">${vehicle.drivetrain}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">Top Speed</span>
        <span class="modal-spec-value">${vehicle.topSpeed}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">0–100 km/h</span>
        <span class="modal-spec-value">${vehicle.acceleration}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">Listing Detail</span>
        <span class="modal-spec-value">Model Year ${vehicle.listingYear}</span>
      </div>
    `;

    renderModalGallery();
    syncModalFavoriteButton();

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    modalCloseBtn.focus();
  }

  function renderModalGallery() {
    if (!activeModalVehicle) return;
    const images = activeModalVehicle.images;
    modalMainImg.src = images[activeGalleryIndex];
    modalMainImg.alt = `${activeModalVehicle.name} studio view ${activeGalleryIndex + 1}`;
    modalGalleryCounter.textContent = `${activeGalleryIndex + 1} / ${images.length}`;

    modalThumbs.innerHTML = images
      .map(
        (imgSrc, idx) => `
        <button
          type="button"
          class="modal-thumb-btn ${idx === activeGalleryIndex ? 'active' : ''}"
          data-thumb-index="${idx}"
          aria-label="View image ${idx + 1} of ${activeModalVehicle.name}"
        >
          <img src="${imgSrc}" alt="${activeModalVehicle.name} thumbnail ${idx + 1}" referrerpolicy="no-referrer" />
        </button>
      `
      )
      .join('');
  }

  function syncModalFavoriteButton() {
    if (!activeModalVehicle) return;
    const saved = isFavorite(activeModalVehicle.id);
    modalFavoriteBtn.textContent = saved ? 'SAVED IN FAVORITES' : 'ADD TO FAVORITES';
    modalFavoriteBtn.classList.toggle('btn-primary', saved);
    modalFavoriteBtn.classList.toggle('btn-outline', !saved);
  }

  function closeVehicleModal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    if (favoritesDrawer.classList.contains('hidden')) {
      document.body.classList.remove('no-scroll');
    }
    activeModalVehicle = null;
  }

  // Favorites Drawer
  function renderFavoritesList() {
    const savedVehicles = VEHICLES.filter((v) => isFavorite(v.id));
    if (savedVehicles.length === 0) {
      favoritesList.innerHTML = `
        <div class="favorites-empty">
          <p>No vehicles saved yet.</p>
          <p style="margin-top:8px;">Click <strong>ADD TO FAVORITES</strong> on any vehicle card to curate your personal shortlist.</p>
        </div>
      `;
      return;
    }

    favoritesList.innerHTML = savedVehicles
      .map(
        (v) => `
        <div class="favorite-item">
          <img src="${v.images[0]}" alt="${v.name}" class="favorite-item-img" referrerpolicy="no-referrer" />
          <div>
            <h3 class="favorite-item-title">${v.name}</h3>
            <p class="favorite-item-price">${formatUSD(v.price)} &middot; Indicative</p>
            <div class="favorite-item-actions">
              <button type="button" class="btn btn-outline btn-xs btn-view-details" data-vehicle-id="${v.id}">
                Details
              </button>
              <button type="button" class="btn btn-subtle btn-xs btn-remove-favorite" data-vehicle-id="${v.id}">
                Remove
              </button>
            </div>
          </div>
        </div>
      `
      )
      .join('');
  }

  function openFavoritesDrawer() {
    renderFavoritesList();
    favoritesDrawer.classList.remove('hidden');
    favoritesDrawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    closeFavoritesBtn.focus();
  }

  function closeFavoritesDrawer() {
    favoritesDrawer.classList.add('hidden');
    favoritesDrawer.setAttribute('aria-hidden', 'true');
    if (modal.classList.contains('hidden')) {
      document.body.classList.remove('no-scroll');
    }
  }

  // Contact Form Setup & Validation
  function populateContactVehicles() {
    const options = VEHICLES.map(
      (v) => `<option value="${v.name}">${v.name} — ${formatUSD(v.price)} (Indicative)</option>`
    ).join('');
    contactVehicleSelect.insertAdjacentHTML('beforeend', options);
  }

  function handleContactSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorMessage = document.getElementById('error-message');

    errorName.textContent = '';
    errorEmail.textContent = '';
    errorMessage.textContent = '';

    let hasError = false;
    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const vehicleVal = contactVehicleSelect.value;
    const messageVal = messageInput.value.trim();

    if (nameVal.length < 2) {
      errorName.textContent = 'Please enter your full name (at least 2 characters).';
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      errorEmail.textContent = 'Please enter a valid email address.';
      hasError = true;
    }

    if (messageVal.length < 10) {
      errorMessage.textContent = 'Please enter an inquiry message of at least 10 characters.';
      hasError = true;
    }

    if (hasError) {
      formConfirmation.classList.add('hidden');
      return;
    }

    confirmationBody.textContent = `Thank you, ${nameVal}. Your inquiry details regarding "${vehicleVal}" (${emailVal}) have been validated locally. Because VELOCITY EXOTICS is presented as a static showcase without a backend mail server, please reach our concierge directly at 09087675142 or @Madridsupercars to complete your request.`;
    formConfirmation.classList.remove('hidden');
    contactForm.reset();
    contactVehicleSelect.value = vehicleVal;
  }

  // Navigation Active Indicator & Scroll Behaviors
  function updateActiveNavOnScroll() {
    const scrollY = window.scrollY;
    header.classList.toggle('scrolled', scrollY > 40);
    backToTopBtn.classList.toggle('hidden', scrollY < 500);

    const sections = ['home', 'featured', 'inventory', 'brands', 'about', 'contact'];
    let currentSection = 'home';

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop - 130;
        if (scrollY >= top) {
          currentSection = id;
        }
      }
    });

    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach((link) => {
      const target = link.getAttribute('data-section');
      link.classList.toggle('active', target === currentSection);
    });
  }

  function setupScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileToggle.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
  }

  // Event Listeners
  function bindEvents() {
    // Mobile Menu
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileDrawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      mobileToggle.classList.toggle('open', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mobileDrawer.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        closeMobileDrawer();
      }
    });

    // Search & Filters
    searchInput.addEventListener('input', renderInventory);
    brandFilter.addEventListener('change', renderInventory);
    categoryFilter.addEventListener('change', renderInventory);
    priceFilter.addEventListener('change', renderInventory);
    sortFilter.addEventListener('change', renderInventory);
    resetFiltersBtn.addEventListener('click', resetAllFilters);
    emptyResetBtn.addEventListener('click', resetAllFilters);

    // Brands Showcase Click
    brandsGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.brand-card[data-brand]');
      if (card) {
        filterByBrandAndScroll(card.getAttribute('data-brand'));
      }
    });

    // Footer Brand Links
    document.querySelectorAll('[data-footer-brand]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        filterByBrandAndScroll(link.getAttribute('data-footer-brand'));
      });
    });

    // Delegated Card Actions (Details & Favorites)
    document.addEventListener('click', (e) => {
      const detailsBtn = e.target.closest('.btn-view-details');
      if (detailsBtn) {
        const id = detailsBtn.getAttribute('data-vehicle-id');
        if (!favoritesDrawer.classList.contains('hidden')) {
          closeFavoritesDrawer();
        }
        openVehicleModal(id);
        return;
      }

      const favBtn = e.target.closest('.btn-favorite[data-vehicle-id]');
      if (favBtn) {
        toggleFavorite(favBtn.getAttribute('data-vehicle-id'));
        return;
      }

      const removeFavBtn = e.target.closest('.btn-remove-favorite[data-vehicle-id]');
      if (removeFavBtn) {
        toggleFavorite(removeFavBtn.getAttribute('data-vehicle-id'));
        return;
      }

      const thumbBtn = e.target.closest('.modal-thumb-btn[data-thumb-index]');
      if (thumbBtn) {
        activeGalleryIndex = Number(thumbBtn.getAttribute('data-thumb-index'));
        renderModalGallery();
      }
    });

    // Compare Selectors
    compareSelectA.addEventListener('change', renderComparisonTable);
    compareSelectB.addEventListener('change', renderComparisonTable);
    swapCompareBtn.addEventListener('click', () => {
      const temp = compareSelectA.value;
      compareSelectA.value = compareSelectB.value;
      compareSelectB.value = temp;
      renderComparisonTable();
    });

    // Modal Controls
    modalCloseBtn.addEventListener('click', closeVehicleModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeVehicleModal();
      }
    });

    modalPrevBtn.addEventListener('click', () => {
      if (!activeModalVehicle) return;
      const len = activeModalVehicle.images.length;
      activeGalleryIndex = (activeGalleryIndex - 1 + len) % len;
      renderModalGallery();
    });

    modalNextBtn.addEventListener('click', () => {
      if (!activeModalVehicle) return;
      const len = activeModalVehicle.images.length;
      activeGalleryIndex = (activeGalleryIndex + 1) % len;
      renderModalGallery();
    });

    modalFavoriteBtn.addEventListener('click', () => {
      if (activeModalVehicle) {
        toggleFavorite(activeModalVehicle.id);
      }
    });

    modalInquireBtn.addEventListener('click', () => {
      if (!activeModalVehicle) return;
      const chosenName = activeModalVehicle.name;
      closeVehicleModal();
      contactVehicleSelect.value = chosenName;
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setTimeout(() => {
        const nameField = document.getElementById('contact-name');
        if (nameField) nameField.focus();
      }, 450);
    });

    // Favorites Drawer
    openFavoritesBtn.addEventListener('click', openFavoritesDrawer);
    openFavoritesBtnTop.addEventListener('click', openFavoritesDrawer);
    closeFavoritesBtn.addEventListener('click', closeFavoritesDrawer);
    favoritesDrawer.addEventListener('click', (e) => {
      if (e.target === favoritesDrawer) {
        closeFavoritesDrawer();
      }
    });

    // Keyboard Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
          closeVehicleModal();
        }
        if (!favoritesDrawer.classList.contains('hidden')) {
          closeFavoritesDrawer();
        }
        closeMobileDrawer();
      }
    });

    // Contact Form
    contactForm.addEventListener('submit', handleContactSubmit);

    // Scroll Events
    window.addEventListener('scroll', updateActiveNavOnScroll, { passive: true });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initialize App
  function init() {
    renderFeatured();
    renderInventory();
    renderBrands();
    populateCompareSelectors();
    populateContactVehicles();
    updateFavoriteIndicators();
    renderFavoritesList();
    bindEvents();
    setupScrollReveal();
    updateActiveNavOnScroll();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
