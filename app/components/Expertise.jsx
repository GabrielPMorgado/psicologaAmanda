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
    <section id="especialidades" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Áreas de Especialidade
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conhecimento especializado para atendimento de excelência
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-gray-100">
                <div className="text-5xl text-primary-500">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {area.title}
                </h3>
              </div>

              {/* Points List */}
              <ul className="space-y-3">
                {area.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-secondary-500 font-bold text-xl mt-0.5">✓</span>
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
          className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Quer saber mais sobre como posso ajudar?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entre em contato para uma avaliação inicial sem compromisso
          </p>
          <a 
            href="#contato" 
            className="inline-block px-10 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Entrar em Contato
          </a>
        </motion.div>
      </div>
    </section>
  )
}
