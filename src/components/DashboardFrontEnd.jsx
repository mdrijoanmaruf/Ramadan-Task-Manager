import React, { useState } from "react";
import Auth from "./Auth"; // Import the Auth component for the login popup

const DashboardFrontEnd = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  // Dummy data for the dashboard
  const tasks = [
    "তাহাজ্জুদ পড়েছি",
    "সাহরী করেছি",
    "৫ ওয়াক্ত সালাত আদায় করেছি",
    "সকাল সন্ধ্যায় জিকির করেছি",
    "কমপক্ষে ৩ সূরা কুরআন তেলাওয়াত করেছি",
    "কমপক্ষে ১০০ বার দুরূদ পড়েছি",
    "কমপক্ষে ১০০ বার ইস্তেগফার পড়েছি",
    "ফরজ সালাত শেষে দোয়া ও জিকির করেছি",
    "চোখের হিফাজত করার চেষ্টা করেছি",
    "প্রোডাক্টিভ ৩টি কাজ করেছি",
    "সুন্নাহ অনুসরণ করে ইফতার করেছি",
    "সালাতে একাগ্রতা ধরে রাখার চেষ্টা করেছি",
    "ঘুমানোর আগে আমল ও মূলক তেলাওয়াত করেছি",
    "তারাবীহ পড়েছি",
    "আয়ানের জবাব দিয়েছি",
    "দোয়া করেছি",
  ];

  return (
    <div className="mt-8 max-w-7xl mx-auto px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Ramadan Tracker
        </h1>
        <button
          onClick={() => setShowLoginPopup(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-all flex items-center"
        >
          <span className="mr-2">+</span> Add Today's Tasks
        </button>
      </div>

      {/* Dashboard Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="md:sticky left-0 z-10 bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700 min-w-[300px]">
                  Daily Tasks
                </th>
                {Array.from({ length: 30 }, (_, i) => (
                  <th
                    key={i + 1}
                    className="px-4 py-3 text-sm font-semibold text-gray-600 text-center border-l border-gray-200"
                  >
                    Day {i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tasks.map((task, taskIndex) => (
                <tr key={taskIndex} className="hover:bg-gray-50 transition-colors">
                  <td className="md:sticky left-0 z-10 bg-white px-6 py-4 text-sm font-medium text-gray-900 min-w-[300px]">
                    {task}
                  </td>
                  {Array.from({ length: 30 }, (_, dayIndex) => (
                    <td
                      key={dayIndex}
                      className="px-4 py-3 text-center border-l border-gray-200 group relative"
                    >
                      <button
                        onClick={() => setShowLoginPopup(true)}
                        className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-500`}
                      >
                        {/* Placeholder for task completion */}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
    </div>
  );
};

export default DashboardFrontEnd;