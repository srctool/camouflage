import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Manual sidebar for Guide section
const sidebars: SidebarsConfig = {
  guideSidebar: [
    'intro',
    'ecosystem-architecture',
    {
      type: 'category',
      label: 'UI',
      collapsed: false,
      items: [
        'ui/getting-started',
        'ui/architecture',
        'ui/integrating-with-existing-app',
      ],
    },
    {
      type: 'category',
      label: 'Blueprint',
      collapsed: false,
      items: [
        'blueprint/getting-started',
        'blueprint/architecture',
        'blueprint/integrating-with-existing-app',
      ],
    },
    {
      type: 'category',
      label: 'Storybook',
      collapsed: false,
      items: [
        'storybook/getting-started',
        'storybook/architecture',
        'storybook/integrating-with-existing-app',
      ],
    },
  ],
};

export default sidebars;
