'use client'
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Mensagem enviada! Entrarei em contato em breve.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Telefone',
      info: '(11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      info: '(11) 99999-9999',
      link: 'https://wa.me/5511999999999'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      info: 'contato@amandamorgado.com.br',
      link: 'mailto:contato@amandamorgado.com.br'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localização',
      info: 'São Paulo, SP',
      link: '#'
    }
  ]

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estou à disposição para esclarecer dúvidas e agendar uma consulta
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Informações de Contato
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ficarei feliz em atender você e sua família. Entre em contato 
              através dos canais abaixo ou preencha o formulário.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-3xl text-primary-500 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                      {item.info}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-900 font-medium mb-2">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(11) 99999-9999"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Como posso ajudar você?"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-bold text-lg rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
