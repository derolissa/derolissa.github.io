import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  const t = useTranslations('home')

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-screen">
        {/* ヒーロー画像 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080/1a1a1a/ffffff?text=De+Rolissa"
            alt="De Rolissa Hero Image"
            fill
            priority
            className="object-cover"
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        {/* コンテンツ */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full"
          >
            <h1 className="text-6xl font-bold mb-4">{t('title')}</h1>
            <p className="text-2xl text-gray-300">{t('subtitle')}</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}