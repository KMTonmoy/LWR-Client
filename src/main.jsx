import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { router } from './Router/Router';
import AuthProvider from './providers/AuthProvider';

const App = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);



  useEffect(() => {
    const handleOffline = () => {
      setIsOffline(true);
      toast.error('You are offline!');
    };

    const handleOnline = () => {
      setIsOffline(false);
      toast.success('You are back online!');
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  if (isOffline) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center p-4">
        <h1 className="text-4xl font-bold mb-4">You're Offline</h1>
        <p className="text-xl text-gray-700 mb-2">It seems like you have lost your internet connection.</p>
        <p className="text-lg text-gray-600">Please check your network settings and try again.</p>
        <ToastContainer />
      </div>
    );
  }

  return (
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
