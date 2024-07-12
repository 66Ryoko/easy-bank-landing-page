import { RequestInviteButton } from './';
export function Hero() {
  return (
    <section className="flex w-full flex-col bg-pale-gray px-6 lg:px-40">
      <div className="lg:w-min-[447px] flex h-[676px] w-full flex-col items-center justify-center gap-4 lg:w-1/2 lg:items-start lg:gap-6">
        <h1 className="text-center text-[40px] font-light leading-normal text-dark-blue lg:text-left lg:text-[56px] lg:leading-[64px]">
          Next generation digital banking
        </h1>
        <span className="text-center text-[15px] font-normal leading-[25px] text-gray-blue lg:text-left lg:text-lg lg:leading-7">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </span>
        <RequestInviteButton className="mt-4 lg:mt-4" />
      </div>
    </section>
  );
}
