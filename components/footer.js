import Image from 'next/image'
import Link from 'next/link'
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
            <p>1234 Business Avenue, Suite 500</p>
            <p>Dhaka, Bangladesh</p>
            <p>Email: <a href="mailto:info@hiringzen.com" className="underline">info@hiringzen.com</a></p>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 sm:mt-0 flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5C1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1c1.38 0 2.5 1.12 2.5 2.5zM1 8h3.94v12H1V8zm6.01 0H11V9.68h.04c.55-1.02 1.88-2.1 3.86-2.1 4.13 0 4.88 2.72 4.88 6.26v7.16h-3.95v-6.33c0-1.51-.03-3.45-2.1-3.45-2.11 0-2.43 1.65-2.43 3.35v6.43H7V8z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.325-.594 1.325-1.324V1.325C24 .593 23.406 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links and Copyright Section */}
        <div className="flex flex-col sm:flex-row-reverse justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms and Conditions
            </Link>
          </div>

          <p className="mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Hiring Zen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
