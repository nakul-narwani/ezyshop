import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div className="container mx-auto px-6">
      {/* Title Section */}
      <div className="text-center text-3xl md:text-4xl font-bold py-14 border-t-4 border-gray-300 mb-0">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Contact Information & Image Section */}
      <div className="flex flex-col md:flex-row justify-between gap-12 my-16 mt-2">
        {/* Left Side: Contact Image */}
        <div className="flex-1 max-w-md mx-auto">
          <img
            src={assets.contact_img}
            className="w-full rounded-lg shadow-xl"
            alt="Contact Us"
          />
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex-1 space-y-6">
          <p className="text-xl md:text-2xl font-semibold text-gray-800">
            We’d love to hear from you!
          </p>
          <p className="text-lg text-gray-600">
            Whether you have a question, need assistance, or want to provide feedback, our team is here to help.
          </p>

          {/* Store Location */}
          <div>
            <p className="text-lg font-semibold text-gray-800">Our Store</p>
            <p className="text-gray-600">
              Block 102, Jagatpura, <br /> Jaipur, Rajasthan, INDIA
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-lg font-semibold text-gray-800">Contact Us</p>
            <p className="text-gray-600">
              Tel: +91 (939) 666-0132 <br />
              Email: <a href="mailto:ezyshop33@gmail.com" className="text-blue-600 hover:underline">ezyshop33@gmail.com</a>
            </p>
          </div>

          {/* Careers */}
          <div>
            <p className="text-lg font-semibold text-gray-800">Careers at EzyShop</p>
            <p className="text-gray-600">
              Learn more about our teams and job openings.
            </p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all rounded-md">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  );
};

export default Contact;
