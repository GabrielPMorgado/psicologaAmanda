'use client'
import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-3xl shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all group"
        >
          <FaWhatsapp className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-12 right-0 bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Fale comigo no WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
