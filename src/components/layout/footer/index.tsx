import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-myPrimarycolor text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left space-y-4">
          <Link className="text-white font-bold text-2xl" href="/">
            Logo
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur
            adipisicing elit consectetur adipisicing elit
          </p>
        </div>
        <nav className="md:mt-0 mt-8 space-x-4">
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
        </nav>

        <div className="md:mt-0 mt-8 space-x-4">
          <Button variant="secondary" size="icon">
            <Facebook />
          </Button>
          <Button variant="secondary" size="icon">
            <Instagram />
          </Button>
          <Button variant="secondary" size="icon">
            <Linkedin />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
