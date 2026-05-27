import { Link } from "react-router-dom";
import { ArrowRight, CarFront, GraduationCap, MessageCircle, Printer, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/whatsapp";
import hero1 from "@/assets/hero-1.jpg";

const serviceHighlights = [
  { title: "Various Trainings", icon: GraduationCap },
  { title: "Consulting for Safety", icon: ShieldCheck },
  { title: "Digital Printing", icon: Printer },
  { title: "Car Hire", icon: CarFront },
  { title: "Complete System Installations", icon: Wrench },
];

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
        <div className="max-w-5xl text-secondary-foreground animate-slide-up">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95]">
              SECURING SAFER WORKPLACES
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

          <div className="mt-10 rounded-[2rem] border border-white/15 bg-black/25 p-4 md:p-5 backdrop-blur-md shadow-2xl">
            <div className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.35em] text-secondary-foreground/65">
              Service Verticals
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {serviceHighlights.map((service) => (
                <Link
                  key={service.title}
                  to={`/services?service=${encodeURIComponent(service.title)}`}
                  aria-label={`Open ${service.title}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/8 px-4 py-3 transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    <service.icon className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-secondary-foreground/60">
                      Service
                    </div>
                    <div className="text-sm font-bold uppercase leading-tight text-secondary-foreground">
                      {service.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
