import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import productImages from "../../data/productImages";

export default function HotProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.hot || []);
      })
      .catch((error) => {
        console.error("خطا:", error);
      });
  }, []);

  return (
    <section className="mx-auto w-full max-w-[1200px] px-3 py-4 sm:px-4 sm:py-5">
      <div className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-5">
        <div className="mb-4 flex items-center justify-between sm:mb-6">
          <h2 className="text-base font-black text-gray-800 sm:text-xl">
            داغ‌ترین محصولات
          </h2>

          <button className="text-xs font-bold text-[#ef394e] sm:text-sm">
            مشاهده همه
          </button>
        </div>

        {products.length === 0 ? (
          <div className="py-10 text-center text-gray-400">محصولی پیدا نشد</div>
        ) : (
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".hot-next",
                prevEl: ".hot-prev",
              }}
              spaceBetween={8}
              slidesPerView={2}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
            >
              {products.map((product, index) => (
                <SwiperSlide key={product.id || index}>
                  <article className="border-l border-gray-100 px-2 sm:px-3">
                    <div
                      className="
                        relative
                        flex
                        h-[155px]
                        w-full
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-xl
                        bg-gray-50
                        sm:h-[180px]
                      "
                    >
                      <img
                        src={productImages[index % productImages.length]}
                        alt={product.title}
                        className="
                          h-full
                          w-full
                          object-contain
                          p-2
                          sm:p-3
                        "
                      />

                      <span
                        className="
                          absolute
                          right-2
                          top-2
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          bg-[#ef394e]
                          text-xs
                          font-black
                          text-white
                        "
                      >
                        {index + 1}
                      </span>
                    </div>

                    <h3
                      className="
                        mt-3
                        min-h-[45px]
                        line-clamp-2
                        text-xs
                        leading-5
                        text-gray-700
                        sm:mt-4
                        sm:text-sm
                        sm:leading-6
                      "
                    >
                      {product.title}
                    </h3>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="
                hot-next
                absolute
                right-0
                top-1/2
                z-10
                flex
                h-8
                w-8
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-md
                sm:h-9
                sm:w-9
              "
            >
              <ChevronRight size={17} />
            </button>

            <button
              className="
                hot-prev
                absolute
                left-0
                top-1/2
                z-10
                flex
                h-8
                w-8
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-md
                sm:h-9
                sm:w-9
              "
            >
              <ChevronLeft size={17} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
