import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

export function Schedule() {
  /*
   Bewaard (oude versie met vaste datums). Terugzetten? Verwijder commentaar en vervang de nieuwe sectie.

  const dates2025 = [
    { date: "11 september 2025", round: "Ronde 1" },
    { date: "9 oktober 2025", round: "Ronde 2" },
    { date: "13 november 2025", round: "Ronde 3" },
    { date: "11 december 2025", round: "Ronde 4" },
    { date: "8 januari 2026", round: "Ronde 5" },
    { date: "12 februari 2026", round: "Ronde 6" },
    { date: "12 maart 2026", round: "Ronde 7" },
    { date: "9 april 2026", round: "Ronde 8" },
    { date: "14 mei 2026", round: "Ronde 9" },
    { date: "11 juni 2026", round: "Ronde 10" },
  ];
  */

  return (
    <section id="schedule" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Speeldata
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Elke tweede donderdag van de maand om 19:30 uur in Estaminet In Den Bouw te Kalken. 
            </p>
          </div>

          {/* Nieuwe compacte versie zonder vaste datums */}
          <Card className="border-2">
            <CardContent className="pt-0">
              <div className="grid sm:grid-cols-2 gap-4 items-stretch">
                <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 h-full">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Locatie</h3>
                    <p className="text-sm text-muted-foreground">Estaminet In Den Bouw, Kalken</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 h-full">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Wanneer</h3>
                    <p className="text-sm text-muted-foreground">Elke tweede donderdag van de maand, start om 19:30</p>
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
