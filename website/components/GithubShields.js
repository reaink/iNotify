import React from 'react';
import styles from './GithubShields.less';

export default function GithubShields({ source }) {
  return (
    <div className={styles.shields}>
      {source.map((item, idx) => (
        <a key={`${idx}${item.href}`} href={item.href} target="_blank" without rel="noopener noreferrer">
          <img src={item.img} alt="" />
        </a>
      ))}
    </div>
  );
}