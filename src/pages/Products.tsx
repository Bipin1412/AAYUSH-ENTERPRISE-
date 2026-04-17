import { useState, useMemo } from "react";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { miscProducts } from "@/data/brochure";
import { cn } from "@/lib/utils";

const Products = () => {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Browse brochure-backed PPE, workwear and specialist safety items from Aayush Enterprises."
      />

      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-5 py-2.5 text-xs font-bold uppercase tracking-wider border-2 transition-all",
                  active === cat
                    ? "bg-secondary text-secondary-foreground border-secondary shadow-bold"
                    : "bg-background text-secondary border-secondary hover:bg-primary hover:border-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No products in this category yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted border-t-2 border-secondary">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                <span className="text-primary">●</span> Miscellaneous / Brochure Products
              </div>
              <h2 className="font-display text-4xl md:text-5xl uppercase max-w-2xl">
                Additional Safety <span className="bg-secondary text-secondary-foreground px-2">Items</span>
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {miscProducts.map((item, index) => (
              <div
                key={item.name}
                className={`border-2 p-6 ${
                  index % 2 === 0 ? "bg-card border-secondary" : "bg-secondary text-secondary-foreground border-secondary"
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-[0.3em] mb-3 opacity-75">0{index + 1}</div>
                <h3 className="font-display text-2xl uppercase leading-tight mb-3">{item.name}</h3>
                <p className="text-sm leading-relaxed opacity-80">{item.summary}</p>
                <div className="mt-4 text-xs font-bold uppercase tracking-wider">{item.useCase}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

