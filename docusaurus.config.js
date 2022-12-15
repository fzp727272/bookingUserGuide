// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "User Guide",
    tagline: "",
    url: "https://support.hashnode.com/",
    baseUrl: "/",
    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "ignore",
    favicon:
      "img/favicon.ico",
    organizationName: "decathlon paltform", // Usually your GitHub org/user name.
    projectName: "user guide", // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      colorMode:{
        disableSwitch: true,
      },
      navbar: {
        logo: {
            alt: "Hashnode Support Loo",
            src:
              "img/logoShow.png",
            srcDark:
              "img/logoShow.png",
          },
          hideOnScroll: false,
          items: [
            {
              href: "https://web-pr.backoffice.allforsport.cn/",
              label: "进入管理后台",
              position: "right",
            },
          ],
      },
      footer: {
        links: [
            {
              title: "联系人",
              items: [
                {
                  label: "BLIU23",
                  href: "mailto:brand.liu@decathlon.com",
                },
                {
                  label: "brand.liu@decathlon.com",
                  href: "mailto:brand.liu@decathlon.com",
                },
            
                // {
                //   label: "Twitter",
                //   href: "https://twitter.com/hashnode",
                // },
                // {
                //   label: "Discord",
                //   href: "https://discord.gg/qsAQfxX",
                // },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()}  Decathlon Platform`,
       
        },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
