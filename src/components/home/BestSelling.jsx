import { useEffect, useState } from "react";

import productImages from "../../data/productImages";

export default function BestSelling() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.chosen || []);
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
            پرفروش‌ترین‌ها
          </h2>

          <button className="text-xs font-bold text-[#ef394e] sm:text-sm">
            مشاهده همه
          </button>
        </div>

        {products.length === 0 ? (
          <div className="py-10 text-center text-gray-400">محصولی پیدا نشد</div>
        ) : (
          <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 12).map((product, index) => (
              <article
                key={product.id || index}
                className="
                  flex
                  min-h-[125px]
                  items-center
                  gap-3
                  border-b
                  border-gray-100
                  py-3
                  sm:min-h-[145px]
                  sm:gap-4
                  sm:py-4
                "
              >
                <span
                  className="
                    w-7
                    shrink-0
                    text-center
                    text-xl
                    font-black
                    text-[#ef394e]
                    sm:text-2xl
                  "
                >
                  {index + 1}
                </span>

                <div
                  className="
                    flex
                    h-[90px]
                    w-[90px]
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    bg-gray-50
                    sm:h-[105px]
                    sm:w-[105px]
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
                </div>

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      line-clamp-3
                      text-xs
                      font-bold
                      leading-5
                      text-gray-700
                      sm:text-sm
                      sm:leading-6
                    "
                  >
                    {product.title}
                  </h3>

                  <div className="mt-2 text-[10px] text-gray-400 sm:text-xs">
                    {product.newPrice || "قیمت نامشخص"} تومان
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
