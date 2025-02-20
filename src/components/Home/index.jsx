import HeroSection from "./HeroSection";
import BlogSection from "./BlogSection";
import ShopSection from "./ShopSection";
import Layout from "../Layout";

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ShopSection />
      <BlogSection />
    </Layout>
  );
}

export default HomePage;
