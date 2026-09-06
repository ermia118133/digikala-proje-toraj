import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const banners = [
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-admin-landing/d31bf59f135cf35b47bd9e4dea18269c67283b77_1787955682.gif",
    title: "لپ‌تاپ و تبلت",
    link: "https://www.digikala.com/landing/laptop-tablet/",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-admin-landing/580857b1f604a3e071f0e05aec18df15f569423e_1787382311.gif",
    title: "عطرهای اورجینال",
    link: "https://www.digikala.com/landing/hb-orginal-perfume/",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-admin-landing/427d51cb4d57de04cb0ceff0ee480e0b9c466726_1784009015.png",
    title: "ویتامکس",
    link: "https://www.digikala.com/landing/vitaplexcampaign05/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=2000&q=90",
    title: "محصولات زیبایی",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601598851547-4302969d2a6f?auto=format&fit=crop&w=2000&q=90",
    title: "پیشنهادهای ویژه",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=90",
    title: "دنیای دیجیتال",
    link: "#",
  },
];

export default function HeroSlider() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={0}
        className="hero-slider w-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <a
              href={banner.link}
              target="_blank"
              rel="noreferrer"
              className="block w-full"
            >
              <div
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  bg-gray-100
                  aspect-[16/6]
                  min-h-[180px]
                  sm:min-h-[230px]
                  md:min-h-[280px]
                  lg:min-h-[350px]
                  xl:min-h-[400px]
                "
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="
                    h-full
                    w-full
                    object-contain
                  "
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
