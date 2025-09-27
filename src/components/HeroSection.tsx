import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Star } from 'lucide-react';

export const HeroSection = () => {
  const handleMainCTA = () => {
    window.location.href =
      'https://checkout.appsnappay.com/checkout/cmg01iyxs000y20attbwumx7s?offer=5TQCL6Q';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-hero">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/src/assets/pasta-pistache.jpg')] bg-cover bg-center opacity-10"></div>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ff1493%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge de destaque */}
        <div className="animate-fade-in mb-8">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
            🏆 Mais de 5.000 alunos satisfeitos
          </Badge>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-gradient">Sensação Saborosa</span>
          <br />
          <span className="text-foreground">Pistache Lucrativo</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in max-w-2xl mx-auto">
          Todas as receitas liberadas por apenas
          <span className="text-primary font-bold text-3xl md:text-4xl block mt-2">
            R$ 29,99
          </span>
        </p>

      {/* CTA Principal */}
<div className="animate-fade-in mb-8">
  <a
    href="https://checkout.appsnappay.com/checkout/cmg01iyxs000y20attbwumx7s?offer=5TQCL6Q"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      className="btn-hero text-xl px-12 py-6 glow-primary"
    >
      💰 Quero Lucrar Agora
    </Button>
  </a>
</div>


        {/* Badge de confiança */}
        <div className="animate-fade-in flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>Compra 100% segura</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-accent" />
            <span>Garantia de reembolso total</span>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">+5K</div>
            <div className="text-sm text-muted-foreground">Alunos Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">+108K</div>
            <div className="text-sm text-muted-foreground">Seguidores Instagram</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">⭐ 4.9</div>
            <div className="text-sm text-muted-foreground">Avaliação Média</div>
          </div>
        </div>
      </div>
    </section>
  );
};