module.exports = {
  siteTitle: 'IEEE Brainwaves',
  siteDescription:
    'IEEE Brainwaves is the official IEEE student branch of Dwarkadas J. Sanghvi College of Engineering.',
  siteKeywords: 'IEEE, DJSCE, IEEE Brainwaves, IEEE india',
  siteUrl: 'https://ieeedjsce.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'IEEE Brainwaves',
  location: 'New Delhi, IN',
  email: 'contact@ieeedjsce.com',
  googleForm: 'https://forms.gle/xfi1p6xkzmZJJCL4A',
  newsletter: 'https://app.luminpdf.com/viewer/6069a3d379280c0012321765',
  medium: 'https://ieeebrainwaves.medium.com/',
  github: 'https://github.com/IEEE-Brainwaves',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/IEEE-Brainwaves',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/companies/IEEE-Brainwaves',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ieee_djscoe',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Technologies',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#29aae6',
  navyColor: '#29aae6',
  darkNavyColor: '#0a192f',
  darkestNavyColor: '#0a192f',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
