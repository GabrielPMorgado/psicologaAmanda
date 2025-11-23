'use client'
import { FaPuzzlePiece, FaChartLine, FaLightbulb, FaUserMd } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Expertise() {
  const expertiseAreas = [
    {
      icon: <FaPuzzlePiece />,
      title: 'Transtorno do Espectro Autista (TEA)',
      points: [
        'Avaliação diagnóstica complementar',
        'Intervenção precoce intensiva',
        'Desenvolvimento de habilidades sociais',
        'Redução de comportamentos desafiadores',
        'Ensino de comunicação funcional'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Análise do Comportamento Aplicada (ABA)',
      points: [
        'Elaboração de programas de ensino individualizados',
        'Avaliação funcional do comportamento',
        'Análise de dados e ajustes de intervenção',
        'Ensino naturalístico e estruturado',
        'Protocolo de generalização de habilidades'
      ]
    },
    {
      icon: <FaLightbulb />,
      title: 'Desenvolvimento Infantil',
      points: [
        'Estimulação cognitiva',
        'Desenvolvimento da linguagem',
        'Habilidades motoras e sensoriais',
        'Autonomia e autocuidado',
        'Habilidades pré-acadêmicas'
      ]
    },
    {
      icon: <FaUserMd />,
      title: 'Consultoria e Supervisão',
      points: [
        'Supervisão de casos clínicos',
        'Treinamento de equipes',
        'Consultoria para escolas',
        'Workshops para profissionais',
        'Palestras sobre autismo e ABA'
      ]
    }
  ]

  return (
    <section id="especialidades" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-secondary-50/20 to-white">
      <div className="container-custom px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-3 sm:mb-4">
            Áreas de Especialidade
          </h2>
          <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 mx-auto rounded-full shadow-lg mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Conhecimento especializado para atendimento de excelência
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-100 hover:border-primary-200"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b-2 border-gradient-to-r from-primary-100 to-secondary-100">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-2xl sm:text-3xl flex-shrink-0 shadow-lg">
                  {area.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900">
                  {area.title}
                </h3>
              </div>

              {/* Points List */}
              <ul className="space-y-2 sm:space-y-3">
                {area.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3 text-neutral-700 text-sm sm:text-base">
                    <span className="text-secondary-600 font-bold text-lg sm:text-xl mt-0.5 flex-shrink-0">✓</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Quer saber mais sobre como posso ajudar?
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/95 max-w-2xl mx-auto px-4">
              Entre em contato para uma avaliação inicial sem compromisso
            </p>
            <a 
              href="#contato" 
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-primary-600 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 shadow-xl"
            >
              Entrar em Contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
