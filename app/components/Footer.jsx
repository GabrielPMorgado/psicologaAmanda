import { FaLinkedin, FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Amanda Morgado
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Psicóloga especialista em Transtorno do Espectro Autista (TEA) 
              e pós-graduada em ABA, dedicada a promover desenvolvimento e 
              qualidade de vida.
            </p>
            <div className="flex gap-4">
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
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary-500 flex items-center justify-center text-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {['Início', 'Sobre', 'Serviços', 'Especialidades', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-primary-400 hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Schedule */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/70 mb-6">
              <li>
                <strong className="text-white">Telefone:</strong><br />
                (11) 99999-9999
              </li>
              <li>
                <strong className="text-white">Email:</strong><br />
                contato@amandamorgado.com.br
              </li>
              <li>
                <strong className="text-white">Local:</strong><br />
                São Paulo, SP
              </li>
            </ul>
            <div className="p-4 bg-primary-500/20 rounded-lg text-center text-sm">
              <p className="text-primary-300 font-semibold">
                Atendimento presencial e online
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 text-center space-y-2">
          <p className="text-white/60 text-sm">
            CRP: XX/XXXXX | © {currentYear} Amanda Morgado - Todos os direitos reservados
          </p>
          <p className="text-white/60 text-sm flex items-center justify-center gap-2">
            Feito com <FaHeart className="text-accent-500 animate-heartbeat" /> para promover o desenvolvimento
          </p>
        </div>
      </div>
    </footer>
  )
}
