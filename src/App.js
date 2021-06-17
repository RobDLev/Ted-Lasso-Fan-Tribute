import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container" id="background-picture">
        <div>
          <header>
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
          <nav className="navbar">
            <div className="container">
              <ul className="navbar-text">
                <li>Covid-19</li>
                <li>Tickets</li>
                <li>Schedule</li>
                <li>News</li>
                <li>Videos</li>
                <li>Gameday</li>
                <li>Stadium</li>
                <li>Shop</li>
              </ul>
              <i id="search-icon" className="fas fa-search"></i>
            </div>
          </nav>
        </div>
        <div>
          <main className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <img
                    src="images/goal celebration.jpeg"
                    className="card-img-top"
                    alt="Rojas and team celebrate his goal"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      BUY NOW: AFC Richmond vs. Birmingham City tickets for June
                      19
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="images/Lasso Special.png"
                    className="card-img-top"
                    alt="Rojas and team celebrate his goal"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      BUY NOW: AFC Richmond vs. Birmingham City tickets for June
                      19
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="images/jamie tartt me.jpeg"
                    className="card-img-top"
                    alt="Rojas and team celebrate his goal"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      BUY NOW: AFC Richmond vs. Birmingham City tickets for June
                      19
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
