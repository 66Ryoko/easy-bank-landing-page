import { NavBar, Hero, Advantage, Article, Footer } from './ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar></NavBar>
      <Hero></Hero>
      <Advantage></Advantage>
      <Article></Article>
      <Footer></Footer>
    </main>
  );
}
