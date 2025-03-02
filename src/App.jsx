import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Navbar user={user} />
      <Home user={user} />
    </div>
  );
};

export default App;