export default function Footer() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-8 border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6 md:py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xl font-black text-[#ef394e] sm:text-2xl">
            دیجی‌کالا
          </div>

          <button
            onClick={goToTop}
            className="
              flex
              w-fit
              items-center
              gap-2
              rounded-lg
              border
              border-gray-200
              px-4
              py-2
              text-xs
              font-bold
              text-gray-600
              transition
              hover:bg-gray-50
            "
          >
            <span>↑</span>
            بازگشت به بالا
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-500 sm:text-sm">
          تلفن پشتیبانی: ۶۱۹۳۰۰۰۰ - ۰۲۱
        </p>
      </div>

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1400px]
          grid-cols-2
          gap-8
          px-4
          pb-8
          sm:px-6
          md:grid-cols-4
          md:gap-6
        "
      >
        <div>
          <h3 className="mb-4 text-sm font-black text-gray-800">
            با دیجی‌کالا
          </h3>

          <div className="flex flex-col gap-3 text-xs text-gray-500 sm:text-sm">
            <span>اتاق خبر دیجی‌کالا</span>
            <span>فروش در دیجی‌کالا</span>
            <span>فرصت‌های شغلی</span>
            <span>تماس با ما</span>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black text-gray-800">
            خدمات مشتریان
          </h3>

          <div className="flex flex-col gap-3 text-xs text-gray-500 sm:text-sm">
            <span>پاسخ به پرسش‌های متداول</span>
            <span>رویه‌های بازگرداندن کالا</span>
            <span>شرایط استفاده</span>
            <span>حریم خصوصی</span>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black text-gray-800">
            راهنمای خرید
          </h3>

          <div className="flex flex-col gap-3 text-xs text-gray-500 sm:text-sm">
            <span>نحوه ثبت سفارش</span>
            <span>رویه ارسال سفارش</span>
            <span>شیوه‌های پرداخت</span>
            <span>خرید امن</span>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black text-gray-800">
            همراه ما باشید
          </h3>

          <div className="flex items-center gap-2">
            <button
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-gray-100
                text-xs
                font-bold
                text-gray-600
                hover:bg-gray-200
              "
            >
              تل
            </button>

            <button
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-gray-100
                text-xs
                font-bold
                text-gray-600
                hover:bg-gray-200
              "
            >
              in
            </button>

            <button
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-gray-100
                text-xs
                font-bold
                text-gray-600
                hover:bg-gray-200
              "
            >
              X
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 px-4 py-5 text-center text-[10px] text-gray-400 sm:px-6 sm:text-xs">
        استفاده از مطالب این سایت فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع
        است.
      </div>
    </footer>
  );
}
