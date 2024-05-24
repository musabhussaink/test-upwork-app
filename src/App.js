import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <ul className='nav-items'>
            <li className='nav-item'><a><span className='lbl'>Pricing</span></a></li>
            <li className='nav-item'><button aria-haspopup="true" aria-controls="menu--1" class="nav-item-btn" aria-label="Features submenu" role="menuitem" data-reach-menu-button="" type="button" id="menu-button--menu--1"><span class="NavigationSubmenuButton__label" title="Features">Features</span><svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="Icon-svg" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M4.677 10.364a2.313 2.313 0 0 0 0 3.271l9.688 9.688a2.313 2.313 0 0 0 3.27-3.271l-8.028-8.075 8.029-8.029a2.313 2.313 0 0 0-3.271-3.27z" fill="currentColor" fill-rule="evenodd"></path></svg></button></li>
            {/* <li className='nav-item'><a><span className='lbl'>Features</span></a></li> */}
            <li className='nav-item'><a><span className='lbl'>Company</span></a></li>
            <li className='nav-item'><a><span className='lbl'>Help</span></a></li>
            <li className='nav-item'><a><span className='lbl'>Sign up</span></a></li>
            <li className='nav-item'><a><span className='lbl'>Log in</span></a></li>
          </ul>
        </nav>
      </header>
      <aside className='aside'>
        <div className='div-1'>
          <div className='div-content'>
          <div class="terms_logo"></div>
          <h1 class="terms_intro">You're <span class="tc-title-exp">almost</span> there</h1>
          <p class="terms_info">To continue, please agree to our <a href="/explore/legal/terms">Terms of Service</a>, and acknowledge our <a href="/explore/legal/privacy">Privacy Policy</a>.</p>
          </div>
          <div class="transfer__footer"><button class="transfer__button">I agree</button></div>
        </div>
      </aside>
      <main className="App-main">
        <h2 className='App-title'>Welcome to WeTransfer</h2>
        <div className='App-title-2'>
        Transfer ideas. <br />
        <span className='App-title-2-long'>
        Transform the world.
        </span>
        </div>
        <p className='App-p-1'>
        By accepting our cookies, you directly help us to expand our pledge to the planet. This year alone, WeTransfer has committed to planting over 175,000 trees, and we’re just getting started. You’ll have a positive impact by simply experiencing our award-winning ads. 
        </p>
        <p className='App-p-2'>
        Our website uses cookies to improve performance, service, and to better understand your needs. By accepting our third-party cookies, we and our partners are able to offer you more relevant advertising on and outside of our website(s) and apps. Learn more about our 
        <a href='#'>Privacy Policy</a>
        </p>
        <div className='button-group'>
        <button type="button" class="accept-btn">I accept</button>
        <button type="button" class="cookies-btn">Manage cookies</button>
        <button type="button" class="cancel-btn">No thanks</button>
        </div>
      </main>
      <footer>
        <div class="bottom-text">Sea Trees</div>
      </footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
