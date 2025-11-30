// Search data for command palette
const searchData = [
  // Page Sections
  {
    type: 'section',
    title: 'About Me',
    description: 'Learn about my background and research',
    url: '/#about',
    keywords: ['about', 'bio', 'background', 'phd', 'research']
  },
  {
    type: 'section',
    title: 'Skills & Technologies',
    description: 'Programming languages and tools',
    url: '/#skills',
    keywords: ['skills', 'tech', 'programming', 'languages', 'tools']
  },
  {
    type: 'section',
    title: 'Featured Projects',
    description: 'My notable projects and work',
    url: '/#projects',
    keywords: ['projects', 'code', 'github', 'work']
  },
  {
    type: 'section',
    title: 'Work Experience',
    description: 'Professional and research positions',
    url: '/#experience',
    keywords: ['experience', 'work', 'jobs', 'career']
  },
  {
    type: 'section',
    title: 'Publications',
    description: 'Research papers and publications',
    url: '/#publications',
    keywords: ['publications', 'papers', 'research', 'acm']
  },
  {
    type: 'section',
    title: 'Contact',
    description: 'Get in touch',
    url: '/#contact',
    keywords: ['contact', 'email', 'reach', 'connect']
  },

  // Projects
  {
    type: 'project',
    title: 'SimpleAuth',
    description: 'npm authentication package built on Passport.js',
    url: 'https://github.com/harris-ahmad/SimpleAuth',
    keywords: ['auth', 'authentication', 'npm', 'nodejs', 'passport']
  },
  {
    type: 'project',
    title: 'Data Structures & Algorithms',
    description: 'Comprehensive DSA implementations in multiple languages',
    url: 'https://github.com/harris-ahmad/DSA',
    keywords: ['dsa', 'algorithms', 'data structures', 'learning', 'code']
  },
  {
    type: 'project',
    title: 'Crypto Telegram Bot',
    description: 'Real-time cryptocurrency monitoring bot in Go',
    url: 'https://github.com/harris-ahmad/Crypto-Telegram-Bot-GO',
    keywords: ['crypto', 'bot', 'telegram', 'go', 'golang', 'cryptocurrency']
  },
  {
    type: 'project',
    title: 'Awaaz E Sehat',
    description: 'Flask-based eHealth platform',
    url: 'https://github.com/harris-ahmad/awaaz-e-sehat',
    keywords: ['health', 'flask', 'ehealth', 'medical', 'python']
  },

  // Experience
  {
    type: 'experience',
    title: 'Research Software Engineer @ UBuffalo',
    description: 'Distributed systems and concurrency protocols',
    url: '/work-experience',
    keywords: ['ubuffalo', 'research', 'distributed systems', 'go', 'cpp', 'nsf']
  },
  {
    type: 'experience',
    title: 'Software Engineer @ Linq.io',
    description: 'FastAPI, MongoDB, asset management for Walmart',
    url: '/work-experience',
    keywords: ['linq', 'fastapi', 'mongodb', 'walmart', 'backend']
  },
  {
    type: 'experience',
    title: 'System Engineer @ Its IT Group',
    description: 'Node.js, MongoDB, AR app development',
    url: '/work-experience',
    keywords: ['its it', 'nodejs', 'mongodb', 'websockets', 'ar']
  },
  {
    type: 'experience',
    title: 'Research @ Interactive Media Lab',
    description: 'AWS Lambda, Flask, medical transcription with GPT-4',
    url: '/work-experience',
    keywords: ['lums', 'aws', 'flask', 'lambda', 'gpt-4', 'ml']
  },

  // Skills
  {
    type: 'skill',
    title: 'Python',
    description: 'Programming language',
    url: '/#skills',
    keywords: ['python', 'programming', 'language']
  },
  {
    type: 'skill',
    title: 'Go',
    description: 'Programming language',
    url: '/#skills',
    keywords: ['go', 'golang', 'programming', 'language']
  },
  {
    type: 'skill',
    title: 'C/C++',
    description: 'Programming language',
    url: '/#skills',
    keywords: ['c', 'cpp', 'c++', 'programming', 'language']
  },
  {
    type: 'skill',
    title: 'JavaScript',
    description: 'Programming language',
    url: '/#skills',
    keywords: ['javascript', 'js', 'programming', 'language']
  },
  {
    type: 'skill',
    title: 'FastAPI',
    description: 'Python web framework',
    url: '/#skills',
    keywords: ['fastapi', 'python', 'backend', 'framework']
  },
  {
    type: 'skill',
    title: 'MongoDB',
    description: 'NoSQL database',
    url: '/#skills',
    keywords: ['mongodb', 'database', 'nosql']
  },
  {
    type: 'skill',
    title: 'AWS',
    description: 'Cloud platform',
    url: '/#skills',
    keywords: ['aws', 'cloud', 'amazon', 'lambda']
  },
  {
    type: 'skill',
    title: 'Distributed Systems',
    description: 'Research focus area',
    url: '/#skills',
    keywords: ['distributed', 'systems', 'research', 'concurrency']
  },

  // Publications
  {
    type: 'publication',
    title: 'Uncovering the Hidden Data Costs of Mobile YouTube Ads',
    description: 'ACM Web Conference 2024',
    url: '/files/ytafford-www\'24.pdf',
    keywords: ['youtube', 'ads', 'acm', 'www', 'paper', 'research']
  },

  // Pages
  {
    type: 'page',
    title: 'All Projects',
    description: 'View complete project portfolio',
    url: '/projects',
    keywords: ['projects', 'all', 'portfolio', 'code']
  },
  {
    type: 'page',
    title: 'Full Work Experience',
    description: 'Complete work history',
    url: '/work-experience',
    keywords: ['experience', 'work', 'jobs', 'history', 'full']
  },
  {
    type: 'page',
    title: 'All Publications',
    description: 'Research papers',
    url: '/publications',
    keywords: ['publications', 'papers', 'research', 'all']
  },
  {
    type: 'page',
    title: 'Resume / CV',
    description: 'Download my resume',
    url: '/files/Final_Resume-3.pdf',
    keywords: ['resume', 'cv', 'download', 'pdf']
  },

  // External Links
  {
    type: 'link',
    title: 'GitHub Profile',
    description: 'View my GitHub repositories',
    url: 'https://github.com/harris-ahmad',
    keywords: ['github', 'code', 'repos', 'profile']
  },
  {
    type: 'link',
    title: 'LinkedIn Profile',
    description: 'Connect on LinkedIn',
    url: 'https://www.linkedin.com/in/harris-ahmad-9a6266214',
    keywords: ['linkedin', 'profile', 'connect', 'network']
  },
  {
    type: 'link',
    title: 'Google Scholar',
    description: 'View my research publications',
    url: 'https://scholar.google.com/citations?hl=en&user=4AY0nvEAAAAJ',
    keywords: ['scholar', 'google', 'research', 'citations']
  },
  {
    type: 'link',
    title: 'Email Me',
    description: 'harrisah@buffalo.edu',
    url: 'mailto:harrisah@buffalo.edu',
    keywords: ['email', 'contact', 'mail']
  }
];
