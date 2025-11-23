'use client'
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-500 via-teal-500 to-cyan-400 py-20 sm:py-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm mb-4 sm:mb-6"
            >
              Psicologia Especializada
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 sm:mb-4 leading-tight"
            >
              Amanda Morgado
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-white/95"
            >
              Especialista em Transtorno do Espectro Autista (TEA)
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Psicóloga pós-graduada em ABA (Análise do Comportamento Aplicada), 
              dedicada a promover o desenvolvimento e a qualidade de vida de pessoas 
              com autismo e suas famílias.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start"
            >
              <a 
                href="#contato" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Agendar Consulta
              </a>
              <a 
                href="#sobre" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Conheça Meu Trabalho
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: FaLinkedin, href: 'https://linkedin.com' },
                { icon: FaInstagram, href: 'https://instagram.com' },
                { icon: FaWhatsapp, href: 'https://wa.me/5511999999999' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-lg sm:text-xl hover:bg-white hover:text-primary-600 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center order-1 lg:order-2 px-4"
          >
            <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img 
                src="/images/amanda-morgado.jpg" 
                alt="Amanda Morgado - Psicóloga Especialista em Autismo"
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
