import Navbar from "layout/Navbar";
import Footer from "layout/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Content = () => {
  return (
    <section className={"px-16 pb-16 max-w-7xl mx-auto relative z-0"}>
      <Outlet />
      <ScrollRestoration />
    </section>
  );
};

export default function MainLayout() {
  return (
    <main className="relative min-h-screen min-w-full z-0 bg-primary">
      <Navbar />
      <Content />
      <Footer />
    </main>
  );
}
