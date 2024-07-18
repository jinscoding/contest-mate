import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full p-2 mx-auto">
      <div className="container flex items-center justify-between mx-auto">
        <h2 className="font-bold text-orange-500">Contest-Mate</h2>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
