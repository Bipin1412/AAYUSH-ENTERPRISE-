import PageHero from "@/components/PageHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { serviceSections } from "@/data/brochure";

const Services = () => {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="The brochure groups Aayush Enterprises into five service verticals: training, consulting, digital printing, car hire and complete system installations."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <Tabs defaultValue={serviceSections[0].title} className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto justify-start gap-2 bg-transparent p-0 mb-8">
              {serviceSections.map((section) => (
                <TabsTrigger
                  key={section.title}
                  value={section.title}
                  className="px-4 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-secondary data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-bold"
                >
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceSections.map((section) => (
              <TabsContent key={section.title} value={section.title}>
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
                  <div className="bg-secondary text-secondary-foreground p-8 border-2 border-secondary">
                    <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">● Brochure Vertical</div>
                    <h2 className="font-display text-4xl uppercase mb-4">{section.title}</h2>
                    <p className="text-sm text-secondary-foreground/75 leading-relaxed">{section.description}</p>
                  </div>

                  <div className="border-2 border-secondary bg-card p-8">
                    <h3 className="font-display text-2xl uppercase mb-5">Sub-Items</h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed">
                          <span className="text-primary font-bold shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Services;
