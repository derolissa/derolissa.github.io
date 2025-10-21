import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function Navigation() {
  const t = useTranslations('navigation')

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-xl font-bold">
            De Rolissa
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['home', 'about', 'products', 'support'].map((item) => (
                <Link
                  key={item}
                  href={`/${item === 'home' ? '' : item}`}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {t(item)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}