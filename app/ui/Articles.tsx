import Image from 'next/image';
import { Article } from '@/app/lib/definitions';
export function Articles() {
  const articles: Article[] = [
    {
      title: 'Receive money in any currency with no fees',
      author: 'Claire Robinson',
      description:
        'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
      image: '/currency.jpg',
    },
    {
      title: 'Treat yourself without worrying about money',
      author: 'Wilson Hutton',
      description:
        'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
      image: '/restaurant.jpg',
    },
    {
      title: 'Take your Easybank card wherever you go',
      author: 'Wilson Hutton',
      description:
        'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
      image: '/plane.jpg',
    },
    {
      title: 'Our invite-only Beta accounts are now live!',
      author: 'Claire Robinson',
      description:
        'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
      image: '/confetti.jpg',
    },
  ];
  return (
    <section className="flex flex-col gap-8 bg-pale-gray px-6 py-16 md:gap-10 lg:px-40 lg:py-24">
      <h2 className="w-full text-center text-[32px] font-light text-dark-blue md:text-left md:text-[40px]">
        Latest Articles
      </h2>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-4 md:gap-[30px]">
        {articles.map((article) => (
          <div
            key={article.title}
            className="group shrink-0 overflow-hidden rounded-[5px] bg-white transition-all delay-75 hover:scale-105 hover:cursor-pointer"
          >
            <Image
              className="aspect-[3/2] w-full"
              width={600}
              height={400}
              src={article.image}
              alt={article.title}
            />
            <div className="flex w-full flex-col gap-2 px-8 py-6 text-left md:px-6">
              <p className="text-[10px] font-normal text-gray-blue">{`by ${article.author}`}</p>
              <h4 className="text-base font-light text-dark-blue group-hover:text-lime-green">
                {article.title}
              </h4>
              <span className="text-[13px] font-normal text-gray-blue">
                {article.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
