const brands = [
  {
    name: "Samsung",
    image: "https://cdn.simpleicons.org/samsung/000000",
  },
  {
    name: "Apple",
    image: "https://cdn.simpleicons.org/apple/000000",
  },
  {
    name: "Xiaomi",
    image: "https://cdn.simpleicons.org/xiaomi/000000",
  },
  {
    name: "ASUS",
    image: "https://cdn.simpleicons.org/asus/000000",
  },
  {
    name: "Lenovo",
    image: "https://cdn.simpleicons.org/lenovo/000000",
  },
  {
    name: "Sony",
    image: "https://cdn.simpleicons.org/sony/000000",
  },
  {
    name: "LG",
    image: "https://cdn.simpleicons.org/lg/000000",
  },
  {
    name: "JBL",
    image: "https://cdn.simpleicons.org/jbl/000000",
  },
  {
    name: "HP",
    image: "https://cdn.simpleicons.org/hp/000000",
  },
  {
    name: "Canon",
    image: "https://cdn.simpleicons.org/canon/000000",
  },
  {
    name: "Anker",
    image: "https://cdn.simpleicons.org/anker/000000",
  },
  {
    name: "Huawei",
    image: "https://cdn.simpleicons.org/huawei/000000",
  },
];

export default function BrandShowcase() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-3 py-4 sm:px-4 sm:py-5">
      <div className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between sm:mb-6">
          <h2 className="text-base font-black text-[#252525] sm:text-lg md:text-xl">
            محبوب‌ترین برندها
          </h2>

          <button className="text-xs font-bold text-[#ef394e] sm:text-sm">
            مشاهده همه
          </button>
        </div>

        <div
          className="
            grid
            grid-cols-2
            gap-2
            sm:grid-cols-3
            sm:gap-3
            md:grid-cols-4
            lg:grid-cols-6
          "
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="
                flex
                h-[105px]
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-gray-100
                bg-white
                p-4
                transition
                duration-200
                hover:-translate-y-1
                hover:shadow-md
                sm:h-[125px]
                sm:p-5
              "
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                <div className="flex h-[65px] w-full items-center justify-center">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="
                      max-h-[55px]
                      max-w-[145px]
                      object-contain
                      sm:max-h-[65px]
                      sm:max-w-[170px]
                    "
                    onError={(event) => {
                      event.currentTarget.style.display = "none";

                      const fallback = event.currentTarget.nextElementSibling;

                      if (fallback) {
                        fallback.style.display = "flex";
                      }
                    }}
                  />

                  <div
                    className="
                      hidden
                      h-[55px]
                      w-full
                      items-center
                      justify-center
                      text-center
                      text-lg
                      font-black
                      text-gray-800
                    "
                  >
                    {brand.name}
                  </div>
                </div>

                <span className="text-[10px] font-bold text-gray-500 sm:text-xs">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
