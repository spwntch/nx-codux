import { useNav } from '../../../../providers';
import { INavItem, INavLink, INavMenu } from '../../../../types';
import { cn } from '../../../../utils';
import { NavigationMenu, NavigationMenuList } from '../../../shadcn-ui';
import { NavToolbarLink } from '../nav-toolbar-link/nav-toolbar-link';
import { NavToolbarMenu } from '../nav-toolbar-menu/nav-toolbar-menu';
// import { NavToolbarLink } from './components/nav-toolbar-link';
// import { NavToolbarMenu } from './components/nav-toolbar-menu';

export interface INavToolbarProps {
  alignment?: 'start' | 'center' | 'end';
  floating?: boolean;
  items?: INavItem[];

  onLinkTo: (href: string) => void;
}

export const NavToolbar = ({
  alignment = 'center',
  floating,
  items,
  onLinkTo,
}: INavToolbarProps) => {
  const { navItems } = useNav();

  items = items || navItems;

  const pickNavItem = (item: INavItem) => {
    if ((item as INavMenu).children)
      return (
        <NavToolbarMenu
          key={(item as INavMenu).label || ''}
          floating={floating}
          {...(item as INavMenu)}
          onLinkTo={onLinkTo}
        />
      );
    return (
      <NavToolbarLink
        key={(item as INavLink).href || ''}
        floating={floating}
        {...(item as INavLink)}
        onLinkTo={onLinkTo}
      />
    );
  };

  return (
    <div
      className={cn(
        'hidden lg:flex  w-full',
        alignment === 'start'
          ? 'justify-start'
          : alignment === 'end'
          ? 'justify-end'
          : 'justify-center'
      )}
    >
      <NavigationMenu>
        <NavigationMenuList className="flex max-w-none w-[210px]">
          {items.map((item) => pickNavItem(item))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
