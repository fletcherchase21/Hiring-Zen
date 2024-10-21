import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaFacebookF } from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="layout-md py-10 xl:py-16 mt-10">
        {/* Logo Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <Link href="/" className="py-2 flex items-center">
            <Image
              src="/images/logo/text-logo-white.svg"
              alt="Hiring Zen"
              width={100}
              height={100}
              className="h-16 sm:h-20 w-full"
            />
          </Link>
          {/* Address and Email */}
          <div className="text-center sm:text-left mt-6 sm:mt-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Dublin, Ireland</p>
            <p>Email: <a href="mailto:hello@hiringzen.com" className="underline">hello@hiringzen.com</a></p>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 sm:mt-0 flex flex-col items-center sm:items-end space-y-4">
            <h3 className="text-lg font-semibold">Find Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/hiringzen/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookF className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Links and Copyright Section */}
        <div className="flex flex-col sm:flex-row-reverse justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms and Service
            </Link>
          </div>

          <p className="mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Hiring Zen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
