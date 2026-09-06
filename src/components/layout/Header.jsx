import { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  LogIn,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">

      <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 lg:px-6">
        <div className="flex min-h-[64px] items-center gap-2 sm:min-h-[72px] sm:gap-3">
          {/* لوگو */}
          <div className="hidden shrink-0 items-center sm:flex">
            <div className="text-xl font-black tracking-tight text-[#ef394e] sm:text-2xl">
              دیجی‌کالا
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-gray-700
              hover:bg-gray-100
              sm:hidden
            "
            aria-label="منو"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="flex shrink-0 sm:hidden">
            <div className="text-lg font-black text-[#ef394e]">دیجی‌کالا</div>
          </div>

          <div className="min-w-0 flex-1">
            <div
              className="
                flex
                h-10
                w-full
                items-center
                rounded-lg
                bg-gray-100
                px-3
                transition
                focus-within:bg-gray-200
                sm:h-11
                sm:rounded-xl
                md:h-12
              "
            >
              <Search size={18} className="shrink-0 text-gray-500 sm:size-5" />

              <input
                type="text"
                placeholder="جستجو در دیجی‌کالا"
                className="
                  min-w-0
                  flex-1
                  border-none
                  bg-transparent
                  px-2
                  text-xs
                  text-gray-700
                  outline-none
                  placeholder:text-gray-400
                  sm:text-sm
                "
              />
            </div>
          </div>
          <button
            className="
              hidden
              h-10
              shrink-0
              items-center
              gap-2
              rounded-lg
              border
              border-gray-200
              px-3
              text-xs
              font-bold
              text-gray-700
              hover:bg-gray-50
              sm:flex
              md:h-11
              md:px-4
              md:text-sm
            "
          >
            <User size={18} />

            <span className="hidden md:inline">ورود | ثبت‌نام</span>

            <span className="md:hidden">ورود</span>
          </button>

          <button
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-gray-700
              hover:bg-gray-100
              sm:hidden
            "
            aria-label="ورود"
          >
            <LogIn size={20} />
          </button>

          <div className="hidden h-7 w-px bg-gray-200 sm:block" />

          <button
            className="
              relative
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-gray-700
              hover:bg-gray-100
              sm:h-11
              sm:w-11
            "
            aria-label="سبد خرید"
          >
            <ShoppingCart size={21} />

            <span
              className="
                absolute
                -right-0.5
                -top-0.5
                flex
                h-4
                min-w-4
                items-center
                justify-center
                rounded-full
                bg-[#ef394e]
                px-1
                text-[9px]
                font-bold
                text-white
              "
            >
              ۰
            </span>
          </button>
        </div>
      </div>

      <div className="hidden border-t border-gray-100 lg:block">
        <div className="mx-auto flex h-11 max-w-[1400px] items-center justify-between px-6">
          <div className="flex h-full items-center gap-5">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-full items-center gap-1 border-b-2 border-transparent text-sm font-bold text-gray-700 hover:border-[#ef394e]"
            >
              <Menu size={18} />
              دسته‌بندی کالاها
              <ChevronDown size={15} />
            </button>

            <button className="text-xs font-medium text-gray-600 hover:text-[#ef394e]">
              شگفت‌انگیزها
            </button>

            <button className="text-xs font-medium text-gray-600 hover:text-[#ef394e]">
              سوپرمارکت
            </button>

            <button className="text-xs font-medium text-gray-600 hover:text-[#ef394e]">
              کارت هدیه
            </button>

            <button className="text-xs font-medium text-gray-600 hover:text-[#ef394e]">
              پرفروش‌ترین‌ها
            </button>

            <button className="text-xs font-medium text-gray-600 hover:text-[#ef394e]">
              تخفیف‌ها و پیشنهادها
            </button>

            <button className="text-xs font-medium text-gray-600 hover:text-[#ef394e]">
              سوالی دارید؟
            </button>
          </div>

          <button className="flex items-center gap-1 text-xs font-medium text-gray-600">
            <MapPin size={16} />
            لطفاً شهر خود را انتخاب کنید
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute right-0 top-full z-50 w-full border-t border-gray-200 bg-white shadow-xl lg:w-[500px]">
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-black text-gray-800 sm:text-base">
                دسته‌بندی کالاها
              </h3>

              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                "موبایل",
                "لپ‌تاپ و تبلت",
                "کالای دیجیتال",
                "خانه و آشپزخانه",
                "مد و پوشاک",
                "زیبایی و سلامت",
                "مواد غذایی",
                "کتاب و لوازم تحریر",
                "ورزش و سفر",
                "ابزار و خودرو",
                "اسباب بازی",
                "کالاهای بومی",
              ].map((item) => (
                <button
                  key={item}
                  className="
                    flex
                    min-h-[45px]
                    items-center
                    justify-between
                    rounded-lg
                    bg-gray-50
                    px-3
                    text-right
                    text-xs
                    font-bold
                    text-gray-700
                    hover:bg-gray-100
                  "
                >
                  {item}
                  <ChevronLeft size={14} className="text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
