import Link from 'next/link';
import Avatar from './Avatar';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <header>
    <nav>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </nav>
    <Avatar/>
  </header>
);

export default Header;
