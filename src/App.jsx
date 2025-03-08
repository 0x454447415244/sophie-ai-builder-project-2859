<CodeProject>
```tsx file="index.tsx"
import Hero from "./components/hero";
import AboutUs from "./components/about-us";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import BookingForm from "./components/booking-form";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <BookingForm />
    </main>
  );
}
```

```tsx file="components/hero.tsx"
const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage"url("/placeholder.svg?height=600&width=1200")" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl font-bold">Rent Your Dream Car Today!</h1>
      </div>
    </section>
  );
};

export default Hero;
```

```tsx file="components/about-us.tsx"
const AboutUs = () => {
  return (
    <section className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-gray-700">
        We are dedicated to providing the best car rental services to our customers. Our fleet is well-maintained and ready for your adventures!
      </p>
    </section>
  );
};

export default AboutUs;
```

```tsx file="components/services.tsx"
const services = [
  { name"Economy Car", price"$29/day" },
  { name"Luxury Car", price"$59/day" },
  { name"SUV", price"$49/day" },
];

const Services = () => {
  return (
    <section className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <ul className="space-y-4">
        {services.map((service) => (
          <li key={service.name} className="text-lg">
            {service.name}: {service.price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
```

```tsx file="components/testimonials.tsx"
const testimonials = [
  { name"John Doe", text"Great service! The car was in perfect condition." },
  { name"Jane Smith: ", text"Highly recommend! Friendly staff and easy booking process.' },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-10 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="italic">
            "{testimonial.text}" - <footer className="font-semibold">{testimonial.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
```

```tsx file="components/booking-form.tsx"
const BookingForm = () => {
  return (
    <section className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Book Your Car</h2>
      <form className="flex flex-col space-y-4 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="border p-2" required />
        <input type="email" placeholder="Your Email" className="border p-2" required />
        <input type="date" className="border p-2" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Book Now</button>
      </form>
    </section>
  );
};

export default BookingForm;
```
</CodeProject>

This code sets up a complete homepage for the car rental company, including all specified sections. You can further customize the styles and content as needed. Let me know if you need any modifications or additional features!