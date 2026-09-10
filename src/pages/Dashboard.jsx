import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
  });

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}db.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.chosen || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("خطا در دریافت محصولات:", error);
        setLoading(false);
      });
  }, []);

  const deleteProduct = (id) => {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== id),
    );
  };

  const addProduct = (event) => {
    event.preventDefault();

    if (!newProduct.title.trim() || !newProduct.price.trim()) {
      return;
    }

    const product = {
      id: Date.now(),
      title: newProduct.title,
      newPrice: newProduct.price,
    };

    setProducts((currentProducts) => [product, ...currentProducts]);

    setNewProduct({
      title: "",
      price: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6">
          <h1 className="text-lg font-black text-gray-800 sm:text-xl">
            داشبورد مدیریت
          </h1>

          <Link
            to="/"
            className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-bold text-gray-600 transition hover:bg-gray-50 sm:px-4 sm:text-sm"
          >
            ← بازگشت به فروشگاه
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] p-4 sm:p-6">

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          <div className="rounded-xl bg-white p-4 shadow-sm sm:p-6">
            <p className="text-xs text-gray-500 sm:text-sm">فروش امروز</p>

            <h2 className="mt-2 text-lg font-black text-gray-800 sm:text-2xl">
              ۱۲,۵۰۰,۰۰۰
            </h2>

            <span className="text-[10px] text-gray-400 sm:text-xs">تومان</span>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm sm:p-6">
            <p className="text-xs text-gray-500 sm:text-sm">سفارش‌ها</p>

            <h2 className="mt-2 text-lg font-black text-gray-800 sm:text-2xl">
              ۱۲۴
            </h2>

            <span className="text-[10px] text-gray-400 sm:text-xs">
              سفارش ثبت شده
            </span>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm sm:p-6">
            <p className="text-xs text-gray-500 sm:text-sm">کاربران</p>

            <h2 className="mt-2 text-lg font-black text-gray-800 sm:text-2xl">
              ۲,۴۵۰
            </h2>

            <span className="text-[10px] text-gray-400 sm:text-xs">کاربر</span>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm sm:p-6">
            <p className="text-xs text-gray-500 sm:text-sm">محصولات</p>

            <h2 className="mt-2 text-lg font-black text-gray-800 sm:text-2xl">
              {products.length}
            </h2>

            <span className="text-[10px] text-gray-400 sm:text-xs">
              محصول موجود
            </span>
          </div>
        </div>

        {/* افزودن محصول */}

        <section className="mt-5 rounded-xl bg-white p-4 shadow-sm sm:p-6">
          <h2 className="mb-5 text-base font-black text-gray-800 sm:text-lg">
            افزودن محصول
          </h2>

          <form
            onSubmit={addProduct}
            className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_220px_auto]"
          >
            <input
              type="text"
              value={newProduct.title}
              onChange={(event) =>
                setNewProduct({
                  ...newProduct,
                  title: event.target.value,
                })
              }
              placeholder="نام محصول"
              className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#ef394e]"
            />

            <input
              type="text"
              value={newProduct.price}
              onChange={(event) =>
                setNewProduct({
                  ...newProduct,
                  price: event.target.value,
                })
              }
              placeholder="قیمت"
              className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#ef394e]"
            />

            <button
              type="submit"
              className="rounded-lg bg-[#ef394e] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#d92f42]"
            >
              افزودن محصول
            </button>
          </form>
        </section>

        {/* لیست محصولات */}

        <section className="mt-5 rounded-xl bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-base font-black text-gray-800 sm:text-lg">
              مدیریت محصولات
            </h2>

            <span className="text-xs text-gray-400">
              {products.length} محصول
            </span>
          </div>

          {loading ? (
            <div className="py-10 text-center text-sm text-gray-400">
              در حال دریافت محصولات...
            </div>
          ) : products.length === 0 ? (
            <div className="py-10 text-center text-sm text-gray-400">
              محصولی وجود ندارد
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-right">
                <thead>
                  <tr className="border-b border-gray-100 text-xs text-gray-400">
                    <th className="px-3 py-3">محصول</th>
                    <th className="px-3 py-3">قیمت</th>
                    <th className="px-3 py-3">عملیات</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <td className="max-w-[500px] px-3 py-4">
                        <p className="line-clamp-2 text-xs font-bold text-gray-700 sm:text-sm">
                          {product.title}
                        </p>
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-600 sm:text-sm">
                        {Number(product.newPrice || 0).toLocaleString("fa-IR")}{" "}
                        تومان
                      </td>

                      <td className="px-3 py-4">
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-red-500 transition hover:bg-red-100"
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
