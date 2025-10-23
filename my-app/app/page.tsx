import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Schedule } from "@/components/schedule";
import { Weekend } from "@/components/weekend";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Schedule />
      <Weekend />
      <Contact />
      <Footer />
    </main>
  );
}
