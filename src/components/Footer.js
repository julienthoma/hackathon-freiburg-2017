import React from 'react';
import { Link, withRouter } from 'react-router';

export default () => (
  <footer>
    <a href="#" title="Copyright">@Copyright</a>

    <div className="footer-social-bar">
        <a href="#" title="tweeter"><img src="http://icons.iconarchive.com/icons/brainleaf/round-social/64/twitter-icon.png" alt="twitter" /></a>
        <a href="#" title="facebook"><img src="http://icons.iconarchive.com/icons/brainleaf/round-social/64/facebook-icon.png" alt="facebook" /></a>
        <a href="#" title="RSS"><img src="http://icons.iconarchive.com/icons/brainleaf/round-social/64/rss-icon.png" alt="rss" /></a>
    </div>
  </footer>
)
