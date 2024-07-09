import Image from 'next/image';
type AdvangeItem = {
  icon: string;
  name: string;
  description: string;
};
export function Advantage() {
  const advantages: AdvangeItem[] = [
    {
      icon: '/onlineBanking.svg',
      name: 'Online Banking',
      description:
        'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    },
    {
      icon: '/simpleBudget.svg',
      name: 'Simple Budgeting',
      description:
        'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    },
    {
      icon: '/fastOnboarding.svg',
      name: 'Fast Onboarding',
      description:
        'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
    },
    {
      icon: '/openAPI.svg',
      name: 'Open API',
      description:
        'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    },
  ];
  return (
    <section className="bg-light-gray flex w-screen flex-col justify-center px-6 py-16 lg:px-40 lg:py-24">
      <h2 className="text-dark-blue w-full text-center text-[32px] font-light lg:text-left lg:text-5xl">
        Why choose Easybank?
      </h2>
      <span className="text-gray-blue mb-14 mt-[14px] text-center text-[15px] font-normal leading-6 lg:mb-[56px] lg:mt-4 lg:text-left">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </span>
      <ul className="flex flex-col gap-7 lg:flex-row">
        {advantages.map((item) => (
          <li
            className="flex w-full flex-col items-center lg:items-start"
            key={item.name}
          >
            <Image src={item.icon} alt={item.name} width={72} height={72} />
            <p className="text-dark-blue mb-4 mt-6 text-xl font-light leading-7 lg:mb-[26px] lg:mt-10 lg:text-2xl">
              {item.name}
            </p>
            <span className="text-gray-blue text-center text-[15px] font-normal leading-6 lg:text-left lg:text-base">
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
