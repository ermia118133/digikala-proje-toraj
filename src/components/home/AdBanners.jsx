import { useEffect, useState } from "react";

const bannerImages = [
  {
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=90",
    title: "لپ تاپ و تکنولوژی",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1600&q=90",
    title: "عطر و محصولات زیبایی",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=90",
    title: "محصولات مراقبت و زیبایی",
  },
  {
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1600&q=90",
    title: "محصولات حیوانات خانگی",
  },
];

export default function AdBanners() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setBanners(data.ads2 || []);
      })
      .catch((error) => {
        console.error("خطا در دریافت بنرها:", error);
      });
  }, []);


  const getImage = (banner, index) => {
    if (banner?.img && banner.img.startsWith("http")) {
      return banner.img;
    }

    return bannerImages[index % bannerImages.length].image;
  };

  const items = banners.length > 0 ? banners.slice(0, 4) : bannerImages;

  return (
    <section className="mx-auto w-full max-w-[1200px] px-3 py-4 sm:px-4 sm:py-5">
      <div
        className="
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {items.map((banner, index) => (
          <div
            key={index}
            className="
              group
              overflow-hidden
              rounded-xl
              bg-white
              shadow-sm
              sm:rounded-2xl
            "
          >
            <div
              className="
                relative
                aspect-[16/9]
                w-full
                overflow-hidden
                bg-gray-100
              "
            >
              <img
                src={banner?.image ? banner.image : getImage(banner, index)}
                alt={
                  banner?.title ||
                  bannerImages[index % bannerImages.length].title
                }
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-300
                  group-hover:scale-105
                "
                onError={(event) => {
                  event.currentTarget.src =
                    bannerImages[index % bannerImages.length].image;
                }}
              />

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  bg-gradient-to-t
                  from-black/45
                  to-transparent
                  p-3
                  pt-8
                "
              >
                <span className="text-xs font-bold text-white sm:text-sm">
                  {banner?.title ||
                    bannerImages[index % bannerImages.length].title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
