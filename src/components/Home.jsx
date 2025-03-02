import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Dashboard from "./Dashboard"; // Import the Dashboard component
import DashboardFrontEnd from "./DashboardFrontEnd"; // Import the DashboardFrontEnd component
import Auth from "./Auth"; // Import the Auth component for the login popup

const tasks = [
  "তাহাজ্জুদ পড়েছি",
  "সাহরী করেছি",
  "৫ ওয়াক্ত সালাত আদায় করেছি",
  "সকাল সন্ধ্যায় জিকির করেছি",
  "কমপক্ষে ৩ সূরা কুরআন তেলাওয়াত করেছি",
  "কমপক্ষে ১০০ বার দুরূদ পড়েছি",
  "কমপক্ষе ১০০ বার ইস্তেগফার পড়েছি",
  "ফরজ সালাত শেষে দোয়া ও জিকির করেছি",
  "চোখের হিফাজত করার চেষ্টা করেছি",
  "প্রোডাক্টিভ ৩টি কাজ করেছি",
  "সুন্নাহ অনুসরণ করে ইফতার করেছি",
  "সালাতে একাগ্রতা ধরে রাখার চেষ্টা করেছi",
  "ঘুমানোর আগে আমল ও মূলক তেলাওয়াত করেছি",
  "তারাবীহ পড়েছি",
  "আয়ানের জবাব দিয়েছি",
  "দোয়া করেছি",
];

const Home = () => {
  const [user, setUser] = useState(null);
  const [taskData, setTaskData] = useState([]);
  const [currentTime, setCurrentTime] = useState("");
  const [bangladeshiTime, setBangladeshiTime] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchTaskData(user.uid);
        setShowLoginPopup(false); // Close the login popup after successful login
      }
    });

    // Update time every second
    const timer = setInterval(() => {
      const now = new Date();

      // Current Time (Local)
      const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      setCurrentTime(time);

      // Bangladeshi Time
      const bdTime = now.toLocaleTimeString("bn-BD", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: "Asia/Dhaka",
      });
      setBangladeshiTime(bdTime);
    }, 1000);

    return () => {
      unsubscribe();
      clearInterval(timer);
    };
  }, []);

  // Fetch task data from Firestore
  const fetchTaskData = async (userId) => {
    const docRef = doc(db, "userRamadanTasks", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setTaskData(docSnap.data().tasks);
    } else {
      // Initialize task data if it doesn't exist
      const initialTasks = tasks.map((task) => ({
        name: task,
        days: Array.from({ length: 30 }, () => false), // Initialize all days as false
      }));
      await setDoc(docRef, { tasks: initialTasks });
      setTaskData(initialTasks);
    }
  };

  // Function to get the adjusted Hijri date for Ramadan
  const getAdjustedHijriDate = () => {
    const today = new Date();
    const ramadanStartDate = new Date("2024-03-02"); // Ramadan starts on 2 March 2024

    // Calculate the difference in days
    const timeDifference = today - ramadanStartDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Manually calculate the Hijri date
    const ramadanDay = daysDifference + 1; // 2 March is 1 Ramadan
    return `${ramadanDay} Ramadan 1445`;
  };

  // Function to format the English (Gregorian) date
  const getEnglishDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("en", { month: "long" });
    const year = today.getFullYear();
    return `${day} `;
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-[27px] pt-6 font-bold text-green-700">Ramadan Task Manager</h1>
        <p className="text-xl font-semibold text-gray-500 ">
          Hijri Date: {` ${getEnglishDate() - 1} Ramadan, 1446 AH `}
        </p>
        <p className="text-lg font-semibold text-blue-500">Time: {currentTime}</p>
      </div>

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Login Required</h2>
              <button
                onClick={() => setShowLoginPopup(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <p className="mb-4 text-gray-600">
                Please log in to manage your tasks.
              </p>
              <Auth /> {/* Render the Auth component for login */}
            </div>
          </div>
        </div>
      )}

      {/* Conditional Rendering: Dashboard or DashboardFrontEnd */}
      {user ? (
        <Dashboard
          user={user}
          taskData={taskData}
          setTaskData={setTaskData}
          showLoginPopup={() => setShowLoginPopup(true)} // Pass function to show login popup
        />
      ) : (
        <DashboardFrontEnd
          user={user}
          taskData={taskData}
          setTaskData={setTaskData}
          showLoginPopup={() => setShowLoginPopup(true)} // Pass function to show login popup
        />
      )}
    </div>
  );
};

export default Home;