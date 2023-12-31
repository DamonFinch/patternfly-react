// This module is shared between NodeJS and babelled ES5
module.exports = {
  pathPrefix: '',
  hasGdprBanner: false,
  hasFooter: false,
  hasVersionSwitcher: false,
  hasDarkThemeSwitcher: true,
  hasRTLSwitcher: true,
  hasDesignGuidelines: false,
  sideNavItems: [
    { section: 'get-started' },
    { section: 'developer-resources' },
    { section: 'charts' },
    { section: 'components' },
    { section: 'patterns' },
    { section: 'layouts' }
  ],
  topNavItems: [{ text: 'Icons', path: '/icons' }],
  port: 8002
};
