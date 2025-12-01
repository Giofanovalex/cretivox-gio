import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";
import Experience from "@/components/ui/Experience";
import Contact from "@/components/ui/Contact";
import Login from "@/components/ui/Login";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Login />
      <Contact />
      <Footer />
    </main>
  );
}
