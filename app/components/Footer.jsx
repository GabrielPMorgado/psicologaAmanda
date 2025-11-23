import { FaLinkedin, FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container-custom px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-white/10">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-primary-400 mb-3 sm:mb-4">
              Amanda Morgado
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4 sm:mb-6">
              Psicóloga especialista em Transtorno do Espectro Autista (TEA) 
              e pós-graduada em ABA, dedicada a promover desenvolvimento e 
              qualidade de vida.
            </p>
            <div className="flex gap-3 sm:gap-4">
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
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 flex items-center justify-center text-lg sm:text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-white/10 hover:border-primary-400"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Links Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Início', 'Sobre', 'Serviços', 'Especialidades', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm sm:text-base text-white/70 hover:text-primary-400 hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Schedule */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contato</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/70 mb-4 sm:mb-6">
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
            <div className="p-3 sm:p-4 bg-primary-500/20 rounded-lg text-center text-xs sm:text-sm">
              <p className="text-primary-300 font-semibold">
                Atendimento presencial e online
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 text-center space-y-2">
          <p className="text-white/60 text-xs sm:text-sm px-4">
            CRP: XX/XXXXX | © {currentYear} Amanda Morgado - Todos os direitos reservados
          </p>
          <p className="text-white/60 text-xs sm:text-sm flex items-center justify-center gap-2 flex-wrap px-4">
            Feito com <FaHeart className="text-accent-500 animate-heartbeat" /> para promover o desenvolvimento
          </p>
        </div>
      </div>
    </footer>
  )
}
