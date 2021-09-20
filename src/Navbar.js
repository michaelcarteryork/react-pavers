import { Link } from 'react-router-dom'; 
const Navbar = ( {title} ) => {
    return (
      <nav className="component navbar">
      <h2>{title} component (title passed as prop from App.js)</h2>
        <div className="links-section">
          <div className="nav-section-heading">Test links:</div>
          <Link to = "/">Home</Link>
          <Link to ="/create">Submit entry</Link>
        </div>
        <div className="links-section">
          <div className="nav-section-heading">React demo - exercises:</div>
          <Link to = "/">Home</Link>
          <Link to ="/data-fetch-custom-hook">View exercises</Link>
          <Link to ="/demo-create">Add exercise</Link>
        </div>
        <div className="links-section">
          <div className="nav-section-heading">React demo - notes</div>
          <Link to = "/">Home</Link>
          <Link to ="/props-and-state">Props+State</Link>
          <Link to ="/lists">Local data</Link>
          <Link to ="/data-fetch">Data from JSON file</Link>
          <Link to ="/data-fetch-custom-hook">Use of custom hook</Link>
          <Link to ="/other">Other</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;