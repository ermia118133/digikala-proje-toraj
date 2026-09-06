import { MessageCircle } from "lucide-react";

export default function SupportButton() {
  return (
    <button
      className="fixed bottom-5 left-5 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-[#ef394e] text-white shadow-lg transition hover:scale-105 hover:bg-[#d92f42]"
      title="پشتیبانی"
      aria-label="پشتیبانی"
    >
      <MessageCircle size={22} />
    </button>
  );
}
