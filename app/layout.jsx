import './globals.css'

export const metadata = {
  title: 'Amanda Morgado - Psicóloga Especialista em Autismo',
  description: 'Psicóloga especialista em Transtorno do Espectro Autista (TEA) e pós-graduada em ABA (Análise do Comportamento Aplicada)',
  keywords: 'psicologia, autismo, TEA, ABA, análise do comportamento, Amanda Morgado',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
