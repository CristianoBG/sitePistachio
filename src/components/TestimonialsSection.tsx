import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Confeiteira",
      content: "Em apenas 2 meses consegui triplicar minha renda vendendo doces de pistache. As receitas são incríveis e os clientes ficam sempre pedindo mais!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b829?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "João Santos",
      role: "Empreendedor",
      content: "Nunca imaginei que poderia lucrar tanto com confeitaria. As receitas de pistache são um diferencial no mercado. Recomendo muito!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      role: "Dona de Casa",
      content: "Comecei vendendo para vizinhas e hoje tenho uma clientela fixa. O pistache é realmente um nicho lucrativo. Muito obrigada!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-accent fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">O que dizem</span>
            <br />
            <span className="text-foreground">nossos alunos</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas com o Pistache Lucrativo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="product-card relative">
              <Quote className="absolute top-4 right-4 h-6 w-6 text-primary/30" />
              
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Badges de confiança */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">+5.000</div>
            <div className="text-foreground font-semibold">Alunos Satisfeitos</div>
            <div className="text-sm text-muted-foreground mt-1">
              Transformando vidas desde 2020
            </div>
          </div>
          
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-accent mb-2">+108K</div>
            <div className="text-foreground font-semibold">Seguidores no Instagram</div>
            <div className="text-sm text-muted-foreground mt-1">
              Comunidade ativa e engajada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};