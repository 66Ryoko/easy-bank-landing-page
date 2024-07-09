import { clsx } from 'clsx';
import Link from 'next/link';
import {
  Logo,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
  RequestInviteButton,
} from './';
import { MenuItem, SocialNetworkItem } from '@/app/lib/definitions';

export function Footer() {
  const menu: MenuItem[] = [
    { name: 'About Us', url: '/#About', order: 'order-1 lg:order-1' },
    { name: 'Contact', url: '/#Contact', order: 'order-2 lg:order-3' },
    { name: 'Blog', url: '/#Blog', order: 'order-3 lg:order-5' },
    { name: 'Careers', url: '/#Careers', order: 'order-4 lg:order-2' },
    { name: 'Support', url: '/#Support', order: 'order-5 lg:order-4' },
    {
      name: 'Privacy Policy',
      url: '/#Privacy Policy',
      order: 'order-6 lg:order-6',
    },
  ];
  const socialNetworks: SocialNetworkItem[] = [
    { name: 'Facebook', icon: <FacebookIcon />, url: '/#Facebook' },
    { name: 'Youtube', icon: <YoutubeIcon />, url: '/#Youtube' },
    { name: 'Twitter', icon: <TwitterIcon />, url: '/#Twitter' },
    { name: 'Pinterest', icon: <PinterestIcon />, url: '/#Pinterest' },
    { name: 'Instagram', icon: <InstagramIcon />, url: '/#Instagram' },
  ];
  return (
    <section className="bg-dark-blue flex w-screen flex-col items-center gap-8 px-6 py-10 lg:flex-row lg:items-stretch lg:justify-between lg:px-40">
      <div className="flex flex-col items-center justify-between gap-8 lg:items-start">
        <Logo className="fill-white" />
        <div className="flex w-48 items-center justify-between">
          {socialNetworks.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              className="hover:fill-lime-green fill-white"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="grid-wrap grid flex-grow grid-cols-1 gap-2 lg:grid-cols-2">
        {menu.map((item) => (
          <Link
            className={clsx(
              'hover:text-lime-green w-full text-center text-[15px] font-normal text-white lg:text-start',
              item.order || '',
            )}
            href={item.url}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between gap-6 lg:items-end">
        <RequestInviteButton />
        <div className="text-center text-[15px] font-normal text-white opacity-50 lg:text-right">
          © Easybank. All Rights Reserved
        </div>
      </div>
    </section>
  );
}
