'use client'
import { FaChild, FaUsers, FaBookReader, FaHandHoldingHeart, FaClipboardCheck, FaHome } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      icon: <FaChild />,
      title: 'Avaliação Comportamental',
      description: 'Avaliação completa do repertório comportamental, identificando habilidades e necessidades específicas para elaboração de plano de intervenção individualizado.'
    },
    {
      icon: <FaBookReader />,
      title: 'Intervenção ABA',
      description: 'Intervenção baseada em ABA para desenvolvimento de habilidades sociais, comunicativas, acadêmicas e de autonomia, com acompanhamento sistemático.'
    },
    {
      icon: <FaUsers />,
      title: 'Orientação Familiar',
      description: 'Suporte e orientação para familiares, ensinando estratégias práticas para lidar com desafios do dia a dia e promover o desenvolvimento.'
    },
    {
      icon: <FaHandHoldingHeart />,
      title: 'Treinamento de Cuidadores',
      description: 'Capacitação de pais, cuidadores e profissionais em técnicas de ABA para continuidade do trabalho nos diversos ambientes da criança.'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Supervisão de Casos',
      description: 'Supervisão técnica para equipes multidisciplinares e acompanhamento terapêutico, garantindo qualidade e efetividade das intervenções.'
    },
    {
      icon: <FaHome />,
      title: 'Atendimento Domiciliar',
      description: 'Possibilidade de atendimento no ambiente familiar, favorecendo a generalização de habilidades e o envolvimento da família no processo.'
    }
  ]

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-primary-50/30 to-white">
      <div className="container-custom px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-3 sm:mb-4">
            Serviços Oferecidos
          </h2>
          <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 mx-auto rounded-full shadow-lg mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Atendimento especializado com abordagens baseadas em evidências científicas
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border border-neutral-200 hover:border-primary-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                {service.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
