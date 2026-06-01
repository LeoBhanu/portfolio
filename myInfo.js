// ============================================================
//  PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

// -----------------------------------------------------------
// PERSONAL INFO
// -----------------------------------------------------------
export const PERSONAL = {
  name: {
    full: 'Sai Bhanu Vardhan Reddy',
    first: 'Sai Bhanu',
    last: 'Vardhan Reddy',
    short: 'Bhanu',
  },
  title: 'Full Stack Developer',
  email: 'leobhanu888@gmail.com',
  phone: '+91 8247065499',
  location: 'Noida, India',
  bio: {
    hero: 'Full Stack Developer with <strong>6+ years</strong> crafting high-performance web apps, mobile experiences, and backend systems — from healthcare platforms to IoT dashboards.',
    about1: 'I\'m a Full Stack Developer based in Noida, India with <strong>6 years of hands-on experience</strong> building end-to-end digital products. From pixel-perfect React interfaces to robust Node.js backends, I love owning the full stack.',
    about2: 'Currently at <strong>Collance Technologies</strong>, I lead a cross-functional team delivering healthcare admin portals and mobile apps for US clients. My focus: shipping clean, performant, maintainable code that solves real business problems.',
    about3: 'When I\'m not coding, you\'ll find me playing chess, swimming, or mentoring the next generation of developers.',
  },
  availability: 'Open to opportunities',
}

// -----------------------------------------------------------
// HERO — Typewriter roles & stats
// -----------------------------------------------------------
export const HERO_ROLES = [
  'Full Stack Developer',
  'React Specialist',
  'Node.js Engineer',
  'Mobile App Developer',
  'UI/UX Enthusiast',
]

export const HERO_STATS = [
  { value: '6+', label: 'Years Experience' },
  { value: '4',  label: 'Companies' },
  { value: '3+', label: 'Products Shipped' },
]

export const HERO_CODE_LINES = [
  { key: 'name',     value: 'Sai Bhanu Vardhan Reddy' },
  { key: 'role',     value: 'Senior Software Developer' },
  { key: 'exp',      value: '6+ Years' },
  { key: 'location', value: 'Noida, India' },
]

// -----------------------------------------------------------
// ABOUT — Highlight cards
// -----------------------------------------------------------
export const ABOUT_HIGHLIGHTS = [
  { icon: '⚡', label: 'Performance',  desc: 'Optimized apps with 25–35% faster load times' },
  { icon: '🏥', label: 'Healthcare',   desc: 'HEDIS gap closure & lab management systems' },
  { icon: '📱', label: 'Mobile',       desc: 'iOS & Android apps on App Store & Play Store' },
  { icon: '🏗️', label: 'Architecture', desc: 'Scalable full-stack systems from scratch' },
]

// -----------------------------------------------------------
// SKILLS
// -----------------------------------------------------------
export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React',              level: 95 },
      { name: 'React Native',       level: 90 },
      { name: 'Next.js',            level: 82 },
      { name: 'TypeScript',         level: 85 },
      { name: 'JavaScript (ES6+)',  level: 95 },
      { name: 'HTML / CSS',         level: 90 },
      { name: 'Redux / RTK',        level: 88 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js',       level: 88 },
      { name: 'Express.js',    level: 85 },
      { name: 'FastAPI',       level: 80 },
      { name: 'Python',        level: 78 },
      { name: 'RESTful APIs',  level: 92 },
      { name: 'GraphQL',       level: 75 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL',   level: 82 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    icon: '🛠️',
    skills: [
      { name: 'AWS',                    level: 72 },
      { name: 'Git / GitHub',           level: 92 },
      { name: 'Jest (Testing)',         level: 80 },
      { name: 'Ant Design',             level: 88 },
      { name: 'App Store / Play Store', level: 78 },
    ],
  },
]

export const TECH_CLOUD = [
  'React', 'Node.js', 'FastAPI', 'TypeScript', 'Redux',
  'Next.js', 'MongoDB', 'MySQL', 'Jest', 'GraphQL',
  'AWS', 'Git', 'Python', 'Ant Design', 'React Native',
]

// -----------------------------------------------------------
// EXPERIENCE
// -----------------------------------------------------------
export const EXPERIENCES = [
  {
    id: 0,
    role: 'Senior Software Developer',
    company: 'Collance Technologies',
    period: 'June 2023 — Present',
    type: 'Full-time',
    stack: ['React', 'React Native', 'Node.js', 'FastAPI', 'AWS', 'AntD'],
    metric: { value: '35%', label: 'Faster UI Dev' },
    highlights: [
      'Managed and coordinated a cross-functional team of 10+ to develop and launch 3+ administrative portals and a mobile application serving U.S. healthcare clients.',
      'Built FastAPI & Node.js backends for user management, order processing, and reporting modules',
      'Designed multi-level admin portals for bulk lab order management with real-time performance dashboards',
      'Created a reusable AntD component library reducing frontend dev time by ~35%',
      'Deployed on AWS; published mobile apps to App Store and Google Play Store',
      'Designed a Jira-inspired task management & ticketing system for member issue tracking',
    ],
  },
  {
    id: 1,
    role: 'Senior Software Developer',
    company: 'Health Care At Home',
    period: 'Oct 2022 — May 2023',
    type: 'Full-time',
    stack: ['Next.js', 'React', 'Jest', 'A/B Testing'],
    metric: { value: '15%', label: 'Conversion Lift' },
    highlights: [
      'Developed & optimized a Next.js physiotherapy booking app — fast, SEO-friendly, and fully responsive',
      'Implemented comprehensive Jest unit tests, reducing regression issues pre-production',
      'Designed & integrated A/B testing scripts to analyze user interaction and improve UX',
      'Increased user conversion rates by ~15% through data-driven UX decisions',
    ],
  },
  {
    id: 2,
    role: 'Senior Software Developer',
    company: 'Neopay Technologies',
    period: 'Jan 2022 — Oct 2022',
    type: 'Full-time',
    stack: ['React', 'React Native', 'REST APIs'],
    metric: { value: '30%', label: 'Order Efficiency' },
    highlights: [
      'Coordinated with a team of 4+ junior devs building cross-platform mobile apps and admin web portal',
      'Built distributor–retailer order management apps with bulk orders, delivery tracking, and inventory control',
      'Improved order processing efficiency by 30% through streamlined workflows',
      'Built a centralized admin panel from scratch integrating analytics and automated status updates',
      'Mentored junior developers on React architecture and Git workflow best practices',
    ],
  },
  {
    id: 3,
    role: 'Software Development Engineer I',
    company: 'Cloud Collab Technologies',
    period: 'Feb 2020 — Jan 2022',
    type: 'Full-time',
    stack: ['React', 'Redux Toolkit', 'GraphQL', 'IoT'],
    metric: { value: '25%', label: 'Faster Load Time' },
    highlights: [
      'Built responsive admin dashboards for IoT device management with real-time monitoring',
      'Implemented Redux Toolkit state management for complex IoT data streams, reducing load time by ~25%',
      'Collaborated with backend teams to integrate APIs and visualize live device metrics',
      'Optimized frontend builds with modular component architecture for scalability',
      'Used Git/GitHub for version control across agile sprint workflows',
    ],
  },
]

// -----------------------------------------------------------
// EDUCATION
// -----------------------------------------------------------
export const EDUCATION = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    college: 'Chadalawada Ramanamma Engineering College, Tirupati',
    period: '2015 — 2019',
    score: '67% Aggregate',
    icon: '🎓',
  },
]

// -----------------------------------------------------------
// INTERESTS
// -----------------------------------------------------------
export const INTERESTS = [
  '♟️ Chess',
  '🏊 Swimming',
  '✈️ Traveling',
  '👨‍💻 Tech Mentor',
]

// -----------------------------------------------------------
// NAV LINKS
// -----------------------------------------------------------
export const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

// -----------------------------------------------------------
// CONTACT INFO (for the contact section cards)
// -----------------------------------------------------------
export const CONTACT_ITEMS = [
  { icon: '✉️', label: 'Email',    value: 'leobhanu888@gmail.com', href: 'mailto:leobhanu888@gmail.com' },
  { icon: '📞', label: 'Phone',    value: '+91 8247065499',         href: 'tel:+918247065499' },
  { icon: '📍', label: 'Location', value: 'Noida, India',           href: null },
]