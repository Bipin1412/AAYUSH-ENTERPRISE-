import { ArrowRight, FileText, Package, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { brandCategories, miscProducts } from "@/data/brochure";

const stats = [
  {
    label: "Products",
    value: products.length,
    note: "Items in the current catalog",
    icon: Package,
  },
  {
    label: "Brand groups",
    value: brandCategories.length,
    note: "Categories represented in the brochure",
    icon: Users,
  },
  {
    label: "Brochure items",
    value: miscProducts.length,
    note: "Miscellaneous brochure entries",
    icon: FileText,
  },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border-2 border-secondary bg-card p-6 md:p-8 shadow-bold">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border-2 border-secondary bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground">
              <ShieldCheck className="h-4 w-4" />
              Admin Dashboard
            </div>
            <h1 className="mt-4 font-display text-4xl uppercase leading-tight md:text-5xl">
              Manage the site from one place.
            </h1>
            <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
              This dashboard gives you a starting point for internal operations. You can extend it later with
              product editing, brochure updates, enquiry management, or CMS integration.
            </p>
          </div>

          <div className="flex gap-3">
            <Button asChild variant="outline" className="border-2 border-secondary font-bold uppercase tracking-wider">
              <Link to="/products">
                Open Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase tracking-wider">
              <Link to="/public-release">Public Release</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.label} className="border-2 border-secondary shadow-bold">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-display text-2xl uppercase">{stat.label}</CardTitle>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <CardDescription>{stat.note}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-black leading-none">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-2 border-secondary shadow-bold">
          <CardHeader>
            <CardTitle className="font-display text-3xl uppercase">Next steps</CardTitle>
            <CardDescription>These are the usual admin features to add after login is in place.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>• Add CRUD screens for products and brochure items.</p>
            <p>• Connect the login to a backend or API for real authentication.</p>
            <p>• Add enquiry management and content publishing controls.</p>
            <p>• Track admin actions and restrict access by role.</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-secondary bg-secondary text-secondary-foreground shadow-bold">
          <CardHeader>
            <CardTitle className="font-display text-3xl uppercase">Quick links</CardTitle>
            <CardDescription className="text-secondary-foreground/80">
              Jump directly into public pages you may want to review while managing the site.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Button asChild variant="outline" className="justify-between border-2 border-background bg-transparent font-bold uppercase tracking-wider text-secondary-foreground hover:bg-background hover:text-secondary">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild variant="outline" className="justify-between border-2 border-background bg-transparent font-bold uppercase tracking-wider text-secondary-foreground hover:bg-background hover:text-secondary">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button asChild variant="outline" className="justify-between border-2 border-background bg-transparent font-bold uppercase tracking-wider text-secondary-foreground hover:bg-background hover:text-secondary">
              <Link to="/brands">Brands</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default AdminDashboard;
