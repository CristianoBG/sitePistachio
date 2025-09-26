import { MessageCircle, Shield, FileText, HelpCircle } from 'lucide-react';

export const Footer = () => {
  const footerLinks = [
    {
      icon: <FileText className="h-4 w-4" />,
      label: "Política de Privacidade",
      href: "#privacy"
    },
    {
      icon: <FileText className="h-4 w-4" />,
      label: "Termos de Uso",
      href: "#terms"
    },
    {
      icon: <Shield className="h-4 w-4" />,
      label: "Garantia",
      href: "#guarantee"
    },
    {
      icon: <MessageCircle className="h-4 w-4" />,
      label: "Suporte via WhatsApp",
      href: "https://wa.me/5511977661948"
    }
  ];

  return (
    <footer className="bg-secondary border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Links principais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
            >
              {link.icon}
              <span className="text-sm">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Informações da empresa */}
        <div className="border-t border-border pt-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Pistache Lucrativo
            </h3>
            <p className="text-muted-foreground">
              Transformando vidas através da confeitaria artesanal
            </p>
          </div>

          {/* Badges de confiança */}
          <div className="flex justify-center items-center gap-8 mb-6 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <HelpCircle className="h-4 w-4 text-primary" />
              <span>Garantia 7 dias</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">
              Todos os direitos reservados © 2025 | Sensação Saborosa
            </p>
            <p>
              CNPJ: 21.283.156/0001-05
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-muted/30 rounded-lg text-xs text-muted-foreground">
            <p className="mb-2">
              <strong>Aviso Legal:</strong> Os resultados podem variar de pessoa para pessoa. 
              As informações fornecidas são apenas para fins educacionais.
            </p>
            <p>
              Este produto não garante renda ou lucro específico. O sucesso depende do esforço 
              e dedicação individual de cada aluno.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};