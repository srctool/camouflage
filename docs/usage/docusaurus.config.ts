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
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // Search runs in the browser over an index built at build time; no service to run.
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

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
          sidebarCollapsed: false,
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
        {to: '/docs/getting-started/installation', label: 'Get started', position: 'right'},
        {to: '/docs/components', label: 'Components', position: 'right'},
        {to: '/docs/skins', label: 'Skins', position: 'right'},
        {to: '/docs/theming/colors', label: 'Theming', position: 'right'},
        {to: '/docs/guides/accessibility', label: 'Guides', position: 'right'},
        {href: INTERNAL_URL + '/contributing', label: 'Contributing', position: 'right'},
        {type: 'search', position: 'right'},
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
          items: [
            {label: 'Get started', to: '/docs/getting-started/installation'},
            {label: 'Components', to: '/docs/components'},
            {label: 'Skins', to: '/docs/skins'},
            {label: 'Theming', to: '/docs/theming/colors'},
            {label: 'Accessibility', to: '/docs/guides/accessibility'},
          ],
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
            {label: 'Changelog', to: '/docs/resources/changelog'},
            {label: 'Kotlin on Maven Central', href: 'https://central.sonatype.com/search?q=com.srctool.camouflage'},
            {label: 'Flutter on pub.dev', href: 'https://pub.dev/publishers/srctool.com/packages'},
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
