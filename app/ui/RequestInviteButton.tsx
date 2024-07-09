import { Button } from './';
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}
export function RequestInviteButton({
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <Button className={className} {...rest}>
      {children || 'Request Invite'}
    </Button>
  );
}
