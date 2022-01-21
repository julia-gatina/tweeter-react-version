import React from 'react';

function Navigation() {
  return (
    <nav>
      <span className="nav--text">tweeter</span>
      <div className="btn btn--scroll">
        <button className="btn__text btn--borderless btn__tweet" title="Compose Tweet">
          <span className="btn--bold">Write</span> a new tweet
          <i className="btn__icon fas fa-angle-double-down"></i>
        </button>
      </div>
  </nav>
  );
}

export default Navigation;