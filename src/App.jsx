<CodeProject>
```tsx file="page.tsx"
import { Hero  } from "./components/hero";
import { AboutUs  } from "./components/about-us";
import { Services  } from "./components/services";
import { Testimonials  } from "./components/testimonials";
import { BookingForm  } from "./components/booking-form";

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
export function Hero() {
  return (
    <section className="bg-yellow-400 text-white py-20 text-center">
      <h1 className="text-4xl font-bold">Rent Your Dream Car Today!</h1>
      <p className="mt-4 text-lg">Affordable prices and great service.</p>
      <button className="mt-6 bg-white text-yellow-400 px-4 py-2 rounded">Book Now</button>
      <img src="/placeholder.svg?height=300&width=600" alt="Car Rental Hero" className="mt-6" />
    </section>
  );
}
```

```tsx file="components/about-us.tsx"
export function AboutUs() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">About Us</h2>
      <p className="mt-4">We are dedicated to providing the best car rental experience with a variety of vehicles to choose from.</p>
      <img src="/placeholder.svg?height=300&width=600" alt="About Us" className="mt-6" />
    </section>
  );
}
```

```tsx file="components/services.tsx"
export function Services() {
  const services = [
    { name"Economy Car", price"$30/day" },
    { name"SUV", price"$50/day" },
    { name"Luxury Car", price"$100/day" },
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(service => (
          <div key={service.name} className="border p-4 rounded">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-lg">{service.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

```tsx file="components/testimonials.tsx"
export function Testimonials() {
  const testimonials = [
    { text"Great service! Highly recommend.", author"John D." },
    { text"The best car rental experience I: 've ever had.", author"Jane S." },
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold">Customer Testimonials</h2>
      <div className="mt-6">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="mb-4">
            <p className="italic">"{testimonial.text}"</p>
            <cite className="block mt-2">- {testimonial.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
```

```tsx file="components/booking-form.tsx"
export function BookingForm() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center">Book Your Car</h2>
      <form className="mt-6 max-w-lg mx-auto">
        <div>
          <label htmlFor="name" className="block">Name</label>
          <input type="text" id="name" className="border rounded w-full px-4 py-2" required />
        </div>
        <div className="mt-4">
          <label htmlFor="pickup-date" className="block">Pickup Date</label>
          <input type="date" id="pickup-date" className="border rounded w-full px-4 py-2" required />
        </div>
        <div className="mt-4">
          <label htmlFor="dropoff-date" className="block">Dropoff Date</label>
          <input type="date" id="dropoff-date" className="border rounded w-full px-4 py-2" required />
        </div>
        <button type="submit" className="mt-6 bg-yellow-400 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </section>
  );
}
```
</CodeProject>

This code sets up a simple car rental website with the requested sections and a friendly color scheme. Let me know if you need any modifications or additional features!