interface IconProps {
  className?: string;
}
export function CloseIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      className={className}
      {...rest}
    >
      <rect
        x="0.868164"
        y="0.661133"
        width="24"
        height="1"
        transform="rotate(45 0.868164 0.661133)"
        fill="#2D314D"
      />
      <rect
        x="0.161133"
        y="17.6317"
        width="24"
        height="1"
        transform="rotate(-45 0.161133 17.6317)"
        fill="#2D314D"
      />
    </svg>
  );
}
