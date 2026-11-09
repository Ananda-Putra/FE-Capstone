import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="font-extrabold text-base text-brand-navy block mb-3">
            YASINTA BINTANG MUTIA
          </span>
          <p className="leading-relaxed">
            Wadah pengembangan bakat dan potensi anak bangsa di bidang sains, matematika, dan ilmu pengetahuan.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-gray-800 uppercase mb-3">Halaman Utama</h5>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Beranda</Link></li>
            <li><Link href="/event" className="hover:underline">Lomba</Link></li>
            <li><Link href="/buku" className="hover:underline">Toko Buku</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-gray-800 uppercase mb-3">Informasi</h5>
          <ul className="space-y-2">
            <li><Link href="/nominasi" className="hover:underline">Dokumentasi</Link></li>
            <li><Link href="#" className="hover:underline">Syarat & Ketentuan</Link></li>
            <li><Link href="#" className="hover:underline">Kebijakan Privasi</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-gray-800 uppercase mb-3">Kontak Kami</h5>
          <p className="mb-1">Email: info@yasinta.or.id</p>
          <p>Telepon: +62 812-3456-7890</p>
        </div>
      </div>
    </footer>
  );
}