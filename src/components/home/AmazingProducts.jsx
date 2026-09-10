import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import productImages from "../../data/productImages";

export default function AmazingProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}db.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.amazingmobile || []);
      })
      .catch((error) => {
        console.error("خطا در دریافت محصولات:", error);
      });
  }, []);

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-5">
      <div className="overflow-hidden rounded-2xl bg-[#ef394e] p-3">
        <div className="flex flex-row-reverse">
          {/* بخش شگفت انگیز */}
          <div className="flex w-[155px] shrink-0 flex-col items-center justify-center px-2 text-center text-white">
            <div className="text-5xl font-black">%</div>

            <h2 className="mt-2 text-xl font-black">پیشنهاد شگفت‌انگیز</h2>

            <div className="mt-4 flex gap-1" dir="ltr">
              <span className="rounded bg-white px-2 py-1 text-xs font-bold text-[#ef394e]">
                ۰۱
              </span>

              <span className="rounded bg-white px-2 py-1 text-xs font-bold text-[#ef394e]">
                ۵۴
              </span>

              <span className="rounded bg-white px-2 py-1 text-xs font-bold text-[#ef394e]">
                ۲۳
              </span>
            </div>

            <button className="mt-5 rounded-lg bg-white px-4 py-2 text-xs font-bold text-[#ef394e]">
              مشاهده همه
            </button>
          </div>

          {/* محصولات */}
          <div className="relative min-w-0 flex-1">
            {products.length > 0 ? (
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".amazing-next",
                  prevEl: ".amazing-prev",
                }}
                spaceBetween={2}
                slidesPerView={2}
                breakpoints={{
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
                    <article className="h-[330px] bg-white p-3">
                      {/* عکس */}
                      <div className="flex h-[165px] items-center justify-center rounded-lg bg-white">
                        <img
                          src={productImages[index % productImages.length]}
                          alt={product.title}
                          className="h-full w-full object-contain p-2"
                        />
                      </div>

                      {/* عنوان */}
                      <h3 className="mt-3 min-h-[42px] line-clamp-2 text-xs leading-5 text-gray-700">
                        {product.title}
                      </h3>

                      {/* قیمت */}
                      <div className="mt-3 flex items-center justify-between">
                        <span className="rounded-full bg-[#ef394e] px-2 py-1 text-[10px] font-bold text-white">
                          {product.discount}٪
                        </span>

                        <span className="text-sm font-black text-gray-800">
                          {Number(product.newPrice || 0).toLocaleString(
                            "fa-IR",
                          )}
                        </span>
                      </div>

                      {/* قیمت قبلی */}
                      <div className="mt-1 text-left text-[10px] text-gray-400 line-through">
                        {Number(product.oldPrice || 0).toLocaleString("fa-IR")}
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="flex h-[330px] items-center justify-center bg-white">
                در حال دریافت محصولات...
              </div>
            )}

            <button className="amazing-next absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow">
              <ChevronRight size={18} />
            </button>

            <button className="amazing-prev absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow">
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
