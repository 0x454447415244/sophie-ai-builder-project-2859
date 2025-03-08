<CodeProject>
```tsx file="index.tsx"
import React from "react";

const HomePage = () => {
  return (
    <main className="bg-white p-4">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-yellow-300 p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Car Rental Service!</h1>
        <p className="text-xl text-gray-700 mt-4">Your journey starts here.</p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">Book Now</button>
      </section>

      {/* About Us Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
        <p className="text-gray-600 mt-2">
          We are a leading car rental company dedicated to providing quality vehicles and excellent service.
        </p>
      </section>

      {/* Services Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Economy Car</h3>
            <p className="text-gray-600">$25/day</p>
            <img src="/placeholder.svg?width=300&height=200" alt="Economy Car" className="mt-2 rounded" />
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">SUV</h3>
            <p className="text-gray-600">$50/day</p>
            <img src="/placeholder.svg?width=300&height=200" alt="SUV" className="mt-2 rounded" />
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Luxury Car</h3>
            <p className="text-gray-600">$100/day</p>
            <img src="/placeholder.svg?width=300&height=200" alt="Luxury Car" className="mt-2 rounded" />
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Van</h3>
            <p className="text-gray-600">$75/day</p>
            <img src="/placeholder.svg?width=300&height=200" alt="Van" className="mt-2 rounded" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-gray-800">Customer Testimonials</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mt-4">
          "Excellent service! The car was in great condition and the staff was very helpful."
        </blockquote>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mt-4">
          "A wonderful experience! Will definitely rent again."
        </blockquote>
      </section>

      {/* Booking Form Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-gray-800">Book Your Car</h2>
        <form className="mt-4">
          <div className="flex flex-col mb-4">
            <label className="mb-2" htmlFor="name">Name</label>
            <input className="border p-2" type="text" id="name" required />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2" htmlFor="email">Email</label>
            <input className="border p-2" type="email" id="email" required />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2" htmlFor="date">Rental Date</label>
            <input className="border p-2" type="date" id="date" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default HomePage;
```
</CodeProject> 

This code provides a complete structure for your car rental company website. You can further customize it with actual images and additional styling as needed. Let me know if you need any modifications or additional features!