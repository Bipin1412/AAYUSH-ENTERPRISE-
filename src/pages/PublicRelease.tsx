import PageHero from "@/components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Megaphone, ShieldAlert } from "lucide-react";

const releases = [
  {
    title: "Official Company Updates",
    description: "Use this space for public announcements, operational notices, and verified company statements.",
    icon: Megaphone,
  },
  {
    title: "Compliance Notices",
    description: "Publish regulatory notes, certifications, policy changes, and other formal disclosures here.",
    icon: ShieldAlert,
  },
  {
    title: "Documents And Releases",
    description: "Add brochures, PDFs, and public documents that should be easily accessible to visitors.",
    icon: FileText,
  },
];

const PublicRelease = () => {
  return (
    <>
      <PageHero
        title="Public Release"
        subtitle="Official announcements, notices, and public documents published by Aayush Enterprises."
        breadcrumb="Public Release"
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary">Official Information</Badge>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight">
              Public statements and release material in one place.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              This page can be used to share public-facing updates with customers, partners, and visitors. Keep the
              content short, factual, and easy to verify.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {releases.map((item) => (
              <Card key={item.title} className="border-2 border-secondary shadow-none">
                <CardHeader>
                  <div className="h-12 w-12 grid place-items-center bg-secondary text-secondary-foreground mb-4">
                    <item.icon className="h-6 w-6" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="font-display text-2xl uppercase leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicRelease;
