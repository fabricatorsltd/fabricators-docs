/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  to: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Complete Telegram solution',
    image: '/img/unifiedban.svg',
    to: '/docs/unifiedban/index',
    description: (
      <>
        Keep your users safe and manage your group with the most advanced, 
        comprehensive and free solution.
      </>
    ),
  },
  {
    title: 'Automate your news flows',
    image: '/img/feedler.svg',
    to: '/docs/feedler/index',
    description: (
      <>
        Publish news from one or more sources on one or more platforms, 
        automatically, easily and controlled.
      </>
    ),
  },
  {
    title: 'Managed services',
    image: '/img/fabricators.svg',
    to: '/docs/managed-services/index',
    description: (
      <>
        Learn how to use Plesk and other platforms we offer with 
        managed services.
      </>
    ),
  },
];

function Feature({title, to, image, description}: FeatureItem) {
  return (
    <div className={clsx('card')}>
      <Link to={to}>
        <div className="text--center">
          <img className={styles.featureSvg} alt={title} src={image} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row cards">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
