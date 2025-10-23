import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Trophy } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Over onze club
            </h2>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              We zijn een gezellige schaakclub die elke tweede donderdag van de
              maand in Kalken in{" "}
              <span className="font-semibold text-foreground">
                Estaminet In Den Bouw
              </span>{" "}
              samenkomt om te schaken.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
            <p className="text-lg">
              We spelen een tornooi van 10 ronden, elk jaar beginnend in
              september en eindigend in juni. Iedere schaker is welkom, zowel
              beginners als gevorderden. De sfeer is ontspannen en vriendelijk,
              met de nadruk op plezier en gezelligheid.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Iedereen welkom</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Van beginner tot gevorderde, jong en oud. Kom gerust eens
                  langs!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Schaakweekend</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Jaarlijks organiseren we een gezellig schaakweekend op een
                  rustige locatie
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Einddiner</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Afsluiting met culinair diner en prijsuitreiking voor de top 3
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
