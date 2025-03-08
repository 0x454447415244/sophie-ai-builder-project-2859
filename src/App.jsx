<CodeProject>
```tsx file="page.tsx"
import React from "react";
import Hero from "./components/hero";
import AboutUs from "./components/about-us";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import BookingForm from "./components/booking-form";

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center p-4">
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

const Hero: React.FC = () => {
  return (
    <section className="w-full h-80 bg-yellow-300 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Car Rental Service</h1>
      <p className="text-lg">Drive your dream car today!</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Book Now</button>
    </section>
  );
};

export default Hero;
```

```tsx file="components/about-us.tsx"
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="w-full my-8 text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg">
        We are a leading car rental company offering a wide range of vehicles to suit your needs. Our goal is to provide the best rental experience with excellent customer service.
      </p>
    </section>
  );
};

export default AboutUs;
```

```tsx file="components/services.tsx"
import React from "react";

const services = [
  { name"Compact Car", price"$30/day" },
  { name"SUV", price"$50/day" },
  { name"Luxury Car", price"$100/day" },
];

const Services: React.FC = () => {
  return (
    <section className="w-full my-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <ul className="space-y-2">
        {services.map((service) => (
          <li key={service.name} className="text-lg">
            {service.name} - {service.price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
```

```tsx file="components/testimonials.tsx"
import React from "react";

const testimonials = [
  { name"John Doe", feedback"Great service and friendly staff!" },
  { name"Jane Smith: ", feedback"The car was in excellent condition.' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full my-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="border p-4 rounded">
            <p className="font-semibold">{testimonial.name}</p>
            <p>{testimonial.feedback}</p>
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

const BookingForm: React.FC = () => {
  return (
    <section className="w-full my-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Booking Form</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded" required />
        <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" required />
        <input type="text" placeholder="Car Model" className="w-full p-2 border border-gray-300 rounded" required />
        <input type="date" className="w-full p-2 border border-gray-300 rounded" required />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
      </form>
    </section>
  );
};

export default BookingForm;
```
</CodeProject>

This code sets up a simple car rental website with the requested sections. You can customize it further if needed. Let me know if you have any additional requests!