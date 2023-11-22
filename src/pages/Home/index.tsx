import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/Navbar';
import Background from '../../components/Background';
import classList from '../../utils/classList';
import './styles.scss';

export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [inputActive, setInputActive] = useState<boolean>(email !== '');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="pg-home">
      <Background />
      <Navbar />
      <main className="onboard__wrapper">
        <div className="onboard">
          <h1 className="onboard__heading">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="onboard__subheading">Watch anywhere. Cancel anytime.</p>
          <form
            className="onboard__form"
            noValidate
            aria-label="Sign up for your membership."
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h3 className="onboard__form-heading">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="onboard__form-control-container">
              <div className="onboard__form-control-wrapper">
                <div
                  className={classList(
                    'onboard__form-control',
                    inputActive && 'onboard__form-control--active'
                  )}
                >
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    onFocus={() => {
                      setInputActive(true);
                    }}
                    onChange={({ target }) => {
                      setEmail(target.value);
                    }}
                    onBlur={() => {
                      if (!email) setInputActive(false);
                    }}
                    ref={inputRef}
                  />
                </div>
              </div>
              <button
                className="onboard__form-submit"
                type="submit"
                onClick={() => {
                  inputRef.current?.focus();
                }}
              >
                Get Started
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
