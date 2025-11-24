export const navigation = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Products',
    href: '/products',
    children: [
      {
        name: 'MIG Flow',
        href: '/products/mig-flow',
        description: 'Workflow automation'
      },
      {
        name: 'MIG Scout',
        href: '/products/mig-scout',
        description: 'Data scraping & pipelines'
      },
      {
        name: 'MIG AI Desk',
        href: '/products/mig-ai-desk',
        description: 'AI agents & chatbots'
      },
      {
        name: 'MIG Social',
        href: '/products/mig-social',
        description: 'Social media automation'
      },
    ]
  },
  {
    name: 'Academy',
    href: '/academy',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Resources',
    href: '/resources',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export const footerNavigation = {
  main: [
    { name: 'Products', href: '/products' },
    { name: 'Academy', href: '/academy' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  products: [
    { name: 'MIG Flow', href: '/products/mig-flow' },
    { name: 'MIG Scout', href: '/products/mig-scout' },
    { name: 'MIG AI Desk', href: '/products/mig-ai-desk' },
    { name: 'MIG Social', href: '/products/mig-social' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}