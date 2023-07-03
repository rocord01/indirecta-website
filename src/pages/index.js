import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Affiliates from '@site/src/components/Affiliates';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <img src="/website/img/indirecta_logo_medium500_withPill.png" alt={siteConfig.title} class="hero__title"></img>
        <p className="hero__title">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Website`}
      description="Independent and Decentralized Roblox Tech Company">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Affiliates />
      </main>
    </Layout>
  );
}
