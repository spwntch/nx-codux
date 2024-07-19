'use client';
import React, { useState } from 'react';

import { Menu } from 'lucide-react';
import { Logo } from '../../brand';
import { useNav } from '../../../../providers';
import { Button, DropdownMenuSeparator, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../../shadcn-ui';
import { NavMenu } from '../nav-menu/nav-menu';

interface IMobileNavDrawerProps {
  onLinkTo: (href: string) => void;
}

export const MobileNavDrawer: React.FC<IMobileNavDrawerProps> = ({
  onLinkTo,
}) => {
  const [open, setOpen] = useState(false);
  const { navItems } = useNav();

  if (!navItems?.length) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="ml-2">
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[260px]">
        <SheetHeader className="pt-2">
          <SheetTitle>
            <Logo width={180} className="mx-auto" />
          </SheetTitle>
          <SheetDescription asChild className="text-center">
            {/* <Tagline /> */}
          </SheetDescription>
        </SheetHeader>
        <DropdownMenuSeparator className="mt-4" />
        <NavMenu
          onLinkTo={(href) => {
            setOpen(false);
            onLinkTo(href);
          }}
        />
      </SheetContent>
    </Sheet>
  );
};