import React from 'react';

const HelloDocLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative flex flex-col items-center">
        {/* Circular loader background */}
        <div className="relative w-32 h-32 mb-6">
          {/* Spinning circle */}
          <svg className="w-32 h-32 animate-spin" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-200"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              className="text-primary"
              strokeDasharray="62.83"
              strokeDashoffset="47.12"
              style={{
                animation: 'spin 2s linear infinite, dash 1.5s ease-in-out infinite'
              }}
            />
          </svg>
          
          {/* Logo in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center">
              {/* Hello.doc logo recreation */}
              <div className="relative">
                {/* Cross shape */}
                <div className="relative w-8 h-8">
                  {/* Vertical bar */}
                  <div className="absolute left-1/2 top-0 w-3 h-8 transform -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600"></div>
                  {/* Horizontal bar */}
                  <div className="absolute top-1/2 left-0 w-8 h-3 transform -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
                  {/* Yellow accent dot */}
                  <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hello.doc text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-third mb-2">
            HELLO <span className='text-secondary'>.DOC</span>
          </h2>
          <p className="text-gray-500 text-sm animate-pulse">
            Loading...
          </p>
        </div>
        
        {/* Pulsing dots */}
        <div className="flex space-x-1 mt-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 62.83;
          }
          50% {
            stroke-dashoffset: 15.71;
          }
          100% {
            stroke-dashoffset: 62.83;
          }
        }
      `}</style>
    </div>
  );
};

export default HelloDocLoader