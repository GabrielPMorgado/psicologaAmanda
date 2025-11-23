'use client'
import { FaGraduationCap, FaBrain, FaHeart, FaCertificate } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function About() {
  const credentials = [
    {
      icon: <FaGraduationCap />,
      title: 'Formação em Psicologia',
      description: 'Graduação em Psicologia com especialização em desenvolvimento infantil'
    },
    {
      icon: <FaCertificate />,
      title: 'Pós-Graduação em ABA',
      description: 'Análise do Comportamento Aplicada (Applied Behavior Analysis)'
    },
    {
      icon: <FaBrain />,
      title: 'Especialista em TEA',
      description: 'Especialização em Transtorno do Espectro Autista'
    },
    {
      icon: <FaHeart />,
      title: 'Atendimento Humanizado',
      description: 'Abordagem centrada na pessoa e na família'
    }
  ]

  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container-custom px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Sobre Mim
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-lg sm:text-xl text-primary-600 font-medium leading-relaxed">
              Olá! Sou <strong>Amanda Morgado</strong>, psicóloga dedicada ao trabalho com 
              pessoas com Transtorno do Espectro Autista (TEA) e suas famílias.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Minha jornada profissional é pautada pela constante busca por conhecimento 
              científico e pela aplicação de métodos baseados em evidências. Com 
              pós-graduação em ABA (Análise do Comportamento Aplicada), trabalho para 
              promover o desenvolvimento de habilidades, autonomia e qualidade de vida.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Acredito que cada pessoa é única e merece um atendimento personalizado, 
              respeitando suas características, potencialidades e desafios. Meu trabalho 
              é colaborativo, envolvendo não apenas o paciente, mas toda a rede de apoio.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Utilizo intervenções baseadas em ABA, que é reconhecida mundialmente como 
              a abordagem mais eficaz para o desenvolvimento de pessoas com TEA, sempre 
              com ética, respeito e comprometimento.
            </p>
          </motion.div>

          {/* Credentials Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {credentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-3xl sm:text-4xl text-primary-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
