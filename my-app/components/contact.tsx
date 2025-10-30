import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Kom eens langs
            </h2>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Interesse om lid te worden of gewoon eens te komen proeven? Je
              bent van harte welkom!
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="pt-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Locatie</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Estaminet In Den Bouw
                        <br />
                        Kalken
                        <br />
                        Elke 2e donderdag om 20:00u
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@schaakclubkalken.be
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
