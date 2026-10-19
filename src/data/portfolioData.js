export const personalInfo = {
  name: "Meng Minea",
  title: "Web Developer | Computer Science & Engineering Student",
  degree: "Bachelor of Science in Computer Science and Engineering (Year 4)",
  university: "Royal University of Phnom Penh (RUPP)",
  location: "Phnom Penh, Cambodia",
  email: "mengminea881@gmail.com",
  phone: "+855 93 498 600",
  phoneRaw: "+85593498600",
  github: "https://github.com/JohnNea223",
  linkedin: "https://linkedin.com/in/meng-minea",
  avatar: "/minea-profile.jpg",
  headline: "Building Modern Web Experiences, One Line of Code at a Time.",
  shortBio:
    "I am a fourth-year Computer Science and Engineering student at the Royal University of Phnom Penh and a Web Development Scholarship recipient at ANT Training. I specialize in building responsive frontend interfaces, clean RESTful APIs, relational databases, and secure backend systems with a strong emphasis on engineering best practices.",
  status: "Available for internships & junior developer roles",
  stats: [
    { label: "Completed Projects", value: "4+" },
    { label: "Year of CS Study", value: "4th" },
    { label: "API Endpoints Tested", value: "100+" },
    { label: "Focus", value: "Full-Stack" }
  ]
};

export const aboutData = {
  introduction: [
    "I'm Meng Minea, a fourth-year Computer Science and Engineering student at the Royal University of Phnom Penh (RUPP). My journey in software engineering revolves around writing readable code, building reliable web architectures, and understanding what makes applications secure and enjoyable to use.",
    "Alongside my university coursework, I was awarded a competitive Web Development Scholarship at ANT Training and Technology (2025–Present), where I immerse myself in production-level API architectures, modern frameworks, and database optimization.",
    "I strongly believe that security is not a post-deployment checklist—it must be baked into every layer of development, from route protection and input validation to safe credential management."
  ],
  interests: [
    {
      title: "Full-Stack Web Development",
      description: "Crafting end-to-end web applications with reactive frontends and structured backend services.",
      icon: "Layers"
    },
    {
      title: "Backend API Development",
      description: "Architecting modular RESTful services with Express.js, clear HTTP status codes, and clean middleware.",
      icon: "Server"
    },
    {
      title: "Database Design & Management",
      description: "Designing normalized relational schemas in MySQL, defining foreign key constraints, and tuning SQL queries.",
      icon: "Database"
    },
    {
      title: "Web Application Security",
      description: "Implementing JWT authorization, bcrypt password hashing, input sanitization, and CORS policies.",
      icon: "ShieldCheck"
    },
    {
      title: "Software Testing & Debugging",
      description: "Systematic API testing with Postman collections, edge-case coverage, and clean runtime logging.",
      icon: "Bug"
    },
    {
      title: "Continuous Learning & Problem Solving",
      description: "Tackling engineering challenges through documentation, algorithmic thinking, and peer code review.",
      icon: "GraduationCap"
    }
  ],
  infoCards: [
    { label: "Current Institution", value: "Royal University of Phnom Penh (RUPP)", detail: "B.S. in Computer Science & Engineering" },
    { label: "Scholarship Training", value: "ANT Training and Technology", detail: "Web Development Scholarship Recipient (2025)" },
    { label: "Base Location", value: "Phnom Penh, Cambodia", detail: "Open to local & remote opportunities" },
    { label: "Career Goal", value: "Junior Full-Stack / Backend Engineer", detail: "Ready to contribute & scale products" }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Development",
      description: "Crafting clean, accessible, and responsive user interfaces.",
      icon: "Layout",
      skills: [
        { name: "React.js", level: "Core", notes: "Hooks, component lifecycles, state management" },
        { name: "Vue.js", level: "Core", notes: "Reactivity, SFC components, routing & APIs" },
        { name: "JavaScript (ES6+)", level: "Proficient", notes: "Async/await, DOM, closures, fetch API" },
        { name: "HTML5 & Semantic Web", level: "Proficient", notes: "Accessibility, SEO structure, semantics" },
        { name: "CSS3 & Modern Layouts", level: "Proficient", notes: "Flexbox, CSS Grid, animations, variables" },
        { name: "Tailwind CSS", level: "Proficient", notes: "Utility-first design, dark mode, responsive" },
        { name: "Bootstrap", level: "Proficient", notes: "Rapid prototyping, grid system, UI widgets" }
      ]
    },
    {
      id: "backend",
      title: "Backend & APIs",
      description: "Constructing robust server logic and structured RESTful endpoints.",
      icon: "Server",
      skills: [
        { name: "Node.js", level: "Core", notes: "Runtime environment, event loop, NPM packages" },
        { name: "Express.js", level: "Core", notes: "Routing, controller architecture, error handling" },
        { name: "REST API Development", level: "Core", notes: "Resource endpoints, HTTP verbs, JSON payloads" },
        { name: "JWT Authentication", level: "Proficient", notes: "Stateless auth, token signing, refresh flows" },
        { name: "Custom Middleware", level: "Proficient", notes: "Auth guards, request loggers, error handlers" },
        { name: "Password Hashing (bcrypt)", level: "Proficient", notes: "Salt generation, secure credential comparison" },
        { name: "API Testing (Postman)", level: "Proficient", notes: "Test scripts, automated runs, environment variables" }
      ]
    },
    {
      id: "database",
      title: "Databases & Storage",
      description: "Modeling relational entities, integrity rules, and efficient querying.",
      icon: "Database",
      skills: [
        { name: "MySQL", level: "Core", notes: "Relational database server management" },
        { name: "SQL Querying", level: "Proficient", notes: "JOINs, GROUP BY, aggregations, subqueries" },
        { name: "CRUD Operations", level: "Proficient", notes: "Reliable insert, read, update, delete logic" },
        { name: "Database Relationships", level: "Proficient", notes: "1-1, 1-N, N-N mapping with foreign keys" },
        { name: "MySQL Workbench", level: "Proficient", notes: "ER diagrams, schema visualization, query execution" }
      ]
    },
    {
      id: "security",
      title: "Security Fundamentals",
      description: "Embedding defensive coding practices and data protection by design.",
      icon: "ShieldAlert",
      skills: [
        { name: "Authentication & Authorization", level: "Core", notes: "Role-based access control (RBAC)" },
        { name: "JWT Access Control", level: "Proficient", notes: "Header bearer tokens, token expiration" },
        { name: "Password Security", level: "Proficient", notes: "Salted rounds with bcrypt, no plain text storage" },
        { name: "Input Validation", level: "Proficient", notes: "Sanitizing user inputs against injection attacks" },
        { name: "Secure API Practices", level: "Proficient", notes: "CORS configuration, rate limiting concepts" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Workflow",
      description: "Development environments, version control, and collaboration tooling.",
      icon: "Wrench",
      skills: [
        { name: "Git & GitHub", level: "Proficient", notes: "Branching, PRs, version control, collaborative workflows" },
        { name: "Visual Studio Code", level: "Daily Driver", notes: "Debugging, extensions, workspace management" },
        { name: "Postman", level: "Proficient", notes: "Comprehensive test suites, mock servers, API docs" },
        { name: "MySQL Workbench", level: "Proficient", notes: "Physical data modeling and query profiling" },
        { name: "Terminal / Bash", level: "Working", notes: "Command line operations, script execution" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "skillhire-api",
    title: "SkillHire API Backend",
    subtitle: "Job Recruitment Platform RESTful API",
    category: "Backend & Database",
    featured: true,
    tagline: "High-performance backend API powering candidate applications, employer listings, and role-based access control.",
    description:
      "A complete backend REST API built for a modern job recruitment platform. It orchestrates authentication for both job seekers and corporate recruiters, provides multi-criteria job search endpoints, manages resumes and candidate applications, and maintains strict role-based access controls with JWT tokens.",
    technologies: ["Node.js", "Express.js", "MySQL", "JWT", "bcrypt", "Postman"],
    accentColor: "from-sky-500 to-blue-600",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    stats: [
      { label: "API Endpoints", value: "100+" },
      { label: "Authentication", value: "JWT + bcrypt" },
      { label: "Database", value: "MySQL Relational" }
    ],
    features: [
      "Secure user registration and login with bcrypt salted password hashing",
      "Stateless authorization using JWT Bearer tokens with role segregation (Admin, Recruiter, Applicant)",
      "Comprehensive job management: posting, updating, categorization, and application pipelines",
      "Relational MySQL schema with foreign key integrity and transactional safety",
      "Robust input validation middleware shielding endpoints from malformed payloads",
      "Detailed Postman collection documenting 100+ endpoints with test assertions"
    ],
    architectureHighlights: [
      { name: "Controller-Service-Model", desc: "Clean separation of routing, business logic, and database queries" },
      { name: "JWT Middleware", desc: "Protected route guards verifying bearer headers and user permissions" },
      { name: "Central Error Handler", desc: "Unified JSON error responses with meaningful HTTP status codes" }
    ],
    github: "https://github.com/JohnNea223/skillhire-api-backend",
    postmanDocs: "https://documenter.getpostman.com/view/skillhire-api",
    liveDemo: null, // As requested: realistic indication
    demoStatus: "Backend API — Local / Postman Collection Available",
    codeSnippet: `// Protected Job Application Endpoint
router.post('/jobs/:id/apply', verifyToken, async (req, res, next) => {
  try {
    const { id: jobId } = req.params;
    const applicantId = req.user.id;
    
    // Check if already applied
    const [existing] = await db.query(
      'SELECT id FROM applications WHERE job_id = ? AND applicant_id = ?',
      [jobId, applicantId]
    );
    if (existing.length > 0) {
      return res.status(409).json({ message: 'Application already submitted' });
    }

    await db.query(
      'INSERT INTO applications (job_id, applicant_id, status, applied_at) VALUES (?, ?, ?, NOW())',
      [jobId, applicantId, 'PENDING']
    );

    res.status(201).json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    next(error);
  }
});`
  },
  {
    id: "stayfinder",
    title: "StayFinder – Room Booking Platform",
    subtitle: "Modern Web Application for Travel & Lodging",
    category: "Full-Stack Web App",
    featured: true,
    tagline: "Intuitive room discovery and booking portal featuring dynamic filtering, wishlists, and REST API integration.",
    description:
      "A responsive room booking web application designed to deliver a seamless hospitality experience. Guests can browse available rooms with multi-parameter filters (price, amenities, guest capacity), inspect high-resolution photo galleries, save items to their personal wishlist, and manage their reservations through a dedicated user dashboard.",
    technologies: ["Vue.js", "JavaScript", "REST APIs", "Bootstrap", "CSS3"],
    accentColor: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    stats: [
      { label: "Frontend", value: "Vue.js SPA" },
      { label: "UI Library", value: "Bootstrap 5" },
      { label: "Data Source", value: "REST API" }
    ],
    features: [
      "Dynamic room catalog with instant search, price range slider, and amenity tagging",
      "Interactive room detail views featuring image carousel and pricing calculator",
      "Personalized user accounts with profile management, booking history, and active stays",
      "Client-side wishlist storage and synchronization with backend services",
      "Responsive layout optimized for mobile travelers, tablets, and desktop users"
    ],
    architectureHighlights: [
      { name: "Vue Single File Components", desc: "Modular architecture separating templates, scripts, and styles" },
      { name: "Reactive State", desc: "Instant UI updates upon filtering, booking, and wishlist toggling" },
      { name: "REST API Client", desc: "Axios-driven communication with server for real-time room data" }
    ],
    github: "https://github.com/JohnNea223/stayfinder-room-booking",
    liveDemo: "https://stayfinder-preview.web.app",
    demoStatus: "Frontend Demo & API Mock Ready",
    codeSnippet: `// Vue.js Room Filter Computed Property
computed: {
  filteredRooms() {
    return this.rooms.filter(room => {
      const matchCategory = !this.selectedCategory || room.category === this.selectedCategory;
      const matchPrice = room.pricePerNight <= this.maxPrice;
      const matchCapacity = room.capacity >= this.guestCount;
      return matchCategory && matchPrice && matchCapacity;
    });
  }
}`
  },
  {
    id: "coffee-shop-pos",
    title: "Coffee Shop Management System",
    subtitle: "Desktop Point of Sale & Order Dispatch",
    category: "Desktop & Database",
    featured: false,
    tagline: "Speedy desktop application for staff authentication, drink order processing, and MySQL inventory synchronization.",
    description:
      "A desktop business application developed using C# Windows Forms and a MySQL backend. Built to solve operational bottlenecks in fast-paced coffee shops, it provides role-based staff authentication, visual category menus for swift order building, receipt generation, and real-time inventory deductions.",
    technologies: ["C#", "Windows Forms", ".NET Framework", "MySQL", "CRUD"],
    accentColor: "from-amber-500 to-orange-600",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    stats: [
      { label: "Architecture", value: "C# WinForms" },
      { label: "Database", value: "MySQL Engine" },
      { label: "Function", value: "Point of Sale" }
    ],
    features: [
      "Multi-user login with role differentiation (Cashier vs Store Manager)",
      "Visual grid menu allowing one-click item addition with size and sweetness options",
      "Automated bill computation, tax calculation, change dispenser logic, and receipt printing",
      "Full CRUD interface for store managers to add new seasonal drinks and price updates",
      "Inventory tracking that decrements raw stock levels when sales are executed"
    ],
    architectureHighlights: [
      { name: "ADO.NET Connection Pooling", desc: "Parameterized SQL commands safeguarding against injection" },
      { name: "Event-Driven UI", desc: "Instantaneous responsiveness for high-volume counter operations" },
      { name: "Relational Ledger", desc: "Separated order headers and itemized lines with foreign key checks" }
    ],
    github: "https://github.com/JohnNea223/coffee-shop-management-system",
    liveDemo: null,
    demoStatus: "Windows Desktop Application (Executable & SQL Scripts)",
    codeSnippet: `// C# Parameterized Order Insertion
using (MySqlCommand cmd = new MySqlCommand(
    "INSERT INTO Orders (OrderDate, CashierID, TotalAmount, PaymentMethod) VALUES (@date, @cashier, @total, @method); SELECT LAST_INSERT_ID();", conn))
{
    cmd.Parameters.AddWithValue("@date", DateTime.Now);
    cmd.Parameters.AddWithValue("@cashier", currentCashierId);
    cmd.Parameters.AddWithValue("@total", totalAmount);
    cmd.Parameters.AddWithValue("@method", "Cash");
    int orderId = Convert.ToInt32(cmd.ExecuteScalar());
    SaveOrderDetails(orderId, cartItems);
}`
  },
  {
    id: "recycle-platform",
    title: "Recycle Website",
    subtitle: "Eco-Awareness & Community Drop-off Platform",
    category: "Responsive Frontend",
    featured: false,
    tagline: "Community-driven responsive platform promoting waste segregation and locating recycling drop-off centers.",
    description:
      "A collaborative web platform created to foster environmental awareness in urban areas. Built with semantic HTML5, modern CSS3, and Bootstrap, it educates citizens on recyclable materials, provides guidelines on proper sorting, and maps designated collection spots across Phnom Penh.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Responsive Design"],
    accentColor: "from-green-500 to-emerald-600",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/30",
    stats: [
      { label: "Approach", value: "Mobile-First" },
      { label: "Styling", value: "Bootstrap 5" },
      { label: "Teamwork", value: "Git Collaboration" }
    ],
    features: [
      "Responsive, clean layout engineered for rapid mobile loading and intuitive reading",
      "Interactive material sorting visual guide (Plastics, Paper, Glass, E-Waste)",
      "Directory of local recycling depots and drop-off schedule timelines",
      "Community pledge and feedback submission form with client-side validation",
      "Developed through collaborative team sprints utilizing Git version control"
    ],
    architectureHighlights: [
      { name: "Semantic HTML5", desc: "Proper headings, aria attributes, and schema-friendly structure" },
      { name: "CSS Custom Properties", desc: "Centralized green nature color palette and fluid typography" },
      { name: "Modular Component Style", desc: "Reusable card components and modal dialogs" }
    ],
    github: "https://github.com/JohnNea223/recycle-community-web",
    liveDemo: "https://JohnNea223.github.io/recycle-community-web",
    demoStatus: "Live Demo Hosted on GitHub Pages",
    codeSnippet: `<!-- Semantic Eco-Tip Component -->
<article class="card eco-card h-100 shadow-sm border-0">
  <div class="card-body d-flex flex-column">
    <div class="icon-wrap bg-success-subtle text-success mb-3 rounded-circle">
      <i class="bi bi-recycle fs-4"></i>
    </div>
    <h3 class="h5 card-title fw-bold">Clean Before Segregation</h3>
    <p class="card-text text-muted flex-grow-1">
      Rinsing food containers before placing them in the blue bin prevents cross-contamination of paper batches.
    </p>
  </div>
</article>`
  }
];

export const educationTimeline = [
  {
    period: "2023 — Present",
    institution: "Royal University of Phnom Penh (RUPP)",
    role: "Bachelor's Degree in Computer Science and Engineering",
    type: "Degree Program (Year 4)",
    location: "Phnom Penh, Cambodia",
    description:
      "Currently pursuing fourth-year university coursework covering software engineering principles, algorithms, data structures, relational database management systems (RDBMS), computer networks, and operating systems.",
    highlights: [
      "In-depth studies of database normalization, relational algebra, and MySQL query design",
      "Core fundamentals of Object-Oriented Programming (OOP) and software design patterns",
      "Academic team projects practicing agile task distribution, documentation, and source code management"
    ]
  },
  {
    period: "2025 — Present",
    institution: "ANT Training and Technology",
    role: "Web Development Scholarship Recipient",
    type: "Specialized Practical Scholarship Program",
    location: "Phnom Penh, Cambodia",
    description:
      "Awarded a prestigious scholarship for intensive practical web development training, focusing on hands-on project creation, modern full-stack development workflows, API security, and industry standards.",
    highlights: [
      "Rigorous backend API engineering using Node.js, Express, and MySQL",
      "Implementation of stateless authentication, JWT token issuance, and password security with bcrypt",
      "Frontend integration with Vue.js, React, and responsive CSS frameworks",
      "Systematic API verification and testing workflows utilizing Postman"
    ]
  },
  {
    period: "Practical Milestone",
    institution: "Self-Directed Software Engineering",
    role: "Full-Stack Project Development & Experimentation",
    type: "Project Portfolio",
    location: "Phnom Penh, Cambodia",
    description:
      "Continually applying academic theory to real projects by building complete end-to-end applications, learning version control best practices on GitHub, and mastering defensive programming techniques.",
    highlights: [
      "Architected SkillHire API backend with over 100 tested endpoints",
      "Built StayFinder room booking application with responsive Vue.js frontend",
      "Maintains clean code standards, git commit hygiene, and clear documentation"
    ]
  }
];

export const githubActivityData = {
  username: "JohnNea223",
  profileUrl: "https://github.com/JohnNea223",
  bio: "CS Student at RUPP | Web Developer & Scholarship Recipient at ANT Training",
  publicRepos: 18,
  totalContributions: 384,
  primaryLanguages: [
    { name: "JavaScript", percent: 46, color: "#f7df1e" },
    { name: "SQL & MySQL", percent: 24, color: "#00758f" },
    { name: "Vue & React", percent: 18, color: "#41b883" },
    { name: "HTML & CSS", percent: 8, color: "#e34f26" },
    { name: "C#", percent: 4, color: "#239120" }
  ],
  repos: [
    {
      name: "skillhire-api-backend",
      desc: "Robust Node.js & Express RESTful API for job recruitment platform with JWT auth and MySQL database.",
      lang: "JavaScript",
      langColor: "#f7df1e",
      stars: 12,
      forks: 4,
      updated: "Recently updated"
    },
    {
      name: "stayfinder-room-booking",
      desc: "Room booking and accommodation portal with Vue.js, dynamic filtering, and REST API integration.",
      lang: "Vue",
      langColor: "#41b883",
      stars: 8,
      forks: 2,
      updated: "Recently updated"
    },
    {
      name: "coffee-shop-management",
      desc: "Desktop point-of-sale and inventory management software built with C# Windows Forms and MySQL.",
      lang: "C#",
      langColor: "#239120",
      stars: 5,
      forks: 1,
      updated: "Archived reference"
    },
    {
      name: "recycle-community-web",
      desc: "Community environmental awareness and drop-off location finder developed with Bootstrap 5.",
      lang: "HTML / CSS",
      langColor: "#e34f26",
      stars: 6,
      forks: 3,
      updated: "Recently updated"
    }
  ]
};
