import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

       useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const token = localStorage.getItem("token");
    const storedUserData = localStorage.getItem("userData");

    if (token) {
      setIsLoggedIn(true);
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    setUserData(null);
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
            <img src="/logo.png" alt="TuteDude" className="h-8 w-auto mr-2" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-200">
              Home
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/my-videos" className="text-gray-700 hover:text-blue-600 transition duration-200">
                  My Videos
                </Link>
                <div className="relative group">
                  <Link to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200">
                    <FaUser className="text-lg" />
                    <span>{userData?.username || 'Course Page'}</span>
                  </Link>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 transition duration-200"
                >
                  Login
                </Link>
                <Link
                  to={isLoggedIn ? "/profile" : "/register"} // Redirect to profile if logged in
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-200"
                >
                  {isLoggedIn ? "Go to Profile" : "Sign Up"}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 transition duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 space-y-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 rounded transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  to="/my-videos"
                  className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 rounded transition duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Videos
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 rounded transition duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaUser />
                  <span>{userData?.username || 'Profile'}</span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 w-full text-left text-red-500 hover:text-red-600 hover:bg-gray-50 px-4 py-2 rounded transition duration-200"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 rounded transition duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to={isLoggedIn ? "/profile" : "/register"} // Redirect to profile if logged in
                  className="block bg-blue-600 text-white text-center px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {isLoggedIn ? "Go to Profile" : "Sign Up"}
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;