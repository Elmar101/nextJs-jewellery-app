import { Button } from '@/components/ui/button';
import { Search, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';
import { ModeToggle } from './ModeToggle';

const Header = () => {
  return (
    <div className="header-bg shadow-sm top-0">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link className='text-2xl text-white font-bold hover:text-blue-500 dark:hover:text-slate-100' href="/">
          Logo
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link className="text-white font-bold hover:underline" href="/">
            Home
          </Link>
          <Link className="text-white font-bold hover:underline" href="/about">
            About
          </Link>
          <Link className="text-white font-bold hover:underline" href="/blog">
            Blogs
          </Link>
          <Link className="text-white font-bold hover:underline" href="/contact">
            Contact
          </Link>
          <Link className="text-white font-bold hover:underline" href="/products">
            Products
          </Link>
          <Link className="text-white font-bold hover:underline" href="/cart">
            Cart
          </Link>
          <Link className="text-white font-bold hover:underline" href="/login">
            Login
          </Link>
          <Link className="text-white font-bold hover:underline" href="/register">
            Register
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="secondary">
            <Search className="font-bold text-2xl" />
          </Button>
          <Button variant="secondary">
            <Link href="/login">
              <User className="font-bold text-2xl" />
            </Link>
          </Button>
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
