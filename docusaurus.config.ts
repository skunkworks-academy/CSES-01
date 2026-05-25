import type {Config} from '@docusaurus/types';
import type {Options as PresetOptions, ThemeConfig} from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CSES-01',
  tagline: 'Cloud Security Envisioning & Strategy',
  favicon: 'img/favicon.svg',

  url: 'https://skunkworks-academy.github.io',
  baseUrl: '/CSES-01/',
  organizationName: 'skunkworks-academy',
  projectName: 'CSES-01',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/skunkworks-academy/CSES-01/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies PresetOptions,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      {name: 'keywords', content: 'Microsoft Defender for Cloud, CSPM, Microsoft Entra, Microsoft Sentinel, Zero Trust, Cloud Security, SC-900, SC-100, SC-5009'},
    ],
    navbar: {
      title: 'CSES-01',
      logo: {
        alt: 'Skunkworks Academy',
        src: 'img/favicon.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'courseSidebar', position: 'left', label: 'Course'},
        {to: '/labs/lab-01-defender-for-cloud-onboarding', label: 'Labs', position: 'left'},
        {to: '/assessments/knowledge-check', label: 'Assessments', position: 'left'},
        {
          href: 'https://learn.microsoft.com/en-us/collections/qrx3iqtkpwee6g?source=docs&sharingId=6319874F856A7FF8',
          label: 'Microsoft Learn Collection',
          position: 'right',
        },
        {
          href: 'https://github.com/skunkworks-academy/CSES-01',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course',
          items: [
            {label: 'Overview', to: '/course-overview'},
            {label: 'Learner Path', to: '/learner-path'},
            {label: 'Lab Guide', to: '/labs/lab-01-defender-for-cloud-onboarding'},
          ],
        },
        {
          title: 'Microsoft Security',
          items: [
            {label: 'Microsoft Defender for Cloud', href: 'https://learn.microsoft.com/en-us/azure/defender-for-cloud/'},
            {label: 'Microsoft Entra', href: 'https://learn.microsoft.com/en-us/entra/'},
            {label: 'Microsoft Sentinel', href: 'https://learn.microsoft.com/en-us/azure/sentinel/'},
          ],
        },
        {
          title: 'Skunkworks',
          items: [
            {label: 'Skunkworks Africa', href: 'https://www.skunkworks.africa/'},
            {label: 'Repository', href: 'https://github.com/skunkworks-academy/CSES-01'},
          ],
        },
      ],
      copyright: `Copyright Â© ${new Date().getFullYear()} Skunkworks Academy. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['powershell', 'bash', 'json', 'yaml'],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies ThemeConfig,
};

export default config;

