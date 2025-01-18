import React, { createContext, useState, useContext } from "react";

// Create a Toast Context
const ToastContext = createContext();

// Custom hook to use the ToastContext
export const useToast = () => useContext(ToastContext);

// Toast Provider component to provide toast functionality globally
export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const triggerToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Toast auto hides after 3 seconds
  };

  return (
    <ToastContext.Provider value={{ triggerToast }}>
      {children}
      {showToast && (
        <div className="toast toast-bottom toast-center">
          <div className="alert alert-warning">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};
