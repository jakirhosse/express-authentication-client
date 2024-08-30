import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <Link to="/signup" className="text-white hover:text-gray-300">
          Sign Up
        </Link>
        <Link to="/login" className="text-white hover:text-gray-300">
          Login
        </Link>
        {/* <Link to="/login" className="text-white hover:text-gray-300">
          Login
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
