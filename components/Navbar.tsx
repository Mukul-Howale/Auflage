"use client";

import Link from 'next/link';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-20 items-center">
            <Link href="/" className="text-3xl font-bold text-center">
              AUFLAGE
            </Link>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12 items-center">
            <div className="flex-shrink-0 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm text-gray-900 hover:text-gray-600">
                Home
              </Link>
              <Link href="/shop" className="text-sm text-gray-900 hover:text-gray-600">
                Shop
              </Link>
              <Link href="/collections" className="text-sm text-gray-900 hover:text-gray-600">
                Collections
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/auth" className="text-gray-900 hover:text-gray-600">
                <User className="h-5 w-5" />
              </Link>
              <Link href="/cart" className="text-gray-900 hover:text-gray-600">
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/collections"
                className="block px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}