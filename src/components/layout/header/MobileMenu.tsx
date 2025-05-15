import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" className="md:hidden text-white font-bold text-2xl">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-8 text-center">
            <Link className=" font-bold text-2xl" href="/">
              Logo
            </Link>
          </SheetTitle>
          <nav className="flex flex-col items-start space-y-4">
            <Link className=" hover:text-gray-300 font-bold" href="/">
              Home
            </Link>
            <Link className=" hover:text-gray-300 font-bold" href="/about">
              About
            </Link>
            <Link className=" hover:text-gray-300 font-bold" href="/contact">
              Contact
            </Link>
            <Link className=" hover:text-gray-300 font-bold" href="/product">
              Products
            </Link>
            <Link className=" hover:text-gray-300 font-bold" href="/blog">
              blog
            </Link>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
