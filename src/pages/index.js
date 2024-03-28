import Banner from "@/components/Home/Banner";
import Experts from "@/components/Home/Experts";
import { Inter } from "next/font/google";
import Layout from "./Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Layout>
        <Banner />
        <Experts />
      </Layout>
    </div>
  );
}
