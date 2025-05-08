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

// Duplicate testimonials for seamless infinite scroll
const scrollingTestimonials = [...testimonials, ...testimonials];

const TestimonialCarousel = () => {
  return (
    <div className="bg-gray-100 py-12 px-5 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What Our Customers Say
      </h2>
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div className="flex w-max animate-scroll whitespace-nowrap">
          {scrollingTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[500px] mx-4 bg-white px-10 py-8 rounded-lg shadow-xl text-center flex-shrink-0 whitespace-normal break-words"
            >
              <img
                src={testimonial.image}
                alt={`Photo of ${testimonial.name}`}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <p className="text-gray-700 italic text-lg mb-6 break-words">
                "{testimonial.review}"
              </p>
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.952 4.144.03c.969.007 1.371 1.24.588 1.81l-3.354 2.454.923 4.036c.207.91-.755 1.665-1.54 1.19l-3.825-2.21-3.825 2.21c-.784.475-1.747-.28-1.54-1.19l.923-4.036-3.354-2.454c-.783-.57-.38-1.803.588-1.81l4.144-.03 1.286-3.952z" />
                  </svg>
                ))}
              </div>
              <p className="font-semibold text-gray-900 text-lg">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
