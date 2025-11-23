'use client'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 shadow-xl backdrop-blur-xl py-4 border-b border-neutral-200' 
          : 'bg-white/90 backdrop-blur-xl py-6 shadow-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col">
            <h3 className={`text-2xl font-bold transition-all bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text ${
              isScrolled ? 'text-transparent' : 'text-white drop-shadow-lg'
            }`}>
              Amanda Morgado
            </h3>
            <span className={`text-sm font-light transition-colors ${
              isScrolled ? 'text-neutral-600' : 'text-white/90'
            }`}>
              Psicóloga Especialista
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-white/90'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contato"
              className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:scale-105 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-xl' 
                  : 'bg-white text-primary-600 hover:shadow-2xl'
              }`}
            >
              Agendar Consulta
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-2xl transition-colors ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-4/5 h-screen bg-white shadow-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-medium text-gray-700 hover:text-primary-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
