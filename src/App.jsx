<CodeProject>
```tsx file="index.tsx"
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import BookingForm from "./components/booking-form";

const HomePage = () => {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <BookingForm />
    </main>
  );
};

export default HomePage;
```

```tsx file="components/hero.tsx"
const Hero = () => {
  return (
    <section className="relative bg-yellow-400 text-white h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold">Welcome to Our Car Rental Service!</h1>
      <p className="mt-4 text-xl">Your journey starts here. Rent your dream car today!</p>
    </section>
  );
};

export default Hero;
```

```tsx file="components/about.tsx"
const About = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold">About Us</h2>
      <p className="mt-4">
        We are a dedicated car rental company providing the best vehicles for your travel needs. Our mission is to ensure you have a safe and enjoyable experience on the road.
      </p>
    </section>
  );
};

export default About;
```

```tsx file="components/services.tsx"
const services = [
  { name"Economy Car", price"$30/day" },
  { name"SUV", price"$50/day" },
  { name"Luxury Car", price"$100/day" },
];

const Services = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <ul className="mt-4">
        {services.map((service, index) => (
          <li key={index} className="mb-2">
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
const testimonials = [
  { name"John Doe", text"Great service and friendly staff!" },
  { name"Jane Smith: ", text"I had an amazing experience renting a car!' },
];

const Testimonials = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold">Customer Testimonials</h2>
      <ul className="mt-4">
        {testimonials.map((testimonial, index) => (
          <li key={index} className="mb-4">
            <p className="font-semibold">{testimonial.name}</p>
            <p>{testimonial.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
```

```tsx file="components/booking-form.tsx"
const BookingForm = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold">Book Your Car</h2>
      <form className="mt-4">
        <label className="block mb-2">
          Name:
          <input type="text" className="border p-2 w-full" required />
        </label>
        <label className="block mb-2">
          Email:
          <input type="email" className="border p-2 w-full" required />
        </label>
        <label className="block mb-2">
          Car Type:
          <select className="border p-2 w-full" required>
            <option value="economy">Economy Car</option>
            <option value="suv">SUV</option>
            <option value="luxury">Luxury Car</option>
          </select>
        </label>
        <button type="submit" className="bg-yellow-400 text-white p-2 mt-4">
          Book Now
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
```
</CodeProject>

This creates a complete car rental website structure with a homepage and necessary components. Let me know if you need any further modifications or additions!