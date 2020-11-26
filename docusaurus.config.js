module.exports = {
  title: "FIWL",
  tagline: "[Flexible Interactive Web Layout]",
  url: "https://fiwl-js.github.io/docs",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.svg",
  organizationName: "fiwl-js", // Change this when we have hosting
  projectName: "fiwl-docs",
  themeConfig: {
    navbar: {
      title: "FIWL [Pre-Alpha]",
      logo: {
        alt: "FIWL Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "intro/how_to_install",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        /*{ to: "blog", label: "Blog", position: "left" },*/
        {
          href: "https://github.com/fiwl-js/fiwl-js",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/fiwl-js/docs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/fiwl-js/docs/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
