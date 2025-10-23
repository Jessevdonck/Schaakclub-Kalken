import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

export function Schedule() {
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

  return (
    <section id="schedule" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Speeldata 2025-2026
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Elke tweede donderdag van de maand om 19:30 uur
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="pt-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {dates2025.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <span className="font-semibold text-foreground">
                      {item.round}
                    </span>
                    <span className="text-muted-foreground">{item.date}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Locatie</h3>
                    <p className="text-sm text-muted-foreground">
                      Estaminet In Den Bouw, Kalken
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Aanvang</h3>
                    <p className="text-sm text-muted-foreground">19:30 uur</p>
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
