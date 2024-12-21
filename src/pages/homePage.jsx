// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
// import Contact from './contactPage';

const HomePage = () => {
  return (
    <div className="min-h-screen text-white bg-gray-900">
      {/* Header Section */}
      <header className="py-4 bg-gray-800 shadow-lg">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-3xl font-bold">My Website</h1>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-blue-400">
              Features
            </a>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-20 text-center">
        <h2 className="mb-4 text-4xl font-extrabold lg:text-6xl">
          Welcome to My Website
        </h2>
        <p className="max-w-2xl mb-6 text-lg text-gray-400 lg:text-xl">
          Explore the amazing features and services we provide to help you achieve your goals. 
          Designed with simplicity and elegance in mind.
        </p>
        <button className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-800">
        <div className="container mx-auto">
          <h3 className="mb-8 text-3xl font-bold text-center">Features</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 text-center bg-gray-700 rounded-lg shadow-lg">
              <h4 className="mb-4 text-xl font-semibold">Feature One</h4>
              <p className="text-gray-400">Brief description of feature one and why it’s awesome.</p>
            </div>
            <div className="p-6 text-center bg-gray-700 rounded-lg shadow-lg">
              <h4 className="mb-4 text-xl font-semibold">Feature Two</h4>
              <p className="text-gray-400">Brief description of feature two and its benefits.</p>
            </div>
            <div className="p-6 text-center bg-gray-700 rounded-lg shadow-lg">
              <h4 className="mb-4 text-xl font-semibold">Feature Three</h4>
              <p className="text-gray-400">Brief description of feature three to showcase its value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800">
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
