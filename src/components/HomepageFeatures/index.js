import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Independent',
    Svg: require('@site/static/img/independent.svg').default,
    description: (
      <>
        Indirecta always strives to be a safe and neutral space in the RTECH Community. You won't be judged nor controlled.
      </>
    ),
  },
  {
    title: 'Open source',
    Svg: require('@site/static/img/opensource.svg').default,
    description: (
      <>
        Indirecta's products are free and open source, allowing anyone to customize, fix, and improve their experience.
      </>
    ),
  },
  {
    title: 'Down to earth',
    Svg: require('@site/static/img/down_to_earth.svg').default,
    description: (
      <>
        Indirecta is always close to it's community, we'll always help each other!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
