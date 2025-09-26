import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Manual sidebar for Guide section
const sidebars: SidebarsConfig = {
  guideSidebar: [
    'intro',
    {
      type: 'category',
      label: 'UI',
      collapsed: false,
      items: [
        'ui/getting-started',
        'ui/integrating-with-existing-app',
      ],
    },
    {
      type: 'category',
      label: 'Blueprint',
      collapsed: false,
      items: [
        'blueprint/getting-started',
        'blueprint/integrating-with-existing-app',
      ],
    },
    {
      type: 'category',
      label: 'Storybook',
      collapsed: false,
      items: [
        'storybook/getting-started',
        'storybook/integrating-with-existing-app',
      ],
    },
  ],
};

export default sidebars;
