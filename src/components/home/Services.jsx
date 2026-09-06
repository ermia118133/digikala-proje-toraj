const services = [
  {
    title: "طلای دیجیتال",
    description: "خرید و سرمایه‌گذاری آسان",
    icon: "🥇",
  },
  {
    title: "دیجی‌کالا پلاس",
    description: "خرید سریع‌تر و راحت‌تر",
    icon: "⭐",
  },
  {
    title: "خرید قسطی",
    description: "خرید گوشی، لپ‌تاپ و لوازم خانه",
    icon: "💳",
  },
  {
    title: "دیجی‌کالا مهر",
    description: "کمک به افراد و کسب‌وکارها",
    icon: "❤️",
  },
  {
    title: "همکاری در فروش",
    description: "کسب درآمد از تولید محتوا",
    icon: "💰",
  },
  {
    title: "دیجی‌کالا بیزینس",
    description: "فروش عمده کالاهای دیجیتال",
    icon: "🏢",
  },
  {
    title: "پیندو",
    description: "ثبت آگهی کالا و خدمات",
    icon: "📢",
  },
  {
    title: "بومی و محلی",
    description: "محصولات اصیل ایرانی",
    icon: "🌿",
  },
  {
    title: "دیجی‌کالا سرویس",
    description: "گارانتی و خدمات پس از فروش",
    icon: "🛠️",
  },
  {
    title: "فیدیبو",
    description: "کتاب و کتاب الکترونیک",
    icon: "📚",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-8">
      <div className="rounded-2xl bg-gray-50 p-6">
        <h2 className="mb-7 text-center text-xl font-black text-gray-800">
          خدمات و سرویس‌های دیجی‌کالا
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl transition group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="mt-4 text-sm font-bold text-gray-800">
                {service.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
                {service.description}
              </p>

              <div className="mt-4 text-xs font-bold text-red-600">
                مشاهده بیشتر ←
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
