import React from 'react';
import bgSmall from '../../assets/images/bg-sm.jpg';
import bgMedium from '../../assets/images/bg-md.jpg';
import bgLarge from '../../assets/images/bg-lg.jpg';
import './styles.scss';

export default function Background() {
  return (
    <div className="bg">
      <img
        className="bg__img"
        src={bgSmall as string}
        srcSet={`${bgSmall as string} 1000w,
                 ${bgMedium as string} 1500w,
                 ${bgLarge as string} 1800w`}
        sizes="(max-width: 500px) 1000px"
        alt="Grid of movie and tv show covers."
      />
      <div className="bg__overlay" />
    </div>
  );
}
