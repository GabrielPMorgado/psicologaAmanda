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
    <section id="servicos" className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Serviços Oferecidos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Atendimento especializado com abordagens baseadas em evidências científicas
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:bg-white border-2 border-transparent hover:border-primary-500 group"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
