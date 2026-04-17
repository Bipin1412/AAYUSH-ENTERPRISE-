import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/whatsapp";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { company, coreVerticals } from "@/data/brochure";

const slides = [
  {
    image: hero1,
    eyebrow: company.tagline,
    title: "Complete Safety Solutions Since 2017",
    subtitle:
      "Aayush Enterprises delivers training, consulting, products and system installations from Aurangabad to workplaces across India.",
    ctaLabel: "View Services",
    ctaTo: "/services",
  },
  {
    image: hero2,
    eyebrow: coreVerticals[0].title,
    title: "Personal Protective Safety",
    subtitle:
      "Head-to-toe PPE, height safety products, respiratory solutions and protective workwear for day-to-day industrial use.",
    ctaLabel: "Explore Products",
    ctaTo: "/products",
  },
  {
    image: hero3,
    eyebrow: coreVerticals[1].title,
    title: "Environmental And Road Safety",
    subtitle:
      "From spill control and corner protection to signages, antiskid solutions and site safety systems, the brochure range is covered end to end.",
    ctaLabel: "Meet Our Brands",
    ctaTo: "/brands",
  },
];

const HeroSlider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[88vh] min-h-[600px] overflow-hidden bg-secondary">
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: active === i ? 1 : 0 }}
          aria-hidden={active !== i}
        >
          <img
            src={s.image}
            alt={s.title}
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      ))}

      <div className="relative h-full container flex items-center">
        <div key={active} className="max-w-3xl text-secondary-foreground animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 border-2 border-primary-foreground/0">
            <span className="h-1.5 w-1.5 bg-secondary rounded-full" />
            {slides[active].eyebrow}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95]">
            {slides[active].title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-secondary-foreground/85 max-w-2xl">
            {slides[active].subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider h-14 px-8 text-base shadow-yellow"
            >
              <Link to={slides[active].ctaTo}>
                {slides[active].ctaLabel} <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-secondary-foreground border-2 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-bold uppercase tracking-wider h-14 px-8 text-base"
            >
              <a href={whatsappLink("Hello, I would like to know more about Aayush Enterprises and the brochure range.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 transition-all ${active === i ? "w-12 bg-primary" : "w-6 bg-secondary-foreground/40"}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 right-0 hidden md:flex flex-col items-end p-8 text-secondary-foreground/60 text-xs font-bold uppercase tracking-[0.3em] z-10">
        <span>
          0{active + 1} <span className="text-primary">/</span> 0{slides.length}
        </span>
      </div>
    </section>
  );
};

export default HeroSlider;

