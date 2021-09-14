const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: "fabricators",
  tagline: 'Documentation Hub',
  url: 'https://docs.fabricators.ltd',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fabricators SRL', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "fabricators Docs Hub",
        logo: {
          alt: 'fabricators Docs Hub Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://fabricators.ltd',
            label: 'fabricators.ltd',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Docs',
          },
          {
            label: 'Contact us',
            position: 'right',
            to: '/docs/intro#support',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fabricatorsltd',
              },
              {
                label: 'Discord',
                href: 'https://ds.fabricators.ltd',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/fabricatorssrl',
              },
            ],
          },
          {
            title: 'Services',
            items: [
              {
                label: 'unified/ban',
                href: 'https://unifiedban.solutions',
              },
              {
                label: 'feedler',
                href: 'https://feedler.net',
              },
              {
                label: 'influencer.camp',
                href: 'https://influencer.camp',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} fabricators SRL. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
