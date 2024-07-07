import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='w-full mx-auto p-2'>
      <div className='container mx-auto flex justify-between items-center'>
        <h2 className='font-bold text-orange-500'>Contest-Mate</h2>
        <nav>
          <ul className='flex gap-4'>
            <li>
              <Link to='/'>홈</Link>
            </li>
            <li>
              <Link to='/login'>로그인</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
