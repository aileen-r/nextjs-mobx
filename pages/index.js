import Link from 'next/link';

import initPage from '~/utils/initPage';
import FriendlyHello from '../components/FriendlyHello';

const HomePage = () => {
  return (
    <>
      <nav>
        <Link href="/about">
          <a title="About Page">About</a>
        </Link>
      </nav>
      <FriendlyHello />
    </>
  );
};

export default initPage(HomePage);
