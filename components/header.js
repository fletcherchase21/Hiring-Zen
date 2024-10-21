import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="w-full">
        <Link href="/" className="py-2 flex items-center">
          <Image
            src="/images/logo/text-logo.svg"
            alt="Hiring Zen"
            width={100}
            height={100}
            className="h-16 sm:h-20 w-full"
          />
        </Link>
      </div>
    </header>
  )
}

export { Header }