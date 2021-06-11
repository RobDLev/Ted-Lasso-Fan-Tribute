import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <img id="blue-skies" alt="Blue Skies" src="blueSkies.jpeg" />
      </div>
      <header className="clearfix">
        <img
          id="greyhounds-logo"
          alt="Greyhounds Logo"
          src="AFC Richmond Crest.png"
        />
        <div className="social_sharing">
          <a
            href="https://www.facebook.com/TedLassoSeason2/"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <img
              id="social-link"
              src="Facebook_logo_(square).png"
              alt="facebook link"
            />
          </a>
          <a
            href="https://twitter.com/afcrichmond?lang=en"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <img
              id="social-link"
              src="Twitter social icons - square - blue.png"
              alt="twitter link"
            />
          </a>
          <a
            href="https://www.instagram.com/afc_richmond/?hl=en"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <img
              id="social-link"
              src="Instagram_Glyph_Gradient_RGB.png"
              alt="instagram link"
            />
          </a>
          <a
            href="https://www.youtube.com/c/AppleTV/featured"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <img
              id="social-link"
              src="youtube_social_square_red.png"
              alt="youtube link"
            />
          </a>
        </div>
      </header>
      <nav id="nav-bar">
        <ul>
          <li>Covid-19</li>
          <li>Tickets</li>
          <li>Schedule</li>
          <li>News</li>
          <li>Videos</li>
          <li>Gameday</li>
          <li>Stadium</li>
          <li>Shop</li>
        </ul>
        <i id="search-icon" class="fas fa-search"></i>
      </nav>
    </div>
  );
}
