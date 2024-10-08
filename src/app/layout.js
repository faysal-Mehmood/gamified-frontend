import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/views/shared/layout/header";
import Footer from "@/views/shared/layout/footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gamified",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} relative bg-brand-black `}>
        {/* <Image
          src={"/images/desktop-bg.png"}
          fill
          alt='background'
          className='object-contain xxl:object-cover '
        /> */}
        <main className='w-full h-full relative'>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
