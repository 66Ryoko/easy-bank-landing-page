'use client';
import { Logo, RequestInviteButton, ClientOnlyNav } from './';
import { useIsClient } from '@uidotdev/usehooks';
export function NavBar() {
  const isClient = useIsClient();
  return (
    <section className="fixed inset-x-0 top-0 z-50 flex h-20 w-full items-center justify-between gap-2 bg-white px-6 lg:px-40">
      <Logo className="fill-dark-blue" />
      {isClient && <ClientOnlyNav />}
      <RequestInviteButton className="hidden shrink-0 lg:block" />
    </section>
  );
}
