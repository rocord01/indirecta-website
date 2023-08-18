import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const AffiliateList = [
  {
    title: 'Pointcove',
    image: 'img/partners/pointcove.png',
    roblox: 'https://www.roblox.com/groups/9161949',
  },
  {
    title: 'Mix',
    image: 'img/partners/mix_group.png',
    roblox: 'https://www.roblox.com/groups/15539795',
  },
  {
    title: 'FORUM',
    image: 'img/partners/forum.png',
    roblox: 'https://www.roblox.com/groups/7822503',
  },
  {
    title: 'A.R.T.S. Laboratories',
    image: 'img/partners/A.R.T.S._LABS_Logo.png',
    roblox: 'https://www.roblox.com/groups/15202088/A-R-T-S-Laboratories',
  }, 
  {
    title: 'Runway Studios',
    image: 'img/partners/RWStudios_Logo_nobg.png',
    roblox: 'https://www.roblox.com/groups/16435914/RW-Runway-Studios',
  },
  {
    title: 'Scada',
    image: 'img/partners/Scada_Logo.png',
    roblox: 'https://www.roblox.com/groups/5791519/Scada-Control-Systems',
  },
  {
    title: 'PIXI',
    image: 'img/partners/PIXI_Logo_White.png',
    roblox: 'https://www.roblox.com/groups/32843611/PIXI-Technologies',
  },
  {
    title: 'NetPox',
    image: 'img/partners/net_group_logo.png',
    roblox: 'https://discord.gg/sNJpRzEVva',
  },
   {
    title: 'Firetech Industries',
    image: 'img/partners/firetech_industries_logo_graywhite.png',
    roblox: 'https://www.roblox.com/groups/10963282/FireTech-Development-Studios#!/about',
  },
   {
    title: 'Exascale',
    image: 'img/partners/exascale.png',
    roblox: 'https://www.roblox.com/groups/8536147/Exasale#!/about',
  },
];

function Feature({image, title, roblox}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <a href={roblox}> <img alt={title} src={image} className={styles.featureSvg} role="img" /> </a>
      </div>

    </div>
  );
}

export default function Affiliates() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {AffiliateList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
