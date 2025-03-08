<CodeProject>
```tsx file="page.tsx"
import React from "react";
import Hero from "./components/hero";
import AboutUs from "./components/about-us";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import BookingForm from "./components/booking-form";

const HomePage = () => {
  return (
    <main className="bg-white text-gray-800">
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <BookingForm />
    </main>
  );
};

export default HomePage;
```

```tsx file="components/hero.tsx"
import React from "react";

const Hero = () => {
  return (
    <section className="bg-yellow-400 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Rent Your Dream Car Today!</h1>
      <p className="text-lg mb-6">Affordable rates and exceptional service.</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded">Book Now</button>
    </section>
  );
};

export default Hero;
```

```tsx file="components/about-us.tsx"
import React from "react";

const AboutUs = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg max-w-2xl mx-auto">
        We are a leading car rental company offering a wide range of vehicles to suit all your needs. Our mission is to provide reliable and affordable car rental services to our customers.
      </p>
    </section>
  );
};

export default AboutUs;
```

```tsx file="components/services.tsx"
import React from "react";

const servicesList = [
  { name"Economy Car", price"$30/day" },
  { name"SUV", price"$50/day" },
  { name"Luxury Car", price"$100/day" },
];

const Services = () => {
  return (
    <section className="py-20 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {servicesList.map((service) => (
          <div key={service.name} className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-lg">{service.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
```

```tsx file="components/testimonials.tsx"
import React from "react";

const testimonials = [
  { name"Jane Doe", text"Excellent service and great cars!" },
  { name"John Smith: ", text"Easy booking process, highly recommend!' },
];

const Testimonials = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
      <div className="max-w-2xl mx-auto">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="mb-4">
            <p className="font-semibold">{testimonial.name}</p>
            <p className="italic">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
```

```tsx file="components/booking-form.tsx"
import React from "react";

const BookingForm = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Book Your Car</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <input type="text" placeholder="Full Name" className="border p-2 w-full" required />
        </div>
        <div className="mb-4">
          <input type="email" placeholder="Email" className="border p-2 w-full" required />
        </div>
        <div className="mb-4">
          <input type="date" className="border p-2 w-full" required />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
      </form>
    </section>
  );
};

export default BookingForm;
```
</CodeProject>

This code creates a simple car rental website with a bright and friendly design. Each component is responsible for a section of the homepage, ensuring a clean and organized structure. Let me know if you need any modifications or additional features!