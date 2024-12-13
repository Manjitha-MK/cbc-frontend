import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="bg-gray-800 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Website</h1>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-blue-400">
              Features
            </a>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-4xl lg:text-6xl font-extrabold mb-4">
          Welcome to My Website
        </h2>
        <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mb-6">
          Explore the amazing features and services we provide to help you achieve your goals. 
          Designed with simplicity and elegance in mind.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-800">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold mb-4">Feature One</h4>
              <p className="text-gray-400">Brief description of feature one and why it’s awesome.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold mb-4">Feature Two</h4>
              <p className="text-gray-400">Brief description of feature two and its benefits.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold mb-4">Feature Three</h4>
              <p className="text-gray-400">Brief description of feature three to showcase its value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">
            &copy; 2024 My Website. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
