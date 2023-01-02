import './SiteContainer.css';

import { Link } from 'react-router-dom';
import React from 'react';
import SocialMediaLinks from './components/SocialMediaLinks';

interface SiteContainerProps {
  children: React.ReactNode;
}

function SiteContainer({ children }: SiteContainerProps) {
  return (
    <div className="site-container">
      <header>
        <div className="header-upper">
          <h1>Being Not Thinking</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/travel">Travel</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="header-lower">
          <p className="page-title">Patrick and Michaela</p>
          <p className="page-summary">A Lifestyle blog discussing Traveling, Healing, and Living differently</p>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>© 2021 BeingNotThinking</p>
        <SocialMediaLinks />
      </footer>
    </div>
  );
}

export default SiteContainer;
