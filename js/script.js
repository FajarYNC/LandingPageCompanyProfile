/* ==========================================
   Arunika Smart Link Data - JavaScript
   ========================================== */

// Global Variables
let map = null;

// Blog Articles Data
const blogArticles = {
  article1: {
    id: "article1",
    title: "Masa Depan AI dalam Transformasi Digital",
    category: "AI",
    date: "15 Sep 2025",
    author: "Tim Arunika",
    excerpt:
      "Bagaimana artificial intelligence akan mengubah lanskap bisnis di masa depan...",
    content:
      "Artificial Intelligence (AI) telah menjadi salah satu teknologi paling revolusioner di era digital ini. Dalam beberapa tahun terakhir, AI telah mengubah cara perusahaan beroperasi, mulai dari otomatisasi proses bisnis hingga personalisasi pengalaman pelanggan. Di Arunika Smart Link Data, kami melihat bahwa AI bukan hanya sekadar tren teknologi, tetapi sebuah kebutuhan fundamental untuk transformasi digital yang berkelanjutan.\n\nImplementasi AI dalam berbagai industri telah membuktikan efektivitasnya dalam meningkatkan efisiensi operasional. Sistem face recognition yang kami kembangkan, misalnya, telah membantu klien kami mengurangi waktu absensi karyawan hingga 80% sambil meningkatkan akurasi data kehadiran. Teknologi machine learning yang terintegrasi dalam sistem ini mampu beradaptasi dengan perubahan penampilan wajah seiring waktu, memastikan tingkat akurasi yang konsisten.\n\nKe depannya, kami memprediksi bahwa AI akan semakin terintegrasi dengan teknologi IoT dan blockchain, menciptakan ekosistem teknologi yang lebih komprehensif. Kombinasi ini akan memungkinkan pengambilan keputusan yang lebih cerdas berdasarkan data real-time, keamanan data yang lebih baik, dan otomatisasi proses yang lebih canggih. Perusahaan yang mampu mengadopsi teknologi ini lebih awal akan memiliki keunggulan kompetitif yang signifikan di pasar yang semakin digital.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "5 min",
    tags: ["AI", "Machine Learning", "Digital Transformation"],
  },
  article2: {
    id: "article2",
    title: "Keamanan Data dengan Teknologi Blockchain",
    category: "Blockchain",
    date: "12 Sep 2025",
    author: "Dr. Sarah Chen",
    excerpt:
      "Implementasi blockchain untuk meningkatkan keamanan data perusahaan...",
    content:
      "Keamanan data telah menjadi perhatian utama bagi perusahaan di seluruh dunia. Dengan meningkatnya serangan siber dan pelanggaran data, teknologi blockchain menawarkan solusi yang revolusioner untuk melindungi informasi sensitif perusahaan. Blockchain menggunakan kriptografi canggih dan struktur data terdistribusi yang membuat data hampir tidak mungkin dimanipulasi atau diretas.\n\nDi Arunika Smart Link Data, kami telah mengimplementasikan solusi blockchain untuk berbagai klien yang membutuhkan tingkat keamanan data yang tinggi. Sistem supply chain tracking yang kami kembangkan menggunakan Hyperledger Fabric telah membantu klien manufacturing mengurangi risiko pemalsuan produk hingga 95%. Setiap transaksi dalam rantai pasokan dicatat dalam blok yang tidak dapat diubah, menciptakan jejak audit yang transparan dan dapat dipercaya.\n\nSelain keamanan, blockchain juga menawarkan transparansi yang belum pernah ada sebelumnya. Smart contracts yang berjalan di atas blockchain dapat mengotomatisasi proses bisnis sambil memastikan bahwa semua pihak mematuhi aturan yang telah ditetapkan. Ini sangat berguna dalam industri keuangan, asuransi, dan logistik di mana kepercayaan dan transparansi adalah kunci kesuksesan.\n\nKe depannya, kami melihat bahwa blockchain akan menjadi standar dalam industri yang menangani data sensitif. Teknologi ini akan terus berkembang dengan fitur-fitur baru seperti quantum-resistant cryptography dan improved scalability, menjadikannya pilihan yang semakin menarik untuk perusahaan enterprise.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "7 min",
    tags: ["Blockchain", "Security", "Smart Contracts", "Cryptography"],
  },
  article3: {
    id: "article3",
    title: "IoT untuk Smart City Indonesia",
    category: "IoT",
    date: "10 Sep 2025",
    author: "Ir. Budi Santoso",
    excerpt:
      "Peran Internet of Things dalam membangun kota pintar yang berkelanjutan...",
    content:
      "Indonesia sebagai negara berkembang dengan populasi yang terus bertumbuh menghadapi tantangan urbanisasi yang kompleks. Smart City menjadi solusi untuk mengatasi masalah-masalah perkotaan seperti kemacetan lalu lintas, polusi udara, pengelolaan sampah, dan efisiensi energi. Internet of Things (IoT) berperan sebagai tulang punggung teknologi Smart City dengan menyediakan data real-time yang diperlukan untuk pengambilan keputusan yang cerdas.\n\nProyek Smart Building Management yang kami kembangkan untuk Mall Central Jakarta menjadi contoh sukses implementasi IoT di Indonesia. Sistem ini mengintegrasikan lebih dari 500 sensor untuk monitoring kualitas udara, suhu, kelembaban, konsumsi energi, dan okupansi ruangan. Hasilnya, mall tersebut berhasil mengurangi konsumsi energi hingga 30% sambil meningkatkan kenyamanan pengunjung.\n\nPenerapan IoT dalam Smart City tidak hanya terbatas pada building management, tetapi juga mencakup smart traffic management, waste management, dan water quality monitoring. Sensor-sensor yang terpasang di berbagai titik kota dapat mengumpulkan data yang kemudian dianalisis menggunakan AI untuk mengoptimalkan operasional kota. Misalnya, sistem traffic light yang adaptif dapat mengurangi kemacetan berdasarkan volume kendaraan real-time.\n\nChallenges utama dalam implementasi IoT untuk Smart City di Indonesia adalah infrastruktur telekomunikasi dan standardisasi. Namun, dengan dukungan pemerintah dan investasi swasta, kami optimis bahwa Indonesia dapat menjadi leader dalam Smart City di Asia Tenggara. Kunci sukses terletak pada kolaborasi antara pemerintah, swasta, dan masyarakat dalam adopsi teknologi ini.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "6 min",
    tags: ["IoT", "Smart City", "Urban Planning", "Sustainability"],
  },
  article4: {
    id: "article4",
    title: "Face Recognition: Antara Kemudahan dan Privacy",
    category: "AI",
    date: "8 Sep 2025",
    author: "Prof. Maya Indira",
    excerpt:
      "Menjaga keseimbangan antara inovasi teknologi dan perlindungan privasi pengguna...",
    content:
      "Teknologi face recognition telah mengalami perkembangan pesat dalam dekade terakhir, dari yang awalnya hanya dapat mengenali wajah dalam kondisi ideal hingga kini mampu bekerja dalam berbagai kondisi pencahayaan dan sudut pandang. Di Arunika Smart Link Data, kami telah mengembangkan sistem face recognition dengan akurasi 99.9% yang telah diimplementasikan di berbagai sektor, mulai dari keamanan gedung pemerintahan hingga sistem absensi perusahaan.\n\nNamun, kemajuan teknologi ini juga menimbulkan pertanyaan penting tentang privasi dan etika penggunaan data biometrik. Wajah seseorang adalah data biometrik yang unik dan tidak dapat diubah, sehingga penyalahgunaan data ini dapat berdampak serius pada privasi individu. Oleh karena itu, kami selalu menerapkan prinsip 'Privacy by Design' dalam setiap proyek face recognition yang kami kembangkan.\n\nPendekatan yang kami gunakan meliputi enkripsi end-to-end untuk data wajah, local processing untuk mengurangi transmisi data sensitif, dan implementasi consent management yang transparan. Selain itu, kami juga mengintegrasikan anti-spoofing technology untuk mencegah penggunaan foto atau video untuk menipu sistem, memastikan bahwa hanya wajah manusia yang hidup yang dapat dikenali.\n\nKe depannya, regulasi seperti GDPR di Eropa dan UU Perlindungan Data Pribadi di Indonesia akan semakin membentuk cara teknologi face recognition dikembangkan dan diimplementasikan. Perusahaan yang dapat menyeimbangkan inovasi teknologi dengan perlindungan privasi akan menjadi yang terdepan dalam industri ini. Kami berkomitmen untuk terus berinovasi sambil menjaga kepercayaan dan privasi pengguna sebagai prioritas utama.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "8 min",
    tags: ["Face Recognition", "Privacy", "Biometric", "Ethics"],
  },
  article5: {
    id: "article5",
    title: "Tren Teknologi 2025: Yang Perlu Diketahui",
    category: "Teknologi",
    date: "5 Sep 2025",
    author: "Tim Research Arunika",
    excerpt:
      "Teknologi emerging yang akan mendominasi landscape digital di tahun 2025...",
    content:
      "Tahun 2025 menandai era baru dalam perkembangan teknologi digital, dengan beberapa tren yang akan mengubah cara kita bekerja, berkomunikasi, dan berinteraksi dengan dunia digital. Berdasarkan riset mendalam yang dilakukan tim Arunika Smart Link Data, kami mengidentifikasi beberapa teknologi kunci yang akan mendominasi landscape digital tahun ini.\n\nEdge Computing menjadi salah satu tren utama, di mana pemrosesan data dilakukan lebih dekat dengan sumber data. Ini mengurangi latency dan meningkatkan efisiensi, terutama untuk aplikasi IoT dan real-time analytics. Proyek smart agriculture yang kami kembangkan menggunakan edge computing untuk memproses data sensor tanah secara real-time, memungkinkan respons yang lebih cepat untuk sistem irigasi otomatis.\n\nQuantum Computing, meskipun masih dalam tahap awal, mulai menunjukkan potensi nyata untuk aplikasi enterprise. Teknologi ini akan sangat berdampak pada kriptografi dan keamanan data, mendorong pengembangan quantum-resistant encryption. Kami telah mulai mengintegrasikan quantum-safe cryptography dalam solusi blockchain terbaru kami.\n\nAugmented Reality (AR) dan Virtual Reality (VR) juga mengalami adopsi yang signifikan, tidak hanya untuk gaming tetapi juga untuk training, remote collaboration, dan customer experience. Kombinasi AR/VR dengan AI menciptakan pengalaman yang semakin immersive dan personal.\n\nSustainable Technology menjadi fokus utama, dengan green computing dan energy-efficient solutions menjadi prioritas. Kami melihat peningkatan demand untuk solusi teknologi yang tidak hanya efektif tetapi juga ramah lingkungan. Cloud providers mulai berkomitmen untuk menggunakan 100% renewable energy, dan ini akan mempengaruhi keputusan teknologi perusahaan ke depannya.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "9 min",
    tags: ["Technology Trends", "Edge Computing", "Quantum Computing", "AR/VR"],
  },
  article6: {
    id: "article6",
    title: "Implementasi DevOps dalam Proyek Enterprise",
    category: "Teknologi",
    date: "3 Sep 2025",
    author: "Agus Prasetyo",
    excerpt:
      "Best practices DevOps untuk meningkatkan efisiensi pengembangan software enterprise...",
    content:
      "DevOps telah menjadi metodologi standard dalam pengembangan software modern, memungkinkan tim development dan operations untuk bekerja lebih kolaboratif dan efisien. Di Arunika Smart Link Data, implementasi DevOps dalam proyek-proyek enterprise telah membantu kami mengurangi time-to-market hingga 60% sambil meningkatkan kualitas dan reliabilitas sistem.\n\nPendekatan DevOps yang kami terapkan meliputi Continuous Integration/Continuous Deployment (CI/CD), Infrastructure as Code (IaC), dan comprehensive monitoring. Untuk proyek blockchain supply chain tracking, kami menggunakan GitLab CI/CD pipeline yang terintegrasi dengan Kubernetes untuk automated testing dan deployment. Ini memungkinkan kami untuk melakukan deployment multiple kali per hari dengan risiko minimal.\n\nContainerization menggunakan Docker dan orchestration dengan Kubernetes menjadi foundation teknologi kami. Container memberikan konsistensi lingkungan dari development hingga production, sementara Kubernetes memastikan scalability dan high availability. Monitoring menggunakan Prometheus dan Grafana memberikan visibility real-time terhadap performa sistem dan memungkinkan proactive problem resolution.\n\nCultural transformation menjadi aspek yang tidak kalah penting dalam implementasi DevOps. Kami fokus pada collaboration, shared responsibility, dan continuous learning. Tim development dan operations bekerja bersama sejak tahap planning hingga maintenance, menghilangkan silos yang sering menjadi bottleneck dalam pengembangan software tradisional.\n\nSecurity juga terintegrasi dalam DevOps pipeline melalui DevSecOps practices. Automated security scanning, compliance checking, dan vulnerability assessment dilakukan di setiap stage pipeline, memastikan bahwa security tidak menjadi afterthought tetapi built-in dari awal pengembangan.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "7 min",
    tags: ["DevOps", "CI/CD", "Kubernetes", "Software Development"],
  },
};

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
  initializeBlogContent();
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
  const searchInput = document.getElementById("blogSearch");

  // Category filtering
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      // Update active button
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter blog items
      const searchTerm = searchInput ? searchInput.value : "";
      filterBlogItems(category, searchTerm);
    });
  });

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const activeCategory =
        document
          .querySelector(".category-btn.active")
          ?.getAttribute("data-category") || "all";
      filterBlogItems(activeCategory, this.value);
    });

    // Search on Enter key
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const activeCategory =
          document
            .querySelector(".category-btn.active")
            ?.getAttribute("data-category") || "all";
        filterBlogItems(activeCategory, this.value);
      }
    });
  }

  function filterBlogItems(category, searchTerm) {
    const blogItems = document.querySelectorAll(".blog-item");
    let visibleCount = 0;

    blogItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      const itemTitle =
        item.querySelector(".blog-title")?.textContent.toLowerCase() || "";
      const itemExcerpt =
        item.querySelector(".blog-excerpt")?.textContent.toLowerCase() || "";
      const itemTags = Array.from(item.querySelectorAll(".badge"))
        .map((badge) => badge.textContent.toLowerCase())
        .join(" ");

      // Improved category matching
      const categoryMatch =
        category === "all" ||
        itemCategory === category ||
        itemCategory === category.toLowerCase() ||
        itemCategory.toLowerCase() === category.toLowerCase();

      const searchMatch =
        searchTerm === "" ||
        itemTitle.includes(searchTerm.toLowerCase()) ||
        itemExcerpt.includes(searchTerm.toLowerCase()) ||
        itemTags.includes(searchTerm.toLowerCase());

      if (categoryMatch && searchMatch) {
        item.style.display = "block";
        item.classList.remove("hide");
        // Re-trigger AOS animation
        item.setAttribute("data-aos", "fade-up");
        visibleCount++;
      } else {
        item.style.display = "none";
        item.classList.add("hide");
      }
    });

    // Show "no results" message if no articles found
    showNoResultsMessage(visibleCount === 0, searchTerm, category);

    // Refresh AOS animations
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }

  function showNoResultsMessage(show, searchTerm, category) {
    let noResultsDiv = document.getElementById("no-results-message");

    if (show) {
      if (!noResultsDiv) {
        noResultsDiv = document.createElement("div");
        noResultsDiv.id = "no-results-message";
        noResultsDiv.className = "col-12 text-center py-5";
        document.getElementById("blog-grid").appendChild(noResultsDiv);
      }

      let message = "Tidak ada artikel yang ditemukan";
      if (searchTerm && category !== "all") {
        message += ` untuk pencarian "${searchTerm}" dalam kategori "${category}"`;
      } else if (searchTerm) {
        message += ` untuk pencarian "${searchTerm}"`;
      } else if (category !== "all") {
        message += ` dalam kategori "${category}"`;
      }

      noResultsDiv.innerHTML = `
        <div class="no-results-content">
          <i class="fas fa-search fa-3x text-muted mb-3"></i>
          <h5 class="text-muted">${message}</h5>
          <p class="text-muted">Coba kata kunci lain atau pilih kategori berbeda</p>
          <button class="btn btn-primary" onclick="resetBlogFilter()">
            <i class="fas fa-refresh me-2"></i>Reset Filter
          </button>
        </div>
      `;
    } else {
      if (noResultsDiv) {
        noResultsDiv.remove();
      }
    }
  }
}

// Blog Content Management
function initializeBlogContent() {
  preloadBlogImages();
  generateBlogCards();
  initializeReadMore();
}

function preloadBlogImages() {
  // Preload all blog images to prevent loading issues
  Object.values(blogArticles).forEach((article) => {
    const img = new Image();
    img.src = article.image;
    img.onerror = function () {
      console.warn(`Failed to load image for article: ${article.title}`);
    };
  });
}

function generateBlogCards() {
  const blogGrid = document.getElementById("blog-grid");
  if (!blogGrid) return;

  // Clear existing content
  blogGrid.innerHTML = "";

  // Generate blog cards from data
  Object.values(blogArticles).forEach((article, index) => {
    const blogCard = createBlogCard(article, index);
    blogGrid.appendChild(blogCard);
  });
}

function createBlogCard(article, index) {
  const col = document.createElement("div");
  col.className = "col-lg-4 col-md-6 blog-item";
  col.setAttribute("data-category", article.category.toLowerCase());
  col.setAttribute("data-aos", "fade-up");
  col.setAttribute("data-aos-delay", (index * 100).toString());

  const maxExcerptLength = 120;
  const truncatedExcerpt =
    article.excerpt.length > maxExcerptLength
      ? article.excerpt.substring(0, maxExcerptLength) + "..."
      : article.excerpt;

  // Fallback images berdasarkan kategori
  const fallbackImages = {
    ai: "https://via.placeholder.com/800x450/667eea/ffffff?text=AI+Technology",
    blockchain:
      "https://via.placeholder.com/800x450/764ba2/ffffff?text=Blockchain+Security",
    iot: "https://via.placeholder.com/800x450/667eea/ffffff?text=IoT+Smart+City",
    teknologi:
      "https://via.placeholder.com/800x450/f093fb/ffffff?text=Technology+Trends",
  };

  const fallbackUrl =
    fallbackImages[article.category.toLowerCase()] ||
    "https://via.placeholder.com/800x450/667eea/ffffff?text=Tech+Article";

  col.innerHTML = `
    <div class="blog-card h-100">
      <div class="blog-image">
        <img src="${article.image}" alt="${article.title}" class="img-fluid" 
             onerror="this.src='${fallbackUrl}'">
        <div class="blog-overlay">
          <span class="blog-category">${article.category}</span>
        </div>
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <span class="blog-date"><i class="fas fa-calendar me-1"></i>${
            article.date
          }</span>
          <span class="blog-read-time"><i class="fas fa-clock me-1"></i>${
            article.readTime
          }</span>
        </div>
        <h5 class="blog-title">${article.title}</h5>
        <p class="blog-excerpt">${truncatedExcerpt}</p>
        <div class="blog-tags mb-3">
          ${article.tags
            .map(
              (tag) =>
                `<span class="badge bg-primary bg-opacity-10 text-primary me-1">${tag}</span>`
            )
            .join("")}
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <small class="text-muted">By ${article.author}</small>
          <button class="read-more btn btn-primary btn-sm" onclick="openBlogModal('${
            article.id
          }')">
            Baca Selengkapnya <i class="fas fa-arrow-right ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  return col;
}

function initializeReadMore() {
  const readMoreButtons = document.querySelectorAll(".read-more");
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const articleId = this.getAttribute("data-article");
      if (articleId) {
        openBlogModal(articleId);
      }
    });
  });
}

// Blog Modal Functions
function openBlogModal(articleId) {
  const article = blogArticles[articleId];
  if (!article) return;

  // Create modal if it doesn't exist
  let modal = document.getElementById("blogModal");
  if (!modal) {
    modal = createBlogModal();
    document.body.appendChild(modal);
  }

  const modalTitle = modal.querySelector(".modal-title");
  const modalBody = modal.querySelector(".modal-body");

  modalTitle.textContent = article.title;

  // Fallback images berdasarkan kategori untuk modal
  const fallbackImages = {
    ai: "https://via.placeholder.com/800x400/667eea/ffffff?text=AI+Technology+Article",
    blockchain:
      "https://via.placeholder.com/800x400/764ba2/ffffff?text=Blockchain+Security+Article",
    iot: "https://via.placeholder.com/800x400/667eea/ffffff?text=IoT+Smart+City+Article",
    teknologi:
      "https://via.placeholder.com/800x400/f093fb/ffffff?text=Technology+Trends+Article",
  };

  const fallbackUrl =
    fallbackImages[article.category.toLowerCase()] ||
    "https://via.placeholder.com/800x400/667eea/ffffff?text=Technology+Article";

  modalBody.innerHTML = `
    <div class="blog-modal-content">
      <img src="${article.image}" alt="${
    article.title
  }" class="img-fluid rounded mb-4"
           onerror="this.src='${fallbackUrl}'">
      
      <div class="blog-modal-meta mb-4">
        <div class="row">
          <div class="col-md-6">
            <p class="mb-1"><i class="fas fa-user me-2 text-primary"></i><strong>Penulis:</strong> ${
              article.author
            }</p>
            <p class="mb-1"><i class="fas fa-calendar me-2 text-primary"></i><strong>Tanggal:</strong> ${
              article.date
            }</p>
          </div>
          <div class="col-md-6">
            <p class="mb-1"><i class="fas fa-folder me-2 text-primary"></i><strong>Kategori:</strong> ${
              article.category
            }</p>
            <p class="mb-1"><i class="fas fa-clock me-2 text-primary"></i><strong>Waktu Baca:</strong> ${
              article.readTime
            }</p>
          </div>
        </div>
      </div>

      <div class="blog-tags mb-4">
        ${article.tags
          .map(
            (tag) => `<span class="badge bg-primary me-2 mb-1">${tag}</span>`
          )
          .join("")}
      </div>

      <div class="blog-full-content">
        ${formatArticleContent(article.content)}
      </div>

      <div class="blog-sharing mt-4 pt-4 border-top">
        <h6 class="mb-3">Bagikan Artikel:</h6>
        <div class="social-share">
          <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            window.location.href
          )}" 
             target="_blank" class="btn btn-outline-primary btn-sm me-2">
            <i class="fab fa-facebook-f me-1"></i> Facebook
          </a>
          <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(
            article.title
          )}&url=${encodeURIComponent(window.location.href)}" 
             target="_blank" class="btn btn-outline-info btn-sm me-2">
            <i class="fab fa-twitter me-1"></i> Twitter
          </a>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            window.location.href
          )}" 
             target="_blank" class="btn btn-outline-primary btn-sm me-2">
            <i class="fab fa-linkedin-in me-1"></i> LinkedIn
          </a>
          <button class="btn btn-outline-secondary btn-sm" onclick="copyArticleLink()">
            <i class="fas fa-link me-1"></i> Copy Link
          </button>
        </div>
      </div>
    </div>
  `;

  const bsModal = new bootstrap.Modal(modal);
  bsModal.show();
}

function createBlogModal() {
  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = "blogModal";
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("aria-labelledby", "blogModalLabel");
  modal.setAttribute("aria-hidden", "true");

  modal.innerHTML = `
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="blogModalLabel">Blog Article</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Content will be dynamically inserted here -->
        </div>
      </div>
    </div>
  `;

  return modal;
}

function formatArticleContent(content) {
  // Split content into paragraphs and format them
  const paragraphs = content.split("\n\n");
  return paragraphs
    .map((paragraph) => {
      if (paragraph.trim()) {
        return `<p class="mb-3">${paragraph.trim()}</p>`;
      }
      return "";
    })
    .join("");
}

function copyArticleLink() {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      showNotification("Link artikel berhasil disalin!", "success");
    })
    .catch((err) => {
      console.error("Failed to copy link: ", err);
      showNotification("Gagal menyalin link artikel", "error");
    });
}

// Reset Blog Filter Function
function resetBlogFilter() {
  const searchInput = document.getElementById("blogSearch");
  const categoryButtons = document.querySelectorAll(".category-btn");

  // Reset search input
  if (searchInput) {
    searchInput.value = "";
  }

  // Reset category to "all"
  categoryButtons.forEach((btn) => btn.classList.remove("active"));
  const allButton = document.querySelector(
    '.category-btn[data-category="all"]'
  );
  if (allButton) {
    allButton.classList.add("active");
  }

  // Show all items
  const blogItems = document.querySelectorAll(".blog-item");
  blogItems.forEach((item) => {
    item.style.display = "block";
    item.classList.remove("hide");
  });

  // Remove no results message
  const noResultsDiv = document.getElementById("no-results-message");
  if (noResultsDiv) {
    noResultsDiv.remove();
  }
}

// Perform Blog Search Function
function performBlogSearch() {
  const searchInput = document.getElementById("blogSearch");
  if (searchInput) {
    const activeCategory =
      document
        .querySelector(".category-btn.active")
        ?.getAttribute("data-category") || "all";

    // Trigger the filter function
    const event = new Event("input");
    searchInput.dispatchEvent(event);

    // Show loading animation briefly
    searchInput.style.opacity = "0.5";
    setTimeout(() => {
      searchInput.style.opacity = "1";
    }, 300);
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
window.openBlogModal = openBlogModal;
window.copyArticleLink = copyArticleLink;
window.resetBlogFilter = resetBlogFilter;
window.performBlogSearch = performBlogSearch;
window.showNotification = showNotification;
