import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import TaskList from "./TaskList";
import Auth from "./Auth"; // Import the Auth component for the login popup

const Dashboard = ({ user, taskData, setTaskData }) => {
  const [showTaskPopup, setShowTaskPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  // Fetch task data from Firestore
  useEffect(() => {
    if (user) {
      const fetchTaskData = async () => {
        const docRef = doc(db, "userRamadanTasks", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setTaskData(docSnap.data().tasks);
        } else {
          const initialTasks = [
            "তাহাজ্জুদ পড়েছি",
            "সাহরী করেছি",
            "৫ ওয়াক্ত সালাত আদায় করেছি",
            "সকাল সন্ধ্যায় জিকির করেছি",
            "কমপক্ষে ৩ সূরা কুরআন তেলাওয়াত করেছি",
            "কমপক্ষে ১০০ বার দুরূদ পড়েছি",
            "কমপক্ষে ১০০ বার ইস্তেগফার পড়েছি",
            "ফরজ সালাত শেষে দোয়া ও জিকির করেছi",
            "চোখের হিফাজত করার চেষ্টা করেছি",
            "প্রোডাক্টিভ ৩টি কাজ করেছি",
            "সুন্নাহ অনুসরণ করে ইফতার করেছি",
            "সালাতে একাগ্রতা ধরে রাখার চেষ্টা করেছি",
            "ঘুমানোর আগে আমল ও মূলক তেলাওয়াত করেছি",
            "তারাবীহ পড়েছি",
            "আয়ানের জবাব দিয়েছি",
            "দোয়া করেছি",
          ].map((task) => ({
            name: task,
            days: Array.from({ length: 30 }, () => false), // Initialize all days as false
          }));
          await setDoc(docRef, { tasks: initialTasks });
          setTaskData(initialTasks);
        }
        setIsLoading(false); // Data fetching is complete
      };
      fetchTaskData();
    }
  }, [user, setTaskData]);

  // Update task completion status in Firestore
  const updateTaskStatus = async (taskIndex, day, isChecked) => {
    if (!user) {
      setShowLoginPopup(true); // Show login popup if user is not logged in
      return;
    }

    const updatedTasks = [...taskData];
    updatedTasks[taskIndex].days[day - 1] = isChecked;
    const userId = auth.currentUser.uid;
    const docRef = doc(db, "userRamadanTasks", userId);
    await updateDoc(docRef, { tasks: updatedTasks });
    setTaskData(updatedTasks);
  };

  // Skeleton Loading Component
  const SkeletonLoading = () => (
    <div className="mt-8 mx-4">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-36 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>

      {/* Table Skeleton */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 min-w-[300px]">
                  <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                </th>
                {Array.from({ length: 30 }, (_, i) => (
                  <th
                    key={i + 1}
                    className="px-4 py-3 text-sm font-semibold text-gray-600 text-center border-l border-gray-200"
                  >
                    <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Array.from({ length: 16 }, (_, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 min-w-[300px]">
                    <div className="h-6 w-64 bg-gray-200 rounded animate-pulse"></div>
                  </td>
                  {Array.from({ length: 30 }, (_, j) => (
                    <td
                      key={j}
                      className="px-4 py-3 text-center border-l border-gray-200 group relative"
                    >
                      <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto pb-10">
      {isLoading ? ( // Show skeleton loading while data is being fetched
        <SkeletonLoading />
      ) : (
        <div className="mt-8 mx-4">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
            <h1 className="text-2xl font-bold text-gray-700">Ramadan Tracker</h1>
            <button
              onClick={() => (user ? setShowTaskPopup(true) : setShowLoginPopup(true))}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md transition-all flex items-center"
            >
              <span className="mr-2">+</span> Add Today's Tasks
            </button>
          </div>

          {/* Task List Popup */}
          {showTaskPopup && (
            <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">Today's Tasks</h2>
                  <button
                    onClick={() => setShowTaskPopup(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6">
                  <TaskList
                    taskData={taskData}
                    updateTaskStatus={(taskIndex, isChecked) =>
                      updateTaskStatus(taskIndex, 1, isChecked)
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {/* Login Popup */}
          {showLoginPopup && (
            <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4">
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

          {/* Dashboard Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden ">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      className={`px-6 py-4 text-left text-sm font-semibold text-gray-700 min-w-[300px]
                                  md:sticky md:left-0 md:z-10 md:bg-gray-50`}
                    >
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
                  {taskData.map((task, taskIndex) => (
                    <tr
                      key={taskIndex}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td
                        className={`px-6 py-4 text-sm font-medium text-gray-900 min-w-[300px]
                                   md:sticky md:left-0 md:z-10 md:bg-white`}
                      >
                        {task.name}
                      </td>
                      {task.days.map((completed, dayIndex) => (
                        <td
                          key={dayIndex}
                          className="px-4 py-3 text-center border-l border-gray-200 group relative"
                        >
                          <button
                            onClick={() =>
                              user
                                ? updateTaskStatus(taskIndex, dayIndex + 1, !completed)
                                : setShowLoginPopup(true)
                            }
                            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors
                              ${
                                completed 
                                ? "bg-green-500 hover:bg-green-600 text-white"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-500"
                              }`}
                          >
                            {completed ? "✓" : ""}
                          </button>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Empty State */}
          {taskData.length === 0 && (
            <div className="mt-12 text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500">No tasks found. Add your first task!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;