import React from 'react'

import './Footer.css'
import InstagramFeed from './InstagramFeed'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2>
    <br />
    // <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://www.youtube.com/channel/UCAhrQnqRvvTyPhHWeuB3wnw?">
            Francesca Costa
          </a>
          .
        </span>
      </div>
    </footer>
  </div>
)
