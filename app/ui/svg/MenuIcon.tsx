interface IconProps {
  className?: string;
}
export function MenuIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="11"
      viewBox="0 0 24 11"
      fill="none"
      className={className}
      {...rest}
    >
      <rect width="24" height="1" fill="#2D314D" />
      <rect y="5" width="24" height="1" fill="#2D314D" />
      <rect y="10" width="24" height="1" fill="#2D314D" />
    </svg>
  );
}
