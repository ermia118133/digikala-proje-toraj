const categories = [
  { title: "موبایل", icon: "📱" },
  { title: "کالای دیجیتال", icon: "💻" },
  { title: "خانه و آشپزخانه", icon: "🏠" },
  { title: "مد و پوشاک", icon: "👕" },
  { title: "زیبایی و سلامت", icon: "💄" },
  { title: "کودک و نوزاد", icon: "🧸" },
  { title: "ورزش و سفر", icon: "⚽" },
  { title: "ابزار و خودرو", icon: "🚗" },
  { title: "کتاب و لوازم تحریر", icon: "📚" },
  { title: "سوپرمارکت", icon: "🛒" },
  { title: "طلا و نقره", icon: "💎" },
  { title: "محصولات بومی", icon: "🌿" },
];

export default function CategoryCircles() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-5">
      <h2 className="mb-6 text-center text-xl font-bold text-gray-800">
        خرید بر اساس دسته‌بندی
      </h2>

      <div className="grid grid-cols-4 gap-y-7 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
        {categories.map((category) => (
          <button
            key={category.title}
            className="group flex flex-col items-center gap-2"
          >
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gray-100 text-3xl transition group-hover:scale-105 group-hover:bg-gray-200">
              {category.icon}
            </div>

            <span className="max-w-[85px] text-center text-xs leading-5 text-gray-700">
              {category.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
