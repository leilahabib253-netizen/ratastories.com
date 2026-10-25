import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a3a] bg-[#0a0a0f] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-purple-600 flex items-center justify-center text-white font-bold">
                R
              </div>
              <span className="font-bold text-white text-lg">RataStories</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              منصة عربية متكاملة لكتابة القصص بالذكاء الاصطناعي، وتحويلها إلى قصص إلكترونية، ونشرها، وتحقيق دخل إضافي.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/writer" className="text-gray-400 hover:text-amber-400 transition-colors">
                  كاتبة القصة
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-amber-400 transition-colors">
                  معرض القصص
                </Link>
              </li>
              <li>
                <Link href="/ideas" className="text-gray-400 hover:text-amber-400 transition-colors">
                  أفكار وبرومبتات
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">تواصل معنا</h4>
            <p className="text-gray-400 text-sm mb-3">
              للدعم والاقتراحات والشراكات
            </p>
            <p className="text-amber-400 text-sm font-medium">
              support@ratastories.com
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2a2a3a] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} RataStories. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-500 text-xs">
            نسخة تجريبية — قريباً على الدومين الرسمي
          </p>
        </div>
      </div>
    </footer>
  );
}