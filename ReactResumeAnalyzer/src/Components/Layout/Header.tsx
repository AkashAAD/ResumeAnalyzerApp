import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
  return(
    <>
      <header className="bg-gray-600 text-white py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <img src={`${logo}`} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold">Resume Analyzer</span>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link to={'/'} className="hover:text-gray-300">Home</Link>
            <Link to={'/resume-analyzer'} className="hover:text-gray-300">Resume Analyzer</Link>
          </nav>

          <div className="hidden md:flex space-x-4">
            <Link to={'/sign-up'} className="px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-800">Sign In</Link>
            <Link to={'/sign-in'} className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">Sign Up</Link>
          </div>

          <button className="md:hidden text-white focus:outline-none">
            ☰
          </button>
        </div>
      </header>
    </>
  )
}

export default Header;
