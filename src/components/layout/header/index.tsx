import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div className="bg-mySecondarycolor shadow-sm top-0">
      <div className="container mx-auto py-3 px-4 flex justify-between items-center">
        <Link className="text-white font-bold text-2xl" href="/">
          Logo
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link className="text-white hover:text-gray-300 font-bold" href="/">
            Home
          </Link>
          <Link
            className="text-white hover:text-gray-300 font-bold"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-white hover:text-gray-300 font-bold"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-white hover:text-gray-300 font-bold"
            href="/products"
          >
            Products
          </Link>
          <Link
            className="text-white hover:text-gray-300 font-bold"
            href="/cart"
          >
            Cart
          </Link>
          <Link
            className="text-white hover:text-gray-300 font-bold"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="text-white hover:text-gray-300 font-bold"
            href="/register"
          >
            Register
          </Link>
        </nav>
        <div className="flex space-x-2 items-center">
          <Button variant="secondary">
            <Search />
          </Button>
          <Button variant="secondary">
            <Link href="/login">
              <User />
            </Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
