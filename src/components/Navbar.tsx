import React from 'react';

const Navbar: React.FC = () => {
  // const location = useLocation();

  return (
    <nav className="bg-gray-800 text-white p-0 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="font-bold text-xl">現在地表示テスト ランダムな位置を周りに5個置く</div>

        <div className="flex space-x-4">
          {/* <Link
            to="/"
            className={`hover:text-blue-300 transition-colors ${location.pathname === '/' ? 'text-blue-300 font-medium' : ''}`}
          >
            ホーム
          </Link>
          <Link
            to="/about"
            className={`hover:text-blue-300 transition-colors ${location.pathname === '/about' ? 'text-blue-300 font-medium' : ''}`}
          >
            About
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;