import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import classList from '../../utils/classList';
import netflixLogo from '../../assets/images/netflix-logo.svg?url';
import tmdbLogo from '../../assets/images/tmdb-logo.svg?url';
import './styles.scss';

export default function Credits() {
  const [toggled, setToggled] = useState<boolean>(false);

  return (
    <div className={classList('credits', toggled && 'credits--active')}>
      <h3 className="credits__heading">Credits & Disclaimers</h3>
      <button
        className="credits__toggle"
        type="button"
        title="Credits"
        onClick={() => {
          setToggled((prev) => !prev);
        }}
      >
        <FontAwesomeIcon
          className="credits__toggle-icon"
          icon={faQuestionCircle}
        />
      </button>
      <ul className="credits__section-container">
        <li className="credits__section">
          <img
            className="credits__section-logo"
            src={netflixLogo as string}
            alt="Netflix logo."
          />
          <p className="credits__section-description">
            This application is a non-commercial UI focused clone of
            Netflix&apos;s website, it does not in any way represents
            sponsorship nor endorsement by{' '}
            <a href="https://www.netflix.com">Netflix</a>.
          </p>
        </li>
        <li className="credits__section">
          <img
            className="credits__section-logo"
            src={tmdbLogo as string}
            alt="TMDB logo."
          />
          <p className="credits__section-description">
            This application uses the{' '}
            <a href="https://www.themoviedb.org">TMDB</a> API but is not
            endorsed or certified by TMDB.
          </p>
        </li>
      </ul>
    </div>
  );
}
