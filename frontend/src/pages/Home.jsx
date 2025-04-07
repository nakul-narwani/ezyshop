import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import TestimonialCarousel from "../components/TestimonialCarousel";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <TestimonialCarousel/>
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
