/* ==========================================
   Arunika Smart Link Data - JavaScript
   ========================================== */

// Global Variables
let map = null;
const portfolioProjects = {
  project1: {
    title: "Smart Attendance System",
    category: "Face Recognition",
    client: "PT. Tech Solutions",
    duration: "3 months",
    description:
      "Sistem absensi pintar menggunakan teknologi face recognition untuk perusahaan dengan 500+ karyawan. Sistem ini mampu mengenali wajah dengan akurasi 99.9% dan terintegrasi dengan sistem HR existing.",
    technologies: ["Python", "OpenCV", "TensorFlow", "MySQL", "REST API"],
    features: [
      "Real-time face recognition",
      "Anti-spoofing technology",
      "Attendance reports",
      "HR system integration",
      "Mobile app support",
    ],
    image:
      "https://via.placeholder.com/600x400/667eea/ffffff?text=Face+Recognition+System",
  },
  project2: {
    title: "Smart Building Management",
    category: "IoT",
    client: "Mall Central Jakarta",
    duration: "6 months",
    description:
      "Sistem manajemen gedung pintar yang mengintegrasikan berbagai sensor IoT untuk monitoring suhu, kelembaban, kualitas udara, dan konsumsi energi secara real-time.",
    technologies: ["Node.js", "MongoDB", "Arduino", "Raspberry Pi", "MQTT"],
    features: [
      "Real-time monitoring",
      "Energy optimization",
      "Automated HVAC control",
      "Predictive maintenance",
      "Mobile dashboard",
    ],
    image:
      "https://via.placeholder.com/600x400/764ba2/ffffff?text=IoT+Monitoring",
  },
  project3: {
    title: "Digital Payment Platform",
    category: "Blockchain",
    client: "FinTech Startup",
    duration: "8 months",
    description:
      "Platform pembayaran digital berbasis blockchain yang memungkinkan transaksi peer-to-peer yang aman, cepat, dan dengan biaya rendah menggunakan smart contracts.",
    technologies: ["Solidity", "Web3.js", "React", "Node.js", "PostgreSQL"],
    features: [
      "Secure transactions",
      "Smart contracts",
      "Multi-cryptocurrency support",
      "KYC integration",
      "Transaction analytics",
    ],
    image:
      "https://via.placeholder.com/600x400/667eea/ffffff?text=Blockchain+Platform",
  },
  project4: {
    title: "Access Control System",
    category: "Face Recognition",
    client: "Government Office",
    duration: "4 months",
    description:
      "Sistem kontrol akses keamanan gedung pemerintahan dengan teknologi face recognition yang terintegrasi dengan sistem keamanan existing dan database karyawan.",
    technologies: ["C++", "OpenCV", "SQLite", "Linux", "TCP/IP"],
    features: [
      "Multi-door access control",
      "Visitor management",
      "Security alerts",
      "Backup authentication",
      "Audit trail",
    ],
    image:
      "https://via.placeholder.com/600x400/764ba2/ffffff?text=Security+System",
  },
  project5: {
    title: "Smart Agriculture System",
    category: "IoT",
    client: "Agri-Business Corp",
    duration: "5 months",
    description:
      "Sistem pertanian pintar yang menggunakan sensor IoT untuk monitoring kondisi tanah, cuaca, dan tanaman secara otomatis dengan sistem irigasi yang dapat dikontrol dari jarak jauh.",
    technologies: ["Python", "InfluxDB", "Grafana", "LoRaWAN", "Django"],
    features: [
      "Soil monitoring",
      "Weather station",
      "Automated irrigation",
      "Crop analytics",
      "Yield prediction",
    ],
    image:
      "https://via.placeholder.com/600x400/667eea/ffffff?text=Smart+Agriculture",
  },
  project6: {
    title: "Supply Chain Tracking",
    category: "Blockchain",
    client: "Manufacturing Company",
    duration: "7 months",
    description:
      "Sistem pelacakan supply chain menggunakan blockchain untuk memastikan transparansi dan keamanan data sepanjang rantai pasokan dari produsen hingga konsumen akhir.",
    technologies: [
      "Hyperledger Fabric",
      "Go",
      "Docker",
      "Kubernetes",
      "MongoDB",
    ],
    features: [
      "Product traceability",
      "Quality assurance",
      "Counterfeit prevention",
      "Automated compliance",
      "Real-time tracking",
    ],
    image:
      "https://via.placeholder.com/600x400/764ba2/ffffff?text=Supply+Chain",
  },
};

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeAOS();
  initializeNavbar();
  initializeSmoothScroll();
  initializePortfolioFilter();
  initializeBlogFilter();
  initializeContactForm();
  initializeBackToTop();
  initializeTypingEffect();
  initializeCounters();
  initializeParallax();

  // Initialize map after a delay to ensure proper loading
  setTimeout(initializeMap, 1000);
});

// Initialize AOS (Animate On Scroll)
function initializeAOS() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });
}

// Navbar Functionality
function initializeNavbar() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active nav link highlighting
  window.addEventListener("scroll", function () {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Mobile menu close on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });
}

// Smooth Scroll
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Portfolio Filter
function initializePortfolioFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter portfolio items
      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          item.classList.remove("hide");
          item.style.display = "block";
        } else {
          item.classList.add("hide");
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

// Blog Filter
function initializeBlogFilter() {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const blogItems = document.querySelectorAll(".blog-item");
  const searchInput = document.getElementById("blogSearch");

  // Category filtering
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      // Update active button
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter blog items
      filterBlogItems(category, searchInput.value);
    });
  });

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const activeCategory = document
        .querySelector(".category-btn.active")
        .getAttribute("data-category");
      filterBlogItems(activeCategory, this.value);
    });
  }

  function filterBlogItems(category, searchTerm) {
    blogItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      const itemTitle = item
        .querySelector(".blog-title")
        .textContent.toLowerCase();
      const itemExcerpt = item
        .querySelector(".blog-excerpt")
        .textContent.toLowerCase();

      const categoryMatch = category === "all" || itemCategory === category;
      const searchMatch =
        searchTerm === "" ||
        itemTitle.includes(searchTerm.toLowerCase()) ||
        itemExcerpt.includes(searchTerm.toLowerCase());

      if (categoryMatch && searchMatch) {
        item.style.display = "block";
        item.classList.remove("hide");
      } else {
        item.style.display = "none";
        item.classList.add("hide");
      }
    });
  }
}

// Contact Form Validation and Submission
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (validateForm()) {
        submitForm();
      }
    });

    // Real-time validation
    const inputs = contactForm.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateField(this);
      });

      input.addEventListener("input", function () {
        if (this.classList.contains("is-invalid")) {
          validateField(this);
        }
      });
    });
  }

  function validateForm() {
    const inputs = contactForm.querySelectorAll(
      "input[required], select[required], textarea[required]"
    );
    let isValid = true;

    inputs.forEach((input) => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;

    // Reset classes
    field.classList.remove("is-valid", "is-invalid");

    // Required field validation
    if (field.hasAttribute("required") && value === "") {
      isValid = false;
    }

    // Email validation
    if (field.type === "email" && value !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
      }
    }

    // Phone validation
    if (field.type === "tel" && value !== "") {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(value)) {
        isValid = false;
      }
    }

    // Apply validation classes
    if (isValid) {
      field.classList.add("is-valid");
    } else {
      field.classList.add("is-invalid");
    }

    return isValid;
  }

  function submitForm() {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;

    // Show loading state
    submitButton.innerHTML = '<span class="loading"></span> Mengirim...';
    submitButton.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      // Reset form
      contactForm.reset();

      // Remove validation classes
      const inputs = contactForm.querySelectorAll("input, select, textarea");
      inputs.forEach((input) => {
        input.classList.remove("is-valid", "is-invalid");
      });

      // Reset button
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;

      // Show success message
      showNotification(
        "Pesan berhasil dikirim! Kami akan menghubungi Anda segera.",
        "success"
      );
    }, 2000);
  }
}

// Back to Top Button
function initializeBackToTop() {
  const backToTopButton = document.getElementById("backToTop");

  if (backToTopButton) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });

    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

// Typing Effect for Hero Title
function initializeTypingEffect() {
  const heroTitle = document.querySelector(".hero-title");
  if (!heroTitle) return;

  const text = heroTitle.textContent;
  heroTitle.textContent = "";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  // Start typing effect after page load
  setTimeout(typeWriter, 1000);
}

// Counter Animation
function initializeCounters() {
  const counters = document.querySelectorAll(".counter");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute("data-target"));
        animateCounter(counter, target);
        observer.unobserve(counter);
      }
    });
  });

  counters.forEach((counter) => {
    observer.observe(counter);
  });
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 20);
}

// Parallax Effect
function initializeParallax() {
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".parallax");

    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Portfolio Modal
function openPortfolioModal(projectId) {
  const project = portfolioProjects[projectId];
  if (!project) return;

  const modal = document.getElementById("portfolioModal");
  const modalTitle = document.getElementById("portfolioModalTitle");
  const modalBody = document.getElementById("portfolioModalBody");

  modalTitle.textContent = project.title;

  modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${project.image}" alt="${
    project.title
  }" class="img-fluid rounded mb-3">
            </div>
            <div class="col-md-6">
                <h6 class="text-primary">Kategori: ${project.category}</h6>
                <p><strong>Klien:</strong> ${project.client}</p>
                <p><strong>Durasi:</strong> ${project.duration}</p>
                <p class="mt-3">${project.description}</p>
                
                <h6 class="mt-4">Teknologi yang Digunakan:</h6>
                <div class="mb-3">
                    ${project.technologies
                      .map(
                        (tech) =>
                          `<span class="badge bg-primary me-1 mb-1">${tech}</span>`
                      )
                      .join("")}
                </div>
                
                <h6>Fitur Utama:</h6>
                <ul class="list-unstyled">
                    ${project.features
                      .map(
                        (feature) =>
                          `<li><i class="fas fa-check text-success me-2"></i>${feature}</li>`
                      )
                      .join("")}
                </ul>
            </div>
        </div>
    `;

  const bsModal = new bootstrap.Modal(modal);
  bsModal.show();
}

// Map Initialization
function initializeMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  // Jakarta coordinates (example)
  const lat = -6.2088;
  const lng = 106.8456;

  try {
    map = L.map("map").setView([lat, lng], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Custom marker
    const customIcon = L.divIcon({
      html: '<i class="fas fa-map-marker-alt" style="color: #667eea; font-size: 2rem;"></i>',
      iconSize: [30, 30],
      className: "custom-div-icon",
    });

    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

    marker.bindPopup(`
            <div class="text-center">
                <h6><i class="fas fa-microchip me-2"></i>Arunika Smart Link Data</h6>
                <p class="mb-1">Jl. Teknologi No. 123</p>
                <p class="mb-0">Jakarta Selatan, Indonesia</p>
            </div>
        `);

    // Auto open popup
    setTimeout(() => {
      marker.openPopup();
    }, 1000);
  } catch (error) {
    console.error("Error initializing map:", error);
    mapElement.innerHTML =
      '<div class="d-flex align-items-center justify-content-center h-100 bg-light rounded"><p class="text-muted">Map tidak dapat dimuat</p></div>';
  }
}

// Notification System
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
  notification.style.cssText =
    "top: 20px; right: 20px; z-index: 9999; min-width: 300px;";

  notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

// Lazy Loading for Images
function initializeLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Service Card Hover Effects
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
});

// Portfolio Card Animations
document.addEventListener("DOMContentLoaded", function () {
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  portfolioCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;

    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) rotateY(5deg)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) rotateY(0deg)";
    });
  });
});

// Blog Card Hover Effects
document.addEventListener("DOMContentLoaded", function () {
  const blogCards = document.querySelectorAll(".blog-card");

  blogCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const img = this.querySelector("img");
      if (img) {
        img.style.transform = "scale(1.1)";
      }
    });

    card.addEventListener("mouseleave", function () {
      const img = this.querySelector("img");
      if (img) {
        img.style.transform = "scale(1)";
      }
    });
  });
});

// Floating Action Buttons
function createFloatingButtons() {
  const floatingContainer = document.createElement("div");
  floatingContainer.className = "floating-buttons";
  floatingContainer.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `;

  const whatsappButton = document.createElement("a");
  whatsappButton.href = "https://wa.me/6281234567890";
  whatsappButton.target = "_blank";
  whatsappButton.className = "btn btn-success rounded-circle";
  whatsappButton.style.cssText =
    "width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;";
  whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';

  floatingContainer.appendChild(whatsappButton);
  document.body.appendChild(floatingContainer);
}

// Initialize floating buttons
document.addEventListener("DOMContentLoaded", createFloatingButtons);

// Performance Optimization
window.addEventListener("load", function () {
  // Remove loading classes
  document.body.classList.remove("loading");

  // Initialize lazy loading
  initializeLazyLoading();

  // Preload critical images
  const criticalImages = [
    "https://via.placeholder.com/400x300/667eea/ffffff?text=Face+Recognition+System",
    "https://via.placeholder.com/400x300/764ba2/ffffff?text=IoT+Monitoring",
  ];

  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
});

// Error Handling
window.addEventListener("error", function (e) {
  console.error("JavaScript Error:", e.error);
  showNotification("Terjadi kesalahan. Silakan refresh halaman.", "warning");
});

// Resize Handler
window.addEventListener("resize", function () {
  if (map) {
    map.invalidateSize();
  }
});

// Export functions for global access
window.openPortfolioModal = openPortfolioModal;
window.showNotification = showNotification;
