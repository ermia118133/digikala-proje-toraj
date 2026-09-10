import { useEffect, useState } from "react";

function ServiceCategories() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}db.json`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.modalService || []);
      });
  }, []);

  return (
    <section className="bg-white py-6">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-between gap-5 overflow-x-auto">
          {items.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="min-w-[110px] text-center cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={item.pic}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-xs mt-3 text-gray-700">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCategories;
