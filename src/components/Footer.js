import React from 'react'

import './Footer.css'
import InstagramFeed from './InstagramFeed'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <div>
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
