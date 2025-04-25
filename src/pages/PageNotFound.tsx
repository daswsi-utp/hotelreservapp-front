import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const PageNotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <div className="relative">
          <div className="absolute -top-[80px] left-1/2 transform -translate-x-1/2">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      
      <Link to="/" className="btn btn-primary inline-flex items-center">
        <Home className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Link>
    </div>
  );
};

export default PageNotFound;