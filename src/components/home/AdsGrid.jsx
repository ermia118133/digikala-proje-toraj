const ads = [
  "/img/banner/banner-1.jpg",
  "/img/banner/banner-2.jpg",
  "/img/banner/banner-3.jpg",
  "/img/banner/banner-4.jpg",
];

export default function AdsGrid() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {ads.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={image}
              alt={`بنر ${index + 1}`}
              className="h-auto w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
