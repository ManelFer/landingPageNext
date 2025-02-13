import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Testimonial } from "./_components/testimonial";

export default function Home() {
  return(
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Testimonial/>
    </main>
  );
}