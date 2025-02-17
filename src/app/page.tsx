import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Noticias } from "@/components/noticias";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <About />
      <Noticias />
    </main>
  );
};

export default Home;
