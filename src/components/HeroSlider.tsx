import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CarFront, GraduationCap, MessageCircle, Printer, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/whatsapp";
import completeSystemInstallation from "@/assets/complete system installation .jpeg";
import industrialConsultingServices from "@/assets/industrial consulting services.jpeg";
import capabilityBuilding from "@/assets/capability building.jpeg";
import revampingImage from "@/assets/revamping image.jpeg";
import carHireServices from "@/assets/car hire services.jpeg";

type ServiceHighlight = {
  title: string;
  icon: LucideIcon;
  image?: string;
  imageAlt?: string;
};

const serviceHighlights: ServiceHighlight[] = [
  {
    title: "Complete System Installations",
    icon: GraduationCap,
    image: completeSystemInstallation,
    imageAlt: "Complete system installation",
  },
  {
    title: "Industrial Consulting Services",
    icon: ShieldCheck,
    image: industrialConsultingServices,
    imageAlt: "Industrial consulting services",
  },
  {
    title: "Capability Building Bandwidth",
    icon: Printer,
    image: capabilityBuilding,
    imageAlt: "Capability building",
  },
  {
    title: "A complete revamping of workplace with interactive displays",
    icon: CarFront,
    image: revampingImage,
    imageAlt: "Revamping workplace with interactive displays",
  },
  {
    title: "Car Hire Services",
    icon: Wrench,
    image: carHireServices,
    imageAlt: "Car hire services",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative h-[88vh] min-h-[600px] overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <img
          src="/banner-new-image.png"
          alt="Complete Safety Solutions Since 2017"
          width={1920}
          height={1080}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative h-full container flex items-center">
        <div className="w-full max-w-7xl text-secondary-foreground animate-slide-up">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95]">
              SECURING SAFER WORKPLACES
            </h1>
            <p className="mt-6 text-lg md:text-xl text-secondary-foreground/85 max-w-2xl">
              Aayush Enterprises is  a one stop solution for all your needs towards making workplaces safer.
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

          <div className="mt-10 rounded-[2rem] border border-white/15 bg-black/25 p-5 md:p-6 backdrop-blur-md shadow-2xl">
            <div className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.35em] text-secondary-foreground/65">
              End-to-end installation and integration solutions for seamless operations.
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {serviceHighlights.map((service) => (
                <Link
                  key={service.title}
                  to={`/services?service=${encodeURIComponent(service.title)}`}
                  aria-label={`Open ${service.title}`}
                  className="group flex min-h-[7.5rem] items-start gap-4 rounded-2xl border border-white/15 bg-white/8 px-4 py-4 transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.imageAlt ?? service.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <service.icon className="h-6 w-6 transition-transform duration-200 group-hover:scale-105" strokeWidth={2.5} />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold uppercase leading-tight text-secondary-foreground md:text-[0.95rem]">
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
