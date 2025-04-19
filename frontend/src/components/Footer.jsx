import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const TypingEffect = ({ texts, speed = 150 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index % texts.length];

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setDisplayText((prev) => currentText.substring(0, prev.length + 1));
      }

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts, speed]);

  return <span className="text-xl font-bold text-gray-800">{displayText}</span>;
};

const Footer = () => {
  return (
    <div className="bg-gray-50 text-gray-700 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info with Typing Effect */}
        <div className="space-y-4 h-[200px] over">
          <img src={assets.logo} className="w-32" alt="EzyShop Logo" />
          <TypingEffect
            texts={[
              "Welcome to EzyShop!",
              "Your one-stop online store.",
              "Best deals on electronics, fashion, and more!",
              "Fast shipping & excellent customer service.",
            ]}
          />
          <p className="text-sm text-gray-500 mt-2">
            Discover quality products at affordable prices with a seamless
            shopping experience.
          </p>
        </div>
        <div className="hidden md:block"></div>
        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition duration-300">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-indigo-500 cursor-pointer transition duration-300">
              Home
            </li>
            <li className="hover:text-indigo-500 cursor-pointer transition duration-300">
              Shop Now
            </li>
            <li className="hover:text-indigo-500 cursor-pointer transition duration-300">
              About Us
            </li>
            <li className="hover:text-indigo-500 cursor-pointer transition duration-300">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition duration-300">
            Get in Touch
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 hover:text-indigo-500 cursor-pointer transition duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h4l3 9 4-14 3 9h4"
                />
              </svg>
              <span>+91 (939) 666-0132</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-indigo-500 cursor-pointer transition duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span>support@ezyshop.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <hr className="border-gray-300" />
        <p className="py-4">© 2025 EzyShop. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
