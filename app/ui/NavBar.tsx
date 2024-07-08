'use client';
import { clsx } from 'clsx';
import { useMediaQuery, useClickAway } from '@uidotdev/usehooks';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, CloseIcon, MenuIcon } from './';
type MenuItem = { name: string; url: string };
export function NavBar() {
  const menu: MenuItem[] = [
    { name: 'Home', url: '/#Home' },
    { name: 'About', url: '/#About' },
    { name: 'Contact', url: '/#Contact' },
    { name: 'Blog', url: '/#Blog' },
    { name: 'Careers', url: '/#Careers' },
  ];
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const isMediumDevice = useMediaQuery('only screen and (max-width : 767px)');
  const ref = useClickAway<HTMLDivElement>(() => {
    setMenuOpen(false);
  });
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <>
      <div
        ref={ref}
        className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between gap-2 bg-white px-6 md:px-16 lg:px-40"
      >
        <Image src="/logo.svg" width={139} height={20} alt="easybank" />
        {(!isMediumDevice || menuOpen) && (
          <nav
            className={clsx(
              'fixed inset-x-6 top-24 flex flex-col gap-6 rounded bg-white py-8',
              'md:static md:h-full md:flex-row md:gap-[30px] md:py-0',
            )}
          >
            {menu.map((item) => (
              <Link
                className={clsx(
                  'flex h-fit flex-col items-center text-lg font-normal leading-tight tracking-[-0.138px] text-darkBlue',
                  'md:h-full md:flex-row md:border-y-4 md:border-transparent md:text-sm md:leading-loose md:tracking-[-0.108px] md:text-GrayBlue md:hover:border-b-limeGreen md:hover:text-darkBlue',
                )}
                href={item.url}
                key={item.name}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
        <button className="block size-5 md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <CloseIcon className="size-full" />
          ) : (
            <MenuIcon className="size-full" />
          )}
        </button>
        <Button className="hidden shrink-0 md:block">Request Invite</Button>
      </div>
      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-hidden bg-gradient-to-b from-[#2D314D] to-transparent md:hidden"></div>
      )}
    </>
  );
}
