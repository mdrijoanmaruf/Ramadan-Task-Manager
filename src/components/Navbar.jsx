import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth"; // Import signInWithPopup from firebase/auth
import { FcGoogle } from "react-icons/fc";

const Navbar = ({ user }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    setShowLogoutPopup(true);
    setShowProfileDropdown(false);
  };

  const confirmLogout = async () => {
    await auth.signOut();
    setShowLogoutPopup(false);
  };

  const cancelLogout = () => {
    setShowLogoutPopup(false);
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider); // Use signInWithPopup from firebase/auth
      console.log("Sign-in result:", result);
    } catch (error) {
      console.error("Error signing in with Google:", error);
      alert(`Error signing in with Google: ${error.message}`);
    }
  };

  return (
    <>
      <div className="bg-gray-50">
        <nav className="max-w-7xl mx-auto p-4 text-gray-700 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">Ramadan Task</div>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="flex items-center space-x-2 focus:outline-none"
                  >
                  <span className='font-semibold text-[19px] hover:text-green-600' >{user.displayName || "User"}</span>
                  <img
                    src={user.photoURL || "https://via.placeholder.com/40"}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200 transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleSignInWithGoogle}
                className="bg-blue-500 text-white p-2 md:px-4 md:py-2 rounded-full md:rounded hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2"
              >
                <FcGoogle size={24} />
                <span className="hidden md:block font-[600]">Sign in with Google</span>
              </button>
            )}
          </div>
        </nav>
      </div>

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <p className="text-lg mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={confirmLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200"
              >
                Yes
              </button>
              <button
                onClick={cancelLogout}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;