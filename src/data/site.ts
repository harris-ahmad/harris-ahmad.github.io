// Facts used across pages. The master CV is the source of truth for anything here.

export const site = {
  name: 'Harris Ahmad',
  url: 'https://harrisahmad.dev',
  email: 'harrisah@buffalo.edu',
  location: 'Buffalo, NY',
  pronouns: 'he/him',
  description:
    'PhD CSE @ University at Buffalo | Transactions for distributed databases & microservices | Seeking SWE/research internships for Summer 2027',
  resume: '/files/Resume.pdf',
  // Cal.com booking link without the domain. An empty string hides the booking widget and links.
  calLink: 'harris-ahmad/30min' as string,
  ogImage: '/images/profile-pic.png',
  avatar: '/images/profile-pic-350.jpg',
  profiles: [
    { label: 'GitHub', href: 'https://github.com/harris-ahmad' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harris-ahmad1' },
    { label: 'Scholar', href: 'https://scholar.google.com/citations?hl=en&user=4AY0nvEAAAAJ' },
    { label: 'ORCID', href: 'https://orcid.org/0009-0008-5402-8398' },
  ],
} as const;

export const bookingEnabled = site.calLink !== '';

export const nav = [
  { key: 'research', label: 'Research', href: '/#research' },
  { key: 'projects', label: 'Projects', href: '/projects' },
  { key: 'writing', label: 'Writing', href: '/writing/' },
  { key: 'cv', label: 'CV', href: site.resume },
  ...(bookingEnabled ? [{ key: 'meet', label: 'Book a 1:1', href: '/meet' }] : []),
] as const;

export type NavKey = 'research' | 'projects' | 'writing' | 'cv' | 'meet';
