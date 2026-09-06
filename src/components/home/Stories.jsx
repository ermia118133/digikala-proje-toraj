import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const stories = [
  {
    title: "سعدی",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "کتاب",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "پیشنهاد ویژه",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "محصولات جدید",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "تکنولوژی",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "پیشنهاد امروز",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "خرید هوشمند",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "محبوب‌ترین‌ها",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80",
  },
];

export default function Stories() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-5">
      <Swiper
        spaceBetween={18}
        slidesPerView={4}
        breakpoints={{
          640: { slidesPerView: 5 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 8 },
        }}
      >
        {stories.map((story, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div className="h-[72px] w-[72px] rounded-full bg-gradient-to-br from-[#ef394e] to-[#8b5cf6] p-[3px]">
                <div className="h-full w-full overflow-hidden rounded-full border-2 border-white bg-white">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <span className="mt-2 line-clamp-1 text-xs font-bold text-gray-700">
                {story.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
