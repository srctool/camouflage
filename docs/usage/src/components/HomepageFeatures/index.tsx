import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {KotlinOnly, DartOnly} from '@site/src/components/LangContent';
import styles from './styles.module.css';

const FEATURES = [
  {
    title: 'Write a screen once',
    to: '/docs/concepts/skins-and-themes',
    text: 'What a component is stays fixed. How it looks comes from a swappable skin and a theme, so a screen never names a color.',
  },
  {
    title: 'Your brand, not a stock look',
    to: '/docs/getting-started/your-first-theme',
    text: 'A theme from one brand color, dark mode as a flag, your own font, and per-component overrides when a design asks for them.',
  },
  {
    title: '52 components',
    to: '/docs/components',
    text: 'Buttons, forms, pickers, tables, trees, dialogs, navigation and charts, with the same parameters in Kotlin and Dart.',
  },
  {
    title: 'Five skins, or your own',
    to: '/docs/skins',
    text: 'Material 3, Cupertino, Fluent, Carbon and Minimal. Switch with one line, or mix skins in one app.',
  },
  {
    title: 'Accessible by construction',
    to: '/docs/guides/accessibility',
    text: 'Roles, names, states, 48 dp touch targets, text scaling, right-to-left and reduced motion are built in, and tests check them.',
  },
  {
    title: 'Kotlin and Flutter',
    to: '/docs/getting-started/installation',
    text: 'Compose Multiplatform on Android, iOS, desktop and web; Flutter on six platforms. Pick a language once and every sample follows.',
  },
];

const SKINS = [
  ['material', 'Material'],
  ['cupertino', 'Cupertino'],
  ['fluent', 'Fluent'],
  ['carbon', 'Carbon'],
  ['minimal', 'Minimal'],
];

function Install(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Install, provide, build</Heading>
        <p className={styles.sectionLead}>Add the core and a skin, wrap the app once, and use components.</p>
        <div className={styles.codeWrap}>
          <KotlinOnly>
            <CodeBlock language="kotlin" title="build.gradle.kts">
{`implementation(platform("com.srctool.camouflage:camouflage-bom:0.1.0"))
implementation("com.srctool.camouflage:camouflage-core")
implementation("com.srctool.camouflage:camouflage-skin-material")`}
            </CodeBlock>
            <CodeBlock language="kotlin" title="App.kt">
{`CamouflageProvider(skin = MaterialSkin, theme = materialTheme(seed = brand)) {
    CamoButton("Sign up", onClick = { signUp() })
}`}
            </CodeBlock>
          </KotlinOnly>
          <DartOnly>
            <CodeBlock language="bash" title="terminal">
{`flutter pub add camouflage_core camouflage_skin_material`}
            </CodeBlock>
            <CodeBlock language="dart" title="main.dart">
{`CamouflageProvider(
  skin: materialSkin,
  theme: materialTheme(seed: brand),
  child: CamoButton(text: 'Sign up', onPressed: signUp),
)`}
            </CodeBlock>
          </DartOnly>
          <div className={styles.cta}>
            <Link className="button button--primary button--lg" to="/docs/getting-started/quick-start">
              Quick start
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/components">
              Browse components
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skins(): ReactNode {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>One screen, five skins</Heading>
        <p className={styles.sectionLead}>The same code, rendered by each skin. Change two arguments and the whole app changes.</p>
        <div className={styles.skins}>
          {SKINS.map(([key, name]) => (
            <Link key={key} className={styles.skin} to={`/docs/skins/${key}`}>
              <ThemedImage
                alt={`The ${name} skin`}
                sources={{
                  light: useBaseUrl(`/img/skins/${key}-light.png`),
                  dark: useBaseUrl(`/img/skins/${key}-dark.png`),
                }}
              />
              <div className={styles.skinName}>{name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {FEATURES.map((f) => (
              <Link key={f.title} className={styles.card} to={f.to}>
                <Heading as="h3">{f.title}</Heading>
                <p>{f.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Skins />
      <Install />
    </>
  );
}
