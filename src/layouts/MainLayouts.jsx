import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="topbar">
        <Header />
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
