import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const TypingEffect = ({ texts, speed = 150 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index % texts.length];

    const handleTyping = () => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentText.substring(0, prev.length + 1)
      );

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

const FooterSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-4 md:space-y-0">
      <button
        className="md:cursor-default w-full text-left text-xl font-semibold text-gray-800 md:hover:text-indigo-600 transition duration-300 md:mb-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        } md:max-h-full`}
      >
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-gray-50 text-gray-700 py-10 px-5 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-4 h-[200px]">
          <img
            src={assets.logo}
            className="w-32 transition-transform duration-300 hover:scale-105"
            alt="EzyShop Logo"
          />
          <TypingEffect
            texts={[
              "Welcome to EzyShop!",
              "Your one-stop online store.",
              "Best deals on the latest fashion trends and styles!",
              "Fast shipping & excellent customer service.",
            ]}
          />

        </div>

        {/* Quick Links - Collapsible */}
        <FooterSection title="Quick Links" m>
          <ul className="space-y-2 mt-2">
            {["Home", "Shop Now", "About Us", "Contact"].map((label, idx) => {
              const link = ["/", "/collection", "/about", "/contact"][idx];
              return (
                <li
                  key={label}
                  className="hover:text-indigo-500 cursor-pointer transition duration-300"
                >
                  <Link
                    to={link}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </FooterSection>

        {/* Contact Info - Collapsible */}
        <FooterSection title="Get in Touch">
          <ul className="space-y-2 mt-2">
            <li>
              <a
                href="tel:+919396660132"
                className="flex items-center space-x-2 hover:text-indigo-500"
              >
                <span>📞</span>
                <span>+91 (939) 666-0132</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:ezyshop33@gmail.com"
                className="flex items-center space-x-2 hover:text-indigo-500"
              >
                <span>📧</span>
                <span>ezyshop33@gmail.com</span>
              </a>
            </li>
          </ul>
        </FooterSection>
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
