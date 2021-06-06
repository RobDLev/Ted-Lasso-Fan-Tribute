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
      </header>
      <nav id="main-menu">
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
      </nav>
    </div>
  );
}
