import Banner from "@/components/Home/Banner";
import Experts from "@/components/Home/Experts";
import Header from "@/components/Home/Header";
import Footer from "@/components/Shared/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Experts />
      <Footer />
    </div>
  );
}
