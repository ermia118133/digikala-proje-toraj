import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import productImages from "../../data/productImages";

export default function ProductShowcase() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.indemand || []);
      })
      .catch((error) => {
        console.error("خطا:", error);
      });
  }, []);

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-5">
      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-black text-gray-800">
            محصولات پرفروش و محبوب
          </h2>

          <button className="text-sm font-bold text-[#ef394e]">
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
                nextEl: ".products-next",
                prevEl: ".products-prev",
              }}
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
                1200: { slidesPerView: 6 },
              }}
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <article className="border-l border-gray-100 px-3">
                    <div className="flex h-[170px] items-center justify-center rounded-xl bg-gray-50">
                      <img
                        src={productImages[index % productImages.length]}
                        alt={product.title}
                        className="h-full w-full object-contain p-4"
                      />
                    </div>

                    <h3 className="mt-4 min-h-[50px] line-clamp-2 text-sm leading-6 text-gray-700">
                      {product.title}
                    </h3>

                    <div className="mt-4 text-left">
                      <span className="text-sm font-black text-gray-800">
                        {product.newPrice || "قیمت نامشخص"}
                      </span>

                      <span className="mr-1 text-xs text-gray-500">تومان</span>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="products-next absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow">
              <ChevronRight size={18} />
            </button>

            <button className="products-prev absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow">
              <ChevronLeft size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
