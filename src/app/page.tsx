import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-brand-bordeaux focus:text-brand-chalk focus:px-4 focus:py-2 focus:rounded"
      >
        Naar hoofdinhoud
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
