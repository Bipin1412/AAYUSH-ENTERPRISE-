import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/whatsapp";
import hero1 from "@/assets/hero-1.jpg";
import { company } from "@/data/brochure";

const HeroSlider = () => {
  return (
    <section className="relative h-[88vh] min-h-[600px] overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <img
          src={hero1}
          alt="Complete Safety Solutions Since 2017"
          width={1920}
          height={1080}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative h-full container flex items-center">
        <div className="max-w-3xl text-secondary-foreground animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 border-2 border-primary-foreground/0">
            <span className="h-1.5 w-1.5 bg-secondary rounded-full" />
            {company.tagline}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95]">
            Complete Safety Solutions Since 2017
          </h1>
          <p className="mt-6 text-lg md:text-xl text-secondary-foreground/85 max-w-2xl">
            Aayush Enterprises delivers training, consulting, products and system installations from Aurangabad to workplaces across India.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider h-14 px-8 text-base shadow-yellow"
            >
              <Link to="/services">
                View Services <ArrowRight className="ml-2" />
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
    </section>
  );
};

export default HeroSlider;
