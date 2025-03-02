import React from "react";
import { auth, googleProvider, signInWithPopup } from "../firebase";

const Auth = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={signInWithGoogle}
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
      >
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="Google Logo"
          className="w-6 h-6 mr-2"
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default Auth;