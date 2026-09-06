import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SupportButton from "../components/layout/SupportButton";

import HeroSlider from "../components/home/HeroSlider";
import Stories from "../components/home/Stories";
import AmazingProducts from "../components/home/AmazingProducts";
import AdBanners from "../components/home/AdBanners";
import ProductShowcase from "../components/home/ProductShowcase";
import HotProducts from "../components/home/HotProducts";
import Services from "../components/home/Services";
import BrandShowcase from "../components/home/BrandShowcase";
import BestSelling from "../components/home/BestSelling";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Header />

      <main>
        <HeroSlider />

        <Stories />

        <AmazingProducts />

        <AdBanners />

        <ProductShowcase />

        <BrandShowcase />

        <BestSelling />

        <HotProducts />

        <Services />
      </main>

      <Footer />

      {/* پشتیبانی ثابت */}
      <SupportButton />
    </div>
  );
}
