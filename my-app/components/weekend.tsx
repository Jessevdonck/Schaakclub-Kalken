import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Wine } from "lucide-react";

export function Weekend() {
  return (
    <section id="weekend" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Schaakweekend
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              In de tweede helft van het seizoen organiseren we nog een leuk
              schaakweekend, telkens op een rustige locatie ergens in een
              uithoek van België. Volledig vrijblijvend maar het is wel een
              grote aanrader!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto1-5zXC8zq6pYkS2xCnLUKMklQnzKDUlZ.jpg"
                  alt="Schaakweekend in de Ardennen"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Ardennen</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gezellig schaken in de prachtige natuur van de Ardennen
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto3-MQKzG2fl4ajid5cPDfnpgEP29mg0p7.jpg"
                  alt="Schaakweekend aan zee"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Aan zee</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ontspannen schaakweekend met zicht op de Noordzee
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto4-NRxTCXCkRNGowlJCGyLEUdfGz5CNkG.jpg"
                  alt="Gezellig samenzijn"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Gezelligheid</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Samen eten, drinken en natuurlijk veel schaken!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex gap-3 mt-1">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      Einddiner met prijsuitreiking
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Op het einde van het seizoen houden we nog een culinair
                      diner als afsluiter. De winnaars worden daarbij
                      uitgeroepen en krijgen een flesje wijn of bier.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
