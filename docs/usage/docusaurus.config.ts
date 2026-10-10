import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// The usage docs: for developers using Camouflage in an app.
// The contributor docs are a separate site (docs/internal); this site links only to its Contributing section.
const INTERNAL_URL = process.env.CAMOUFLAGE_INTERNAL_URL ?? 'http://localhost:3000';

const config: Config = {
  title: 'Camouflage',
  tagline: 'One set of components. Your skin, your theme. Kotlin and Flutter.',
  favicon: 'img/favicon.ico',

  future: {
    // Docusaurus v4 compatibility, minus two flags 3.10 added to `v4: true`:
    // the generated pages use {#id} heading ids (MDX 1 compat), and the Faster bundler
    // would need @docusaurus/faster. Turn those on with Docusaurus v4.
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
      siteStorageNamespacing: true,
      fasterByDefault: false,
      mdx1CompatDisabledByDefault: false,
    },
  },

  url: process.env.CAMOUFLAGE_USAGE_URL ?? 'http://localhost:3001',
  baseUrl: '/',
  // Cloudflare Pages serves page.html at /page, so URLs have no trailing slash and no redirect.
  trailingSlash: false,

  organizationName: 'srctool',
  projectName: 'camouflage',

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    libraryVersions: {
      kotlin: ['latest'],
      dart: ['latest'],
    },
    internalUrl: INTERNAL_URL,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Camouflage',
      logo: {
        alt: 'Camouflage Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/docs', label: 'Docs', position: 'right'},
        {href: INTERNAL_URL + '/contributing', label: 'Contributing', position: 'right'},
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
          title: 'Docs',
          items: [{label: 'Introduction', to: '/docs'}],
        },
        {
          title: 'Platform',
          items: [
            {label: 'Kotlin/KMP', href: 'https://kotlinlang.org/docs/multiplatform.html'},
            {label: 'Flutter/Dart', href: 'https://flutter.dev'},
            {label: 'Compose Multiplatform', href: 'https://www.jetbrains.com/lp/compose-multiplatform/'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Contributing', href: INTERNAL_URL + '/contributing'},
            {label: 'GitHub', href: 'https://github.com/srctool/camouflage'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SRC Tool. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['kotlin', 'dart', 'groovy', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
