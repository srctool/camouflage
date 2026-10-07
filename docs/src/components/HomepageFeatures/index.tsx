import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Write the component once',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        What a component is stays fixed; how it looks comes from a swappable Skin plus a Theme.
        A new app gets a new Theme, not new components. See the <Link to="/guide">Overview</Link>.
      </>
    ),
  },
  {
    title: 'Your brand, not a stock look',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Theme tokens and component themes cover most designs; borrow one component from another skin
        when a design asks for it. See <Link to="/guide/foundations/theme">Theme</Link> and{' '}
        <Link to="/guide/skins">Skins</Link>.
      </>
    ),
  },
  {
    title: 'Kotlin and Flutter alike',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The same components and parameters on Compose Multiplatform and Flutter. Pick your language in the
        sidebar to see its implementation. Browse the <Link to="/components">Components</Link>.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
