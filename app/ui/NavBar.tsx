import Image from 'next/image';
import Link from 'next/link';
import { Button } from './';
type MenuItem = { name: string };
export function NavBar() {
  const menu: MenuItem[] = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Contact' },
    { name: 'Blog' },
    { name: 'Careers' },
  ];
  return (
    <div className="fixed left-0 top-0 z-50 flex h-20 w-screen items-center justify-between gap-2 bg-white px-6 md:px-16 lg:px-40">
      <Image src="/logo.svg" width={139} height={20} alt="easybank" />
      <ul className="hidden h-full gap-[30px] md:flex">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              className="flex h-full items-center border-y-4 border-transparent text-sm font-normal tracking-[-0.108px] text-GrayBlue hover:border-b-limeGreen hover:text-darkBlue"
              href="#"
              key={item.name}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Image
        className="block md:hidden"
        src="/logo.svg"
        width={139}
        height={20}
        alt="easybank"
      />
      <Button className="hidden shrink-0 md:block">Request Invite</Button>
    </div>
  );
}
