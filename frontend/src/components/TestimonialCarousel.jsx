import { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const testimonials = [
  {
    name: "John Doe",
    review:
      "EzyShop has completely changed the way I shop online. Fast delivery and great products!",
    rating: 5,
    image: assets.test1,
  },
  {
    name: "Jane Smith",
    review:
      "I love the variety of products available. The customer service was exceptional!",
    rating: 4,
    image: assets.test2,
  },
  {
    name: "Mark Johnson",
    review:
      "Affordable prices and quick shipping. Highly recommend EzyShop to everyone!",
    rating: 5,
    image: assets.test3,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-10 px-5">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        What Our Customers Say
      </h2>
      <div className="max-w-2xl mx-auto overflow-hidden relative">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">
                "{testimonial.review}"
              </p>
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.952 4.144.03c.969.007 1.371 1.24.588 1.81l-3.354 2.454.923 4.036c.207.91-.755 1.665-1.54 1.19l-3.825-2.21-3.825 2.21c-.784.475-1.747-.28-1.54-1.19l.923-4.036-3.354-2.454c-.783-.57-.38-1.803.588-1.81l4.144-.03 1.286-3.952z" />
                  </svg>
                ))}
              </div>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
