// Layout.js

import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
