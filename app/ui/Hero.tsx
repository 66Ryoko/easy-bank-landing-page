import Image from 'next/image';
import { RequestInviteButton } from './';
export function Hero() {
  return (
    <section className="bg-pale-gray flex w-full flex-col px-6 lg:px-40">
      <div className="lg:w-min-[447px] flex h-[676px] w-full flex-col items-center justify-center gap-4 lg:w-1/2 lg:items-start lg:gap-6">
        <h1 className="text-dark-blue text-center text-[40px] font-light leading-normal lg:text-left lg:text-[56px] lg:leading-[64px]">
          Next generation digital banking
        </h1>
        <span className="text-gray-blue text-center text-[15px] font-normal leading-[25px] lg:text-left lg:text-lg lg:leading-7">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </span>
        <RequestInviteButton className="mt-4 lg:mt-4" />
      </div>
    </section>
  );
}
