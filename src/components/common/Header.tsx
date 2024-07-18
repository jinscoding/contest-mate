import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='w-full bg-blue-950 mx-auto p-2'>
      <div className='container mx-auto flex justify-between items-center'>
        <h2 className='font-bold text-orange-500'>Contest-Mate</h2>
        <nav>
          <ul className='text-white flex gap-4'>
            <li className='hover:text-orange-500'>
              <Link to='/'>홈</Link>
            </li>
            <li className='hover:text-orange-500'>
              <Link to='/login'>로그인</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
