import "./globals.css";

export const metadata = {
  title: "Yasinta Bintang Mutia",
  description: "Lomba olimpiade & toko buku Yasinta Bintang Mutia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}