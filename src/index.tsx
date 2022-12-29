import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './pages/Contact';
import Content from './posts/content.mdx';
import Home from './pages/Home';
import React from 'react';
import ReactDOM from 'react-dom/client';
import SiteContainer from './SiteContainer';
import WhoIsBeingNotThinking from './posts/who-is-beingnotthinking.mdx'
import WhyBeingNotThinking from './posts/why-being-not-thinking.mdx'
import WhyWeChoseVanlife from './posts/why-we-chose-vanlife.mdx'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <SiteContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts/who-is-beingnotthinking" element={<WhoIsBeingNotThinking />} />
            <Route path="/posts/why-being-not-thinking" element={<WhyBeingNotThinking />} />
            <Route path="/posts/why-we-chose-vanlife" element={<WhyWeChoseVanlife />} />
            <Route path="/content" element={<Content />} />
          </Routes>
        </SiteContainer>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
