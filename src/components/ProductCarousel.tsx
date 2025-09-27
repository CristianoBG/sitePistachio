import { Button } from '@/components/ui/button';

// Importando todas as imagens dos produtos
import bombomImg from '@/assets/bombom.jpg';
import brigadeiroImg from '@/assets/brigadeiro-pistache.jpg';
import brownieImg from '@/assets/brownie-cheesecake.jpg';
import chocolateImg from '@/assets/chocolate-pistache.jpg';
import pastaImg from '@/assets/pasta-pistache.jpg';
import pavlovaImg from '@/assets/pavlova-pistache.jpg';
import pralinesImg from '@/assets/pralines.jpg';

interface Product {
  id: number;
  name: string;
  image: string;
  originalPrice: string;
  salePrice: string;
  installments: string;
  checkoutUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Bombom de Pistache Premium",
    image: bombomImg,
    originalPrice: "R$ 79,99",
    salePrice: "R$ 9,99",
    installments: "Oferta exclusiva por tempo limitado",
    checkoutUrl: "https://checkout.appsnappay.com/checkout/cmfzpy7rm001ldbm7csa29df1?offer=0UYR7JS",
  },
  {
    id: 2,
    name: "Brigadeiro Gourmet de Pistache",
    image: brigadeiroImg,
    originalPrice: "R$ 79,99",
    salePrice: "R$ 9,99",
    installments: "Oferta exclusiva por tempo limitado",
    checkoutUrl: "https://checkout.appsnappay.com/checkout/cmfzqb6p40022dbm75rytwxmt?offer=AJVDHIX",
  },
  {
    id: 3,
    name: "Brownie Cheesecake de Pistache",
    image: brownieImg,
    originalPrice: "R$ 79,99",
    salePrice: "R$ 19,99",
    installments: "Oferta exclusiva por tempo limitado",
    checkoutUrl: "https://checkout.appsnappay.com/checkout/cmfzqrzfx0010c0zegx0i8s49?offer=38MUZFT",
  },
  {
    id: 4,
    name: "Chocolate Artesanal de Pistache",
    image: chocolateImg,
    originalPrice: "R$ 79,99",
    salePrice: "R$ 14,99",
    installments: "Oferta exclusiva por tempo limitado",
    checkoutUrl: "https://checkout.appsnappay.com/checkout/cmfzr8ptt002bc0zegq46l1gx?offer=BK5R0RO",
  },
  {
    id: 5,
    name: "Pasta Cremosa de Pistache",
    image: pastaImg,
    originalPrice: "R$ 79,99",
    salePrice: "R$ 9,99",
    installments: "Oferta exclusiva por tempo limitado",
    checkoutUrl: "https://checkout.appsnappay.com/checkout/cmfzrfspr0040dbm78syb9e7z?offer=74FKD2O",
  },
  {
    id: 6,
    name: "Pavlova Especial de Pistache",
    image: pavlovaImg,
    originalPrice: "R$ 79,99",
    salePrice: "R$ 19,99",
    installments: "Oferta exclusiva por tempo limitado",
    checkoutUrl: "https://checkout.appsnappay.com/checkout/cmfzrlwh7003ac0ze0rz8p6qh?offer=X9WEF4G",
  },
  {
    id: 7,
    name: "Pralines Refinados",
    image: pralinesImg,
    originalPrice: "R$ 29,99",
    salePrice: "R$ 9,99",
    installments: "Oferta exclusiva por tempo limitado",
    checkoutUrl: "https://checkout.appsnappay.com/checkout/cmfzrqmh70065dbm7wj94ppwy?offer=SPVI019",
  },
];

export const ProductCarousel = () => {
  const handleCheckout = (product: Product) => {
    if (!product.checkoutUrl) {
      alert('Link de checkout não disponível.');
      return;
    }
    // abre em nova aba/guarda segurança: noopener,noreferrer
    window.open(product.checkoutUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Receitas Exclusivas de Pistache
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha sua receita favorita e comece a lucrar hoje mesmo
          </p>
        </div>

        {/* Carrossel scroll horizontal */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 snap-x snap-mandatory scroll-smooth">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-72 snap-center"
              >
                <div className="product-card group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="font-bold text-lg mb-3 text-foreground">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      {product.salePrice}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {product.installments}
                  </p>

                  <Button
                    className="w-full btn-hero glow-primary"
                    onClick={() => handleCheckout(product)}
                  >
                    Finalizar Compra
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
