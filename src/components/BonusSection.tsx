import { Gift, Users, BookOpen } from 'lucide-react';

export const BonusSection = () => {
  const bonuses = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Lista de Fornecedores Testados",
      description:
        "Acesso exclusivo à nossa rede de fornecedores confiáveis + cupons de desconto especiais para ingredientes premium",
      value: "R$ 99,99",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      title: "Receitas Secretas Exclusivas",
      description:
        "Pudim de Pistache, Sorvete Artesanal, Blondie, Cookie Gourmet, Cheesecake Basco e Bombom Rocher",
      value: "R$ 99,99",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium mb-6">
            <Gift className="h-5 w-5" />
            Bônus Especiais Inclusos
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Mais de R$ 494</span>
            <br />
            <span className="text-foreground">em Bônus Gratuitos</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Além das receitas principais, você receberá estes bônus exclusivos
            que vão acelerar seus resultados
          </p>
        </div>

        {/* Grid dos bônus */}
        <div className="grid md:grid-cols-2 gap-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="relative">
              {/* Badge de valor */}
              <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm z-10">
                Valor: {bonus.value}
              </div>

              <div className="product-card h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    {bonus.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {bonus.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {bonus.description}
                </p>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Gift className="h-4 w-4" />
                    <span>GRATUITO por tempo limitado</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumo do valor + botão checkout */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-card border border-border/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Valor Total do Pacote Completo
            </h3>

            <a
              href="https://checkout.appsnappay.com/checkout/cmg01iyxs000y20attbwumx7s?offer=5TQCL6Q"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-primary hover:bg-primary/80 text-white font-bold py-4 px-8 rounded-lg text-2xl transition"
            >
              De <span className="line-through opacity-80">R$ 593,99</span>
              <br />
              Por apenas R$ 99,99
            </a>

            <div className="mt-4 text-accent font-semibold">
              🔥 Economia de mais de R$ 490!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
