module.exports = {
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
  
  themeConfig: {
    colorMode:{
      disableSwitch: true,
    },

    navbar: {
      // title: 'Hashnode',
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
    // algolia: {

    //   apiKey: "b49750d742345b19c79e80a2e3e20312",
    //   indexName: "docs",
    //   appId: "AMERDMZM12",
    //   // Optional: see doc section bellow
    //   contextualSearch: false,

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   //... other Algolia params
    // },
    gtag: {
      trackingID: 'UA-69832919-13',
    },
    footer: {
      links: [
        {
          title: "联系人",
          items: [
            {
              label: "JLING20",
              href: "mailto:jason.ling@decathlon.com",
            },
            {
              label: "jason.ling@decathlon.com",
              href: "mailto:jason.ling@decathlon.com",
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
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: "https://github.com/Hashnode/support/edit/main/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
