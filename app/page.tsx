import { NavBar, Hero, Advantage, Article, Footer } from './ui';

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between pt-20">
      <NavBar />
      <Hero />
      <Advantage />
      <Article />
      <Footer />
    </main>
  );
}
