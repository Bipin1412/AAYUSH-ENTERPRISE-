import { Link } from "react-router-dom";
import { ShieldCheck, Truck, Award, Tag, ArrowRight, Leaf, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { coreVerticals, brochureHighlights, company } from "@/data/brochure";
import { whatsappLink } from "@/lib/whatsapp";

const features = [
  { icon: Award, title: "Established In 2017", desc: "Headquartered in Aurangabad with manufacturing and branch support across Maharashtra and Madhya Pradesh." },
  { icon: ShieldCheck, title: "24 Brand Partners", desc: "Brochure-backed supply across PPE, fire safety, gas detection, electrical safety and environmental protection." },
  { icon: Truck, title: "Complete Safety Coverage", desc: "Training, consulting, supplies and installations are all managed under one roof." },
  { icon: Tag, title: "3 Branch Offices", desc: "Indore, Pune and Nasik branch presence supports customers across industrial belts." },
];

const testimonials = [
  { name: "Personal Protective Safety", role: "Core Vertical", text: "Helmet, gloves, shoes, workwear, respiratory protection and height safety systems are part of the brochure range." },
  { name: "Environmental Safety", role: "Core Vertical", text: "Jonesco, ESP, Knuffi and spill-response products cover workplace environmental protection needs." },
  { name: "Road Safety", role: "Core Vertical", text: "Antiskid tape, photoluminescent signage and road safety materials help improve site movement and emergency visibility." },
];

const faqs = [
  { q: "When was Aayush Enterprises established?", a: "The company was established in 2017 and is headquartered in Aurangabad, Maharashtra." },
  { q: "What are the main business verticals?", a: "The three core verticals are Personal Protective Safety, Environmental Safety and Road Safety." },
  { q: "Do you also provide training and consulting?", a: "Yes. The brochure includes 5 service verticals covering training, consulting, digital printing, car hire and system installations." },
  { q: "How many branch offices are mentioned in the brochure?", a: "The brochure lists 3 branch offices: Indore, Pune and Nasik." },
];

const Home = () => {
  return (
    <>
      <HeroSlider />

      <section className="py-16 md:py-20 bg-background border-b-2 border-secondary/10">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {coreVerticals.map((item, index) => (
              <div
                key={item.title}
                className={`p-7 border-2 transition-transform hover:-translate-y-1 ${
                  index === 1 ? "bg-secondary text-secondary-foreground border-secondary shadow-bold" : "bg-card border-secondary"
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
                  0{index + 1}
                </div>
                <h3 className="font-display text-2xl uppercase leading-tight mb-3">{item.title}</h3>
                <p className={index === 1 ? "text-sm text-secondary-foreground/75" : "text-sm text-muted-foreground"}>
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                <span className="text-primary">●</span> Brochure Products
              </div>
              <h2 className="font-display text-4xl md:text-6xl uppercase max-w-2xl">
                Featured Safety <span className="bg-primary text-primary-foreground px-2">Products</span>
              </h2>
            </div>
            <Button asChild variant="outline" size="lg" className="border-2 border-secondary font-bold uppercase tracking-wider">
              <Link to="/products">All Products <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `repeating-linear-gradient(-45deg, hsl(var(--primary)) 0 30px, transparent 30px 60px)`,
        }} />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">● Why Choose Us</div>
            <h2 className="font-display text-4xl md:text-6xl uppercase">Built Around Safety Culture.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div key={i} className="group relative bg-secondary border-2 border-secondary-foreground/10 p-7 hover:border-primary transition-colors">
                <div className="absolute -top-5 left-7 h-12 w-12 grid place-items-center bg-primary text-primary-foreground border-2 border-secondary group-hover:rotate-6 transition-transform">
                  <f.icon className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <div className="text-5xl font-display text-primary/20 mb-2 mt-2">0{i + 1}</div>
                <h3 className="font-display text-xl uppercase mb-2">{f.title}</h3>
                <p className="text-sm text-secondary-foreground/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div className="bg-muted border-2 border-secondary p-8">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">● Company Snapshot</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight">
              {company.tagline} <br />
              From Aurangabad to the shop floor.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Aayush Enterprises is an established supplier since {company.established}, headquartered in Aurangabad with three branch offices and two manufacturing locations. The brochure positions the company as a complete safety partner across training, consulting, products and installations.
            </p>
            <Button asChild className="mt-8 bg-secondary text-secondary-foreground font-bold uppercase h-12 px-7">
              <Link to="/about">About The Company</Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {brochureHighlights.map((item, index) => (
              <div key={item.label} className={`border-2 p-6 ${index % 2 === 0 ? "bg-card border-secondary" : "bg-primary border-primary text-primary-foreground"}`}>
                <div className="text-xs font-bold uppercase tracking-[0.3em] mb-3 opacity-75">{item.label}</div>
                <div className="font-display text-3xl uppercase leading-tight">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">
              <span className="text-primary">●</span> Brand Coverage
            </div>
            <h2 className="font-display text-4xl md:text-6xl uppercase">
              24 <span className="bg-secondary text-secondary-foreground px-2">Brands</span> Represented
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Building2, title: "PPE and Height Safety", desc: "Karam, Ansell, Uvex, Leslico, Liberty and Microgard cover protection from head to toe." },
              { icon: Leaf, title: "Environmental Protection", desc: "Jonesco, ESP, Knuffi and spill-control products cover workplace environmental care." },
              { icon: MapPin, title: "Road and Site Safety", desc: "Anti skid tape, Glo-Lite and LOTO products improve visibility, control and movement on site." },
            ].map((card, i) => (
              <div key={i} className="bg-card border-2 border-secondary p-7">
                <div className="h-14 w-14 grid place-items-center bg-secondary text-secondary-foreground mb-5">
                  <card.icon className="h-7 w-7" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-2xl uppercase mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground border-y-4 border-secondary">
        <div className="container py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-3">● Ready To Order?</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight">
              Get a Quote in Under 60 Seconds
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              Talk to the team on WhatsApp or send an enquiry for brochure-aligned products, trainings, consulting and installations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase tracking-wider h-14 px-8 text-base">
              <Link to="/enquiry">Send Enquiry</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold uppercase tracking-wider h-14 px-8 text-base">
              <a href={whatsappLink("Hi! I would like a quote for Aayush Enterprises brochure items.")} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">
              <span className="text-primary">●</span> FAQ
            </div>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight">Questions?<br />We&apos;ve Got Answers.</h2>
            <p className="mt-4 text-muted-foreground">Use this brochure-backed summary to understand the company scope before you enquire.</p>
            <Button asChild className="mt-6 bg-secondary text-secondary-foreground font-bold uppercase">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-2 border-secondary">
                <AccordionTrigger className="text-left font-display text-xl uppercase hover:no-underline py-5 hover:text-primary-foreground hover:bg-secondary px-2 [&[data-state=open]]:bg-secondary [&[data-state=open]]:text-primary-foreground [&[data-state=open]]:px-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-5 px-2 text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Home;
