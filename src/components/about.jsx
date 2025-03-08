import React from 'react';

const about = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">about</h2>
          <div className="w-16 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 max-w-2xl">
            This is the about section of your application.
          </p>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <p className="text-gray-700">
            Detailed content for the about section goes here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;