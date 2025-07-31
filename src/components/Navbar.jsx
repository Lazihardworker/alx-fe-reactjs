/*import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <Link to="/" style={{ color: 'white', margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 10px' }}>About</Link>
      <Link to="/services" style={{ color: 'white', margin: '0 10px' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 10px' }}>Contact</Link>
    </nav>
  );
}
export default Navbar;*/

/*import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '10px 20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  margin: '0 15px',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default Navbar;*/

import { Link } from 'react-router-dom';

const linkStyle = {
  color: 'white',
  marginRight: '20px',
  textDecoration: 'none',
  fontWeight: 'bold',
};

function Navbar() {
  return (
    <nav style={{ background: '#222', padding: '10px', display: 'flex', justifyContent: 'center' }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;