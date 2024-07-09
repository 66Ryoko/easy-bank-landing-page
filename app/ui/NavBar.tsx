'use client';
import { clsx } from 'clsx';
import { useMediaQuery, useClickAway } from '@uidotdev/usehooks';
import { useState } from 'react';
import Link from 'next/link';
import { Logo, RequestInviteButton, CloseIcon, MenuIcon } from './';
import { MenuItem } from '@/app/lib/definitions';

export function NavBar() {
  const menu: MenuItem[] = [
    { name: 'Home', url: '/#Home' },
    { name: 'About', url: '/#About' },
    { name: 'Contact', url: '/#Contact' },
    { name: 'Blog', url: '/#Blog' },
    { name: 'Careers', url: '/#Careers' },
  ];
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const isLargeDevice = useMediaQuery('only screen and (min-width : 1024px)');
  const ref = useClickAway<HTMLDivElement>(() => {
    setMenuOpen(false);
  });
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <>
      <div
        ref={ref}
        className="fixed inset-x-0 top-0 z-50 flex h-20 w-full items-center justify-between gap-2 bg-white px-6 lg:px-40"
      >
        <Logo className="fill-dark-blue" />
        {(isLargeDevice || menuOpen) && (
          <nav
            className={clsx(
              'fixed inset-x-6 top-24 flex flex-col gap-6 rounded bg-white py-8',
              'lg:static lg:h-full lg:flex-row lg:gap-[30px] lg:py-0',
            )}
          >
            {menu.map((item) => (
              <Link
                className={clsx(
                  'text-dark-blue flex h-fit flex-col items-center text-lg font-normal leading-tight tracking-[-0.138px]',
                  'lg:hover:border-b-lime-green lg:hover:text-dark-blue lg:text-gray-blue lg:h-full lg:flex-row lg:border-y-4 lg:border-transparent lg:text-sm lg:leading-loose lg:tracking-[-0.108px]',
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
        <button className="block size-5 lg:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <CloseIcon className="size-full" />
          ) : (
            <MenuIcon className="size-full" />
          )}
        </button>
        <RequestInviteButton className="hidden shrink-0 lg:block" />
      </div>
      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-hidden bg-gradient-to-b from-[#2D314D] to-transparent lg:hidden"></div>
      )}
    </>
  );
}
