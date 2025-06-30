'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingCart, CircleUserRound, Menu, X } from 'lucide-react'

const NavLinks = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset'
  }

  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <nav>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <Image
              src='/images/techworld.png'
              alt='Logo'
              width={250}
              height={60}
              priority
              className='h-auto w-auto'
            />
          </Link>

          {/* desktop links */}
          <div className='hidden md:mx-auto md:flex space-x-4'>
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='text-gray-800 hover:text-gray-600 text-lg'
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* right buttons */}
          <div className='hidden md:flex items-center space-x-4'>
            <Link
              href='/wishlist'
              className='text-gray-800 hover:text-gray-600'
            >
              <Heart />
            </Link>
            <Link href='/cart' className='text-gray-800 hover:text-gray-600'>
              <ShoppingCart />
            </Link>
            <Link href='/account' className='text-gray-800 hover:text-gray-600'>
              <CircleUserRound />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden'
            onClick={toggleMobileMenu}
            aria-label='Toggle mobile menu'
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className='md:hidden absolute top-16 right-0 w-full bg-white shadow-md z-50'>
              <div className='flex flex-col items-center space-y-4 px-4 py-2'>
                {NavLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className='text-gray-800 hover:text-gray-600'
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className='flex justify-center space-x-6 px-4 py-4 border-t mt-8'>
                <Link
                  href='/wishlist'
                  className='text-gray-800 hover:text-gray-600'
                >
                  <Heart />
                </Link>
                <Link
                  href='/cart'
                  className='text-gray-800 hover:text-gray-600'
                >
                  <ShoppingCart />
                </Link>
                <Link
                  href='/account'
                  className='text-gray-800 hover:text-gray-600'
                >
                  <CircleUserRound />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
