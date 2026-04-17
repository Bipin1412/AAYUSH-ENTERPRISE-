import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from "@/lib/whatsapp";
import { company } from "@/data/brochure";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-11 w-11 items-center justify-center bg-primary text-primary-foreground">
              <ShieldCheck className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-display text-xl tracking-wide">{company.name.split(" ")[0]}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary -mt-1">
                {company.tagline}
              </div>
            </div>
          </div>
          <p className="text-sm text-secondary-foreground/70 leading-relaxed">
            Complete safety solutions for personal protective, environmental and road safety since 2017.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 grid place-items-center border border-secondary-foreground/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-primary">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/brands", label: "Brands" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
              { to: "/enquiry", label: "Get a Quote" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  → {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-primary">Categories</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li>Personal Protective Safety</li>
            <li>Environmental Safety</li>
            <li>Road Safety</li>
            <li>Training</li>
            <li>Consulting</li>
            <li>Installations</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-primary">Reach Us</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/70">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {COMPANY_ADDRESS}
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {COMPANY_PHONE}
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {COMPANY_EMAIL}
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {company.branchOffices.join(", ")}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Aayush Enterprises. All rights reserved.</p>
          <p className="uppercase tracking-widest">Safety · Quality · Trust</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

