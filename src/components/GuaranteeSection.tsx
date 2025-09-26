import { Shield, Clock, CreditCard, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const GuaranteeSection = () => {
  const guaranteeFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Garantia de 7 dias",
      description: "Se não gostar, devolvemos 100% do seu dinheiro"
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: "Pagamento Seguro",
      description: "SSL 256-bits + certificação bancária"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Parcelamento",
      description: "Até 12x sem juros no cartão de crédito"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Acesso Imediato",
      description: "Receba tudo na hora, 24h por dia"
    }
  ];
const handleFinalCTA = () => {
  window.location.href =
    'https://checkout.appsnappay.com/checkout/cmg01iyxs000y20attbwumx7s?offer=5TQCL6Q';
};


  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium mb-6">
            <Shield className="h-5 w-5" />
            Garantia Total
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Sem Riscos,</span>
            <br />
            <span className="text-gradient">Só Resultados</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Assista todas as aulas, teste todas as receitas. Se não gostar ou não conseguir lucrar, 
            devolvemos <strong className="text-primary">100% do seu dinheiro</strong>. Simples assim.
          </p>
        </div>

        {/* Garantia principal */}
        <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 mb-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Garantia Incondicional de 7 Dias
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Você tem uma semana inteira para testar tudo. Se por qualquer motivo não ficar satisfeito, 
              devolvemos todo o seu investimento sem questionamentos.
            </p>
            
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 inline-block">
              <p className="text-primary font-semibold text-lg">
                ✅ 100% do seu dinheiro de volta garantido
              </p>
            </div>
          </div>
        </div>

        {/* Features de segurança */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guaranteeFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Últimas Vagas Disponíveis!
          </h3>
          
          <p className="text-xl mb-6 opacity-90">
            Não perca a oportunidade de transformar sua vida financeira
          </p>
          
          <div className="mb-6">
            <div className="text-sm opacity-75 mb-2">De R$ 593,99 por apenas</div>
            <div className="text-5xl font-bold mb-2">R$ 99,99</div>
            <div className="text-lg opacity-90">ou 12x de R$ 8,33</div>
          </div>
          
    <a
  href="https://checkout.appsnappay.com/checkout/cmg01iyxs000y20attbwumx7s?offer=5TQCL6Q"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="bg-white text-primary hover:bg-gray-100 font-bold text-xl px-12 py-6 shadow-2xl"
  >
    💰 Garantir Minha Vaga Agora
  </Button>
</a>


          <p className="text-sm mt-4 opacity-75">
            🔒 Compra protegida | ⭐ Garantia de satisfação | 🚀 Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};