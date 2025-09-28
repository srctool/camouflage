import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Camouflage',
  tagline: 'Cross-platform UI components for Kotlin and Dart',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'srctool', // Usually your GitHub org/user name.
  projectName: 'camouflage', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    // Update these lists to reflect published library versions.
    // The first entry is used as the default in the selector.
    libraryVersions: {
      kotlin: ['latest'],
      dart: ['latest'],
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guide',
        path: 'development/guide',
        routeBasePath: 'guide',
        sidebarPath: require.resolve('./development/guide/sidebars.ts'),
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'components',
        path: 'development/components',
        routeBasePath: 'components',
        sidebarPath: require.resolve('./development/components/sidebars.ts'),
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'development/api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./development/api/sidebars.ts'),
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contributing',
        path: 'contributing',
        routeBasePath: 'contributing',
        sidebarPath: require.resolve('./contributing/sidebars.ts'),
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/guide/intro',
            },
            {
              label: 'Components',
              to: '/components',
            },
            {
              label: 'API Reference',
              to: '/api',
            },
            {
              label: 'Ecosystem Architecture',
              to: '/guide/ecosystem-architecture',
            },
          ],
        },
        {
          title: 'Packages',
          items: [
            {
              label: 'Camouflage UI',
              to: '/guide/ui/architecture',
            },
            {
              label: 'Camouflage Blueprint',
              to: '/guide/blueprint/architecture',
            },
            {
              label: 'Camouflage Storybook',
              to: '/guide/storybook/architecture',
            },
          ],
        },
        {
          title: 'Platform',
          items: [
            {
              label: 'Kotlin/KMP',
              href: 'https://kotlinlang.org/docs/multiplatform.html',
            },
            {
              label: 'Flutter/Dart',
              href: 'https://flutter.dev',
            },
            {
              label: 'Compose Multiplatform',
              href: 'https://www.jetbrains.com/lp/compose-multiplatform/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/srctool/camouflage',
            },
            {
              label: 'Contributing',
              to: '/contributing',
            },
            {
              label: 'Release Notes',
              to: '/guide/releases',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SRC Tool. Built with Docusaurus.`,
    },
    navbar: {
      title: 'Camouflage',
      logo: {
        alt: 'Camouflage Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Development',
          position: 'right',
          items: [
            {label: 'Guide', to: '/guide'},
            {label: 'Components', to: '/components'},
            {label: 'API', to: '/api'},
          ],
        },
        {
          to: '/contributing',
          label: 'Contributing',
          position: 'right',
        },
        {
          href: 'https://discordapp.com/invite/docusaurus',
          label: 'Community',
          position: 'right',
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        // Version selector injected via swizzled Navbar Right content
        {
          href: 'https://github.com/srctool/camouflage',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/guide/intro',
            },
            {
              label: 'Components',
              to: '/components',
            },
            {
              label: 'API Reference',
              to: '/api',
            },
            {
              label: 'Ecosystem Architecture',
              to: '/guide/ecosystem-architecture',
            },
          ],
        },
        {
          title: 'Packages',
          items: [
            {
              label: 'Camouflage UI',
              to: '/guide/ui/architecture',
            },
            {
              label: 'Camouflage Blueprint',
              to: '/guide/blueprint/architecture',
            },
            {
              label: 'Camouflage Storybook',
              to: '/guide/storybook/architecture',
            },
          ],
        },
        {
          title: 'Platform',
          items: [
            {
              label: 'Kotlin/KMP',
              href: 'https://kotlinlang.org/docs/multiplatform.html',
            },
            {
              label: 'Flutter/Dart',
              href: 'https://flutter.dev',
            },
            {
              label: 'Compose Multiplatform',
              href: 'https://www.jetbrains.com/lp/compose-multiplatform/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/srctool/camouflage',
            },
            {
              label: 'Contributing',
              to: '/contributing',
            },
            {
              label: 'Release Notes',
              to: '/guide/releases',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SRC Tool. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
