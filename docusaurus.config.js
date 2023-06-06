// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Indirecta',
  tagline: 'Independent and Decentralized Roblox Tech Company',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Indirecta-Technologies', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Indirecta Logo',
          src: 'img/indirecta_logo_medium500_withPill.png',
          style: {
            filter: "brightness(var(--icon-color))"
          }
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Events', position: 'left'},
          {
            href: "https://github.com/Indirecta-Technologies",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://discord.gg/xz4Xm8URcF",
            position: "right",
            className: "header-discord-link",
            "aria-label": "Discord server",
          },
          {
            href: "https://www.roblox.com/groups/5717887/Indirecta",
            position: "right",
            className: "header-roblox-link",
            "aria-label": "Roblox group",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'FOSD',
                to: '/docs/fosd',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Indirecta-Technologies',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/xz4Xm8URcF',
              },
              {
                label: 'Roblox',
                href: 'https://www.roblox.com/groups/5717887/Indirecta',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Events',
                to: '/blog',
              },
              {
                label: 'Hub Game',
                href: 'https://www.roblox.com/games/8290643959/Indirecta-Hub',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Indirecta Technologies, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
