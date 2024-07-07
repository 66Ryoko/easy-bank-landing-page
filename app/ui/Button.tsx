import { clsx } from 'clsx';
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}
export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        'h-11 w-[163px] text-ellipsis text-wrap rounded-[22px] bg-gradient-to-br from-limeGreen to-brightCyan px-8 py-2 text-sm font-bold leading-loose text-white hover:opacity-40',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
