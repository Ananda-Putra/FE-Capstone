import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#eee6f3] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-maroon font-bold text-xs tracking-wider uppercase mb-3">
            TENTANG YASINTA BINTANG MUTIA
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight mb-6">
            Bersama<br />tumbuh, berani<br />berprestasi.
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-8 max-w-xl">
            Mewujudkan generasi emas Indonesia yang unggul, berkarakter, dan
            berdaya saing global melalui ajang kompetisi sains dan seni
            berstandar nasional.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/event"
              className="px-6 py-3.5 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-navy-light transition-colors"
            >
              LIHAT BUKU DAN LOMBA
            </Link>
            <Link
              href="/tentang-kami"
              className="px-6 py-3.5 border border-gray-400 text-brand-navy text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
            >
              BACA LENGKAP
            </Link>
          </div>
        </div>
      </section>

      {/* CTA bawah */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href="/login"
          className="inline-block px-8 py-3 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-navy-light"
        >
          Daftar Sekarang
        </Link>
      </section>
    </>
  );
}