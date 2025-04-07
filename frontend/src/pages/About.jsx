import Title from "../components/Title";

import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
          Welcome to EZYSHOP – Your one-stop shop for a seamless online shopping experience!
          </p>
          <p>
          At EZYSHOP, we’re committed to providing customers with a diverse range of high-quality products at affordable prices, all while ensuring a hassle-free shopping journey. Developed by a passionate team of four tech enthusiasts – Nakul Narwani, Naitik Mangal, Nishant Jain, and Manu Mahawar, as part of our final year project, EZYSHOP combines the power of modern technology with a user-friendly design to offer a smooth e-commerce experience.
          </p>
          <p>
          Our platform is built using the MERN stack, ensuring fast, secure, and scalable performance. Whether you're looking for fashion, electronics, home goods, or anything in between, we’ve got you covered.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            To create an easy, convenient, and enjoyable shopping experience that caters to your needs, all while focusing on quality, customer service, and trust. We believe that online shopping should be as effortless as possible, which is why we've worked hard to make EZYSHOP intuitive and responsive, whether you're browsing from your phone or desktop.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Wide Product Selection:</b>
          <p className="text-gray-600">
          From trending items to everyday essentials, we offer a vast catalog that suits all tastes and preferences.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>User-Centric Design:</b>
          <p className="text-gray-600">
          We’ve designed EZYSHOP with you in mind a clean, easy-to-navigate interface and secure checkout process.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Fast Delivery: </b>
          <p className="text-gray-600">
          Get your products delivered swiftly and safely with tracking updates every step of the way.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
