import { cn } from '../../../../utils';
import { INavLink } from '../../../../types';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '../../../shadcn-ui';

type INavToolbarLinkProps = INavLink;

export const NavToolbarLink = ({
  label,
  href,
  onLinkTo,
}: INavToolbarLinkProps) => {
  return (
    <NavigationMenuItem className="cursor-pointer">
      <NavigationMenuLink
        className={cn(navigationMenuTriggerStyle(), 'text-base font-semibold')}
        onSelect={() => onLinkTo(href)}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
